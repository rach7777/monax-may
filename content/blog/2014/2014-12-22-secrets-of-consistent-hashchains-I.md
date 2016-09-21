---
author: ethan
categories:
- blockchains
comments: true
date: 2014-12-22T00:00:00Z
excerpt: A blockchain is a silly sort of a datastructure designed to keep thousands
  of computers in sync while providing a useful service that is not controlled or
  owned by anyone in particular. Read more of Part 1 of Ethan's blockchain tome here.
meta: true
published: true
tags:
- blockchains
title: 'Secrets of Consistent Hashchains I: Eventual Consistency'
url: /2014/12/22/secrets-of-consistent-hashchains-I/
---

**Note: since this blog post was written, we have changed our name to Monax Industries and will be changing the name of our product to "Monax" in early 2017. We have left these posts unedited for the purposes of historical record, as the software was named Eris at the time.**

## Blockchains

A blockchain is a silly sort of a datastructure designed to keep thousands of computers in sync while providing a useful service that is not controlled or owned by anyone in particular. It employs the finite state machine approach, where the state of the system is updated sequentially, via atomic transitions (transactions) that are replicated across every machine, in order. In classic academic work on the subject, with a fixed set of trusted machines, a leader/master is selected from the set and put in charge of committing updates; in the event the leader fails, an election protocol is engaged to choose a new leader. This is useful, for example, for companies that need to maintain a synchronized database across multiple data centers around the world.

In a decentralized system, where there is no implicit trust across machines, and no one in charge, where we thus expect agents to act *byzantine* (malicious), the classic leader election approach is easily foiled. So how can we choose leaders in a way which is secure; that is, how do we design systems where we can quantify and adjust the cost to an attacker of mounting a successful attack?

The original solution is to pick a new leader every roughly 10 minutes based on a random lottery, the winner of which is determined by their capacity to find partial hash collisions in the SHA256 algorithm. Partial hash collisions were originally conceived as an approach to spam prevention, since they allow one to prove that a certain amount of computation was performed to find the collision, hence the colloquialism proof-of-work (PoW). It was adopted by bitcoin as the lottery mechanism, allowing anyone to participate, such that the system's security derives from the cost and distribution of the computational power itself.

## Ain't No Proof-of-Past

A key property of blockchains is that the present state can be computed by anyone using the protocol, the genesis block, and a particular history. Simply apply each transaction in the history to the genesis block, and the final result should be the current state. So the problem becomes, how do we know what is the right history?

Bitcoin has a deceptively simple solution. The right history is the one with the most proof of work. So as far as the network is concerned, the correct chain is the longest valid chain available on the network, regardless of what you think you might know about the past. You can't trust the past. Or more specifically, you can't trust others to produce a valid proof-of-past. The only thing you can trust is proof-of-work.

Bitcoin's adherence to this philosophy renders it *eventually consistent*, meaning that the current history you are experiencing might in the future become invalid. The only thing it guarantees is that eventually, everyone will agree. This is nice, in theory, but ideally we'd like stronger guarantees on what's happening *now*.

Bitcoin doesn't deal with now. Its philosophy might be summarized: "look, everything is risky and nothing is certain, but here's how much computational power it would take to fuck you. You decide". The result is individuals and businesses waiting different amounts of time for their transactions to clear, according to their particular risk profiles; there is always an (exponentially decaying) chance of a transaction being revoked by a double spend in a successful fork.

Suppose you're on a blockchain network, and a malicious fork emerges, starting 10 blocks back and gaining steam. Now it's raced ahead of you, so as far as the bitcoin protocol is concerned, it marks the correct history. But clearly its not the correct history. You were there, 10 blocks back, when the real history happened. And now bitcoin is lying to you; naughty, naughty Bitcoin.

## When Bitcoin Forks

[Bitcoin forked by mistake in March 2013](https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki). A block was produced by a new version of the client that triggered a bug on an implementation specific detail of the embedded database library used by older versions of the client. The new version of the client had no problem with the block, and actually exhibited the correct behaviour. So half the network went one way and the other half went the other. And as far as they were concerned, they were both following the rules, quickly becoming oblivious to each other's chains.

A small team of superheros, bitcoin developers, community members, and business humans reacted quickly. They took to Skype and IRC and other lines of communication to figure out and divulge what happened, working quickly to rectify the problem. Within a matter of hours, miners on the "invalid" chain (which in this case were those with the newer version of the client, the ones *without* the bug!) were convinced to downgrade and switch to the "correct" chain, giving up a few hours worth of rewards, which at roughly 150 BTC per hour is substantial.

The point of this story is that real world intervention was required to defend against the inevitable: software bugs. Without the intervention, the chains might have gone on independently. Surely, businesses would eventually find out there was a problem, as some transactions (coming from the other chain) would never be received. Something had clearly gone wrong. If bitcoin is going to survive, it absolutely must be able to handle such circumstances, and the only means it has to do so are through the communications protocols employed by the core developers, and those who control the mining pools and the large bitcoin businesses.

For those who think bitcoin is a wholly decentralized holy grail, this might be a horrifying discovery. Yet it may be equally horrifying to discover that there is in reality probably no better way to maintain the system's security and integrity in the face of honest failure than by engaging trust networks consisting of very few, very highly skilled, and/or very influential individuals. That's kind of just how specialization works.

So here's where bitcoin might be lying to itself. Bitcoin is not just a protocol. It is a fluctuating set of computers running a suite of ever evolving implementations of a relatively stable specification of a protocol, which itself makes no accommodation for a notion of history other than that upon which the greatest amount of computational resources have been expended. The source code of the most widely deployed implementation of the protocol is updated through a voting procedure participated in by a small number of parties at https://github.com/bitcoin and secured by a reputation based security deposit made by the [successor](https://github.com/laanwj) of the [successor](https://github.com/gavinandresen) of the [protocol's inventor](https://github.com/bitcoin/bitcoin/commit/4405b78d6059e536c36974088a8ed4d9f0f29898)

So at the end of the day, while bitcoin might masquerade to be as secure as its hashing power, its security is actually also a function of the activity of a small number of developers and, in some sense, the security of Github's TLS implementation. I might add that just this week, a major security vulnerability yesterday to [git was announced](http://thehackernews.com/2014/12/critical-git-client-vulnerability-allow_19.html), and that TLS implementations are not particularly lauded for their correctness.

## Bugs vs. Attacks

Software bugs are a perennial enemy of the human endeavour, and are impossible to mitigate. The proper approach is diversity, to have many different implementations of the protocol, such that a bug in one does not take down the entire network. This is the reasoning behind [ethereum's](https://github.com/ethereum) drive to produce clients in 4 different programming languages. Of course they are all hosted on one website (for now, but stay tuned for github-like smart contracts storing code in [ipfs](http://ipfs.io)).

The best approach to honest failure is one of prevention through diversity: the more redundant diversity in the infrastructure, the less likely catastrophe becomes. But this is a problem for the meta protocol of the community, surrounding the blockchain. In the event of large scale honest failure, the community must be strong enough to come to an out-of-band solution. And that's that.

Now, while Bitcoin will use all sorts of information to remedy a large scale honest failure by processing out-of-band (i.e., Skype, IRC, Reddit, etc), it has no inbuilt mechanism for resisting proof-of-work based attacks. That is, if a large entity comes online with a **lot** of hash power and launches a 51% attack against the network, rewriting the history of the last N blocks and racing ahead with the production of the next M, there is nothing in the protocol to handle that. A massive simplification at the programming level, a massive headache in the real world. Real history is sacrificed for proof-of-work.

Our blockchain's deserve better than that.

## A Rigid Race to the Bottom

Bitcoin mining is an obscene way to consume electricity. A fascinating trick, perhaps, but surely not a means upon which to base the future of human socioeconomic organization. At the end of the day, ASIC-wars ignite the same sort of careless race to the bottom engaged in by the likes of subsidy driven mono-cropping in food production, or oil drilling. Unprofitable behaviour subsidized by an inflationary currency creating weird economic incentives and distracting us from what's at hand.

Face it, bitcoin is an inflationary nightmare, as 2014 will attest. Its security model is one size fits all and an exponentially decreasing reward means it's harder to pay for security in the future, as countless debates in the space are beginning to acknowledge. In the meantime, bitcoin will suffer all the benefits of being first to the masses, embracing its network effect, embracing us with open arms as the previous financial system implodes and the next one is born. Whether or not it will weather that storm is another tornado altogether. Either way, we have some work to do.

Before I let you go, let's get one thing straight. Bitcoin may be a piece of shit, but she's our piece of shit.

Our little baby nugget of existential freedom and secret insight into the hidden wonders of large scale co-ordination and the future organization of man.

And while her economics may be no better than that of a central bank (at least in the short term), her monetary policy is set not by an oligarch, but by a globally distributed consensus of human-computer interfacing.

She is the internet stepping out of infancy.

A glitter of hope in the twinkle of the political eye.

A sign of things to come.

I love bitcoin.

But I bet we can do better.