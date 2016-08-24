---
author: casey
categories:
- products
comments: false
date: 2014-12-17T00:00:00Z
excerpt: 'I’m incredibly pleased to announce that Eris Industries will release its
  first products to the world. After months of challenging work, I am incredibly proud
  of what our team has accomplished. This post contains a brief overview of the two
  main products which we are releasing today. '
meta: true
published: true
tags:
- eris
- thelonious
- decerver
title: Eris Industries -- What Are We Building?
url: /2014/12/17/eris-what-are-we-building/
---

I'm incredibly pleased to announce that Eris Industries will release its first products to the world. After months of challenging work, I am incredibly proud of what our team has accomplished. This post contains a brief overview of the two main products which we are releasing today. Also in this series of blog posts, please see Preston's overview of why this is [interesting and important for larger organizations](https://blog.erisindustries.com/products/2014/12/17/eris-the-corporate-view/).

## Introduction

Our goal at Eris Industries is to empower developers to embrace participatory software architecture via distributed computing and smart contract systems. Participatory architecture is a software design paradigm whereby the users of an application take part in some aspects of the data management and security of the platform and in return gain increased ownership and responsibility over their own data. Toward this end we have made a good start in our efforts to increase the range of the possible by releasing a range of products which we hope will be appealing to many developers.

## The Decerver

[The Decerver](https://erisindustries.com/components/erisdb) is, to my understanding, the very first application server purpose built for distributed applications. Distributed Applications are applications which utilize a range of peer-to-peer technologies to provide a cohesive, interactive application to its users. In other words distributed applications probably are designed utilizing the participatory architecture paradigm. The Decerver (we pronounce it: dee-server) significantly simplifies a developer's ability to design, build, test, and deploy distributed applications.

Out of the box the Decerver is able to interact with a Bitcoin module (either a full module or via blockchain.info's API), an Ethereum module (which is still exploratory given that Ethereum is not currently released), a Thelonious module (more on this below), and an IPFS module (which is a distributed file store).

Interaction with each of these modules happens in a layer of the Decerver which we call [Atë](https://en.wikipedia.org/wiki/At%C3%AB) after the Greek goddess of mischief, delusion, ruin, and folly. Atë is a javascript virtual machine which runs inside of the Decerver's process. Although the Decerver is written in [Go](https://golang.org/), thanks to the [Otto library](https://github.com/robertkrimen/otto) for Go we are able to provide a harmonized, interactive interface for distributed applications which can be written nearly completely in javascript.

The Decerver works best when distributed applications are designed around the idea of data-driven interactions. These interactions work best when they are scripted in javascript files that run in the Atë later and from there interact with all of the modules who expose established functions to the Atë layer via the decerver's interfaces. For more information about the Decerver please see the dedicated [site](https://erisindustries.com/components/erisdb) or go directly to the code (deprectated)

## Thelonious

[Thelonious](https://erisindustries.com/components/erisdb) is, to my understanding, the very first smart contract controlled, smart contract enabled blockchain design. The Thelonious client we have built is a heavily modified version of [Jeffrey Wilcke's](https://github.com/obscuren) [Go client](https://github.com/ethereum/go-ethereum) for the [Ethereum protocol](https://ethereum.org).

Thelonious and Ethereum are not really competitors of one another as they are purposely built with very different design goals. To understand Ethereum's design goals please do see their documentation. With Thelonious, however, we wanted to build a blockchain client which could handle any number of chains (albeit, currently, only one at a time). Not only can Thelonious read, manage, and interact with multiple chains, the chains themselves have perhaps the most sophisticated genesis block currently deployed in a blockchain design. To be clear, Thelonious is not *a* blockchain, it is not *the* blockchain, it is a *blockchain design* which has been purposely designed to be millions of individual blockchains rather than one blockchain.

A Thelonious blockchain is a self-contained unit. What this means is that the chain defines its own consensus and security parameters via definitions which are placed into the smart contract controlled genesis block. When booting onto a chain, the Thelonious client is able to understand the parameters defined in the smart contract (which we call GenDOUG, for genesis doug) which is hashed into the genesis block and when interacting with that chain is capable of understanding the consensus mechanics for that specific chain. Technically what we have done is moved the consensus module of the blockchain client into the distributed virtual machine that is tied to the blockchain originally based on the elegant work by the Ethereum folks. This allows distributed application developers to pull the consensus algorithm that makes sense for their application off of github, or to design their own consensus algorithm.

Making the blockchain be controlled by smart contracts opens up some interesting possibilities for distributed application developers. For one, it harmonizes the development of the distributed application with deployment of any single blockchain while simultaneously greatly simplifying the entire distributed application development pipeline. For more information about Thelonious please see the dedicated [site](https://erisindustries.com/components/erisdb) or go directly to the code (deprecated).

## Conclusion

Together these two products, along with the revamped [Eris Package Manager](https://erisindustries.com/components/epm) and revamped [Eris Legal Markdown](https://erisindustries.com/components/erislegal), are the first in a series of development tools which Eris Industries is releasing. We welcome your feedback and hope that our efforts will help your team in some way.
