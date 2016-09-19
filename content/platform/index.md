---

date: 2014-10-06
title:      "platform"
excerpt:    "The Distributed Application Platform | overview"
menu:
  main:
    parent: platform
weight:  10
aliases:
    - /docs/explainers/the-eris-stack/

---

```
Eris is a platform for building, testing, maintaining, and operating ecosystem applications with a blockchain backend. Eris makes it easy and simple to wrangle the dragons of smart contract blockchains.
```


This page provides a high level overview and a detailed explanation of how the eris stack is, well, stacked.

[Modularity is a strong focus](https://eng.erisindustries.com/tutorials/2015/09/05/docker-and-eris/), greatly facilitated by [docker](https://docker.com). This page explains how the tooling fits together while painting a path through our tutorial series. The complicated task of orchestrating all the various requirements for a smart-contract-focused blockchain is exactly why we went all-in on docker despite various ongoing pain points. We like to think of [eris:cli](/docs/documentation/cli/latest/eris/) as "docker for blockchains".

{{< image src="/images/docs/eris-stack-v2.png" >}}

Let's get started! The above diagram shows the relationship between most of the tools in the eris stack.

Before we adopted a docker modality, each component had to be installed individually and ensured that they were properly connected. Docker provides eris with the ability to seamlessly link running containers, so that the individual processes can talk to each other via gated access which is easy to control.

When deploying many nodes, this is known as service discovery and greatly facilitates large-scale deployments. There are several considerations for thinking about the mechanics of your chain as an application. The first three suffice if your goal is writing and testing smart contracts. The rest are for building a useable application at scale.

# Blockchain Checklist

## Manage Your Keys

First, of course, it all starts with your keys. This is crypto, remember?

Key management is an inherently complex process and is something that should be given serious thought. It's getting easier overall (*see, e.g.,* [ledger](https://www.ledger.co/) and [keybase](https://keybase.io/)), but at the moment there remain caveats.

A key needs to be generated and secured for each participant in your blockchain. Can't do much on a blockchain with a validator or participant who can't sign transactions. This is a fundamentally different approach for web services compared to login/password. If you're gonna be blockchaining, do try to really understand how keys work and are used. Our key signing daemon [eris:keys](/docs/documentation/keys/latest/eris-keys/), usually run in a docker container, provides the basic functionality for getting started with development.

As with all the tools in our stack, it can easily be swapped out for other compatible key signing daemons. In fact, it **must be swapped out** for production use cases. It is for **development only** and we do not yet offer an enterprise key management solution. However the common keys API can either be satisfied by your audited security system of choice or we will be looking to provide proxy based access to various security and key management systems over time.

## Roll Your Chain

Chains have a few key properties: validators (specified in the all important genesis file or updated on the fly with bond transactions), a consensus engine (the mechanism for updating state), and a virtual machine (for executing smart contracts).

Our [current design](https://erisindustries/components/erisdb/) is opinated and uses the [Tendermint](https://github.com/tendermint/tendermint/wiki) consensus engine and the [Ethereum Virtual Machine](https://github.com/ethereum/wiki/wiki/White-Paper). Sandwiched between these components is our [permission layer](/docs/documentation/db/).

Both the consensus engine and virtual machine are, again, modules that can be swapped in and out as need by. Currently, they are packaged together as [eris:db](/docs/documentation/db/). The docker image used to run eris:db also contains [mint-client](https://github.com/eris-ltd/mint-client), a low-level tool for talking to the Tendermint consensus engine. A low-level [eth-client](https://github.com/eris-ltd/eth-client) is also available if you'd rather be rolling an ethereum chain.

To create genesis files and keys for development, we have the [eris:chain_manager](/docs/documentation/cm/latest/eris-cm/). The chain maker portion of the `eris:chain_manager` supports a wide variety of chain types, permissioning schemes, and participant kinds.

## Deploy Your Contracts

Deploy contracts: write solidity, compile, send to the chain.

We provide hosted compilers which uses the [eris:compilers](/docs/documentation/compilers/), and as you would expect, swapping in your own compiler is as easy as flag with [eris:package_manager](/docs/documentation/pm/latest/epm). `eris:package_manager` is our contract deployment and system establishment tooling which simplifies many of the steps for compiling, deploying and working with chain based systems. The [eris:abi](https://github.com/eris-ltd/eris-abi) tooling is used for formatting compiled solidity code.

All of this functionality is abstracted away with the `eris pkgs do` command. See the [contracts deploying tutorial](/docs/tutorials/getting-started/#step-3-deploy-your-ecosystem-application-using-smart-contract-templates) for more information.

## Build Your Application

We call them services, but you can call them whatever you like.

A handful of applications are already built for you. Some of services are used internally, for example, [IPFS](http://ipfs.io/), to provide a data lake for applications (the `eris files` command). The [mindy](https://github.com/eris-ltd/mindy) [testnet](pinkpenguin.interblock.io:46657) has been running for many months now and works well for sub-domain name registry.

The [toadserver](https://github.com/eris-ltd/toadserver) integrates mindy, IPFS, and eris:db's name registry feature to serve as a download server. [This will soon](https://github.com/eris-ltd/eris-cli/issues/579) replace github as part of the `eris init` sequence.

We recently built the [marmot checker](https://github.com/eris-ltd/marmot) which integrates the Google Cloud Vision API with the toadserver. Eris services are built to support modern, containerized, microservices style applications out of the box.

## Deploy To the Cloud

Deploy to the cloud. This process uses [docker-machine](/docs/tutorials//tool-specific/docker_machine/) and will soon be bundled up in the `eris remotes` command to simplify the process even further. See the [advanced cloud tutorial](/docs/tutorials/advanced/chain-deploying/) for more information on deploying your chain to the cloud.

Voila! Your app is ready for users. Of course, you'll want to build a user interface, likely at the javascript layer. To simplify that process, we have three javasript libraries: [eris:db.js](/docs/documentation/db.js/),  [eris:contracts.js](/docs/documentation/contracts.js/), and [eris:keys.js](/docs/documentation/keys.js/)

That is a lot of components. So where should you even start?

Next, we'll walk through one approach -- the one we consider most intuitive for thinking about the design of your chain backed application -- though in practice you can probably start anywhere. This is how we do it when testing or implementing the toadserver/marmot checker.

# The Development Lifecycle

## Set Up Your Chain

We start with the genesis file. The sets up your chain and contains approved validators, their initial coin distribution, any permissions, roles, or names can be assigned to them. Maybe you want 5, maybe you want 100. See [the advanced chain making tutorial](/docs/tutorials/advanced/chain-making/) for more info on creating chains. Since you'll need the public keys of everyone you'd like included, a key pair will need to be generated for each participant/validator.

Either you do this all yourself and distribute the keys or ask each user to generate a pair themselves and provide the pubkey. For the latter, you'd pass in a `.csv` file on the `eris chains make --known` command.

It is always possible to update the validator set with a bond/unbond transaction, or, if they misbehave, their security deposit (bond) can be slashed: validator they are no longer. (More details in a future post).

It's time to start bringing nodes online. The first node starts up and peers can join like so: a seed of the master node's IP:port is added to their configuration file (`config.toml`) used in the `eris chains new` sequence. So long as the peer coming online has a key that:

1. can sign (via the `eris:keys` service); and
2. is included in the genesis file; then it'll join the network.

Once >2/3 of validator pool joins, the chain will begin validating transactions (i.e., updating state, what proof of work chains call "mining"; namely producing blocks). If the chain drops below 2/3 validators, it will halt. The status and health of a chain can be monitored easily through various means such as the `mintinfo` command from mint-client, the js library (port 1337), or pure http endpoints (port 46657). The chains command for eris-cli is designed to handle all operations for one or more chains. With your chain running, you can send transactions (`mintx send`) and deploy contracts using `eris:package_manager`.

At the tool level, these would primarily be used by chain admins whereas developers for a user-facing application would likely be working at the javascript layer for sending transactions and deploying contracts.

More info: [chain deploying](/docs/tutorials/advanced/chain-deploying/); [contracts interacting](/docs/tutorials/getting-started/#step-4-integrate-your-ecosystem-application).

## Set Up Your Application

Now you need an application. Before we get into some design considerations for an application, let's dissect the process of sending transactions and deploying contracts. At the end of the day, the latter is the former but includes compiled byte code as part of the transaction (see eris-abi in the diagram).

The specific requirements for sending a transaction are documented [here](/docs/documentation/pm/latest/jobs_specification/#txJobs). Provided these are met, eris:package_manager will first craft a transaction and, if specified, sign and broadcast it to the designated chain. Again, since the key signing that transaction must be available to the daemon, docker simplifies this logitics challenge. So that's pretty easy but it's no bitcoin wallet in terms of simplicity.

Now let's deploy a contract. For writing smart contracts, see [our Solidity writing tutorial series](/docs/tutorials/solidity/). Once you've got a simple contract and would like to deploy it. The first step takes the solidity code and compiles it into bytecode. This bytecode will be used as the raw input for [eris:package_manager to deploy your contract](/docs/documentation/pm/latest/jobs_specification/#contractsJobs) to the chain.

After the transaction is crafted, the abi formats this bytecode into something that the EVM can read/interpret. Now your contract is on the chain and can be called with [a call job via eris:package_manager](/docs/documentation/pm/latest/jobs_specification/#contractsJobs) or via the [javascript library](/docs/documentation/contracts.js/).

This process of: solidity -> eris:compilers (contract compile) -> eris:abi (transaction formulation) -> eris:keys (sign) -> deploy is wholly abstracted away by the `eris:package_manager`; see the [contract deploying tutorial](/docs/tutorials/getting-started/#step-4-integrate-your-ecosystem-application) for more info. In essence, you write a contract, specify a few parameters in a `.yaml` file then vrooom `eris pkgs do`.

So a transaction hits the chain, then what? Roughly, the transaction will be proposed and the validators will vote on whether or not to accept it in the next block. Voting happens in a round robin manner. In the aforementioned refactor, the tendermint consensus engine will be its own module which talks to the eris:db application layer over the  [tendermint socket protocol (tmsp)](http://tendermint.com/posts/tendermint-socket-protocol/), This will make experimentation with other consensus engines much simpler (Casper anyone?). Indeed, it is already possible to roll an eth chain and talk to it with the [eth-client](https://github.com/eris-ltd/eth-client).

So we've got three ways to deploy contracts and send transactions, (1) raw RPC commands (2) with eris:pm and, (3) the javascript library (eris-db.js). The way in which certain contracts are deployed and by whom at these different levels should be considered for you application.

## Build Your Application

Time to build your service (application). But wait.

What is eris:cli anyways, and why would you want to use it? How will help it operate your blockchain application?

As previously mentioned, it's an orchestration tool. Everything we've discussed so far can be done natively (i.e., without docker); this requires stitching together the various tools (see, for example, [eris by curl](/docs/tutorials/tool-specific/eris_by_curl/). **eris:cli makes it easier to co-ordinate all the things you need to roll a smart-contract ready chain with an application**.

With that in mind, our goal now is to build and define a service that, when started, links up to the existing chain and any other services that are required for the application to run smoothly. Once your service is built (write a bunch of code, basically), all it needs is a service definition file (`eris services new`; see the specification [here](/docs/documentation/cli/latest/services_specification/) which simplifies the `docker run` process. This of course assumes you've written a [Dockerfile](https://docs.docker.com/engine/reference/builder/) and made a [docker image](https://docs.docker.com/engine/userguide/containers/dockerimages/).

See the [toadserver service making tutorial](/docs/tutorials/advanced/services-making/) for more information on this process.

The last tricky part, now that we have a defined service, is to deploy it to the cloud with >1 node/validator. Here again, docker shines, this time as a machine.

The `eris` tool has a global flag `--machine` which can be used to specify another docker daemon (on any number of other hosts) upon which to execute a command. Note: these docker machines will have been pre-created using your choice of cloud provider. See our [docker-machine tutorial](/docs/tutorials/tool-specific/docker_machine/) and our [getting started with cloud machines](/docs/tutorials/advanced/cloud-getting-started) for more information.

The beauty of this feature is that the files needed for these deployments need only be on the host, and, of course, you only need install eris once.

# Get Started!

There you have it. From A to Blockchains, this is how you get rolling with the marmots. **[Get Started Now](/docs/tutorials/getting-started)**.





# The Eris Platform

eris helps developers build applications which leverage a software design paradigm we call **Participatory Architecture**. Using distributed and peer-to-peer systems, eris allows the creation of data-driven, interactive ecosystem applications that can be safely, securely, and reliably deployed and managed.

eris significantly lowers the barrier to entry for the production, distribution and maintenance of ecosystem applications. All while allowing users or other orgnaizations to easily and simply participate in the scaling and data security of the application.

# Features

eris:cli is the gateway to the eris platform. The `eris` tool is centered around a very few concepts:

* `services` -- things that you turn on or off
* `chains` -- develop permissioned chains
* `contracts` -- our smart contract tool chain
* `actions` -- step by step processes

These concepts (along with a few other goodies) provide the core functionality of what we think a true distributed application would look like.

Please see the documentation for more on eris:cli.

# The Smart Contract Package Manager

```
The Eris Package Manager Deploys and Tests Smart Contract Systems
```

The eris:pm is our [smart contract](https://docs.erisindustries.com/explainers/smart_contracts/) package manager. eris:pm allows developers to easily and simply compile, deploy, and test suites of smart contracts in a cohesive manner.

eris:pm is a high level tool which provides easy access to most of the eris:db tooling. eris:pm is used to deploy and test suites of smart contracts. In general it will wrap the mint-client tooling, along with eris-keys and eris-compilers to provide a harmonized interface to the modular components of the [eris](https://docs.erisindustries.com) open source platform.

eris:pm is closer to an ansible or chef like tool than it is NPM in that it is a deployment sequence and testing tool. eris:pm uses an **epm definition file** to tell the package manager what jobs should be ran and in what order.

In eris:pm a *job* is a single action which is performed (such as a transaction, a contract deployment, a call to a smart contract, or a query of information). The results of these jobs are then kept in variables and may be used in later jobs.

Please see the documentation for more on eris:pm.

<a class="action-big" href="https://docs.erisindustries.com/tutorials/getting-started/">Get Started Using eris:pm</a>

<a class="action-big" href="https://docs.erisindustries.com/tutorials/getting-started/">Get Started Using eris</a>