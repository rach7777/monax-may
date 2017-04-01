---
author: zach
categories:
- tutorials
comments: true
date: 2015-08-05T00:00:00Z
excerpt: Walkabout for Monax Services
meta: true
published: true
series: getstarted
tags:
- cli
- command-line
- bitcoin
- drones
- 3d printing
- eris
- docker
- blockchain
thumbnail: null
title: 'Monax CLI Tool Walkabout: Services'
url: /2015/08/05/eris-services/
---

<div class="note">
	<em>Note: since this blog post was written, we have changed our name to Monax Industries and will be changing the name of our product to "Monax" in early 2017. We have left these posts unedited for the purposes of historical record, as the software was named Eris at the time.</em>
</div>

##Services as a Service

Services are what you, as a developer, stitch together to build an application. They are the glue that holds everything together, run in docker containers, and can be built on top of other services.

Let's say you want a blockchain to manage and automate an army of 3d printers. Your service, call it `three-dee-printing`, might index CAD files as IPFS objects, each with a bitcoin address and price. A tendermint chain listening for (valid - i.e., paid in full) transactions to those bitcoin addresses could initiate printing by pulling the CAD image from IPFS and adding the print job to the queue. Users could upload any CAD file to your service to get a quote, after which it would be added to the index. There isn't much left for you to do other than ensure your printers are running smoothly.

The service definition file for `three-dee-printing` would have this extra line:

```toml
[services]
dependencies = ["ipfs", "btcd", "chainName"]
```

where `chainName` is itself a chain running as a service. Yeah, it's that easy. Of course, the bulk of the work goes into making contracts for your chain to manage the process.

Perhaps Alice operates an army of delivery drones in the warehouse next door. She could have a service that has `three-dee-printing` as a dependency and listens for transactions where the user has requested and paid for drone delivery. From order to delivery, services can do it all.

That's a neat example. What's your service?

##Getting Started
[Install Eris CLI](https://github.com/monax/cli/tree/develop#install-eris)

Read the [README](https://github.com/monax/cli/tree/develop#services)

Run

```bash
eris init
```

to grab some default service definition files.

Find out which services are available

```bash
eris services known
```

Launch a service

```bash
eris services start [name]
```

Docker will do its thing and voila! Your service is running.

Confirm this is the case

```bash
eris services ls
```

Run a Bitcoin node: `btcd`, or an ethereum node `eth`

**Learn more about IPFS as a service [here](/blog/2015/08/05/ipfs-as-a-service/)**

Starting a service can also spawn a data container if `data_container = true`

See [here](https://github.com/monax/cli/tree/develop#data) for more information about `eris data`.

Protip: Running too many services at once might crash you operating system: kill a service

```bash
eris services stop [name]
```

Add the `-x` and `-r` flags to get rid of the data containers and containers, respectively. When things really get bloated, run

```bash
docker rm -v -f $(docker ps -a -q)
```

but be careful with this command.

Note to OSX users - save yourself a lot of headache by working on a remote box or use Kitematic.

