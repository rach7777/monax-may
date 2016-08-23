---

# fill in
title:      Updating Your Application Using Docker Build Containers
author:     zach
excerpt:    "Learn how to update you application using a docker build container, and test it with docker-machine"
#thumbnail:
category:   tutorials
tags:       ["docker", "docker-machine", "update", "build container", "containers", "go", "golang", "ssh", "scp"]

# use if needed
layout:    post
published: true
comments:  true
meta:      true
#thumbnail_raw:

---

In the early days of [eris-cli](https://github.com/eris-ltd/eris-cli/), before we distributed binaries and users had to build from source, I wanted a simple way to update the tool either to the latest version or a specific branch. The result was `eris update` which would update eris, by default, to master. A flag lets users pick a branch (provided it's on GitHub) and `eris update --branch=develop`, for example. Under-the-hood, it's a series of shelled out git commands plus `go install ./cmd/eris`. This feature is useful for quickly confirming bug fixes or having users test out a new feature, before merging to `develop`. It only works for source installations and require git and go locally. What about binary installations you ask?

Eventually we got our binaries sorted out but the `eris update` command still only worked for installations from source. Updating from a binary installation was implemented but the feature hadn't received much love; the latest release was pulled in as a tarball and unpacked, its binary replacing the old one. It was buggy, didn't always work, and the code was messy. Finally, a user who had used the `--branch` feature with a source installation also wanted it for updating binary installations.

I went about [refactoring this code](https://github.com/eris-ltd/eris-cli/pull/617) all while pondering how to update eris to a specific branch from a binary installation (i.e., without requiring git or go installed). Eventually, all the pieces I needed fell together. Here's how it happened with docker build containers:

### Building an Image

The [go-dockerclient](https://github.com/fsouza/go-dockerclient) shines here, as usual. All our docker wrappers are in `perform/perform.go`

```go
// DockerBuild will build an image with imageName
// and a Dockerfile passed in as strings, respectively
// Function is ~ to `docker build -t imageName .`
// where a Dockerfile is in the `pwd`
func DockerBuild(imageName, dockerfile string) error {
	// adapted from: 
	// https://godoc.org/github.com/fsouza/go-dockerclient#Client.BuildImage
	t := time.Now()
	inputbuf := bytes.NewBuffer(nil)
	writer := os.Stdout
	tr := tar.NewWriter(inputbuf)
	sizeDockerfile := int64(len([]byte(dockerfile)))
	tr.WriteHeader(&tar.Header{Name: "Dockerfile", Size: sizeDockerfile, ModTime: t, AccessTime: t, ChangeTime: t})
	tr.Write([]byte(dockerfile))
	tr.Close()

	r, w := io.Pipe()
	imgOpts := docker.BuildImageOptions{
		Name: imageName,
		RmTmpContainer: true,
		InputStream: inputbuf,
		OutputStream: w,
		RawJSONStream: true,
	}

	ch := make(chan error, 1)
	go func() {
		defer w.Close()
		defer close(ch)

		if err := util.DockerClient.BuildImage(imgOpts); err != nil {
			ch <- err
		}
	}()
	jsonmessage.DisplayJSONMessagesStream(r, writer, os.Stdout.Fd(), term.IsTerminal(os.Stdout.Fd()), nil)
	if err, ok := <-ch; ok {
		// doesn't catch the build error; that's OK, it'll be displayed to user
		// from json stream & the image will be checked by checkImageExists
		return util.DockerError(err)
	}

	ok, err := checkImageExists(imageName)
	if err != nil {
		return err
	}
	if !ok {
		return fmt.Errorf("Image does not exist. Something went wrong. Exiting")
	}

	return nil
}
```

The above function, when called, will build a docker image and output the build process to stdout. Let's look at the build options:

```go
imgOpts := docker.BuildImageOptions{
	Name: imageName,
	RmTmpContainer: true,
	InputStream: inputbuf,
	OutputStream: w,
	RawJSONStream: true,
}
```

A few things to note. We name our image, and we remove temporary build containers to clean up. The Dockerfile is written to a tarball `tr.Write([]byte(dockerfile))` and passed in as a buffer to `InputStream: inputbuf`. Together (with the help of a channel), the `OutputStream` and `rawJSONStream` pipe the logs to stdout while the build is running.

After the build is complete, we check the presence of the named image. This is done because the build error is not caught (rather than, say, a docker client error). 

The code to check that the image exists is straight-forward:

```go
func checkImageExists(imageName string) (bool, error) {
	fail := false

	opts := docker.ListImagesOptions{
		Filter: imageName,
	}

	anImage, err := util.DockerClient.ListImages(opts)
	if err != nil {
		return fail, util.DockerError(err)
	}

	if len(anImage) != 1 {
		return fail, nil
	} else {
		return true, nil
	}

	return fail, nil
}
```

where `Filter : imageName` will list only the image specified, if it exists. If the build failed, the image won't exist and the array of images returned by `DockerClient.ListImages()` will be empty.

We're now in a position to build an image given a name and Dockerfile, and check that it does indeed exist after the build.

To see how to get there, we're going to start from the beginning of the `eris update` command (modified from `update/update.go` for simplicity).

```go
func UpdateEris(do *definitions.Do) error {

	whichEris, binPath, err := GoOrBinary()
	if err != nil {
		return err
	}

	if whichEris == "go" {
		// ensure git and go are installed
		hasGit, hasGo := CheckGitAndGo(true, true)
		if !hasGit || !hasGo {
			return fmt.Errorf("either git or go is not installed. both are required for non-binary update")
		}

		log.WithField("branch", do.Branch).Warn("Building eris binary via go with:")
		if err := UpdateErisGo(do.Branch); err != nil {
			return err
		}
	
	} else if whichEris == "binary" {
		if err := UpdateErisViaBinary(do.Branch, binPath); err != nil {
			return err
		}

	} else {
		return fmt.Errorf("The marmots could not figure out how eris was installed. Exiting.")
	}
}
```

The command comes in via the do struct (see `definitions/do.go`) and everything else can be ignored except:

```go
if err := UpdateErisViaBinary(do.Branch, binPath); err != nil {
	return err
}
```

Here, the specified branch (default master) is passed in and the binary path was got above from `GoOrBinary()`. The primary purpose of `UpdateErisBinary(branch, binPath)` is to call `BuildErisContainer(branch, binPath)` so let's take a look at that latter function (from `update/binary.go`):

```go
// branch to update in build container
// binaryPath to replace with new binary
func BuildErisBinContainer(branch, binaryPath string) error {

	dockerfile := MakeDockerfile(branch)
	imageName := "eris-binary-update:temporary-image"
	serviceName := "eris-binary-update-temporary-service"
	if err := perform.DockerBuild(imageName, dockerfile); err != nil {
		return err
	}

	// new the service for which the image has just been built
	doNew := definitions.NowDo()
	doNew.Name = serviceName
	doNew.Operations.Args  = []string{imageName}
	if err := services.NewService(doNew); err != nil {
		return err
	}

	// start the service up: binary has already been built
	doUpdate := definitions.NowDo()
	doUpdate.Operations.Args = []string{serviceName}
	if err := services.StartService(doUpdate); err != nil {
		return nil
	}

	// copy (export) the binary from serviceName's data container
	// into the scratch path to be used later
	doCp := definitions.NowDo()
	doCp.Name = serviceName
	// where the binary will go (temporarily)
	newPath := filepath.Join(common.ScratchPath, "bin")

	// $INSTALL_BASE/eris as set by the base image
	doCp.Source = "/usr/local/bin/eris"
	doCp.Destination = newPath
	doCp.Operations.SkipCheck = true
	
	if err := data.ExportData(doCp); err != nil {
		return err
	}

	// remove all trace of the service and its image
	doRm := definitions.NowDo()
	doRm.Operations.Args = []string{serviceName}
	doRm.RmD = true		// remove data container
	doRm.Volumes = true	// remove volumes
	doRm.Force = true	// remove by force (no pesky warnings)
	doRm.File = true	// remove the service defintion file
	doRm.RmImage = true	// remove the temporary image

	if err := services.RmService(doRm); err != nil {
		return err
	}

	// binaryPath comes in from function
	if err := ReplaceOldBinaryWithNew(binaryPath, filepath.Join(newPath, "eris")); err != nil {
		return err
	}

	return nil
}
```

That's a hefty function. Let's break it down line by line:

```go
dockerfile := MakeDockerfile(branch)
imageName := "eris-binary-update:temporary-image"
serviceName := "eris-binary-update-temporary-service"
if err := perform.DockerBuild(imageName, dockerfile); err != nil {
	return err
}
```

For now, ignore `MakeDockerfile()` and assume the Dockerfile looks like:

```Dockerfile
FROM quay.io/eris/base
	
ENV NAME         eris-cli
ENV REPO	 eris-ltd/$NAME
ENV BRANCH       %s
ENV CLONE_PATH   $GOPATH/src/github.com/$REPO
ENV GO15VENDOREXPERIMENT 1

RUN mkdir --parents $CLONE_PATH

RUN git clone --quiet https://github.com/$REPO $CLONE_PATH
RUN cd $CLONE_PATH && git checkout --quiet -b $BRANCH && git pull --quiet origin $BRANCH
RUN cd $CLONE_PATH/cmd/eris && go build -o $INSTALL_BASE/eris

CMD ["/bin/bash"]
```

whereby `%s` is the branch inserted in `MakeDockerfile()` and `$INSTALL_BASE` is `/usr/bin/local/` from the base image (`FROM quay.io/eris/base`). Now that we've got a Dockerfile and an image name, it's time to build the image; `perform.DockerBuild()` will do its thing and output something along the lines of:

```
Step 1 : FROM quay.io/eris/base
 ---> 35b611e416c3
Step 2 : ENV NAME eris-cli
 ---> Using cache
 ---> cc13c53892f6
Step 3 : ENV REPO eris-ltd/$NAME
 ---> Using cache
 ---> 28fe09e32b27
Step 4 : ENV BRANCH anyBranchOnGitHub
 ---> Running in 0ccb1aacf1b3
 ---> 0d62f6d0e21d
Removing intermediate container 0ccb1aacf1b3
Step 5 : ENV CLONE_PATH $GOPATH/src/github.com/$REPO
 ---> Running in 79ad3636a36e
 ---> dd9fd1685386
Removing intermediate container 79ad3636a36e
Step 6 : ENV GO15VENDOREXPERIMENT 1
 ---> Running in d725100d15cb
 ---> dd82330c2c6f
Removing intermediate container d725100d15cb
Step 7 : RUN mkdir --parents $CLONE_PATH
 ---> Running in 3bf3ea143b10
 ---> 1dd50a55e4fe
Removing intermediate container 3bf3ea143b10
Step 8 : RUN git clone --quiet https://github.com/$REPO $CLONE_PATH
 ---> Running in 202fe406a34b
 ---> 5f3746274db1
Removing intermediate container 202fe406a34b
Step 9 : RUN cd $CLONE_PATH && git checkout --quiet -b $BRANCH && git pull --quiet origin $BRANCH
 ---> Running in 26fc8d7a2042
 ---> 76c986901cf2
Removing intermediate container 26fc8d7a2042
Step 10 : RUN cd $CLONE_PATH/cmd/eris && go build -o $INSTALL_BASE/eris
 ---> Running in b31f73abefc1
 ---> 83a86896aded
Removing intermediate container b31f73abefc1
Step 11 : CMD /bin/bash
 ---> Running in bc42bec216ad
 ---> ecb3c836abe1
Removing intermediate container bc42bec216ad
Successfully built ecb3c836abe1
```

which is the output one would expect from running `docker build -t imageName .` with that Dockerfile in `pwd`. Now if you stopped there and ran `docker images`, you'd see the new image: `eris-binary-update:temporary-image` listed. Next, we'll run this image with a data container and export the binary that is already in it.

### Services & Data Containers

The following part may seem unncessary complex to the seasoned docker user, however, I opted to use our existing plumbing for simplicity in our codebase.

Recall the `BuildErisBinContainer()` function from above. The first part was to build an image that has a binary with a specific branch. Now, we'll need to run the container and copy out the binary. In eris land, running docker containers == starting services. First, we new a service with name and image:

```go
// new the service for which the image has just been built
doNew := definitions.NowDo()
doNew.Name = serviceName
doNew.Operations.Args  = []string{imageName}
if err := services.NewService(doNew); err != nil {
	return err
}
```

**Note:** the above is akin to running `eris services new serviceName imageName`

This function will drop a service definition file at `~/.eris/services/eris-binary-update-temporary-service.toml` that contains, among other things, these lines:

```toml
[service]
name = "eris-binary-update-temporary-service"
image = "eris-binary-update:temporary-image"
data_container = true
```

In eris land, service definition files specify, essentially, how to `docker run` a pre-existing image. Thus:

```go
doUpdate := definitions.NowDo()
doUpdate.Operations.Args = []string{serviceName}
if err := services.StartService(doUpdate); err != nil {
	return nil
}
```

which **note** is akin to `eris services start serviceName` and will start the defined service (i.e., `docker run`). Note the line `data_container = true`. This means that, along with starting the container, a mounted data container is also created. It is important for the next step, a convenience wrapper around `docker cp`:

```go
// copy (export) the binary from serviceName's data container
// into the scratch path to be used later
doCp := definitions.NowDo()
doCp.Name = serviceName
// where the binary will go (temporarily)
newPath := filepath.Join(common.ScratchPath, "bin")

// $INSTALL_BASE/eris as set by the base image
doCp.Source = "/usr/local/bin/eris"
doCp.Destination = newPath

// to over-ride default path entry in data container
doCp.Operations.SkipCheck = true

// `docker cp` from container to host
if err := data.ExportData(doCp); err != nil {
	return err
}
```

This function will take the binary we have already created in the container and copy it to the host at `~/.eris/scratch/bin/eris`. It is roughly equivalent to `eris data export serviceName SRC DEST` but with some caveats that have to do with `do.Operations.SkipCheck`. Let's not worry about that for now.

Finally, we remove all trace of the service:

```go
doRm := definitions.NowDo()
doRm.Operations.Args = []string{serviceName}
doRm.RmD = true		// remove data container
doRm.Volumes = true	// remove volumes
doRm.Force = true	// remove by force (no pesky warnings)
doRm.File = true	// remove the service defintion file
doRm.RmImage = true	// remove the temporary image

if err := services.RmService(doRm); err != nil {
	return err
}
```

Last but not least, we'll need to delete the old binary and replace it with the new one; the last function called in `BuildErisBinContainer()` is:

```go
// takes a new binary and replaces the old one
// prompts windows users to do manually 
func ReplaceOldBinaryWithNew(oldPath, newPath string) error {

	platform := runtime.GOOS
	if platform != "windows" {
		if err := os.Remove(oldPath); err != nil {
			return err
		}

		if err := os.Rename(newPath, oldPath); err != nil {
			return err
		}

		chmodArgs := []string{"+x", oldPath}
		stdOut, err := exec.Command("chmod", chmodArgs...).CombinedOutput()
		if err != nil {
			return fmt.Errorf(string(stdOut))
		}

	} else {
		cpString := fmt.Sprintf("%s %s", newPath, oldPath)
		log.Warn(`
To complete the update on Windows, run:
del /f ` + oldPath + `
ren ` + cpString + `
`)
	}
	return nil
}
```

which does exactly what we want it to (except maybe on windows :(). Awesome! But wait. How do you test that `eris update` works via a binary installation? After all we've been developing in go...

### Docker-Machine Wizardy

It's no secret; we love all things docker. Especially docker-machine though. Having only used it for a few things ([see our docker-machine tutorial](https://docs.erisindustries.com/tutorials//tool-specific/docker_machine/)), I forgot about its handy `ssh/scp` commands. Testing that a binary installation could update itself while developing in go proved somewhat incovenient and I had a convoluted process that was wearing my patience thin (nor did I want to be moving things around in `/usr/bin` on my local machine). 

The solution: `scp` the binary from every `go install` into `/usr/bin` on a docker-machine. Assume the machine `dev-testing` has already been created.

After writing some code and running `go install ./cmd/eris` the go binary is located at `which eris`.

So:

```bash
docker-machine scp $(which eris) dev-testing:/usr/bin
docker-machine ssh dev-testing
```

where the first line will copy the binary just created and put it in the binary path on that docker-machine and the second line will drop you into the docker-machine.

At this point, you can type `eris` and be off to the races. However, the goal here is rapid development of the `eris update` command. Because the command will now detect a binary installation (rather than go), we can test it easily in a fresh environment without mucking about on a host machine that is using go for development. There was also no need to worry about installing docker and if you break anything on that machine it can easily be destroyed and a new one created.

After playing around with the command, seeing that it worked (or didn't!) and checking its log outputs, it was simply a matter of (while still ssh'ed in dev-testing):

```bash
rm /usr/bin/eris
exit
```

And I'm back on the host ready for another round of writing code, compiling via go & testing it on the docker-machine. 
