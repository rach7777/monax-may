---
author: Monax
categories:
- explainers
comments: true
date: 2016-02-22T00:00:00Z
excerpt: Application and Consensus Modules
meta: true
published: true
tags:
- eris
- tendermint
- application
- consensus
- bitcoin
- amazon
thumbnail: null
title: On Applications and Consensus
# url: /blog/2016/02/22/apps-and-consensus/
slug: apps-and-consensus
---

Bitcoin appears to have introduced something new to the world. The question is, what? The term "blockchain" will be entirely useless to our discussion, so let's dispense with it, for now. Instead, let's treat Bitcoin like any other internet service. It has an application state; in this case, a currency. It has a mechanism to maintain this application state; in this case, a digital consensus engine. What is unique about bitcoin is the relationship between its application state and its consensus engine.
Almost every major internet service uses a digital consensus engine to support an application state. By application state, we mean any form of application and the set of state transitions it undergoes, be it file sharing, social media, online banking, or financial trading. By digital consensus engine, we mean a network protocol that permits a set of computers to synchronize updates to their state. A digital consensus engine allows an application to be replicated across multiple machines without getting confused.

Most digital consensus engines are based on a form of the Paxos algorithm. Some might be built on other fault-tolerant algorithms designed over the last few decades, with varying tolerance for various forms of fault. In all these cases, the agents (nodes/machines/peers/participants/whatever) of the consensus are involved in rounds of communication which enable them to determine what information is available to other agents, and thereby come to unanimous agreement on what the next entry in the transaction log should be.

Unlike other internet services, Bitcoin sought an alternative approach to the consensus problem. In particular, Bitcoin introduced an economic solution whereby consensus is updated not according to the particular information available to other agents, but according to the *cost* of producing whatever information is found to be available to them. This is the notorious Proof-of-Work (PoW) algorithm.

What really makes Bitcoin possible, however, is a unique coupling between the application state and the consensus engine: Bitcoin bootstraps its consensus using the very application state the consensus is intended to support. In other words, it uses the application state to directly incentivize the cost of consensus, by providing new currency units to agents able to prove that they incurred some cost on behalf of the network, and are thereby eligible to be leader of a consensus round (approve a block).

This is in sharp contrast to every other known internet service, where incentivization takes place outside the application state; typically, the application state is something useful to users, producing a revenue stream for a company which thereby funds the maintenance of hardware/software/network-links that sustains the consensus supporting the application. **That is, there's a third entity, a company, mediating the relationship between consensus and application.**

In Bitcoin, tight integration between application state (the currency) and consensus (the economic solution to which is bootstrapped by the currency), without a third party mediator (a company), results in a system where *every state transition is recorded in the consensus engine.* Furthermore, each change is accompanied by digital signatures (elliptic curve) and data integrity checks (merkle trees). The recording of every change and its cryptographic verifiability are necessary so that, in the absence of a company, any user can confirm that the consensus is where it should be by re-running the entire history.

This is an enormous overhead not incurred by a typical internet service; Amazon's consensus engine is far too expensive and slow to record, consistently, every single change made to your shopping cart. Besides, we trust Amazon, because, at least in theory, if they mess up they lose our business.
So Amazon provides a shopping cart that is always available for new writes, even conflicting ones taking place across a network partition. Recording each such write in the consensus engine, in a manner which demanded consistency (as typical consensus engines do) would make the shopping cart experience unbearably slow. The consensus engine is thus interested only in "more important" state transitions; perhaps initializing shopping carts for new accounts, following through with payments, scaling up the number of hosts offering the shopping cart service, etc. Things far removed from the actual user experience.

In principle, then, Bitcoin and the Amazon shopping cart are the same: internet services with an application state supported by a consensus engine.
The key differences are two-fold:
    1) bitcoin bootstraps the consensus by incentivizing it through the application itself
    2) every single state transition in bitcoin is recorded in the consensus engine

Of course, everyone is most excited about a consequence of the first difference, namely, that the agents of the consensus engine may be a decentralized group of peers, rather than the pawns of Jeff Bezos. But the second difference suggests a means by which socioeconomic systems can standardize
the production and verification of assurances over the existence and integrity of data and the execution of programs which use and update that data.

Ok, so if Bitcoin is an application (currency), where every change is recorded and cryptographically verifiable (through merkle trees and digital signatures), and where the consensus is incentivized by the application itself, in a manner which is tolerant of malicious behaviour, what's a blockchain?

Algorithms tolerant to malicious or arbitrary behaviour by their agents are known as Byzantine Fault Tolerant (BFT). BFT is notoriously expensive and most approaches are impractical.  But beginning in the late 90s, a class of so-called Practical BFT (PBFT) algorithms were discovered, which, combined with efficient cryptography and faster machines, yield production quality optimally fault tolerant byzantine systems.

Hence, Bitcoin can be summarized as an application where: 1) every change is recorded with digital signatures in a merkle tree, 2) networking is done in a peer-to-peer manner using a BFT consensus protocol, and 3) the guarantee of consensus derives from economic incentivization bootstrapped by the application.

Let us define a blockchain then, as BFT + merkle trees + digital signatures + p2p, and say that Bitcoin is a blockchain that uses an economic solution to the BFT consensus.

Now, Bitcoin became popular because of its censorship resistance, its immutability, its transparency, and its privacy. A blockchain alone can provide transparency and privacy, but without an economic element to the consensus, it is arguably impossible to provide censorship resistance or immutability. That being said, virtually every use-case of blockchain proposed today has, at least,  a meta-economic element which may contribute to these properties, if only the consumers and clients demand them. Of course, that is arguably the situation with all modern business and the very notion of competitive markets; the difference is the lack of transparency. The use of merkle trees, digital signatures, and peer-to-peer networking allows diverse sets of agents to record pieces of a transaction log's history, and bring them to light as cryptographic proof in the event of wrong doing.

It should be immediately apparent that such an arrangement of technologies, tweaked along their degrees of freedom (the consensus protocol, the economics, the application state and its cryptography, the relationship between economics and application state), will yield a versatile set of important networked systems, in particular for the coordination of consortia of organizations, and especially for governance. However, it is critical that we are able to adequately experiment with the components, and that we have the right toolsets and software architectures to do so.

For this reason, we have introduced a new blockchain architecture, which makes explicit, at the process level, the distinction between the consensus engine and the application state. That is, the application and the consensus engine run in separate processes on the operating system, and communicate with each other via a simple socket protocol. This architecture is similar in spirit to that which has been used to serve websites on the internet for decades, namely, by having an http server and the actual web-application in separate processes: requests are received by the web server, filtered, and forwarded to the application. Our blockchain design is no different, except that the server component is replicated across many nodes and achieves consensus on a request before it is forwarded to the application state. Hence, we can easily write blockchain applications in any programming language, while the networking, consensus, and blockchain storage is all handled under the hood.

Ethereum, of course, pioneered the notion of arbitrary applicate state on a blockchain. But they did so within their own sandboxed and somewhat cumbersome virtual environment. Our new architecture breaks the shackles of the ethereum virtual machine, allowing developers to use the programming language and tooling ecosystem that works for them.

To read more about the socket protocol underlying the new architecture, see [the tendermint blog](http://tendermint.com/posts/tendermint-socket-protocol/). And stay tuned for updates on new applications!
