---

type:   docs
layout: single
title: "Platform"
index_file: ""
excerpt:    "The Ecosystem Application Platform"
path: "content/platform"
aliases:
    - /docs/explainers/the-eris-stack/
menu:
  platform:
    weight: 5

---

```
{{< data_sites what_is_eris >}}
```


This page provides an overview of how Monax Industries' software stack - known to the market as Eris - is, well, stacked.

[Modularity is a strong focus](https://monax.io/blog/2015/09/05/docker-and-eris/), greatly facilitated by [docker](https://docker.com). This page explains how the tooling fits together while painting a path through our tutorial series. The complicated task of orchestrating all the various requirements for a smart-contract-focused blockchain is exactly why we went all-in on docker despite various ongoing pain points. We like to think of [eris:cli](/docs/documentation/cli/latest/eris/) as "docker for blockchains".

{{< image src="/images/docs/eris-stack-v3.png" >}}

Let's get started! The above diagram provides a high level overview of the different pieces of an ecosystem application.

Before we adopted a docker modality, each service had to be installed, configured, and connected individually - a labour intensive process. Docker provides `eris` with the ability to easily manage the various processes for your application. It also facilitates running your chain on a variety of hardware.

The green boxes are part of the `eris` technology stack while purple represents external services managed by `eris`.

There are several considerations for thinking about the mechanics of your chain as an ecosystem application. The first three suffice if your goal is writing and testing smart contracts. The rest are for building a useable application at scale.

# Blockchain Checklist

## Manage Your Keys

First, of course, it all starts with your keys. This is crypto, remember?

Key management is an inherently complex process and is something that should be given serious thought. It's getting easier overall (*see, e.g.,* [ledger](https://www.ledger.co/) and [keybase](https://keybase.io/)), but at the moment there remain caveats.

A key needs to be generated and secured for each participant in your blockchain. Can't do much on a blockchain with a validator or participant who can't sign transactions. This is a fundamentally different approach for web services compared to login/password. If you're gonna be blockchaining, do try to really understand how keys work and are used. Our key signing daemon [eris:keys](/docs/documentation/keys/latest/eris-keys/), usually run in a docker container, provides the basic functionality for getting started with development.

With our modular stack, it can be swapped out for other compatible key signing daemons. In fact, it **must be swapped out** for production use cases. It is for **development only** and we do not offer an enterprise key management solution. However the common keys API can either be satisfied by your audited security system of choice or we will be looking to provide proxy based access to various security and key management systems over time.

## Roll Your Chain

Chains have a few key properties: validators (specified in the all important genesis file or updated on the fly with bonding/unbonding), a consensus engine (the mechanism for updating state), and a virtual machine (for executing smart contracts).

Our [current design](https://monax.io/platform/db/) is opinionated and uses the [Tendermint](https://github.com/tendermint/tendermint/wiki) consensus engine and the [Ethereum Virtual Machine](https://github.com/ethereum/wiki/wiki/White-Paper). Sandwiched between these components is our [permission layer](/docs/documentation/db/). Both the consensus engine and virtual machine are, again, modules that can be swapped in and out as need be.

To create genesis files and keys for development, we have the [eris:chain_manager](/docs/documentation/cm/latest/eris-cm/). The chain maker portion of the `eris:chain_manager` supports a wide variety of chain types, permissioning schemes, and participant kinds.

## Deploy Your Contracts

Deploy contracts: write solidity, compile, send to the chain.

We provide hosted compilers which uses the [eris:compilers](/docs/documentation/compilers/), and as you would expect, swapping in your own compiler is as easy as flag with [eris:package_manager](/docs/documentation/pm/latest/epm). `eris:package_manager` is our contract deployment tooling which simplifies many of the steps for compiling, deploying and working with chain based systems. The [eris:abi](https://github.com/eris-ltd/eris-abi) tooling is used for formatting compiled solidity code.

All of this functionality is abstracted away with the `eris pkgs do` command. See the [contracts deploying tutorial](/docs/tutorials/getting-started/#step-3-deploy-your-ecosystem-application-using-smart-contract-templates) for more information.

## Build Your Application

We call them services, but you can call them whatever you like.

A handful of applications are already built for you. Some of these services are used internally, for example, [IPFS](http://ipfs.io/), to provide a data lake for applications (the `eris files` command). See our [hello-world](https://github.com/eris-ltd/hello-eris) examples to see how we build ecosystem applications.

## Deploy To the Cloud

Deploy to the cloud. This process uses [docker-machine](/docs/documentation/cli/latest/examples/using_docker_machine_with_eris/) and will soon be bundled up in the `eris remotes` command to simplify the process even further. See the [advanced cloud tutorial](/docs/documentation/cm/latest/examples/chain-deploying/) for more information on deploying your chain to the cloud.

Voila! Your app is ready for users. Of course, you'll want to build a user interface, likely at the javascript layer. To simplify that process, we have three javasript libraries: [eris:db.js](/docs/documentation/db.js/),  [eris:contracts.js](/docs/documentation/contracts.js/), and [eris:keys.js](/docs/documentation/keys.js/)

That is a lot of components. So where should you even start?

Next, we'll walk through one approach -- the one we consider most intuitive for thinking about the design of your chain backed application -- though in practice you can probably start anywhere. This is how we do it when testing or implementing the toadserver/marmot checker.

# The Development Lifecycle

## Set Up Your Chain

We start with the genesis file. The sets up your chain and contains approved validators, their token distribution, any permissions, roles, or names can be assigned to them. Maybe you want 5, maybe you want 100. See [the advanced chain making tutorial](/docs/documentation/cm/latest/examples/chain-making//) for more info on creating chains. Since you'll need the public keys of everyone you'd like included, a key pair will need to be generated for each participant/validator.

Either you do this all yourself and distribute the keys or ask each user to generate a pair themselves and provide the pubkey. For the latter, you'd pass in a `.csv` file on the `eris chains make --known` command. It is always possible to update the validator set with a [bond/unbond transaction](https://github.com/eris-ltd/eris-pm/tree/master/tests/fixtures/app04-bonding_unbonding_rebonding_tx_and_validation_status).

It's time to start bringing nodes online. The first node starts up and peers can join like so: a seed of the master node's IP:port is added to their configuration file (`config.toml`) used in the `eris chains new | start` sequence. So long as the peer coming online has a key that:

1. can sign (via a keys service); and
2. is included in the genesis file;

then it'll join the network.

Once >2/3 of validator pool joins, the chain will begin validating transactions (i.e., updating state, what proof of work chains call "mining"; namely _producing blocks_.) If the chain drops below 2/3 validators, it will halt. The status and health of a chain can be monitored through either the js library (port 1337), or pure http endpoints (port 46657). The chains command for eris-cli is designed to handle all operations for one or more chains. With your chain running, you can [send transactions](https://github.com/eris-ltd/eris-pm/tree/master/tests/fixtures/app00-basic_functionality_jobs) and deploy contracts using `eris pkgs`.

At the tool level, these would primarily be used by chain admins whereas developers for a user-facing application would likely be working at the javascript layer for sending transactions and deploying contracts.

More info: [chain deploying](/docs/documentation/cm/latest/examples/chain-deploying/); [contracts interacting](/docs/tutorials/getting-started/#step-4-integrate-your-ecosystem-application).

## Set Up Your Application

Now you need an application. Before we get into some design considerations for an application, let's dissect the process of sending transactions and deploying contracts. At the end of the day, the latter is the former but includes compiled byte code as part of the transaction.

The specific requirements for sending a transaction are documented [here](/docs/documentation/pm/latest/jobs_specification/#txJobs). Provided these are met, eris:package_manager will first craft a transaction and, if specified, sign and broadcast it to the designated chain.

Now let's deploy a contract. For writing smart contracts, see [our Solidity writing tutorial series](/docs/tutorials/solidity/). Once you've got a simple contract and would like to deploy it. The first step takes the solidity code and compiles it into bytecode. This bytecode will be used as the raw input for [eris:package_manager to deploy your contract](/docs/documentation/pm/latest/jobs_specification/#contractsJobs) to the chain.

After the transaction is crafted, the abi formats this bytecode into something that the EVM can read/interpret. Now your contract is on the chain and can be called with [a call job via eris:package_manager](/docs/documentation/pm/latest/jobs_specification/#contractsJobs) or via the [javascript library](/docs/documentation/contracts.js/).

This process of: solidity -> eris:compilers (contract compile) -> eris:abi (transaction formulation) -> eris:keys (sign) -> deploy is wholly abstracted away by the `eris:package_manager`; see the [contract deploying tutorial](/docs/tutorials/getting-started/#step-4-integrate-your-ecosystem-application) for more info. In essence, you write a contract, specify a few parameters in a `.yaml` file then vrooom `eris pkgs do`.

So a transaction hits the chain, then what? Roughly, the transaction will be proposed and the validators will vote on whether or not to accept it in the next block. Voting happens in a round robin manner. The tendermint consensus engine is its own module which talks to the eris:db application layer over the  [tendermint socket protocol (tmsp)](http://tendermint.com/posts/tendermint-socket-protocol/).

We are working on making experimentation with other consensus engines simpler - a sort of plug-and-play with different EVM clients and consensus engines packaged neatly.

## Build Your Application

Time to build your service (application). But wait.

What is eris:cli anyways, and why would you want to use it? How will help it operate your blockchain application?

With that in mind, our goal now is to build and define a service that, when started, links up to the existing chain and any other services that are required for the application to run smoothly. Once your service is built (write a bunch of code, basically), all it needs is a service definition file (`eris services make`; see the specification [here](/docs/documentation/cli/latest/services_specification/) which simplifies the `docker run` process. This of course assumes you've written a [Dockerfile](https://docs.docker.com/engine/reference/builder/) and made a [docker image](https://docs.docker.com/engine/userguide/containers/dockerimages/).

See the [toadserver service making tutorial](/docs/documentation/cli/latest/examples/how_to_make_a_service/) for more information on this process.

The last tricky part, now that we have a defined service, is to deploy it to the cloud with >1 node/validator. Here again, docker shines, this time as a machine.

The `eris` tool has a global flag `--machine` which can be used to specify another docker daemon (on any number of other hosts) upon which to execute a command. Note: these docker machines will have been pre-created using your choice of cloud provider. See our [docker-machine tutorial](/docs/documentation/cli/latest/examples/using_docker_machine_with_eris/) and our [getting started with cloud machines](/docs/documentation/cli/latest/examples/getting_started_with_cloud_instances/) for more information.

The beauty of this feature is that the files needed for these deployments need only be on the host, and, of course, you only need to install `eris` once.

# Get Started!

There you have it. From A to Blockchains, this is how you get rolling with the marmots.

<a class="action-big" href="/docs/tutorials/getting-started">Get Started Using eris</a>
