---
author: brian
categories:
- distributed business
comments: true
date: 2015-08-19T00:00:00Z
excerpt: Immutability is clearly a critical feature of an electronic cash system like
  Bitcoin. But what about permissioned chains? It turns out immutability is just as
  critical for blockchains providing process assurance.
meta: true
published: true
tags:
- Bitcoin
- permissioned ledgers
- immutability
thumbnail: null
title: Immutability for Bitcoin and Permissioned Ledgers
url: /2015/08/19/immutability-bitcoin-and-permissioned-ledgers/
---

Last week, I gave my first talk about Eris at the [Bitcoin Startups Berlin](http://www.meetup.com/Bitcoin-Startups-Berlin/) meetup. I know most people there so I knew this would be a friendly audience. At the same time, what we do at Eris doesn’t square with the ideologies of some in the Bitcoin space, so I did anticipate some pushback.
 
In the end, it was Jörg Platzer, owner of the world’s oldest Bitcoin-accepting establishment, Room 77, who took the most offense. He was obviously displeased at the notion of permissioned ledgers in general, but the one aspect where he debated me the most was the issue of immutability.
 
I claimed that public blockchains are fairly immutable. True, there is the risk of a 51% attack or chain reorganization, but that has happened very rarely so far (at least on the Bitcoin network). But what about permissioned chains? My argument was that immutability varies depending on design, whereas Jörg Platzer insisted they are mutable.
 
<h1>What is immutability anyway?</h1>
But let me take a step back from the technical aspects and look at immutability more generally. ‘Immutable’ means [unable to be changed](http://www.oxforddictionaries.com/definition/english/immutable). In the case of a blockchain, immutability presumably means that it is not possible to go back and rewrite the history. Strictly speaking it is possible to rewrite Bitcoin’s history making Bitcoin mutable. The only caveat is that the attacker has to create a longer chain and that is generally prohibitively expensive.
 
Immutability is an essential trait for Bitcoin. Satoshi described Bitcoin in his [famous whitepaper](https://bitcoin.org/bitcoin.pdf) as a ‘version of electronic cash’. The cash analogy makes it easy to see why things break down when the ledger becomes mutable. If I pay for a coffee with bitcoin, but later the history gets changed and my payment gets reversed, transactions can’t be relied on anymore. If this happened regularly, Bitcoin would becomes useless.
 
<h1>What about permissioned chains?</h1>

Does immutability have similar importance in the case of permissioned chains? Our thesis at Eris is that blockchains and smart contracts will have wide-reaching implications. [Use cases and application contexts will vary widely](https://db.erisindustries.com/distributed%20business/2014/12/17/blockchain-your-business/) as will the designs and capabilities of chains. Presumably, some of these could include assets that are cash-like, where one would want a similar degree of immutability as in Bitcoin. But what about the rest?
 
One way we think about the utility of blockchains, particularly smart contract-enabled ones, is that they provide process assurance. They allow different parties to run a process in a predictable and auditable way with permissions and capabilities being assigned upfront in a transparent way. The benefits of that could include making existing processes more efficient, allowing business relationships to extend to lower trust contexts and enabling completely new applications. Does immutability make sense in that context? Depending on the specific business case, it will be necessary to allow transactions to be reversed on the chain. One can imagine a blockchain tracking real-world ownership. Then it would be essential that some (perhaps the courts of law) have the ability to change ownership on-chain. Otherwise a thief could steal someone’s house by hacking into their computer. Obviously that would have to be prevented.

The great thing about permissioned chains is that who is allowed to do that can be set up at the beginning. Is is a capabilities-based approach. Thus one could assign a court of law and the asset registry the ability to cosign an ownership transfer. 

However, it is clearly preferable if in this case an additional transaction was created as opposed to any record of the previous transaction being erased. The latter would not prevent a corrupt regime from forging ownership records. The former would also not prevent corrupt governments from forging ownership, nothing really could, but it would create a transparent trace of what happened. This could even include the signatures of the officials responsible.

I think this applies to any case where we care about auditability, which seems to be the case whenever we care about having process assurance. Therefore, immutability is of critical importance when smart-contract enabled blockchains are used for process assurance.

<h1>UTXOs versus blockchains with state</h1>

In this post, I didn’t look at the technical aspects of immutability. I’ve differentiated between permissioned and permissionless chains, but another key distinction is between blockchains like Bitcoin that do not have state and smart-contract blockchains that have a state. In the case of Bitcoin, preventing a reorganization of the blockchain is an essential security concern. But in the case of a smart contract chain, we can distinguish between a transaction log (which only has utility as a forensic tool) and the state of the contracts, which is what actually matters to do transactions.

While it’s still unclear where blockchains, whatever their type, will eventually have the biggest impact, having a timestamped and cryptographically verified transaction log will be critical for most applications. This is not an aspect where permissioned and permissionless chains differ.




 

