---
author: ethan
categories:
- blockchains
comments: true
date: 2014-12-17T00:00:00Z
deprecated: true
excerpt: In all modern blockchains, the rules of the protocol are defined in the client
  source code, which is then used to manipulate a database. But in Thelonious, the
  rules of the protocol are defined in the genesis block, in a special contract called
  GenDoug, which is, if you will, the kernel of our distributed operating system.
  The end goal of our Thelonious project is a blockchain client which is purely a
  p2p network library and a virtual machine.
meta: true
published: true
tags:
- thelonious
- blockchains
title: Why We Built Thelonious
url: /2014/12/17/why-thelonious/
---

Thelonious began as a fork of the [go-ethereum](https://github.com/ethereum/go-ethereum) client that seeks to be the dragon eating its own tail. That is, the intention of Thelonious is to move the protocol level logic of a blockchain into the blockchain's virtual machine itself. In all modern blockchains, the rules of the protocol are defined in the client source code, which is then used to manipulate a database. But in Thelonious, the rules of the protocol are defined in the genesis block, in a special contract called GenDoug, which is, if you will, the kernel of our distributed operating system. The end goal of our Thelonious project is a blockchain client which is **purely a p2p network library and a virtual machine**.

There are a number of reasons we might want to do this.

First and foremost, we take such a blockchain client for granted whenever we think about the crypto-currency ecosystem, in particular in working on next generation proof of stake systems and multichain interactions with [Sir Vlad Zamfir](https://twitter.com/VladZamfir).

Second, while the ethereum project is building outstanding technology and working hard to produce a single, public facing, rigorously tested and Bitcoin scale blockchain, with a native crypto-economic token and a significant market cap, we want the freedom to experiment with that technology in a multitude of other possible ways, economic or otherwise, to explore the broader potential of authenticated and distributed virtual machine technology in society. So we hope to provide a maximum in flexibility and customization.

Third, we are moving towards a multichain, multiprotocol ecosystem, an **internet of chains**, if you will, and we are hopeful that developers will start thinking with us about serious multichain technology. An important part of that will be subjective computations, or client side logic that is not replicated across the network but which informs the client's behaviour. We'd like to be able to experiment with and learn to manage that logic, and to better understand the landscape of crypto-economic and crypto-utilitarian systems as they continue to evolve.

Thus, we seek to write the rules of the blockchain in the same language that we write smart contracts, and to progressively move the totality of the logic into a scripted virtual machine.

Enjoy!