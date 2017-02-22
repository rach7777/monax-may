---
author: casey
categories:
- announcements
comments: true
date: 2017-02-02T00:00:00Z
meta: true
published: true
tags:
- announcements
- consortium
- hyperledger
thumbnail: hyperledger.jpg
excerpt: "Monax announces it has joined Hyperledger and will be submitting its market-leading blockchain client, eris:db, for incubation."
title: "Why we're joining Hyperledger"
---

[{{< image_blog "hyperledger.jpg" >}}](https://www.flickr.com/photos/50576141@N03/15805560016/)

Yesterday we formally announced that we will be joining as a member of the Hyperledger project and that we will be submitting our eris:db blockchain client to the Hyperledger project for incubation. In this post I would like to add a bit more color as to our reasons for such a move.

# Introduction

When we started our company in 2014 we never really had the intention of being solely responsible for building an enterprise grade, general purpose smart contract network node. Indeed, our intention was always to participate in the furtherance of the technology and its adoption in enterprise so that we could leverage our USP in the [legal engineering](/explainers/legal_engineering) and [developer tools](/platform) domains.

This strategic choice, made early on, and continually reviewed at our Board and senior management team levels, has informed a plurality of tactical and operational decisions that we have made. And it is also behind our joining of Hyperledger.

At the formation of our company, there was very little light at the end of the tunnel in terms of building a scalable, product-driven business around legally compliant smart contracting systems utilized by major incumbents. The zeitgeist was all bitcoin all the time. So in order to move the market into a position where we had a colourable chance to build a business around the unique advantages our company possessed and was optimized around, we had to participate in a range of market making activities. We needed permissioned blockchains be a thing. That took up most of 2015. We needed smart contracts in enterprise to be a thing. That took up most of 2016. And, fnally, we need smart contract networks publicly in production at major enterprises. This is what will take up most of 2017. And to get there we are going to need some help.

# Why

The rest of this post will outline our three major reasons for submitting our market leading smart contract compatible, permissioned blockchain design to the Hyperledger project for incubation.

## Reason Number 1: Open Source without Participation is Just Showing Off

Effectively, what well built open source projects do is to reduce the operational load which any one company needs to sustain in order to develop a given piece of software. By openly developing in the open, other individual or employed contributors can bring their expertise to building the software to help exponentially grow and harden the codebase.

This doesn't always work as intended, though. Our `eris:db` codebase has been open sourced since 2014, but we have (for all intents and purposes) carried almost the entire load ourselves. We have maintained the code itself, it's documentation, built it's example applications, answered questions on various developer fora, implemented and manned our own support systems. And the results of that effort have been amazing. Over the course of 2015 we saw about a 50X increase in downloads of `eris:db` and in 2016 we saw a further 20X increase in downloads.

But what we have, admittedly, done a horrible job of is building community around our codebase. The number of outside contributors to our codebase is miniscule in comparison to the open source ideals. I could point out a variety of reasons why we have not put the effort behind building a community that it deserved -- the new-ness and complexity of the software we build limits the range of possible contributors, the administrative challenge of gaining enterprise contributors, along with our deemphasis from a messaging perspective of Monax as a "blockchain maker" -- are three primary reasons why the costs and benefits did not weigh in favor of resourcing and expending efforts to build a community around the code base. Until now.

Joining Hyperledger is a key ingredient from our perspective to work on gaining enterprise contributors because of the strong codebase governance frameworks emplaced, and the Linux Foundation's long history of understanding how to administer enterprise grade open source projects. Further, unlike with Monax the company (which, as noted above, we identify, fundamentally as a developer tools company combined with a legal engineering products team), people "go to Hyperledger" because they view it as a "blockchain maker". Put another way, if you were one of the relatively few developers on earth capable of positively contributing to an open source project where would you start, with the Linux Foundation hosted Hyperledger Project which has a range of large company members, or with a startup formed in London?

## Reason Number 2: Our Users Need More Expertise Than We Can Solely Provide

We have said it before, and we'll say it again, but 2017 in the enterprise blockchain applications is about the race to production. However, in order for production grade applications, we first need to have platforms that are capable of supporting production grade applications. And this requires a **lot** of expertise. Expertise which very few companies on earth wholly have in-house. Platforms need to have security vetting, fault tolerance vetting, QA | penetration testing, entrprise grade RPCs along with client libraries in a range of languages, they need long term network testing of a variety of scenarios, they need to be extremely well documented, they need a variety of example applications in the open as paradigms that developers can follow. And to put it bluntly, `eris:db` would fall very much behind other codebases if we tried to build all of this expertise alone.

Joining the Hyperledger project gives our team access to an unmatched range of enterprise building expertise via the extensive membership of the Hyperledger umbrella project. This expertise will be essential to the continued maturation of `eris:db` into a smart contract network that is capable of easily, safely, and reliably supporting enterprise grade ecosystem applications.

## Reason Number 3: Collaborating is in our DNA

Blockchains, smart contracts, and ecosystem applications are, fundamentally, frameworks to build collaborative applications which are operated by multiple parties. We have long taken the position that we should practice what we preach so to say, in that the software we produce should be built -- to the greatest extent possible -- collaboratively.

In the past twelve months we have taken a hard line stance on this with respect to our commercial engagements and we have not been directly involved in the building of a pilot or POC **unless it has been a collaborative delivery**. In other words, we have consistently partnered to deliver ecosystem application POCs and pilots, even when the end using customers have balked at our collaborative approach.

This decision was strategic rather than tactical. Namely, if we as Monax are going to get our software into production in enterprises then we need to prototype not only the technology itself, but **also how to build and deliver that software collaboratively**. Let us take a moment to unpack this, because it is fundamental to our approach to delivering high value software to our customers. A usual enterprise sales process for emergent technology follows a fairly predictable pattern.

* startup gets in touch with enterprise innovation team to pitch a POC
* enterprise innovation team gets budget and hypothesis to test in a POC
* startup builds & delivers POC
* POC succeeds | fails (`if (fails); stop; end`)
* innovation team introduces startup to business unit
* business unit gets budget for a pilot
* startup builds & delivers pilot
* business unit evaluates pilot
* business unit decides to move to production
* startup does final production hardening and `$$$$$` contract
* startup delivers production system & commenses with operations & maintenance engagement
* startup repeats with next customer

While that is all well and good, in blockchains and smart contracts world we have to more or less throw the second half of that equation out the window. Why? Well, fundamentally, this is collaborative software. An enterprise gains little by moving a system of its own into production [all by itself](LINK_TO_VID). This requires that technology providers in the blockchain and smart contract space understand how to overcome the prisoner's games that are fundamental to getting these systems into widescale production use. And to do that, we must leverage collaborative networks of service providers, technology providers, and customers. All of these networks need to be operational and working in collaboration to actually deliver working software in this context.

The old one-to-one approach dominated by account managers walking the halls of incumbent enterprises pitching the big delivery company's "new" thing, may still work for a lot of technology; but it isn't going to work for blockchains and smart contracts. For this tech, we need a new approach to delivery. And that requires collaboration. This is why we've been building a collaborative approach to software delivery into our very DNA as a company. Joining Hyperledger reinforces this at a very fundamental level.

# How

All the above may sound like crap or it may be interesting, but it doesn't really tell developers **how** this will all work. So I'd like to now speak to our longer term users and also our newer users.

## Monax is joining Hyperledger; eris:db is being submitted for incubation

There are two related things happening here. First, at a corporate level, our company will be joining the Hyperledger as a normal member of the consortium. This joining of the consortium affords us certain opportunities to collaborate with the other codebases administered by the consortium; to attend consortium meetings; etc. This action has nothing to do with code.

Second, `eris:db` will be submitted for incubation. The way that Hyperledger's code governance systems operate is as such. Any code base which is seeking to be incubated by the Hyperledger project, and to, more or less become, "Hyperledger code" must first be Apache licensed (more on this in a minute); then a proposal must be submitted to the Hyperledger Technical Steering Committee outlining the reasons why the code base should be incubated by the project. If the Committee approves the proposal then the proposal moves to the governing board of Hyperledger (which is mostly comprised of the premium members with two other members being elected via the "regular" members). Once the governing board approves, then the codebase is formally moved into the Hyperledger umbrella and begins to use that code governance frameworks and administration.

## `eris:db` will be relicensed Apache 2

To date all versions of `eris:db` have been released as GPL 3. The 0.16.0 release of `eris:db` (which, if our incubation proposal is successful, will be the final release of `eris:db`) will be released Apache 2. While GPL 3 and Apache 2 are incompatible licenses for a single release, given proper legal niceties (which we have done), code bases for different releases can have different licenses. Given that we expect our submission to the TSC to be successful and that our codebase will relatively quickly move under the Hyperledger umbrella, we suspect that the 0.16.0 release will be the final release of eris:db.

## RIP `eris:db`; Long Live `?????`

To reduce the association with `eris`, a holistic ecosystem application platform, we will propose to the TSC that `eris:db` would be renamed when it was brought under the Hyperledger umbrella. We have *some* ideas as to what we could name it. But we won't. Instead, we will be proposing that the renaming of the codebase could actually make for a nice backdrop to build community around the idea. So, if you have any ideas let us know on twitter!

# Conclusions

Are you a company that is interested in moving forward and maturing the enterprise smart contracts space? We'd love you to join our application to the Hyperledger TSC. Let us know!

[(Photo credit: CC-BY-ND: Hec Tate @ Flickr )](https://www.flickr.com/photos/50576141@N03/)
