---
author: zach
categories:
- science
comments: true
date: 2016-03-15T00:00:00Z
excerpt: Science for Everybody
meta: true
published: true
tags:
- blockchain
- science
- academia
- research
- experiment
title: 'Public Science: A Slightly More Practical Guide'
url: /2016/03/15/chains-and-science-how-to/
---

This is Part 2 in a probably several part series. [Here's Part 1](https://monax.io/blog/2016/03/14/blockchains-and-science/)

The previous post was stricly a think-piece. Here, I outline some practical steps that a consortium of institutions could take to provide the basic building blocks needed to acheive a worldwide ledger of knowledge. The problem is this: how do we maximize the quantity of data (that has sufficient quality) in order to acheive scientific consensus on some topic of study? Most of what is proposed here is realistic today although several ideas will need significant refining before any practical implementation succeeds. A summary at the end distinguishes the possible from the now.

The first step would be for a group of educational/research institutions to form a consortium. I don't have a solution as to how this ought to play out; suffice to say the minimum requirement would be the desire to reduce reliance on publishers for publishing research. Each institution would be a validator on publicly accessible blockchain.

With a chain in tow, step two would be for them all to run many [IPFS](https://ipfs.io) nodes to ensure persistent availability of data (shameless plug: `eris services start ipfs`). Crucially, we want the validator nodes and IPFS nodes running on the respective hardware of these institutions. Indeed, as public institutions, it ought to be their mandate to ensure access to knowledge for generations to come without reliance on cloud hosting providers. 

Next, for a specific field of research, some basic standards need to be agreed upon. These standards form the basis of what one might call smart contract factories. Roughly, three steps must be appropriately defined. Think of each as a smart contract which, once executed, allows the next steps to "be open" for execution.

Ideally, for a nugget of scientific knowledge to be considered valid (i.e., "true", as subjective as that may be), there should be consensus on the following standards: 
a) pre-registering experiment, 
b) acceptable data for said experiment and, 
c) analysis of total (and ongoing! see Note, below) data set.

Each step has some requirements. In no particular order:

For b) we need specific standards for validating data from external sources (other labs, and, importantly, the public). That is, compatibility with crowd-sourced data/user-generated content should be the default. By having a) occur publicly, the opportunity for both: 1) feeback to refine the initial methodology and 2) anybody to propose experiments is available (which, with a proper content value sorting system would easily filter out pointless experiments). Finally, once the data are gathered, discussion and subsequent consensus on a scientific conclusion for the data set can be acheived, in a public forum (and *not* behind closed-doors *and* anonymous as the current status quo certainly is). 

Note: because there is a specific framework in place for accepting valid data for some pre-registered experiment, new data can be added to the set in perpetuity. Consequently, the conclusion derived from what is essentially a single experiment can evolve.

What does this look like in practice? Well, in [my previous post](https://monax.io/blog/2016/03/14/blockchains-and-science/) we have Alice and Bob. If Alice had announced, *ahead of time* her intentions to attempt the groundbreaking experiment, then perhaps Bob could have contributed both: a) improvements to the methodology and, b) valid data by running the experiment himself. Both Alice and Bob would now each have a shared data set, thus increasing statistical power. In the previous post, neither Alice or Bob concluded anything groundbreak from their data. Perhaps the data set simply wasn't large enough. 

This helps tackle the [increasingly problematic lack of reproducibility in psychological science](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4550299/) and maybe, just maybe, the conclusion that [most research findings are false](http://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0020124) can be un-concluded.

After Alice proposes the experiment and Bob suggests improvements, perhaps Charlie sees that it's a great idea and happens to have a research laboratory five times the size; ideal for running such experiments at scale. Even better, let's say the experiment is simple enough to run in the average [DIYbio](https://en.wikipedia.org/wiki/Do-it-yourself_biology) lab and a data set orders of magnitude that was ever thought possible can be achieved. 

The data is collected and, eventually, analysed. Since the data is added in real-time and all the details of the ongoing experiment are available publicly, *anyone* can run a statistical analysis and propose an interpretation. Again, creative content filtering schemes will be needed to ensure that the cream rises to the top. 

How is this different from the average research collaboration today in academia? Usually, collaborations are *ad-hoc*, i.e., planned and all the roles divided up ahead of time. My proposal has collaboration happenening *post-hoc* (once an experiment is proposed for pre-registration) and completely fluid, provided participants are generating useful content (data, if you will).

The biggest challenge, as I've repeatedly alluded to, is having creative and well-implement reputation and reward schemes. Reasearchers need to somehow be compensated for their time and receive credit where credit is due. If this basic requirement can be satisfied then I'm hopeful we'll see science accelerate its effeciency.

To summarize, we need:

1) a consortium of institutions,
2) running many IPFS nodes and,
3) acting as validators on a chain,
4) their researchers to publish planned experiments ahead of time (pre-registration),
5) data standards such that adding to the set is seamless and verifiable,
6) creative way of acheiving consensus on conclusions from analysis of data set,
6) a sane on-chain indexing method,
7) a meaningful user interface to pull it all together and, finally,
8) useful solutions to reputation/compensation problems.

1-4 is, at a minimum, do-able today, as is a portion of (5), most of (6) and probably (7). As far as I can tell, enough pieces of the puzzle are in place to start implementing some of these basic features as soon as possible.
