---

type:   docs
layout: single
index_file: ""
title:      "Platform | Tools & Services"
excerpt:    "The Ecosystem Application Platform | Components"
menu:
  platform:
    weight: 30
aliases:
  - /components/epm/

---

## Introduction

<div class="note">
    <em>Note: As of 2017, our product has been renamed to Monax. The references on this page have been recently changed.</em>
</div>

This page provides an overview of how Monax Industries' software is stacked

Modularity is a strong focus of the `monax` platform, which is greatly facilitated by container technology. Before we adopted a containerized modality, each service had to be installed, configured, and connected individually - a labour intensive process. Docker provides `monax` with the ability to easily manage the various processes for your application. It also facilitates running your chain on a variety of hardware. The complicated task of orchestrating all the various requirements for a smart-contract-focused blockchain is exactly why we went all-in on containerizer technology despite various ongoing pain points. We like to think of [the Monax CLI](https://github.com/monax/cli/blob/master/README.md) as "docker for blockchains".

There are five key considerations for thinking about the mechanics of your chain as one integral piece of your ecosystem application. The first three suffice if your goal is writing and testing smart contracts. The rest are for building a useable application at scale.

## Ecosystem Application Checklist

<div class="note">
	<em>Note: Current and future versions of the software (0.16 and forward) have replaced the <code>eris</code> command with the <code>monax</code> command as shown below.</em>
</div>

### Manage Your Keys

First, of course, it all starts with your keys. This is crypto, remember?

Key management is an inherently complex process and is something that should be given serious thought. It's getting easier overall (*see, e.g.,* [ledger](https://www.ledger.co/) and [keybase](https://keybase.io/)), but at the moment there remain caveats.

A key needs to be generated and secured for each participant in your blockchain. Can't do much on a blockchain with a validator or participant who can't sign transactions. This is a fundamentally different approach for web services compared to login/password. If you're gonna be blockchaining, do try to really understand how keys work and are used. Our [key signing daemon](https://github.com/monax/keys), usually run in a docker container, provides the basic functionality for getting started with development.

With our modular stack, it can be swapped out for other compatible key signing daemons. In fact, it **must be swapped out** for production use cases. It is for **development only** and we do not offer an enterprise key management solution. However the common keys API can either be satisfied by your audited security system of choice or we will be looking to provide proxy based access to various security and key management systems over time.

### Roll Your Chain

Chains have a few key properties: validators (specified in the all important genesis file or updated on the fly with bonding/unbonding), a consensus engine (the mechanism for updating state), and a virtual machine (for executing smart contracts).

Our [current design](/platform/db) is opinionated and uses the [Tendermint](https://github.com/tendermint/tendermint) consensus engine and the [Ethereum Virtual Machine](https://github.com/ethereum/wiki/wiki/White-Paper). Sandwiched between these components is our [permission layer](https://github.com/monax/eris-db/blob/master/README.md). Both the consensus engine and virtual machine are, again, modules that can be swapped in and out as need be.

The entrypoint to the platform is the `monax chains make` command. See our [getting started tutorial](/docs/getting-started) for more information.

### Deploy Your Contracts

Deploy contracts: write solidity, compile, send to the chain.

We provide hosted compilers which uses the [a compilers service](https://github.com/monax/compilers), and as you would expect, swapping in your own compiler is as easy as a flag on `monax pkgs do`. This command wield the package manager; our contract deployment tooling which simplifies many of the steps for compiling, deploying and working with chain based systems. 

### Build Your Application

We call them services, but you can call them whatever you like.

A handful of applications are already built for you. Some of these services are used internally, for example, [IPFS](http://ipfs.io/), to provide a data lake for applications (the `monax files` command). See our [hello-doug](https://github.com/monax/hello-doug) examples to see how we build ecosystem applications.

### Deploy To the Cloud

Deploy to the cloud. Our [advanced cloud tutorial](/docs/chain-deploying) provides more information on this process. We'll be adding cloud service integrations in the coming months (e.g. k8s)

Voila! Your app is ready for users. Of course, you'll want to build a user interface, likely at the javascript layer. To simplify that process, we have three javasript libraries: [monax:db.js](https://github.com/monax/legacy-db.js/blob/master/README.md),  [monax:contracts.js](https://github.com/monax/legacy-contracts.js/blob/master/README.md), and [monax:keys.js](https://github.com/monax/legacy-keys.js/blob/master/README.md)

That is a lot of components. So where should you even start?

Next, we'll walk through one approach -- the one we consider most intuitive for thinking about the design of your ecosystem application -- though in practice you can probably start anywhere. This is how we do it when testing or implementing our applications.

## The Development Lifecycle

<div class="note">
    <em>Note: Current and future versions of the software (0.16 and forward) have replaced the <code>eris</code> command with the <code>monax</code> command as shown below.</em>
</div>

### Set Up Your Chain

We start with the genesis file. The sets up your chain and contains approved validators, their token distribution, any permissions, roles, or names can be assigned to them. Maybe you want 5, maybe you want 100. See [the advanced chain making tutorial](/docs/chain-making) for more info on creating chains. Since you'll need the public keys of everyone you'd like included, a key pair will need to be generated for each participant/validator.

Either you do this all yourself and distribute the keys or ask each user to generate a pair themselves and provide the pubkey. For the latter, you'd pass in a `.csv` file on the `monax chains make --known` command. It is always possible to update the validator set with a [bond/unbond transaction](https://github.com/monax/cli/tree/master/tests/jobs_fixtures/app04-bonding_unbonding_rebonding_tx_and_validation_status). Of course, you can easily add accounts to the chain by sending them a token or with a [permissions transaction](https://github.com/monax/cli/tree/master/tests/jobs_fixtures/app03-basic_and_advanced_permission_txs_and_queries).

It's time to start bringing nodes online. The first node starts up and peers can join like so: a seed of the master node's IP:port is added to their configuration file (`config.toml`) used in the `monax chains start` sequence. So long as the peer coming online has a key that:

1. can sign (via a keys service); and
2. is included in the current list of accounts;

then it'll join the network.

Once >2/3 of the validator pool joins the network, the chain will begin validating transactions (i.e., updating state, or what proof of work chains call "mining"; namely _producing blocks_.)

If the chain drops below 2/3 the total "stake" that has been bonded, it will halt. If the more than 2/3 of the bonded stake cannot come to a consensus, it will halt.

The status and health of a chain can be monitored through either `monax:db`'s rpc port. The chains command for `monax:cli` is designed to handle all operations for one or more chains. With your chain running, you can [send transactions](https://github.com/monax/cli/tree/master/tests/jobs_fixtures/app00-basic_functionality_jobs) and deploy contracts using `monax pkgs`, or our javascript libraries.

More info: [chain deploying](/docs/chain-deploying); [contracts interacting](/docs/getting-started/#step-4-integrate-your-ecosystem-application).

### Set Up Your Application

Now you need an application. Before we get into some design considerations for an application, let's dissect the process of sending transactions and deploying contracts.

The specific requirements for sending a transaction are documented [here](/docs/specs/jobs_specification/#txJobs). Provided these are met, `monax:package_manager` will first craft a transaction and, if specified, sign and broadcast it to the designated chain.

Now let's deploy a contract. For writing smart contracts, see [our Solidity writing tutorial series](/docs/solidity/). Once you've got a simple contract and would like to deploy it. The first step takes the solidity code and compiles it into bytecode. This bytecode will be used as the raw input for `monax:package_manager` to [deploy your contract](/docs/specs/jobs_specification/#contractsJobs) to the chain.

After the transaction is crafted, the ABI provides the formating information necessary to interact with the contract. Now your contract is on the chain, it can be called with [a call job](/docs/specs/jobs_specification/#contractsJobs) via `monax:package_manager` or via the [javascript library](https://github.com/monax/legacy-contracts.js/blob/master/README.md).

This process of: solidity -> monax:compilers (contract compile) -> monax:abi (transaction formulation) -> monax:keys (sign) -> deploy is wholly abstracted away by the `monax:package_manager`; see the [contract deploying tutorial](/docs/getting-started/#step-4-integrate-your-ecosystem-application) for more info. In essence, you write a contract, specify a few parameters in a `.yaml` file then vrooom `monax pkgs do`.

So a transaction hits the chain, then what? Roughly, the transaction will be proposed and the validators will vote on whether or not to accept it in the next block. Voting happens in a round robin manner. The Tendermint consensus engine is its own module which talks to the `monax:db` application runtime over the  [tendermint socket protocol (tmsp)](http://tendermint.com/posts/tendermint-socket-protocol/).

We are working on making experimentation with other consensus engines simpler. Our roadmap is tending toward being able to offer a sort of plug-and-play system with different application runtimes and consensus engines packaged, configured, and connected in a user friendly manner.

## Get Started!

There you have it. From A to Blockchains, this is how you get rolling with the marmots.


## [<i class="fa fa-chevron-circle-left" aria-hidden="true"></i> Back To Platform](/platform/)
