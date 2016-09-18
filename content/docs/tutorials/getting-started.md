---

type:   wide
title: "Getting Started With Eris"

---

# Get Started With Eris In Three Easy Steps

There are three steps need to get moving with Eris:

1. **Install** the Eris platform.
2. **Roll** your own Blockchain in seconds.
3. **Build** and run your distributed application using smart contract templates and a simple, web-based user interface.

# Step 1: Install the Eris Platform

**Dependencies**: `eris` has 1 dependency: [Docker](https://www.docker.com/). Docker is a run anywhere container solution which makes development, deployment, testing, and running of distributed applications a breeze.

Currently we consider the most workable setup to be (what our tests consider authoritative). We are working steadily toward making eris available for a wide variety of host environments.

* HOST_OS = {{< data_coding authoritative_os >}}
* DOCKER = {{< data_coding docker_auth >}}

## Install Docker

At the current time, `eris` requires `docker` >= {{< data_coding docker_min >}}. You can check your Docker version with `docker version`. We do not test against older versions of Docker: `eris` may or may not work against earlier versions and we can make no guarantees of usability there.

### Linux

Please see the [Docker](https://docs.docker.com/installation/) documentation for how to install for your distribution.

**Essential**! After you install Docker, you must make sure that the user you are using to develop with `eris` has access to the Docker socket (which is accessible via the `docker` Linux usergroup). When you are logged in as the user you can do this:

```bash
sudo usermod -a -G docker $USER
```

That command will add the current user to the `docker` group which will mean that Docker will not need to be called from `sudo`. After you run that command, then please log out of the current shell and open a new shell. After that `eris` will then be able to connect to Docker.

Make sure that everything is set up with Docker by running:

```bash
docker version
```

**Note** you will need to make sure that you perform the above command for the *user* which will be running Eris.

### OSX

We **highly recommend** that you utilize `brew` to install `eris`. As part of the installation of `eris`, Docker will be properly installed. If you are not a `brew` user then please install Docker via the [Docker Toolbox](https://www.docker.com/products/docker-toolbox).

**N.B.** -- At this time Docker for Mac (DFM), which is still in beta, is not currently supported.

### Windows

We **highly recommend** that you utilize `choco` to install `eris`. As part of the installation of `eris`, Docker will be properly installed. If you are not a `choco` user then please install Docker via the [Docker Toolbox](https://www.docker.com/products/docker-toolbox).

**N.B.** -- At this time Docker for Windows (DFW), which is still in beta, is not currently supported.

## Install Eris

`eris` can be easily installed using our convenient binary releases.

We distribute binaries via our [Github Releases Page](https://github.com/eris-ltd/eris-cli/releases). You will simply need to download the proper zip or tarball for your architecture and then extract that into a place in your `PATH`.

### OSX Only

If you're a [Homebrew](https://brew.sh) user then:

```bash
{{< data_coding brew >}}
```

### Windows Only

If you're a [Chocolatey](https://chocolatey.org) user then:

```bash
{{< data_coding choco >}}
```

**N.B.** You'll want to run `eris` commands either from `git bash` or from the `Docker Quickstart Terminal` (which is really just `git bash`) window. If you prefer to use the `cmd` as a terminal, you still can: every command should work as expected, though all the tutorials will assume that you are using the `Docker Quickstart Terminal` and are structured to support **only** that environment.

### APT Package Installation

We have `apt-get` support for most current versions of Ubuntu. If you wish to use apt-get to install `eris` then you will simply perform the following:

```bash
{{< data_coding apt >}}
```

### RPM Package Installation

We have RPM support for most current versions of Fedora, CentOS, RHEL, etc. If you wish to use `yum` to install `eris` then you will perform the following:

```bash
{{< data_coding yum >}}
```

### ARM Installation (IoT devices)

[See this tutorial](/docs/tutorials/install-eris-arm/) for more info on getting setup on IoT devices.

### Building From Source

If you would like to build from source [see our documentation](/docs/tutorials/install-source/).

### All Platforms

Check that everything installed correctly with:

```bash
eris init
```

The command will begin setting you up.

## Troubleshooting Your Install

If you have any errors which arise during the installation process, please see our [trouble shooting page](/docs/tutorials/install-troubleshooting/) or visit our [support forums](https://support.erisindustries.com)

# Step 2: Roll Your Own Blockchain in Seconds

If you want to create your blockchain it is very easy.

```bash
eris services start keys
eris chains make test_chain --chain-type simplechain
eris chains new test_chain --dir test_chain
```

That `test_chain` can be whatever name you would like it to be. This simple command will create a permissioned, smart contract enabled blockchain suitable for testing.

To check that your chain is running type:

```bash
eris chains ls
```

Stop and remove your chain:

```bash
eris chains rm -xf test_chain
```

Obviously, you will want an ability to make chains which you properly parameterize. As such you can always type:

```bash
eris chains new --help
```

To see the various ways which you can give to chains new for it to be instantiated properly.

Eris does not only work with permissioned smart contract networks. It works just as well with existing blockchains. Want to run bitcoin?

```bash
eris services start btcd
```

Want to run Ethereum?

```bash
eris services start eth
```

That's it! Your chain is rolled!

# Step 3: Build (and run) your Distributed Application

Let's remove all of the eris "stuff" before we move on to the next portion of the tutorials:

```bash
eris clean
```

Now you're ready to build and run your distributed application!

There are a lot of ways you can go from here!

**To continue this getting started tour please see our next tutorial in this series on [Making Your Own Permissioned Chain](/docs/tutorials/chain-making).**

Please go here if you are interested in [learning about smart contracts](/docs/explainers/smart_contracts/).

Please go here if you are interested in [learning more about blockchains](/docs/explainers/blockchains/).
