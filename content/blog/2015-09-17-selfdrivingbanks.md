---
author: preston
categories:
- legal tech
comments: true
date: 2015-09-17T00:00:00Z
excerpt: Self-driving business process automation is not just coming - it's here,
  now, today. In shipped code. Eris' COO and head of legal engineering, Preston, explains
  why this is both an enormous opportunity and an existential threat to current business
  models.
meta: true
published: true
tags:
- smart contracts
- scripts v. smart contracts
- smart contracts v. paper contracts
thumbnail: marmot.jpg
title: 'Self-driving banks: industrial verification without industrial capex'
url: /2015/09/17/selfdrivingbanks/
---

{{ page.date | date: "%Y" | append:'/marmot.jpg' | img }}

**tl;dr**:
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">I&#39;m pro-robot.&#10;I think they should just destroy us all at this point.</p>&mdash; SecuriTay (@SwiftOnSecurity) <a href="https://twitter.com/SwiftOnSecurity/status/644338254096039936">September 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

### "The"

Because Bitcoin does not require a central server whirring away, or direct human oversight, to run, its earliest adopters have long referred to it in quasi-religious, almost magical terms. Immutable. Indestructible. "The" blockchain.

Of course, I co-founded a business that, at least to my knowledge, was [the first in the world](https://blog.erisindustries.com/products/2014/12/17/eris-what-are-we-building/) to take the "bitcoin"/cryptocurrency piece out of the equation - resulting in the datastructure now referred to as "a" blockchain.

This was not a political decision, but a practical one. Make no mistake, I started - as we all did - as a Bitcoin guy before I became a smart contract guy. However, it bears mentioning that back in the day Bitcoin was the only game in town. Thanks to permissioning (which allows us to control our blockchains), we now have options.

Bitcoin is a bunch of cryptographic primitives skinned with a UI and hooked up with a networking protocol over TCP-IP. I liked Bitcoin from the day I met it. But, much like everyone's proverbial erstwhile ex, if we don't look at Bitcoin as "the one" but look at it as an archetype (daresay a proof-of-concept), we realise that it is entirely possible to fall in love again.

My own love affair with Bitcoin transmogrified very suddenly one day in September of 2013. I was corresponding with an acquaintance of mine named Zachary Caceres (of the [Startup Cities Institute](http://www.startupcities.org/) in Guatemala) about a proposal for a government accounting system he called "MuniBit". The argument for such a system, as Zach put it, was that the same security properties which allowed Bitcoin to self-regulate in a secure way could be very useful to bootstrap an interdepartmental funds transfer system for developing nations that would

* run itself, on simple hardware like laptops or desktop PCs; and
* cost next to nothing to operate and replicate; but
* which would be just as effective as an Oracle server (at least, for the kinds of latencies that a government accounting system requires) and
* being tamper-proof and perfectly transparent, thus be extremely effective in reducing corruption.

It was at that moment that I realised maybe it wasn't Bitcoin itself I was in love with, but certain parts of its personality. Specifically, its blockchain.

However, distributed databases have been around for a very long time – the first of which, SDD-1, was [invented in 1980]( http://www.eecs.berkeley.edu/~wong/wong_pubs/wong63.pdf). So what turns everyone on about [every little thing a "blockchain" does](https://www.youtube.com/watch?v=aENX1Sf3fgQ) as distinguished from every little thing a distributed database does?

### Every little thing she does is magic

Well, I think I've figured it out. It's the way in which these DBs:

a) batch data into blocks instead of achieving consensus bit-by-bit,

b) merkle-ise [all the things](https://www.google.co.uk/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=all%20the%20things)  (EDIT: the use of merkle trees - merkleisation - is what makes a blockchain's audit log unforgeable); and

c) utilise a public/private key signature infrastructure to control writes,

means, if we're looking at Bitcoin *qua* proof-of-concept, that a blockchain data structure makes it possible to achieve industrial levels of verifiability without industrial levels of capex.

This is the big deal.

Thanks to blockchains, a laptop or a mobile phone is, today, as effective at running a globally-accessible application as a datacentre or a mainframe. Furthermore, [with the permissioned chains, the "mining" process can be dispensed with entirely](2015-06-16-tbtm.md), allowing a user to run such a network with only the latent capacity of hardware you already have (in relation to which, 99% of the time it is not being used anywhere near full capacity.

In the future, we will leverage this excess capacity to both increase the reliability and uptime of our systems, and bring the [marginal costs](https://www.youtube.com/watch?v=KOrXep9f3Z8) of computing to nearly zero. This will be a world in which data infrastructure runs itself without physical infrastructure.

Because of this, I'm a bit puzzled at the direction the early blockchain space seems to be taking.

One of these directions is the proprietary-chain tack, which doesn't make a whole lot of sense. Apart from being bad business, any cryptographic primitive worth a damn is going to be open-source.

The other one is why new businesses are entering, and bitcoin businesses are pivoting hard, into the winner-take-all clearing and settlement game.

Both approaches strike me as terribly unimaginative. Straight ownership transfers are already machine-driven (see: [Faster Payments](http://www.fasterpayments.org.uk/)). They are also extremely simple from a logic perspective; it's possible to draft a legally binding instrument of transfer in a minute or so using nothing more than a napkin and a pen (or, if you prefer, five lines of smart contract code).

The introduction of a blockchain into the settlement equation is not, on its own, sufficiently compelling to justify the wholesale replacement of existing infrastructure - where it strikes me that uniform standards running on existing DB designs would be better (especially given that clearing and settlement require privacy among market participants, which blockchains do not do especially well). The inappropriateness of using a single blockchain is even clearer to see anywhere high volumes or low latencies (e.g. HFT, credit cards) are involved.

“Smart contracts,” on the other hand, allow us to do some different things with blockchains - most of which are distinctly not related to straight clearing.

### Smart Contracts

As Casey puts it, **“smart contracts” are not smart and they are not contracts**. As Brian retorts,  [“they should really just be called dumb scripts.”](2015-09-15-smart-contracts-intro.md)

Dumb or not, being computer code, you can write these scripts to do more or less whatever the hell you want. As a result, smart contracts can run virtually anything in the same way that Bitcoin automates payments. On smart contract chains this sort of stuff is trivial (Tyler and I did our first smart asset-backed loan back in April of 2014.)

How then, should we use blockchains in practice? The answer actually was put quite succinctly by an analyst at [BNP Paribas](http://securities.bnpparibas.com/quintessence/hot-topics/beyond/bitcoin-and-blockchain-what-you.html#.VfqJNp1Viko): a blockchain is to existing infrastructure as an internal combustion engine was to the steam train. But just as we would not want to try to pile 300 people in a car, we will have to optimise our approach to blockchains in order to account for their inherent limitations.

As the lead marmot superfan of the entire world, let's suppose I want to create a marmot supply chain finance application. Let us also suppose I will call this application “Uber for Marmots.” If I should code it up, at the conclusion of this exercise I will have a piece of software which can run itself from my laptop, across a network of global users, any of which I can securely onboard - through the issuance of a single key pair - in seconds.

Furthermore, if these chains are permissioned, such as ours (specifically the collaboratively-written Tendermint design) are, these services are infinitely repeatable at, again, almost zero expense and in seconds. Someone wishing to create Uber for (Marmosets/Skunks/Puppies) of their own can simply copy my code, tweak some parameters to fit their particular use-case, and have their own particular application running, for a cute animal of their choice, with one command.

And this application will run in a web browser.

It's like being able to download a server instead of having to get a data centre to run one on your behalf.

**Whether we can** run a blockchain for a given application is one question, the answer to which - at least in principle - is almost always yes.

**Whether we should** run one is quite another. I like to say that the only thing a blockchain can do that a server cannot is not need a server. For this reason, it strikes me that blockchains are destined to be fundamentally *micro* in nature: to address specific groups of users with specific applications when those users need to bootstrap a network, and need to obtain a high degree of data verification, without spending piles of cash on IT equipment.

### Self-driving banks

Should we use such an infrastructure to clear industrial volumes of interbank transactions, such as international payments? I’m not so sure (this would not be the first time Eris Industries has [gone against the grain of conventional wisdom](http://blogs.wsj.com/moneybeat/2015/04/14/bitbeat-blockchains-without-coins-stir-tensions-in-bitcoin-community/) in the blockchain space). Why do we need replication - or even PKI - to get us where we need to go in such circumstances? Would adopting that infrastructure for these applications only slow the banks down?

By contrast, how many times can someone get KYC'd in a day? How many marmots, or syndicated loan participations, can someone move in a day? The answer (I know as I have cornered the marmot market) is rather fewer. This is a strong hint that these kinds of use-cases are a good place to start.

Within the banks themselves, there are plenty of applications which fit this profile – but they are primarily non-transactional and relate to back-office process or event control and scheduling (as one might see, e.g., in a securitisation). Businesses, including banks, deal with considerably more process logic  on a daily basis than just payments – hiring and firing, paying salaries, calculating taxes, keeping track of holiday entitlement, internal audit – all of which are managed by legions of “knowledge economy” employees, such as lawyers and auditors.

In other words, manual labour.

Winning applications reduce friction. **Uber's killer value proposition isn't automating payment** - though they did that as well - **it's going after the humans** and automating the (not scalable) taxi dispatcher by turning him into a (scalable, repeatable) communication protocol. Perhaps we blockchain folks might be better off adopting the same approach to business process as Silicon Valley adopted to hailing cabs: delegate execution to the machines so we can get on with making decisions.

This idea – which we call, for now, the “**self-driving bank**” – is an intriguing one. It is also a double-edged sword. For all the benefits any one institution (or group of them) will obtain from adopting this tech, its also true that new entrants will be able to leverage them as well at nearly nil cost.

Just as P2P lending allows ordinary people to stand toe-to-toe with the banks in the capital markets, blockchain allows people to stand toe-to-toe with them in the verification and process assurance markets.

Which begs the question: what will it mean to be a bank, which presently has 150,000 employees, if open-source tech can do the same job for free? I have some ideas - but I'll save that for another day.

{{ page.date | date: "%Y" | append:'/marmot2.jpg' | img }}
