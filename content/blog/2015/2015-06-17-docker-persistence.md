---
author: ethan
categories:
- tutorials
comments: true
date: 2015-06-17T00:00:00Z
excerpt: Learn how to sanely persist data from a docker container using data-only
  containers.
meta: true
published: true
tags:
- docker
- persistence
thumbnail_raw: http://i.ytimg.com/vi/Q5POuMHxW-0/maxresdefault.jpg
title: Persisting Data with Docker Containers
# url: /blog/2015/06/17/docker-persistence/
slug: docker-persistence
---

After days of wrestling with the concept of persisting data in Docker containers deep in the bowels of that
now ubiquitous whale, I have been delivered to freedom, a slain blue whale slung over my shoulder, its cargo strewn across the cloud, and a new-found affection (dare I say "love") for docker lodged within my fingers and my heart.

And so, in hopes that I may hasten your own progression from docker-dazed to docker-doer, here are my findings. Please enjoy responsibility.

The core problem: we have an ephemeral container that we can throw away, update, redeploy, but we want to persist some data.

The typical solution: mount a host volume like `docker run -d -v /home/user/data:/data myapp`. Anything written to `/data` in the container will persist in `/home/user/data` on the host. Seems legit.

The problem: THE VOLUME GETS MOUNTED AS ROOT. This is an absolute nightmare if you are not running as root in the container (as you shouldn't be).
Some people try to solve the issue by setting the uid/gid on the host to match that inside the container. This is not only a nuisance, but destroys portability,
which is practically the reason you are using docker in the first place. Clearly this is bad. If you're not convinced, try it.

Note: when you use the `VOLUME` command in a Dockerfile, the specified directory will persist somewhere in `/var/lib/docker/`. This means you don't have to use `-v` to get persistence, but if you're running lots of containers you'll need to [clean up after yourself](https://github.com/chadoe/docker-cleanup-volumes).

Now, since you're working with docker, and since anything that's anything in the docker world deserves a container, and since certainly you're data is high up on the ladder of anythings that are anything, you ought to give your data its own container.

We call it a "data-only container", and it's actually the solution to the mounting problem: you create another instance of your container, whose sole purpose is to expose a volume (it doesn't run any processes).
Then instead of mounting a host volume with `-v`,
we use `--volumes-from` to tell our application container to read from the data container.

You may object: "ok, but haven't you just pushed the problem back a step further? Don't we still need to mount the host into the data-only container?"

No. At least not if you do it right. Here's how to do it right.

You have a dockerfile, it looks something like:

```
FROM ubuntu

ENV user myuser
ENV data_root /data/myapp

# set user right away for determinism
RUN groupadd -r $user \
  && useradd -r -s /bin/false -g $user $user

# create directory for persistence and give our user ownership
RUN mkdir -p $data_root \
  && chown -R $user:$user $data_root

...


# persist data, set user
VOLUME $data_root
USER $user

CMD ["./run.sh"]

```

Note we setup the group and user right away, make the volume directory, and give our user ownership.
Then when we actually get to `VOLUME $data_root`, the directory already has the right permissions. Remember anything written to this directory
in the container will persist on the host somewhere in `/var/lib/docker/` (use `docker inspect` to find out).

Of course, you still need root to get at those files on the host system (docker runs as root, so this makes sense). But inside the container, the permissions are set correctly, because you dealt with them first thing in your Dockerfile (you clever developer you). Now any time you want to touch or see that data, you do it through the data-only container.

Ok. Let's create some containers. We use the same image for both data-only and application container [because it saves space](http://container42.com/2014/11/18/data-only-container-madness).

```
docker build -t myapp .
docker run -i --name myapp_data myapp /bin/echo Data-only container for my app
docker run -d --name myapp --volumes-from myapp_data myapp
```

The first line builds the image (duh).
The second creates the data-only container.
Note the container doesn't actually have to be running, it just has to exist.
It will exit right away and that's fine; you can see it in `docker ps -a`.
The data will persist so long as that container exists. So careful if/when you delete it.
The final line runs our actual application, using the volume exposed by the data-only container.

So this is all pretty simple (and great). But it get's better.

First, some classics:

Want to see what's in your volume?

```bash
docker run --volumes-from myapp_data myapp ls /data/myapp
```

Need to cat a file?

```bash
docker run --volumes-from myapp_data myapp bash -c "cat /data/myapp/file"
```

Need to back it up?

```bash
docker run -d --volumes-from myapp_data myapp_backup_service
```

Ok, you get the picture. But you're still confused, because you still want to mount a volume;
there's some data on the host and you need it in your container.

Cool, so don't mount a volume. Copy the data.

You can do this now using tar:

```bash
tar cf - . | docker run --rm -i --volumes-from myapp_data myapp tar xvf - -C /data/myapp
```

Make sure you're in the directory you want to copy (otherwise it doesn't work?!).
We compress the directory and pipe the compressed byte stream into the container command's stdin,
which extracts the contents and writes them to our volume in the container.
And since we used `--volumes-from`, it will persist in the data-only container.

It's a little simpler if you're only copying one file:

```bash
cat file | docker run --rm --volumes-from myapp_data -i  myapp bash -c "cat > /data/myapp/file"
```

You might think, "isn't there a `docker cp` command?". There is, but it only works *from container to host*, and not the other way. Don't worry, [it will work both ways soon](https://github.com/docker/docker/pull/13171).

In the meantime, stick the above commands in shell scripts, or make aliases, or better yet help review [the pull request](https://github.com/docker/docker/pull/13171).

And check out the [tendermint repo](https://github.com/tendermint/tendermint/tree/develop/DOCKER) for an example.

So there you have it folks. A simple formula for persistence in docker containers. Remember the secret: use more containers, copy data, never mount the host.

More information:

* [Docker Volume Permissions](https://stackoverflow.com/questions/23544282/what-is-the-best-way-to-manage-permissions-for-docker-shared-volumes)
* [Docker Persistence](https://stackoverflow.com/questions/18496940/how-to-deal-with-persistent-storage-e-g-databases-in-docker)
* [Value of Docker Containers](https://medium.com/@ramangupta/why-docker-data-containers-are-good-589b3c6c749e)
* [Data Only Containers](http://container42.com/2014/11/18/data-only-container-madness/)
* [Patterns for Docker Volume Containers](http://container42.com/2013/12/16/persistent-volumes-with-docker-container-as-volume-pattern/)
