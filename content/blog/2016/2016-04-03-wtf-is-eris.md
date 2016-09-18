---
author: casey
categories:
- business
comments: true
date: 2016-04-03T00:00:00Z
excerpt: This one goes out to all the believers.
meta: true
published: true
tags:
- eris
thumbnail: wtf-eris-rt.png
title: What is Eris? 2016 Edition
url: /2016/04/03/wtf-is-eris/
---

Let's get real. The collective data and process management space (or, as some call it, the "blockchain" space) (or, as others may call it, the "smart contract" space), is an emerging market.

This makes it an immense pleasure to be a part of. There is an undeniable groundswell of interest in this idea:

* that we can work to automate business processes at a network level;
* that we can build applications that **are** the network; and
* that we can bring the management of our data driven relationships (with the world, with peers, with competitors, with customers, with suppliers, etc.) into a collective, efficient space.

This groundswell of interest is happening because the `idea` is incredibly appealing. And it is appealing for some very clear groups for some very clear reasons.

But there is a fundamental equation which must be fulfilled here: `ideas != applications`.

As this market emerges, and matures, there will be changes in who is winning at any one time and there will be fluctuations around who solves which problem better. We have already started to see this take place within the enterprise applications of smart contract technology where relationships and reputations are currently being made.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">In the next two years, an intrepid few will have their careers made. Or lost. Or modestly altered. <a href="https://twitter.com/hashtag/smartcontracts?src=hash">#smartcontracts</a></p>&mdash; Casey Kuhlman (@compleatang) <a href="https://twitter.com/compleatang/status/675736072861696000">December 12, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

What is probably very clear to most market participants, whether that market is called "blockchains" or "collective process management solutions" or "smart contracts" (a semantic argument better left to the twitter-rena and other such upstanding locales), is that there are currently **a lot of ways** to skin any one cat.

If you are working on chains right now, and you are in the business of consuming upstream, you have a lot of choices.

If you're a developer in a bitcoin + webapp company what's your mix of nodes between the competing options? (Well, not today because the Chinese miners "made a statement", but you know, yesterday?) (Also, what's it gonna be tomorrow when the winds of change blow in a different direction... potentially?)

If you're a developer in a blockchain startup who sees a gap in which you can provide value, but you need to quickly and easily refine your value proposition; do you have a mechanism for trying out a Ripple payments layer matched to a merkle tree thing anchored into bitcoin? (Well, not today because the investors really would like more of a focus on bitcoin's blockchain?) (Wait, what's gonna happen tomorrow when ether rises another 20%? :moon:)

If you're a developer within a financial services company tasked with a now massive influx of high level interest. You know, folks came back from the conferences all "blockchain-ed". If you're in that human's shoes how are you supposed to choose on what to build? There's smart contract chains and tokenized chains? There's hosted chains with APIs, and there's managed chains, and there's build my own chains? Reading blogs and whitepapers may be part of your job, but if you don't just get to building the PoC you'll spend your whole contract just evaluating options.

This complexity and competition leads directly to what eris **actually is**, which in many cases is different than what folks **think it is**.

# Eris: The Vision

Given all the above we have three focusing streams for designing what we build at eris.

> **Belief 1**: We are entering a world of a plurality of chains, a plurality of smart contract networks, and a plurality of applications which leverage that ecosystem.

> **Belief 2**: Tooling matters.

> **Belief 3**: The value that our tech can provide is in automating business processes at a network level.

All of the design and architecture and most of the reason that eris is built the way that it is, is a reflection of the above vision; which has been developed and refined during two years of building some of the most advanced cross-system ecosystem applications around.

# Eris: Architecture That Embraces Plurality

Before we talk about `eris` let's look at what a blockchain application "actually" is:

{{ page.date | date: "%Y" | append:'/wtf-eris-services.png' | img }}

It should be noted that for any single application some of the pieces may be "n/a" and the arrows connecting components may work drastically different than in the diagram. The diagram isn't meant to cover the entire field of options, nor any one specific application. But for most of the applications, most of the time it will suffice.

Pretty much every blockchain application we know can fit somewhere in this framework (even if spread across hardware and does not use docker). Many bitcoin based web apps can easily fit in this paradigm (with the proviso at the top), most ethereum based apps can easily fit in this paradigm (with the proviso at the top), and most `eris:runtime` based apps can easily fit in this paradigm (with the proviso at the top) (more on `eris:runtime` in a moment).

The problem, though, becomes: how can the application's users (not to mention developers and contributors interesting in helping) get started?

Within the community there have been basically three answers to this:

1. Run everything through traditional webapps and connect the chains as microservices;
2. Run all the things on a single blockchain (by which I mean the one I fancy most... today); or
3. Use docker and some nice abstractions.

To be clear, our marmot-y answer is clearly in the camp of Number 3. Why? Because when application builders build using a paradigm such as ours, they get to build their applications on a rich fabric of modules which work together to varying degrees based on a variety of factors.

{{ page.date | date: "%Y" | append:'/wtf-eris-options.png' | img }}

This architecture allows eris to embrace a wide variety of developer needs. But it really begins to shine when more `super users` are given access to help validate and operate smart contract and blockchain backed applications. Thanks to innovative leaders like many of the "Ðapps" crowd, as well as others, such as OpenBazaar building on bitcoin's backbone, more and more users will have access to run their blockchain applications wherever they want. This is exciting!

So, what is eris? It's a blockchain application platform that makes it easy to build, test, and use your blockchain applications.

## Example

While exciting, it also places a fairly large load on a super user to compile, install, configure, etc. all the components and pieces that their applications use. Let's just assume a given `super user` wants to run OpenBazaar and a single Geth-IPFS Ðapp. What would be necessary to go from zero to "running".

### OpenBazaar

At the time of writing, their installation instructions are pretty clean! (Well done!)

Client:

{{ page.date | date: "%Y" | append:'/wtf-openbazaar1.png' | img }}

Server:

{{ page.date | date: "%Y" | append:'/wtf-openbazaar2.png' | img }}

Not bad. Wanna get started with openbazaar on eris?

```bash
eris services start openbazaar
```

### Geth-IPFS Ðapp

At the time of writing, both of these are easily installed via binaries! (Well done!)

IPFS:

{{ page.date | date: "%Y" | append:'/wtf-ipfs.png' | img }}

Geth:

{{ page.date | date: "%Y" | append:'/wtf-geth.png' | img }}

Super clean install paths for both. Obviously, both being go based components, users can be easily build them from scratch.

Wanna get started with geth-ipfs on eris?

```bash
eris services start ipfs geth
```

Multiply that effort across the range of possible components which the emerging plurality of chains, smart contract networks, file systems, and applications will leverage and it should be clear why eris is architected in the way that we are.

When we say that `eris` is a blockchain application platform, this is what we mean. We're making the thing that you can use to make it easy to build, test, and run your blockchain things. No matter the blockchain.

{{ page.date | date: "%Y" | append:'/wtf-eris-apps.png' | img }}

To see a full list of the services eris is capable of running out of the box [please see our repository](https://github.com/eris-ltd/eris-services).

Because `eris` leverages docker under the hood, `eris` can run (nearly) anywhere via direct install, or even just speaking to a remote docker engine!

{{ page.date | date: "%Y" | append:'/wtf-eris-remotes.png' | img }}

# eris:runtime

We have long been leaders in the permissioned smart contract network space. From our early explorations with `thelonious` to our latter explorations which led to `eris:db` (as well as significant contributions to the previous major version of the tendermint code base), we have understood that automating data driven relationships on a "less than global" basis was going to be crucial for the success of this technology within industry. `eris:runtime` is the next evolution of our efforts.

In the above framework pictures, in particular this one:

{{ page.date | date: "%Y" | append:'/wtf-eris-options.png' | img }}

We reference a component of eris which is currently not in our repositories (`eris-rt-XXX` in the above). The components in the above image that are colored green are areas where eris is intending to keep building. This is not a [big departure](https://eng.erisindustries.com/blockchains/2015/12/31/on-blockchain-clients-in-2016/) for us. Indeed, it is the [continuation of a path](https://blog.erisindustries.com/philosophy/2016/03/02/eris-and-tendermint/) we've been heading for a while.

So, what exactly, is `eris:runtime`? Over the next few release cycles (leading up to our 1.0 release) we will be refactoring our current efforts to fit more cleanly into the modular components outlined here:

{{ page.date | date: "%Y" | append:'/wtf-eris-rt.png' | img }}

`eris:runtime` will ensure access for blockchain application builders to the best permissionable smart contract network environment in a more modular and extensible framework. `eris:runtime` will include all of the relevant default components, wisely connected with sane defaults, besides keys and files, necessary to build a wide variety of blockchain and smart contract backed applications.

The runtime won't, obviously, be for every blockchain and smart contract backed application, but after building industrial strength blockchain and smart contract backed applications for wee while now, it is what we need, the majority of the time, to continue pushing the envelope as to what this tech can do and can be used for.

## eris:runtime:contracts

Let's start at the top of the diagram. With the smart contracts "layer". What does that mean? Well, to us at Eris it means:

```irc
cryptographically verifiable computation over cryptographically verifiable data
```

While the term folks use is "smart contracts", what we are really talking about is "deterministic computation" (or "verifiable computation"). No matter what it is called, it is what is necessary to highly automate business processes **at the network level** (meaning the entire network performs the computation). The computation must be verified by many actors on the network who come to consensus as to the "correct" answer should there be any disagreement (or acts of god, or random errors, or malicious actors). In addition, nodes who join a network after its inception will be required to perform an audit function on the system as they "catch up" with the rest of the network; this means they have to fully verify the computation even much later in time. Which means the computation needs to be highly deterministic.

This component will (very soon) begin its life as Ethereum's VM and the applications-relevant permissions of eris:db's current permission layer. (It's more or less equivalent in functionality to the "top half" of the current Tendermint chain client we use, only heavily updated) `eris:db` for the record will slowly be phased out as a term we use at eris. But the ideas of `eris:db`, like the ideas of `thelonious` before it, will be carried forward, extended and improved.

By default `eris:runtime:contracts` will talk TMSP to a Tendermint Engine, which is in the midst of its own refactor to become a more "pure" consensus engine (It's more or less equivalent in functionality to the "bottom half" of the current Tendermint chain client we use, only heavily updated). `eris:runtime:contracts` is scheduled to be released in our 0.12.0 release.

We will, over our 1.x release cycles, as more options to perform highly deterministic and verifiable computation come on line, be seeking to integrate additional options as parameters for the runtime (of course they can always be ran as eris services :-) ). But for now Ethereum's VM is, in our experience, still the best highly deterministic interpreter on the market.

We will also, over our 1.x release cycles, as more options in the transactional and consensus engine compontent come on line, be seeking to integrate additional options as parameters for the runtime (of course they can always be ran as eris services :-) ). But for now Tendermint is, in our experience, still the most mature permissionable proof of stake consensus engine on the market.

## eris:runtime:workers

In addition to needing fully verifiable computation, many applications which are automating business processes at a network level need to perform what is, fundamentally:

```irc
repeatable computation over unverifiable data
```

In other words, this component of an application needs to be able to do "repeatable computation". What am I talking about here? One easy example is a process that every hour makes an API call to a price feed, signs it, and send it to a chain, but there are tons of computation that need to happen in response to various events (which may be clock based events, triggers from the transactional engine, or triggers from the verifiable computation component).

Although I don't like the term, due to its overuse, workers are meant to provide an easy `oracle` framework to application makers. They are repeatable, but effectively subjective scripts which are needed to do things for your application.

The scripts ran in this portion of the runtime are unverifiable computation because they are not highly deterministic. To that end, they are not, as we would define them, smart contracts, but they are repeatable computation. Meaning that others can also do whatever it is that is to be done (if they have access to the scripts necessary, which may or may not be gated depending on what the application designers needed). Only, in the context of `eris:runtime:workers`, the computation that needs to be done would then be signed by a different key (depending on the node and application design) before sending the information back to the chain.

With the `eris:runtime:workers` node-based framework these computations will be quite easy. This component is scheduled to be released in our 1.0.0 release.

## eris:runtime:gateway

`eris:db` currently has two RPC ports. One of which talks to our low level, go-based tooling, and the other talks to our javascript tooling. These two RPCs actually are built to operate differently, but there is some overlap. The current code which is most of `eris:db`'s repository will be reconciled into a component we call `eris:runtime:gateway`. It will provide coherent, managed routing of messages amongst the various other components of the runtime while also acting as a simple way to bring reliency and coherence to clients which need to interface with the application.

By maintaining a gateway which is gauranteed to interface cleanly with eris built client libraries, we can, for example, allow application designers to switch their consensus engine or verifiable computation components over time with minimal impact. Of course, it's all open source so application builder's aren't locked into anything.

This component is scheduled to be released during our 0.12.x release series.

## Upgrading to eris:runtime

The fundamental components of the `eris:runtime` already exist in `eris:db` in either the repo itself or in its vendored dependencies, so the upgrade path for current users of `eris chains` should be (mostly) seamless. Although, this is pre 1.0 software so we cannot promise that there will not be any breaking changes, we will have upgrade functionality for `eris chains` baked into `eris` in our 0.12.0 release when the most invasive change (breaking apart the "application" and "consensus" components and connecting them over the tendermint socket protocol: TMSP) happens. This upgrade functionality will provide capability to save and import your state as you upgrade a smart contract network.

The remainder of the changes we will be making should be mostly transparent to users. As always, this is open source. Please feel free to pitch in!

# Eris: Tooling That Matters

In a world of a plurality of chains and smart contract networks and applications, more tooling is required for builders than simply application management tooling.

You still need tooling capable of handling smart contract bundles if you're going to be working with smart contract systems. Since we started this journey, [now more than two years ago](http://coda.caseykuhlman.com/entries/2014/introducing-ethereum-package-manager.html), our interest in legal engineering has forced us to build tooling to handle large systems of smart contracts, or **Verifiable Computation Tooling**.

{{ page.date | date: "%Y" | append:'/wtf-eris-pkgs.png' | img }}

You also need tooling which has been built from the ground up to provide your developers and users with chain lifecycle management tooling.

{{ page.date | date: "%Y" | append:'/wtf-eris-chains.png' | img }}

We have a range of tooling that still needs to be built, but in combination with other ecosystems, the range of tools available to application makers is increasing by the day. Which, to be clear, is a wonderful thing. If you are a tool builder looking to interface with the growing eris ecosystem give us a shout on Twitter!

# Eris: Build and Run Networked-Based Business Process Automation Applications

The other side of `eris` is our legal engineering side. That bit [we don't give away](https://erisindustries.com/products/). Oh, and to be clear, you don't have to use our legal engineering talent [to achieve your goals](https://docs.erisindustries.com/tutorials/solidity/).

# Eris: The Bottom Line

Move faster. Move *with* the flow of distributed computing. #profit


