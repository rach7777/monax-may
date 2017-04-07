---
author: casey
categories:
- announcements
comments: false
date: 2017-03-01T00:00:00Z
meta: true
published: true
tags:
- announcements
- consortium
- ethereum
thumbnail: eea.jpg
excerpt: "Monax announces it has joined the new standards formation body known as the Enterprise Ethereum Alliance to help move smart contract machines forward."
title: "Why we're joining the Enterprise Ethereum Alliance"
---

[{{< image_blog "eea.jpg" >}}](https://www.flickr.com/photos/aid_precious_ones/269003324/)

Earlier this week we formally announced that we will be joining the [Enterprise Ethereum Alliance](http://entethalliance.org/).

## Introduction

The Enterprise Ethereum Alliance is an industry group formulated around the idea of being the "common knowledge pipe" between the [ethereum virtual machine](/explainers/smart_contracts) using [community and large companies](/explainers/permissioned_blockchains). In the words of the alliance's initial marketing push:

> We connect Fortune 500's, startups, academics & tech vendors with Ethereum experts to define enterprise-grade blockchain software.

The key word in this short description, which matches what we understand to be the purposes of the consortium, is `define`. While it is very early days for this new consortium we are very happy to participate in standards bodies -- especially those which are so closely aligned with our strategic goals of increasing production use of [ecosystem applications](/explainers/ecosystem_applications) in enterprises.

## Why

In any technology standards and specifications are extremely important. Previous generations of software have clearly demonstrated the costs of not establishing standards and specification driven platforms and infrastructure. Vendors need to understand what their customers are looking for, competing vendors often need to work together to lower switching costs for customers. Or, as I've said elsewhere...

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">A collaborative approach to collaborative software. The only way forward. <a href="https://t.co/eGNEZqGcsW">https://t.co/eGNEZqGcsW</a></p>&mdash; Casey Kuhlman (@compleatang) <a href="https://twitter.com/compleatang/status/835873349561630721">February 26, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

This observation leads directly to the desire for us as a company to build collaboration into the DNA of our culture. Joining and actively participating in standards setting organizations is a huge part of that for us.

### Reason Number 1: Defining "Ethereum" Needs to Happen

Ask ten different blockchainers what "ethereum" is and you're guaranteed to get ten different answers. Ask ten different enterprise blockchainers what "ethereum" is and you'll likely get a `¯\_(ツ)_/¯`. Part of the confusion is that the way that ethereum markets its public chain may be wonderfully resonant to the public chain community, but is frankly completely confusing to (at least our) enterprise users.

Is "ethereum" a singular public blockchain network? Is it an implementation specification for that public blockchain network (namely, the [Yellow Paper](http://gavwood.com/paper.pdf))? Is it a codebase or repository which implements the above specification? Is it a virtual machine? Or is it simply an ambiguous set of ideas for how to implement a deterministic computational network? Frankly, we are unable to answer that question sufficiently and we are hopeful that one of the outputs of the Enterprise Ethereum Alliance will be much more precision with respect to these questions.

In our view, guiding a more cohesive messaging strategy for "ethereum" as it is referred to by the dozens (hundreds?) of companies large and small which are using the EVM in a permissioned chain network setting is massively important. One of the biggest attractions for us in joining the Enterprise Ethereum Alliance is to bring our over two years of experience in explaining what ethereum in permissioned chains means to this collective.

### Reason Number 2: Let's Get Real; the EVM Needs to Improve

We have been long users of the ethereum virtual machine. The founders of Monax (previously Eris) were building on the EVM since early 2014. And the EVM is a barely adequate piece of kit. While the EVM may be sufficient for the ethereum public chain, it is insufficient for currently enterprise uses (much less for future contemplated uses). The EVM is starting to be strained. Performance needs to improve. Coherence needs to improve. And frankly, there needs to be a long discussion whether the EVM needs to continue being a "thing".

The ethereum smart contracting community is (relatively) large, but that community doesn't *really* build for the EVM. It basically builds for Solidity or another EVM compatible smart contract language. This requires another conversation, which is that if the EVM is going to be insufficient in the future and we all agree it needs to improve, **how** will in improve.

It is our firm view that the venue for having these discussions should be formalized, participatory, and standards driven. While the Yellow Paper is a good piece of kit, it is our view that it is insufficient as a technical specification which various implementations of a protocol rely upon (also, it is a specification which fundamentally assumes a public chain rather than the purpose of Enterprise Ethereum Alliance -- [permissioned blockchains](/explainers/permissioned_blockchains)).

We hope to actively participate and bring our plurality of lessons learned in building enterprise grade smart contract systems to the Enterprise Ethereum Alliance as it embarks upon this journey.

### Reason Number 3: Explicit Adoption of Component Driven Standards Helps Modularity

One of the key aspects to participating in the "ethereum community" up to now is that there was no explicit way to have a voice in the development effort which did not involve working for the ethereum foundation. Sure Monax could take to twitter or reddit; sure we could develop and submit code. But that is not participating. That's throwing code over the fence or talking into the abyss.

The reality is that for better or worse, the Ethereum Foundation has (mostly) driven the development of the ethereum public chain clients. And the development of the ethereum pubic chain clients has driven enterprise users' ideas about ethereum in enterprise. Yet the reality is that design decisions which impact the ethereum public chain may or may not be a good idea in permissioned chain uses of the EVM.

For Ethereum's technology to gain the mainstream adoption in the enterprise space and be explicitly graded as "production ready" (yes, yes, I realize that there is the public chain; the reality is that `that != enterprise production ready`), the furtherance of the technology needs to have a formalized voice and participation mechanism to develop standards around various components within the overall enterprise stack.

Based upon our history of working on enterprise grade smart contract systems we will be actively advocating for a component-driven approach to the standards development effort. This will help the various companies seeking to bring modularity to previously monolithic blockchain stacks and will also increase the precision in which the community seeks to build standards.

## How

While it is unclear what exactly the Enterprise Ethereum Alliance will "produce" at this point, we are of the opinion that a standards body for use of advanced smart contract systems in enterprise is a great idea to participate in. Such a body should, in our view, seek to set standards and let implementers build to those standards. As such Monax joining the Enterprise Ethereum Alliance means little in the short run for our users.

### The EEA v. Hyperledger?

Yesterday we announced that we will be [joining Hyperledger and submitting our `burrow` codebase for incubation](/blog/2017/02/28/why-were-joining-hyperledger/). Today we're announcing (formally) that we're joining this alliance. Are these competitive?

Not in our view. As discussed throughout this post, we view the Enterprise Ethereum Alliance as a standards body and we view Hyperledger as a natural home for housing the implementation of those standards. This not only allows for a plurality of views to be formulated according to the various governance rules set up by those consortia, but also it enables a resilient ability for enterprise users of smart contracting technology to participate in either the standards or (a single) implementation of those standards in a manner which is suitable for them. In other words, at this point in time more options is likely better.

## Conclusions

Are you a company that is interested in moving forward and maturing the enterprise smart contracts space? We'd welcome you to join the Enterprise Ethereum Alliance and help us build the standards for excellence that this new and interesting technology enables!

[(Photo credit: CC-BY-ND: Yuki Yaginuma @ Flickr )](https://www.flickr.com/photos/aid_precious_ones/)
