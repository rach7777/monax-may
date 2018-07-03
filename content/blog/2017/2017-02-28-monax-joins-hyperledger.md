---
author: casey
categories:
  - announcements
  - press
comments: false
date: 2017-02-28T00:00:00Z
deprecated: true
meta: true
published: true
tags:
- announcements
- consortium
- hyperledger
thumbnail: hyperledger.jpg
excerpt: "Monax announces it has joined Hyperledger and will be submitting its market-leading blockchain client, eris:db, for incubation."
title: "Why we're joining Hyperledger"
# url: /blog/2017/02/28/why-were-joining-hyperledger/
---



[{{< image_blog "hyperledger.jpg" >}}](https://www.flickr.com/photos/50576141@N03/15805560016/)

Earlier today we formally announced that we will be joining the Hyperledger project and that we will be submitting our `eris:db` [blockchain](/learn/blockchains/) client to it for incubation. In this post I would like to add a bit more color as to our reasons for such a move and explain what this means for current `eris:db` users.

## Introduction

When we started our company in 2014 we never really had the intention of being solely responsible for building an enterprise grade, general purpose [smart contract machine](/platform/db/). Indeed, our intention was always to participate in the furtherance of the technology at that level of the technology stack. This strategic choice, made early on, and continually reviewed at our board and senior management team levels, has informed a plurality of tactical and operational decisions that we have made. And it is also behind our joining of Hyperledger.

## Why

There are three major reasons for submitting our market leading smart contract machine to the Hyperledger project for incubation.

### Reason Number 1: Open Source without Participation is Just Showing Off

Effectively, what well-built open source projects do is to reduce the operational load which any one company needs to sustain in order to develop a given piece of software. This is what allows open source software to exponentially grow and harden.

This doesn't always work as intended, though. Our `eris:db` codebase has been open sourced since 2014, but we have (for all intents and purposes) carried almost the entire load ourselves. We have designed and built the code, its documentation, built example applications, answered questions on various developer fora, along with implementing and manning our own support systems.

And the results of that effort have been amazing. Over the course of 2015 we saw about a 50X increase in downloads of `eris:db` and in 2016 we saw a further 20X increase in downloads. I'm very proud of the efforts our team has expended building eris:db into a widely used codebase. However, interest in ethereum style smart contract interpreters within enterprise (long, our bread and butter) has reached a tipping point. Currently, our `eris:db` codebase has reached a point of interest where our company can no longer respond to the entirety of the demand alone. We now need the community of enterprise smart contract users to assist us in moving this codebase forward.

Joining Hyperledger is a key ingredient from our perspective to work on gaining enterprise contributors because of the strong codebase governance frameworks emplaced alongside the Linux Foundation's long history of understanding how to administer enterprise grade open source projects. We are hopeful that with a clear governance structure that our current users will be able to contribute in a more fundamental way to the development and maturation of the codebase.

### Reason Number 2: Collaborating is in our DNA

[Blockchains](/learn/permissioned_blockchains/), [smart contracts](/learn/smart_contracts), and [ecosystem applications](/learn/ecosystem_applications) are, fundamentally, frameworks to build collaborative applications which are operated by multiple parties. We have long taken the position that we should practice what we preach so to say, in that the software we produce should be built -- to the greatest extent possible -- collaboratively.

In the past twelve months we have taken a hard line stance on this with respect to our commercial engagements and we have not been directly involved in the building of a pilot or POC **unless it has been a collaborative delivery**. In other words, we have consistently partnered to deliver ecosystem application POCs and pilots, even when the end using customers have balked at our collaborative approach.

This decision was strategic rather than tactical. Namely, if we as Monax are going to get our software into production in enterprises then we need to prove not only the technology itself, but also develop the mechanisms **to build and deliver that software collaboratively**. The old one-to-one approach dominated by account managers walking the halls of incumbent enterprises pitching the IT company's "new" thing, may still work for a lot of technology; but it isn't likely to work for blockchains and smart contracts.

For this tech, we need a new approach to delivery. And that requires collaboration. This is why we've been building a collaborative approach to software delivery into our very DNA as a company. Joining Hyperledger reinforces this at a very fundamental level.

### Reason Number 3: Our Users Need More Expertise Than We Can Solely Provide

We have said it before, and we'll say it again, but 2017 in the enterprise blockchain applications is about the race to production. And production readiness requires expertise. In order to support production grade applications, we (the "enterprise blockchain" industry) first need to have platforms that can readily support production grade applications for enterprise. And this requires a **lot** of expertise. Expertise which very few companies on earth wholly have in-house.

Platforms need to have security vetting, fault tolerance vetting, quality assurance on a variety of platforms, packaging for a variety of platforms, penetration testing, entrprise grade RPCs need to be built along with client libraries in a range of languages, platforms need long-term network testing of a variety of scenarios covering normal fault tolerance as well as byzantine fault tolerance, they need to be extremely well documented, they need a variety of example applications in the open as paradigms that developers can follow, to name just a few of the things that need to happen before a codebase is ready for enterprise production use. To put it bluntly, `eris:db` would fall very much behind other codebases if we tried to build all of this expertise alone.

Joining the Hyperledger project gives our team access to an unmatched range of enterprise building expertise via the current and future members. This expertise will be essential to the continued maturation of `eris:db` into a smart contract network that is capable of easily, safely, and reliably supporting [enterprise grade ecosystem applications](/use_cases).

## How

All the above may be of interest, or it may not, but it doesn't really tell developers **how** this will all work. So I'd like to now speak to our current users.

### Monax is joining Hyperledger; eris:db is being submitted for incubation

There are two related things happening. First, at a corporate level, our company will be joining Hyperledger as a general member of the consortium. This affords us certain opportunities to collaborate with the other codebases administered by the consortium; to attend consortium meetings; participate in the consortium's governance structure; etc. This action has nothing to do with code.

Second, `eris:db` will be submitted for incubation. The way that Hyperledger's code governance systems operate is as such. Any codebase which is seeking to be incubated by the Hyperledger project, and to, more or less become, "Hyperledger code" must first be Apache licensed (more on this in a minute); then a proposal must be submitted to the Hyperledger Technical Steering Committee outlining the reasons why the code base should be incubated by the project.

If the committee approves the proposal then the proposal moves to the governing board of Hyperledger (which is mostly comprised of the premium members with two board members being elected via the general members). Once the governing board approves, then the codebase is formally transitioned into the Hyperledger umbrella and begins to use that code governance framework and administration.

### `eris:db` will be relicensed Apache 2

To date all versions of `eris:db` have been [released as GPL 3](/2015/08/30/on-licensing/). The 0.16.0 release of `eris:db` will be released Apache 2. While GPL 3 and Apache 2 are incompatible licenses for a single release, given proper legal niceties (which we have done), code bases for different releases can have different licenses.

Given that we hope our submission to the TSC to be successful and that our codebase will relatively quickly move under the Hyperledger umbrella, it is possible that the v0.16.0 release will be the final release of `eris:db`.

Users of `eris` need not worry. For v0.17.0 we will ensure a smooth transition to the new codebase; thanks to our modular design it's really only the change of a few fields.

### RIP `eris:db`; Long Live `?????`

To reduce the association with `eris`, a holistic ecosystem application platform, we will be proposing to the TSC that `eris:db` should be renamed when it was brought into the Hyperledger project. We have *some* ideas as to what we could name it. But instead of monopolizing this decision, we will be proposing that the renaming of the codebase could actually make for a nice backdrop to build community around the idea. So, if you have any ideas let us know on [twitter](https://twitter.com/monaxHQ)!

### We're looking for contributors

If you would like to join the effort to bring enterprise grade smart contract platforms to production, we are looking for active collaborators at both the `co-maintainer` and `contributor` levels in the following areas (primarily):

* documentation assistance and technical writers
* enterprise grade RPC optimization and client libraries
* QA, packaging, and testing experts
* network level QA and long-range scenario testing experts

That said, we'd love all the help we can get. If you or your company are willing and interested in participating, [send us an email](mailto:contact@monax.io?subject=Hyperledger%20project%20and%20Monax).

## Conclusions

Are you a company that is interested in moving forward and maturing the enterprise smart contracts space? We'd love you to join our application to the Hyperledger TSC. Let us know!

[(Photo credit: CC-BY-ND: Hec Tate @ Flickr )](https://www.flickr.com/photos/50576141@N03/)
