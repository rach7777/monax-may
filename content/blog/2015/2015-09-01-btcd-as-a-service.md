---
author: casey
categories:
- tutorials
comments: true
date: 2015-09-01T00:00:00Z
excerpt: BTCD as a (Monax) Service
meta: true
published: true
series: getstarted
tags:
- cli
- command-line
- btcd
- blockchaini
- eris
title: 'Eris CLI Services Walkabout: BTCD'
url: /2015/09/01/btcd-as-a-service/
---

<div class="note">
	<em>Note: since this blog post was written, we have changed our name to Monax Industries and will be changing the name of our product to "Monax" in early 2017. We have left these posts unedited for the purposes of historical record, as the software was named Eris at the time.</em>
</div>

We got a question recently on the forum:

```
So just to be clear if I wanted to mine with that [btcd] node (and I don't) what would I configure? Not the service definition file right? Bitcoind has the .conf file and it has commands. When I want to mine using btcd (or mine my test chain) where is this determined?
```

Hope the asker doesn't mind that I answer here as answering these questions could help a lot of people.

### Where To Start When Investigating a Service

1. Look at the [Dockerfile](https://github.com/monax/common/blob/master/docker/btcd/Dockerfile) (that link is to the dockerfile for eris/btcd).
2. Look at the start script (if there is one).

Generally Docker images come in two flavours. They have a start script which manages their start sequence. **Or**. They get started using a config pulled from config files (which means we have to get the config files "into" the containers). Taking a look at the `CMD` or `ENTRYPOINT` in the Dockerfile is usually a dead giveaway, if not sometimes more investigation is necessary.

To investigate farther with `eris` built Docker images for services we aren't building, we keep all of these in our [Monax commons](https://github.com/monax/common/) in the `docker` folder. Compare the `btcd` folder to the `eth` folder if you would like to see a typical start script.

Since btcd doesn't use a start script we'll save that for another day (Ethan and I now both love shell scripting, well at least I certainly do).

### If a Service Starts With Config Files What Do I Do?

The asker of the original question is right, the `btcd` container starts with a config file instead of via the other major "Docker way" which is a bunch of environment variables passed into a semi-intelligent start script which preconfigures and then runs a binary (for an example of this see Ethan's [eris chain manager scripts](https://github.com/monax/common/blob/master/docker/btcd/Dockerfile) which we use for `eris chains`). `btcd` uses a config file.

This is where having an understanding of how `eris` manages data containers becomes important.

`eris data` is a pretty powerful tool when it is used correctly. What we do with data containers is that we keep a folder in the host's file system at `~/.eris/data/NAME` (where `NAME` is the name of a service or chain). In that folder you can put whatever files are needed to start a specific "program" (which will usually be a container). Then you can run `eris data import NAME --dest PATH` to "put" **whatever is in the host location** "into" the containers at the `--dest` you tell it. (Note, for pure eris programs we use the `~/.eris` inside the containers so if you're importing into an erisdb container, for instance, `--dest` is not necessary cause automagic.)

Later, if you want to "get" files "out" of the container you will `eris data export NAME --src PATH` (again, for eris proper containers, like erisdb, this is unnecessary cause automagic). That command will take whatever is in the volumes of the data container and export them to the host so that you can change them.

So let's put this together to talk through how to start `btcd` with a custom configuration.

### Steps to Success

#### Step (1): `eris services start btcd`

First, start the node. This will make it drop its default configuration files in the right location. There is no output here if the command ran correctly.

#### Step (2): `eris services ls`

Second, check that the node is running. I currently have ipfs running so my output looks like this:

```irc
 SERVICE NAME     CONTAINER NAME       TYPE     CONTAINER #                                           PORTS
-------------- --------------------- --------- ------------- ----------------------------------------------------------------------------------------
 btcd           eris_service_btcd_1   service   1             18332/tcp 18333/tcp 18334/tcp 8332/tcp 0.0.0.0:8333->8333/tcp 0.0.0.0:8334->8334/tcp
 ipfs           eris_service_ipfs_1   service   1             0.0.0.0:4001->4001/tcp 0.0.0.0:5001->5001/tcp 0.0.0.0:8080->8080/tcp
```

A note about the listing commands. For services (and chains) there are three different listing commands:

* `eris services known` will simply read the files in the target folder. In other words your *definition_files. It does not tell you anything about the containers.
* `eris services ls` will simply tell you which containers *exist* (they may or may not be running).
* `eris services ps` will simply tell you which containers *are running* (and exist of course).

#### Step (3): `eris services stop btcd`

Stop the node. There is no output here if the command was successful.

Run `eris services ps` to confirm it stopped by comparing that output to `eris services ls`.

#### Step (4): `eris data ls`

This will check that the data container was made.

#### Step (5): `eris data export btcd --src /home/eris/.btcd`

This will perform the export of the volumes talked about above. How did I know what source directory? From the `VOLUMES` line in the dockerfile.

#### Step (6): `cd ~/.eris/data/btcd/ && ls -la`

This will move into the data directory and show you what was exported. (Note you may have some permissions errors depending on your setup, but since its in the user's folder it should be overcomeable).

You should see a `.btcd` directory now. When I exported there was no conf file there (after a bit of investigation I realized that btcd doesn't actually drop a config file). That's fine, we can create one.

```
touch ~/.eris/data/btcd/.btcd/btcd.conf
```

You can also edit it however you want in whatever text editor you prefer according to the specification which btcd uses for its config files.

#### Step (7): `eris data import btcd --dest /home/eris`

One thing to note here is that the paths are (slightly) different on the import than they were on the export. The exported volume was the .btcd path "inside" the container. That gave us the `~/.eris/data/btcd/`**`.btcd`** on the host. But when we import from the host "into" the container we want to put the `.btcd` directory into the `~` directory so that the result inside the containers is `~/.btcd` using a different path for the `--src` and `--dest` will accomplish this and will properly "align" the files in the right place inside the conter.

#### Step (8): `eris services start btcd`

Now your chain should boot with your custom config file.

### Conclusions

`eris` isn't optimized for btcd like containers. It fully runs them, but it does take a bit of work to get set up with containers that us a config file instead of being having a bootable config passed in as environment variables. In general we are of the opinion that start scripts and environment files go further than config files for configuring how things run in containers.

How could this be improved? Well, for one a start script that would recieve the relevant env vars and dump those into a config before starting btcd would go a long way. We haven't had time to do that yet, but as they say.... pull requests welcome.

