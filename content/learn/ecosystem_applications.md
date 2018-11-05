---

layout: single
title:      "Ecosystem Applications"
excerpt:    "What are Ecosystem Applications and will these impact how we think of building software?"
# thumbnail: example-image.jpg
categories:
  - learn
tags:
explainer_category: workflows
# Set the explainer_category to 'workflows', 'templates' or 'contracts'

---

```
Applications that run on an ecosystem (or, network) level
```

## Introduction

As our organizations move into the information age the low hanging fruit for process automation is to move the applications providing that automation away from being single participant operated and toward being operated by a network, or ecosystem of participants. Ecosystem applications seek to automate processes at the value chain level thereby providing a framework on which to build complicated and connected networks that seek to reduce costs and open new opportunities for value creation.

## The Information Age Transformation

As we continue the march from the industrial age to the information age the tectonic plates of globally-focused businesses, digital nomads, and information abundance have combined to massively transform a range of industries already and are hardly finished. One of the most important changes is in **how organizations manage data and processes**.

These changes originally powered the first generation of collective process management tooling which was focused on providing the base business process automation for a given **enterprise**. This generation of tooling, led by companies like SAP, Oracle, and others, effectively leveraged economies of scale over data and data processing power which on-premise data centers could provide. This generation of software emphasized the enterprise as the center of the universe.

These same changes later powered the second generation of collective process management tooling which is focused on extending the benefits of software defined process automation into **smaller businesses**. This generation of tooling, led by companies like SalesForce, Xero, Github, and others, effectively leveraged economies of scale over data and data processing power which IaaS systems could provide (until they eventually needed their own data center). This generation of software emphasized the "App" (or, latterly, the "Platform") as the center of part of the universe.

In our view we are entering into the third generation of collective process management tooling which will focus on extending the benefits of software defined **relationships** for businesses of many different sizes. This generation of tooling, which will be led by the companies we currently label "blockchain" and "smart contract" companies, will leverage the economies of redundancy over data and data processing power which networks of peers can provide. This generation of software will emphasize the "Ecosystem" as the center of part of the universe.

| **Generation** | **Process Automation** | **Overview** | **Winning Companies** |
|----------------|------------------------|--------------|-----------------------|
| 1st Generation | Enterprise Focus       | Leverage economies of scale for data centers to synchronize paper-based internal processes of large companies | SAP, Oracle, etc. |
| 2nd Generation | SME Focus              | Leverage economies of scale of cloud providers to synchronize paper-based internal processes for smaller companies | SalesForce, Xero, Github, etc. |
| 3rd Generation | B2B Relationships      | Leverage blockchains and smart contracts to build harmonized applications that operate on an ecosystem level | Winners being made now |

### The Big Problems Previous Technologies Haven't Effectively Solved

In order to move forward with the next generation of collective process management tooling, we need to understand `what are the big challenges` which businesses face.

One of the biggest changes is in the likely reduction in competitive economies of scale for producers of goods. Increasing equalization of labor and resources costs in a truly globalized economy are very likely to create a context where one of the great cost differentiators for the production and distribution of physical products is transportation. This is, in turn, likely to require many supply chains to move toward more connected producers hooked into a range of distribution networks from local to global in scope.

As 3D printing, makers shops, and manufacturing automation continues to equalize the ability of more connected producers to competitively build physical products and as technology such as automated air and ground transportation along with increased shipping efficiency continues to equalize the ability of more connected producers to competitively distribute physical products, it is highly likely that more connected producers will gain in relative power to larger producers for many types of goods in the future.

These vectors align in the direction that connected is *hot* and isolated is *not*. The problem is that connected has been hard to scale. By way of a simple example, a small business in some portion of the world can always list their products on the internet. By doing so they have an ability to find customers, prepare shippings, and deliver to a global customer base. This is elegant. Yet it is not totally realistic for the vast majority of small businesses.

Thus the theory behind EBay, Amazon, and Etsy's successes -- they act as the front office of a global customer base and the small business just needs to act as the back office (and also make good products). But Amazon, et al., do more than act as the front office. They also run "the platform" on which these small businesses can sell their goods. These "platforms" will list products, process transactions, provide customer servicing add-ons, or whatever suits the business of *the platform*.

So if we are truly in a globalized world where connected matters more than isolated, how do the connected effectively scale without *having* to rely on "the platform"? What if they want to run "the platform" themselves by banding together? As an ecosystem. How can they build applications that run on an ecosystem level, or, as we call them `ecosystem applications`?

## Ecosystem Application Toolkit

The toolkit for ecosystem application builders includes many of the peer-to-peer technologies developed since the 1990's and some that have been more recently developed.

| **Tool** | **Problem It Solves** | **Nerdy Term** |
|----------|-------------|----------------|
| blockchains | `who did what when` | attributable data |
| smart contracts | `computation that happens in an agreed manner` | deterministic computation |
| data lakes | `what content are we talking about` | content addressable storage |
| point-to-point messaging | `come over here I want to tell you a secret` | shared secrets |

### Blockchains

The problem that [blockchain technology](/learn/blockchains) solves is not electronic P2P cash, nor is it settlement latency, it is the problem of `attribution and ordering of inbound events; at an ecosystem level`.

When we send someone a bitcoin, what are we "really" doing? Well, we're signing a message which says that "I, keyholder of key X, am transferring title over *this* 'object' (in the example's case, a bitcoin) to the keyholder of key Y." Our signed message then is broadcast across the network. The network in turn analyzes this message to determine if the message has been properly signed, if the "sender" does indeed have title over 'object', and if it has the network transfers title over the "object" in question to the keyholder of key Y.

Of course, in bitcoin's case, there is a censorship-resistant, permissionless network behind all of it, but that is not the interesting bit. The interesting bit is that the network, without relying on passwords or logins, is able to effectively attribute actions. Blockchains are forced to do this because passwords and logins cannot safely be "held" at a network level. In traditional software architecture, they can be safely "held" by an application that is designed to run under the control of a single entity. Yet, if we take away the assumption that there will be a single arbiter of the password then we need to utilize a different system for attribution.

This technology, in combination with the ordering and timestamping functionalities that validators provide, solves the first problem ecosystem applications have: **the problem of who did what when**.

When blockchains are analyzed under this paradigm, their [BFT](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance) consensus algorithms (implemented in a variety of ways) and their [PKI](https://en.wikipedia.org/wiki/Public_key_infrastructure) provide a nice abstraction for application makers to begin building applications that run on an ecosystem level and need to know, well, `who did what when` in a reliable, resilient manner.

What's the key difference in how blockchains and more simple fault-tolerant databases (such as [rethink](https://www.rethinkdb.com/), [riak](https://github.com/basho/riak) or [etcd](https://github.com/coreos/etcd)) which are also able to solve the problem of `who did what when`? The difference is an assumption about the network configuration. These fault-tolerant database technologies assume that the network is controlled by a single entity. Raft, the consensus engine used by these databases, is what's known as `fault tolerant` -- or `FT` -- rather than `byzantine fault tolerant` -- or `BFT`. The difference between `FT` and `BFT` is important. The primary difference is a diffusion of power over who is the final arbiter of `who did what when`.

`BFT` databases do not assume that there is a single entity controlling `who did what when`. While it is true that modern, fast, blockchain technology is **much** closer to rethink, riak, or etcd in how they approach a number of underlying technical problems than they are to [bitcoind](https://bitcoin.org), even the newer, faster chains do not relax the assumption that the data is going to be held **across** entities rather than **within** entities.

This is exactly why they are one important tool for opening up a range of new applications -- applications that run cohesively at an ecosystem level.

Learn more about [blockchain technology](/learn/blockchains).

The *attribution* problem that blockchains solve is insufficient, alone, to actually be able to build coherent applications that run on an ecosystem level beyond very simple applications; such as moving electronic cash from one person to another.

### Smart Contracts

The next problem that needs to be solved is **deterministic computation**. This is the problem that the "thing" the community currently calls [smart contracts](/learn/smart_contracts) solves. The problem that smart contract technology solves is not escrowing funds, it is the problem of `is computation happening in an agreed manner`.

What do we mean by deterministic computation? We mean that all participants in the ecosystem need to be able to compute something and achieve the same result.

This sounds rather easy at first blush, doesn't it? Isn't that what computers are supposed to do? It is indeed, for the most part, what computers do. However, computers are designed to perform computation, not deterministic computation. Let's look at the two major sources of non-determinism in an effort to understand why we need to control them in order to avail ourselves of a method to build ecosystem applications.

The first major source of non-determinism is randomness. Every programming language has a way to "make" a random number so that one can perform operations on it. Programmers use these random numbers to accomplish a variety of programming tasks. And yet, if one were to allow randomness within a strongly deterministic system of computation, all the members of the ecosystem who were running the application would "make" a different random number as the basis for the computation task. This means they would then have a different outcome for the entire computational sequence which depended on the random number. When one is trying to ensure that computation achieves exactly the same result across the ecosystem that is a bug, not a feature.

The second major source of non-determinism is time. Every programming language also has a sense of time. This allows programmers to do stuff like get `timeNow()` and add a few days to create a filter of upcoming events. This is all well and good, but it is unlikely that the members of the ecosystem will have their computer clocks so finely tuned that they are **exactly** the same -- down to the millisecond. One of the features that we design for when thinking about ecosystem applications, is that they can and should be verifiable by later in time participants. For example, if the ecosystem is in a highly regulated industry, then auditors for the various participants in the ecosystem may need to perform an audit on the year's activities. The `timeNow()` at the end of the year will very much *not equal* the `timeNow()` when the computation was originally performed. This will result in auditors getting a different result.

If we can take these sources of non-determinism out of the computation layer, then we can build systems where multiple actors in an ecosystem can, in real time or later in time, verify and notarize that a computation has happened in an agreed manner. But in order to "verify and notarize" a computational sequence, we must have `deterministic computation`.

The other problem that smart contract technology solves, is a distribution problem. In order for ecosystem participants to perform the computation, they need to **have** the computational sequence. In "normal" computing we solve this by either: (a) installing applications on a given device; or (b) all connecting to the same cluster of devices where an application has been installed and is running.

But with ecosystem applications, we typically solve this in a different way. We often, but not always, put the application's logic "on" the blockchain. We use the high evidentiary characteristics blockchain tech gives us, (or, as we say, `who did what when`) along with a smart contracts interpreter (often called, a VM (for virtual machine)) to not have to worry about downloading and installing these computational sequences. We simply connect in to the ecosystem's network and go!

Learn more about [smart contract technology](/learn/smart_contracts).

While blockchains (providing us `who did what when`) and smart contracts (providing us `deterministic computation`) are two tools that give ecosystem application builders two main capabilities necessary for building ecosystem applications, we still have a few more base requirements to really enable this technology to flourish. Namely we need to solve `content` and `privacy`.

### Data Lakes

In applications that are built on traditional architecture we can have content which resides on a single device or a cluster of devices that is under the control of a single entity. If that entity decides, for whatever reason, to stop servicing an application or stop serving particular content, it can so decide unilaterally. However, when we are building applications meant to exist outside the control of a single participant within the ecosystem, we cannot make such an assumption. This is where the IPFS project's thoughts about the [permanent web](https://ipfs.io/) are so crucial.

How we will deliver and store content within our ecosystem application is only one portion of the content problem. The other is how we "relate" to it. In other words, how do we know that "this is 'it'" whatever "it" may be. In computational terms this is solved by **content addressable storage** and it is the one of the key components for how to think about designing ecosystem applications. No matter how we deliver and store content, we need to be addressing the content with precision.

Content addressable storage gives us, in general, assurances that "this is 'it'". In traditional architecture when we are retrieving files from a remote server (to download an app, or to load a web page), there is always a risk that either the remote server was hacked in some way, or the file was "swapped" while it was on the wire between the remote server and your device. Depending on whether we trust the pipes and/or whether we trust the remote servers' credentials (that it is, e.g., Apple, Inc. is the company behind apple.com) we may need to take further actions to ensure that what was downloaded is "it". While proper use of `SSL` alone solves many of these problems it doesn't solve them all.

Although SSL is a well worn system, if we want to be very careful that "this is 'it'" what we do is after we download a file from the internet we take its hash (which can be thought of as the "fingerprint" of a file) and compare that hash to one that has been provided by the publisher. This allows us to (if we trust the publisher) ensure that what we downloaded is what the publisher produced. When dealing with content addressable storage, which is local to your device, you can have assurances that the file was not "swapped" and that the file is pointing at what the network would like one to point at, because in most content addressable systems we reference data by its hash.

### Point-to-Point Messaging

The final, major, challenge is around privacy. There are two types of privacy which are necessary to examine. The first one is a `me only` type of privacy. This means that there need to be things which are known only to me. We typically define these as secrets. Secrets are things like one's private keys, or logins, or other information which should be available only to you. Those things are necessary for ecosystem applications. Within the Bitcoin world, wallet software provides a very valid `me only privacy` function. There are a range of possible options for how to build generic ecosystem applications while also enabling `me only privacy`. However, mostly ecosystem applications only need to "interface" with the generics so these will not be covered in great detail here.

The second type of privacy is a `come over here I want to tell you a secret` type of privacy. Because within ecosystems, we don't necessarily assume that all participants `need/want/have_a_right` to have all the information about all the things. This is where point-to-point messaging systems and an authenticated public key infrastructure (a PKI) with a given identity mechanism comes into play. Private message queues give us the `come over here ... a secret` part of the whole problem. An authenticated PKI solves the `**I** want to tell **you**` part of the whole problem. Point-to-point messaging gives us the final piece of what, at least theoretically, is a complete look at the major components necessary to build most ecosystem applications.
