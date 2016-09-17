---
author: casey
categories:
- blockchains
comments: true
date: 2015-08-25T00:00:00Z
excerpt: Casey describes his four tenets of distributed application building which
  underly the recent redesign of the eris stack.
meta: true
published: true
tags:
- dapps
- p2p
- blockchains
thumbnail: ecosystems.jpg
title: An Ecosystems Approach to Blockchaining
url: /2015/08/25/on-blockchain-ecosystems/
---

[{{ page.date | date: "%Y" | append:'/ecosystems.jpg' | img }}](https://www.flickr.com/photos/pierrepocs/5480153734/)

## Preface

One of the reasons I knew that Anthemis would be a good institutional partner for building Eris is they believe deeply in the idea that business is best when it is conducted using an ecosystems approach. After many, many years working with small businesses, diaspora groups, small business investors, and regulators in Somaliland, I had come to appreciate what this means, because this is how business in Africa works. And indeed, it is how business just *should* work in my opinion.

Relatedly, the other day, I was talking to an acquaintance about something and I said that I don't like the tendency I see within the blockchain community to have labels as reductive as "competitor" v. "collaborator". I get of course that the verbs are applicable to any one interaction amongst folks within the ecosystem, but to reduce the complex relationships necessary to be developed if this technology is going to become more widely accepted ([a goal we've always been explicitly trying to achieve](https://twitter.com/compleatang/status/635568543501840384)) into this binary question is unhelpful in the opinion of this correspondent. The reality is that talent is too slim, the technology is too new, and a few other relavant reasons for any single actor in the blockchain community to fracture relationships between potential allies without a cost both to the single actor as well as the ecosystem.

That said, the rest of this post is gonna talk about tech.

# Tenet 1 of an Ecosystems Approach to Blockchaining

## Modularize all the Things (but mostly the runtimes)

The promise that smart contract backed systems have is they have deterministic runtimes. There's a lot of interesting things this can do. Particularly when you start thinking about how to better the various "engines" on which your business's process and data management solutions rely.

The promise that docker backed systems have is they have deterministic runtimes. There's a lot of interesting things this can do. Particularly when you start thinking about how to better the infrastructure on which your business's data and process management solutions rely.

The reason we have built `eris` the way that we have is to support organizations who are interested in a variety of distributed technology tools. Not only those of the blockchains world, but also those from the "cloudy" world. Because these two groups have a lot to learn from each other.

No matter whether your application needs smart contracts or just docker based services, it needs modular, reliable runtimes. To see more about what I mean see our [getting started documentation](https://docs.erisindustries.com).

# Tenet 2 of an Ecosystems Approach to Blockchaining

## Configs Are a Challenge, but a Doable Challenge

When running a distributed application, one needs an ability to give the runtimes a configuration when they "boot". This configuration includes things like, "who am i?", "where am i?", "who am i supposed to talk to?", "what private key am i supposed to sign these ssl requests with", etc.

The way that docker images are generally created gives us an ability to boot up runtimes which answer all of those questions on behalf of users of the eris tooling. That could be an eth chain booting up to talk to the mainnet or to talk to a private net, that could be ipfs doing its thing, that could be a bitcoin node ([or a bitcoinXT if you prefer](https://twitter.com/eris_ltd/status/632853195673497600)), whatever you, your developers, and your users would need to "get the things turned on" you should be able to do with Eris (given the docker containers were built correctly).

Wanna share your private config? Encrypt the file to a keybase contact's public key (or oneName, or however you share pgp keys) and:

```
eris files put ENCRYPTED_CONFIG.toml.asc
```

That'll give you a hash, send it to them over slack (or IRC) and the collaborator does

```
eris services import thing_to_boot HASH
```

We are also working on a solution we call `etcb` (like CoreOS's `etcd` but `b` ... because its on a blockchain) which will enable better group sharing of configuration files.

We don't really "boot" smart contracts themselves and so they do not really need a configuration so to say. But we have built [`eris actions`](https://docs.erisindustries.com/documentation/eris-cli/latest/eris_actions/) which allows for a prebuilding of complex transaction sequences which would be needed to interact with and test various smart contract suites.

# Tenet 3 of an Ecosystems Approach to Blockchaining

## The Pipes Matter

For distributed applications to operate correctly, all the things have to know how to talk to the things they're supposed to talk to. This is a non-trivial challenge when you are trying to build applications which will run the same on laptops, cloud instances, and corporate environments.

Luckily using modern cloud computing techniques provided by Docker, piping things together with Eris is ultra simple. When you build a service definition file, simply add:

```toml
[services]
dependencies = [ "thing_i_want_on_and_to_talk_to" ]
```

then in the code, or in the configuration or wherever the bit is that tells the thing who to talk to you just add:

```
"http://thing_i_want_on_and_to_talk_to"
```

Because of the way that docker cleverly manipulates /etc/hosts it makes it very easy when the service which wanted the thing on and to talk to gets booted it will be able to rely that the other thing is on and is ready to be talked.

# Tenet 4 of an Ecosystems Approach to Blockchaining

## What Blockchain the contracts run on is an Ops Consideration

The bottom line is that the EVM is the best design (so far) for a distributed logic gateway processor. See etherparty, eris, ethereum, tendermint, (at a minimum). The only difference between these being the consensus layer on which the world state of the network resides.

This is exciting for smart contract developers, because they shouldn't have to give a shit what the world state harmonization layer for the production application is. All they should be caring about is whether the suite of contracts works and testing those against throwaway chains. Over time, as that smart contract developer is ready to open up to more collaboration he may set up a permissioned smart contract network to control development and access to alpha and beta level subscribers and eventually he may go directly to the eth chain (cause not doing proper prototyping is a bad idea).

Or not.

Perhaps that developer finds themself in a corporate context. Perhaps they will start with some throwaway chains to test their contracts and then that will go into a tightly controlled permissioned network that bank level security built around it.

Or not.

Perhaps that developer is that guy who just flings crappy contracts onto the eth main chain, posts on reddit, and realizes they had a fatal flaw in their contract.

But either way, the eventual chain on which the production application is running is an operational consideration, not a developer concern. This is exciting because it lowers the barrier to entry and enables specialization within the blockchain and smart contract network community.

## Postscript

It is these four tenets which we think will enable to a vibrant ecosystem which will separate out the power structures between those at the infrastructure layer (a blockchain/smart contract network protocol, or a distributed file system, etc.) and those at the platform layer (the things that run the things you wanna run) and those at the application layer to allow collaboration where necessary and competition where necessary.

Happy Contract Writing!
