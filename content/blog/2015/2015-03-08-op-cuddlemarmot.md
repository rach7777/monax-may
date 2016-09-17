---
author: preston
categories:
- products
comments: true
date: 2015-03-08T00:00:00Z
excerpt: We've open-sourced our code. Now it's time to open-source our knowhow to
  get you building the DApps of your dreams.
meta: true
published: true
tags:
- eris
- thelonious
- decerver
thumbnail: doug.png
title: 'Operation: Cuddly Marmot - Eris Industries comes out of hibernation.'
url: /2015/03/08/op-cuddlemarmot/
---

<blockquote class="twitter-tweet" lang="en"><p>Before ppl had tamagotchi - now we have little <a href="https://twitter.com/hashtag/blockchains?src=hash">#blockchains</a>. How cute cc <a href="https://twitter.com/prestonjbyrne">@prestonjbyrne</a> <a href="https://twitter.com/compleatang">@compleatang</a> <a href="http://t.co/RUvKB8GFy5">pic.twitter.com/RUvKB8GFy5</a></p>&mdash; :P (@j32804) <a href="https://twitter.com/j32804/status/574165653197881345">March 7, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


TL;DR:

* PROTIP: all kinds of delicious smart contract tutorial goodies are going up on our [**Engineering Blog**](https://eng.erisindustries.com). Go there immediately.

* We're throwing more resources at developer education and outreach.

* **Want to do a developer meetup in your city?** We want to help! Get in touch with us at preston@erisindustries.com, on [Reddit](http://reddit.com/r/erisindustries), on [Twitter](https://twitter.com/eris_ltd) or at #erisindustries on Freenode and we can take it from there.

Contents:

1. **Prologue to Operation: Cuddly Marmot: a review of what we've done and where we're going next.**
2. **Appointment of Andreas Olofsson as Core Developer (Outreach and Education)**
3. **Community Managers: Who's joined so far? Can I join too?**
4. **Q2 objective: improved usability**

## 1. Operation: Cuddly Marmot - opening up to our small (but growing!) community

### A rehash of what's happened in the last 60 days.

Anyone who's followed Eris Industries since our launch will know:

* At launch, we produced a ton of content. Like, 25,000 words. I'm sorry - we like to write and had six months of stealth mode to over-indulge.

As a result, for the first week or two out of stealth we confused everyone, including the inimitable [Richard Brown](http://gendal.me/2014/12/19/a-simple-model-to-make-sense-of-the-proliferation-of-distributed-ledger-smart-contract-and-cryptocurrency-projects/) and most of our other friends in the space.

The reason we did this was to sense-test our thinking against the community's - to throw up all of our thoughts against a wall and see what stuck - as well as to issue a direct and unambiguous challenge to the pay-to-play, "give me tokens or give me death" security model most blockchains use today.

* Since then, we've got a ton of feedback from the community on how we're building, and it would appear that most of the devs we like are [coming around and grokking](https://twitter.com/VitalikButerin/status/569936267397500928) what we're trying to do.

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/hashtag/blockchains?src=hash">#blockchains</a> are a friggin database technology; 5 years down I doubt any users will care what the underlying network token is</p>&mdash; Vitalik Buterin (@VitalikButerin) <a href="https://twitter.com/VitalikButerin/status/569936267397500928">February 23, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

We very much think that blockchains are "**just a friggin' database technology.**" Every line of code in our stack reflects this philosophy. So we've built:

* a template blockchain database back-end designed to be tailored by developers to address particular use-cases. We call this [**Thelonious.**](https://erisindustries.com/components/erisdb)

* Yes. You can [roll your own chain.](https://twitter.com/j32804/status/574165653197881345)

<blockquote class="twitter-tweet" lang="en"><p>A bunch of folks rolling their own blockchains for the 1st time at <a href="https://twitter.com/eris_ltd">@eris_ltd</a> London meetup! <a href="https://twitter.com/compleatang">@compleatang</a> <a href="http://t.co/psXajJVbf6">pic.twitter.com/psXajJVbf6</a></p>&mdash; Preston J. Byrne (@prestonjbyrne) <a href="https://twitter.com/prestonjbyrne/status/573932384153894912">March 6, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

* A particular Thelonious chain can, if a developer wants, be controlled by a master smart contract we call [**Doug**](https://github.com/eris-ltd/eris-std-lib/blob/master/Genesis%20DOUG/Genesis-DOUG.lll). Doug basically moves the consensus mechanisms one might usually find hard-coded into a blockchain client into the genesis block of a given blockchain itself. This means an administrator can change any aspect of a chain's operation (or at least will be able to, once we're done ripping out all of the consensus mechanisms from the client - a process which is ongoing) with a simple command to that master smart contract, instead of hard-forking the protocol as one might need to do with, e.g., Bitcoin.

* The controllability afforded by Doug basically means that blockchains aren't a scarce resource anymore. As long as you're willing to accept a degree of trust in their administration, you can have as many as you want - and define what consensus parameters are most application-appropriate in Doug or other smart contracts which live on that blockchain. Changing that consensus involves writing an amendment transaction to that smart contract by private key, access to which is controlled with ECDSA - much in the same way that write access to the Bitcoin blockchain (spending a wallet balance) is controlled through ECDSA.

* Alternatively, you can leave Doug out of the equation and basically create an Ethereum clone. We don't recommend that, but could see its use for building a bespoke closed testing environment for your DApps before you roll them on a mainnet.

<blockquote class="twitter-tweet" lang="en"><p>In 24 months:&#10;&#10;Bitcoin blockchains = 1&#10;Ethereum blockchains = 1&#10;Thelonious blockchains = Anywhere between 1,000 and 2^256 <a href="https://twitter.com/eris_ltd">@eris_ltd</a></p>&mdash; Preston J. Byrne (@prestonjbyrne) <a href="https://twitter.com/prestonjbyrne/status/574717453428781056">March 8, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

* a decentralised application server, which is basically a client/local oracle machine combined with a Javascript interpreter which allows distributed applications to display in Javascript in an ordinary web browser, such as Chrome. We call this the [**Decerver**](https://erisindustries.com/components/erisdb).

* The Decerver has modules which allow your DApp to talk to the big decentralised chain designs like Ethereum or Bitcoin for mission-critical stuff like checkpointing, without needing to run your logic on, or otherwise unnecessarily burden, these big chains.

* The Decerver client-side component of our stack allows distribtued applications, or DApps, to utilise multiple distributed protocols at once. [2Gather](https://github.com/eris-ltd/2gather), our distributed streaming video DApp, utilises Thelonious for application logic, [IPFS](http://ipfs.io/) for file storage and has a Bitcoin module so you can tip content creators. **Note, the font-end and back-end to 2Gather are both done** - we're currently in the process of wiring those up and should have it all done and looking pretty by midweek next week.

* We are in the middle of a major rewrite of the Decerver out of Go and into Node.js to make the DApp development process easier.

* We currently have two DApps released: [HelloWorld](https://github.com/eris-ltd/hello-world-dapp) (which does what it says on the tin) and [2Gather](http://prestonbyrne.com/2015/02/28/this-is-how-you-use-smart-contracts/), a distributed video-sharing application. Both are released and available to use today - just [head over to our repo](https://github.com/eris-ltd/2gather) and play around.

<blockquote class="twitter-tweet" lang="en"><p>Hm. I wonder what that is. <a href="http://t.co/54BhBOlRZ9">pic.twitter.com/54BhBOlRZ9</a></p>&mdash; Preston J. Byrne (@prestonjbyrne) <a href="https://twitter.com/prestonjbyrne/status/568810168177315841">February 20, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### So, what's next?

Being springtime, this is the time of year when marmots and all kinds of other cuddly critters come out of hibernation and do super cute stuff like:

* eat flowers,
* give each other cuddles, and
* in a totally adorable way, harass passing hikers for munchies.

If you encounter a marmot in your travels, we encourage you to indulge them. As there are no marmots in England, however, we figured we would bring that cuddly spirit to these green and pleasant isles by doing the software development equivalent.

## 2. Appointment of Andreas Olofsson as Core Developer (Outreach & Education)

Apart from being the company's first employee, and key in the development of the [Decerver](https://erisindustries.com/components/erisdb) and other elements of the Eris version 0.9 stack, Andreas is an outstanding programmer and teacher of programming.

Accordingly, effective Monday, Andreas will be moving off integrations and assuming a more public-facing role as our head of Outreach and Education. We've given Andreas a very broad mandate to basically go nuts with smart contracts and see where his considerable creativity takes him.

Those of you who know Andreas will know that he's one of the best DApp writers around. He wrote the [PRODOUG](https://www.youtube.com/watch?v=CVDX8CFcSlg) DApp, basically a prototype national economic system, on Ethereum last year in 20,000 lines of LLL and 8,000 lines of js. More recently, he's been doing some outstanding [Solidity](https://www.youtube.com/watch?v=z4KmhL1PbPw) tutorials.

Andreas' new role will be to push the boundaries of what's been possible with smart contracts to date and to make instructional videos, LLL/Solidity tutorials, and smart contract guides - and to open-source this work and share it with all of you. Suffice it to say, we're very excited to see where he takes it.

## 3. Community Managers: who's in so far? Can I join too? (Answer: yes)

### Why?

Our "community management" strategy has nothing to do with selling anything: we're toolmakers, not coinprinters. We need your time, creativity, feedback, and critical thinking - not your money.

<blockquote class="twitter-tweet" lang="en"><p>In 24 months:&#10;&#10;1x Bitcoin = $?&#10;1x Ether = $? &#10;1x Junk = $0.00 <a href="https://twitter.com/eris_ltd">@eris_ltd</a></p>&mdash; Preston J. Byrne (@prestonjbyrne) <a href="https://twitter.com/prestonjbyrne/status/574716646943752192">March 8, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

As a company, we take the view that a blockchain is a general-purpose distributed database technology. It is **not** a class of financial asset. Because of the way we built our [Thelonious](https://erisindustries.com/components/erisdb) blockchain design, blockchain technology is no longer scarce.

Over the course of the last 60 days, we've talked with people across a range of sectors - from independent developers to governments, international development bodies, and even human rights NGOs - who agree with this philosophy and have defined a number of problems they think blockchains powered by smart contracts can solve. They neither want nor need a "coin" in the equation.

Our objective is to increase mainstream developer adoption of this tech so people talk a little less and build a little more in the smart contract space. But to do that, we need a little help. So we've asked:

* in London, [Chris Ellis](http://chrisellis.me/),
* in New York City, [Jonathan Mohan](https://twitter.com/jonathanmohan), and
* in general, but particularly in wider European legal tech and governance reform circles, [David Bovill](http://www.parliamentofthings.org/) and Ksenia Serova,

to serve as our initial cohort of community managers. We're doing this to:

* help developers learn how to use our tools, both from commercial structuring and technical perspectives;

* solicit feedback (and criticism - in **crypto**! Criticism! Imagine that!) so we can improve our toolkit for your benefit, and

* put the best developers, building the best applications, in touch with us, so we can showcase and promote their work both here on the website and in a podcast series we're going to kick off hopefully sometime next month (either ourselves or in conjunction with open-source podcasts like the [World Crypto Network](http://www.worldcryptonetwork.com/) - whatever makes sense. We're open to suggestions).

### Operational independence: peer-reviewers, not shills

In each case, the above-named individuals aren't going to be working for us as employees - they'll be fully independent and working on their own projects. By way of example, Chris' main project, ProTip, is a piece of open-source and decentralised Bitcoin tipping infrastructure for content incentivisation - designed to empower users to use Bitcoin to reward content creators, without relying on a centralised silo to do so.

We've asked these folks to work with us because their philosophies and ours on this tech (blockchain-as-infrastructure) are, in our opinion, broadly aligned. For this reason, Eris Industries is happy to support these individuals' independent exploration of the future of blockchain and distributed computing technology.

**To the extent that you've been playing with our toolkit and want to work with us too**, we're very friendly and would love to have a chat. Feel free to drop us a line and we'll be happy to have a conversation.

 #Erisindustries on Freenode or [our subreddit](http://reddit.com/r/erisindustries) are both great places to start.

## 4. Improving usability

Suffice it to say, our little coder marmot army is busily hacking away to make our stack more straightforward to build with, and furthermore to do so in a backwards-compatible way with anything you might already be building on your own Thelonious blockchains.

What exactly we're doing on this is super secret sauce, at least for now. Naturally, though, we'll be open-sourcing it when it's done - so watch this space.

## 5. A marmoty postscript

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/prestonjbyrne">@prestonjbyrne</a> A blockchain is just a database like a marmot is just a rodent. But these basic descriptions belie their true potential.</p>&mdash; Amor Sexton (@AmorSexton) <a href="https://twitter.com/AmorSexton/status/574738207763382272">March 9, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/AmorSexton">@AmorSexton</a> Indeed. But when expl. marmot, start with rodent. Then go to squirrel. Then go to fat and cute. One foot in front of the other.</p>&mdash; Preston J. Byrne (@prestonjbyrne) <a href="https://twitter.com/prestonjbyrne/status/574738465016930306">March 9, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
