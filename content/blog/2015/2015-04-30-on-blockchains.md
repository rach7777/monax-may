---
author: Monax
categories:
- blockchain
comments: true
date: 2015-04-30T00:00:00Z
excerpt: "In this post Ethan explores Monax's definition, as well as the greater relevance, of some of the use cases of that most remarkable piece of technology: the
  blockchain."
meta: true
published: true
tags:
- blockchains
deprecated: true
title: On Blockchains
# url: /blog/2015/04/30/on-blockchains/
---

Much digital ink has been spilled over the past couple weeks concerning the relevance, necessity, use cases, and definition of that most remarkable piece of technology: the blockchain. Much of it was perhaps provoked by the [cuddly marmoteering of our very own Marmot Byrne](https://twitter.com/prestonjbyrne/).

To be honest, I think we could all benefit from a little more cuddly marmoteering in our professional and working lives, but I'll be the first to admit that a cuddly marmot may not quite know exactly what he is talking about all the time ;)

So let's cut to the chase. Blockchain-like datastructures innovate in at least three distinct ways over their classical database counterparts:

1) They emphasize a fork choice rule to resolve consensus conflicts via a schelling game wherein a co-ordinated choice is motivated by some value at stake.

2) They emphasize the use of public yet distinct administrative domains within a single database secured by collission proof assertions over hashes, timestamps, and digital signatures.

3) They emphasize formal internet protocols built above TCP/IP that act as alternatives to HTTP to enable enhanced peer-2-peer support for commerce, publishing, legal process, and other forms of socioeconomic and political co-ordination at global scale.

The introduction of these three emphases simultaneously in a single package in early 2009 in the form of Bitcoin was undoubtedly a historic event. Most discussions tend to revolve almost entirely around `(1)`. But there's more happening here. Let's unravel them a bit, beginning with `(2)`.

### Emphasizing Distinct, Public Administrative Domains Within a Single Database

On the surface, `(2)` is nothing special. Pieces of the idea have been around for decades in the form of PGP and software checksums. But the tooling is notoriously difficult to use and there is little motivating the uptake and development of the tools other than the committment of the [cypher punks](https://en.wikipedia.org/wiki/Cypherpunk) on the one hand, and the [spooks](https://www.nsa.gov/) on the other.

The way a blockchain uses these primitives to divide the state into explicit administrative domains, each controlled by scripts validating cryptographic assertions about the kinds of state transitions they are permitted to carry out, recasts the story of permission systems from concentric rings to a more fine grained and arguably more secure [capabilities based approach](https://en.wikipedia.org/wiki/Capability-based_security).

If blockchains do anything, they introduce a re-tooling of the basic crypto primitives and motivate a whole new flurry of research into their analyses, implementations, and further application. This is a welcome breath of fresh air. If we end up dropping `(1)` and `(3)` but manage to make the global professional culture more cryptographically competent then the human species has gained tremendously; hallelujah.

### Emphasizing Formalized Protocols Built on TCP/IP for Enhanced `p2p` Support

Onto `(3)`. Work on this goal has been underway for much shorter time than `(2)`, though it has seen particularly explosive interest in the last few years, with a flurry of new protocols and tools for distributed computing. While `(3)` has traditionally enabled decentralized storage and retrieval, most protocols built to address this goal have been unable to maintain a decentralized index of the data it makes available -- hence the trouble with the Pirate Bay. The problem is solved almost trivially by `(1)`, and becomes enormously more mature with the further addition of `(2)`.

If you don't know what I mean, you should **consider the way Monax built [2gather](https://github.com/monax/2gather), a distributed video sharing application we're not allowed to call YouTube.**

Content is hosted on [IPFS](http://ipfs.io/) (a *much* better bittorrent) and references to the content (hashes) are stored in and managed by contracts on a [eris:db blockchain](/platform/db), with user accounts secured by their private key. Since the blockchain is shared state, anyone can see those references, and with the right tooling and design, can understand that they refer to such-and-such a video. A similar application would give you a decentralized Pirate Bay.

Now, to the credit of IPFS, it's actually remarkable how much you can do without even using a blockchain, if you beef up on `(2)` a bit. In other words, you use public keys as indices to the data published by the owners of the keys (they call it IPNS). So you can do decentralized blogging and content curation sites, and even host a personal Pirate Bay. But while the network co-operates for storage and retrieval according to a file blob's checksum hash and/or the uploader's public key, it does not co-operate to process a sequence of transactions, and has no conception of a shared state machine. This is of course the meat and potatoes of `(1)`.

### Emphasizing a Fork Choice Rule

`(1)` has a long and troubled history that dates back to an obscure form of [ancient Greek parliamentary decisionmaking](http://research.microsoft.com/en-us/um/people/lamport/pubs/lamport-paxos.pdf) that, after being reconceputialized in the late eighties by [Leslie Lamport](http://research.microsoft.com/en-us/um/people/lamport/pubs/pubs.html), would go on to become the foundational consensus algorithm for distributed databases in industry - namely, [Paxos](https://en.wikipedia.org/wiki/Paxos_%28computer_science%29). The problem with Paxos is it grew out of a tradition that built algorithms for consensus that begin by trying to get consensus on a single bit.

Hence it's become something of a black art to go from single bit to transaction log, and the ecosystem of consensus software tends to be *ad hoc*, overly complex, and under specified.

A couple years back, Paxos was revisited and reformalized from scratch with an explicit goal of understandability, leading to a simpler and more understandable consensus algorithm called [Raft](https://raftconsensus.github.io/), of which there are by now dozens of implementations. The key is this: "If a series of decisions must be made, it is simpler and faster to first elect a leader, then have the leader coordinate the decisions." In typical Raft, if the leader never goes down, then he can persist potentially indefinetly, making it vulnerable to Byzantine behaviour.

So a blockchain takes the added step of having non-deterministic quasi-leaders that propose a "block" of decisions at once, and fuzzes the certainty of their election by a fork choice rule, allowing their decisions to potentially be reverted or ignored. So the whole matter then becomes a question of fork choice rule.

Satoshi's brilliant insight was that he could turn the fork choice rule into a schelling game by requiring proposers to commit proofs of expenditure of electricity along side their proposals for the next set of transactions. The expenditure creates a major opportunity cost to not doing the "right" thing, and so convergence on a single history is rapidly achieved, namely, the one with the most expenditure.

Furthermore, the expenditure is motivated by a reward, in the form of both inflation and transaction fees. Presumably, if it wasn't, it wouldn't be done. Or perhaps it would be, but not nearly at the scale at which mining occurs today.

### Blockchains Without Valuable Tokens

So the point is really this: Satoshi introduced two distinct innovations to consensus science in 2009 (the two halves of `(1)`)): a leaderless election via blocks and fork choice rules on the one hand (ie. a blockchain), and an economic solution to the consensus problem on the other.

The former, alone, creates systems resembling Raft, but promises greater availabity (at the expense of some consistency),
while the latter enables political decentralization of the consensus. This distinction is expounded further in an upcoming publication on the reformalization of consensus science by [Vlad Zamfir](https://twitter.com/VladZamfir). But furthermore, by employing `(2)` and `(3)`, blockchains promote a culture of openness and transparency, and offer far superior potential for auditing and evidencing malfeasance within and across businesses and sectors.

Consider the boost to fair legal process: on a blockchain, no evidence is inadmissable. If the end result of currency-less blockchains in private enterprise is that more evidence is able to be brought to trials to prove particular malfeasances (and thus the perpatrators have a higher chance of paying for their crime with more than a slap on the wrist), hallelujah.

I don't think it's difficult to imagine how multiple businesses might spring up to cater entirely to those last two sentences.

At the end of the day, some still feel like this is all nonsense, and blockchains will have limited applicability outside of politically decentralized currencies, mostly because of their overhead, and the drain in efficiency. Perhaps. But consider this: democracy can be orders of magnitude less efficient at governing large bodies of humans than hierarchical dictatorships, but for one reason or another countries continue to turn to democracy (granted, weak forms of it) rather than dictatorship because of the kind of culture it produces. Blockchain technology may have a very similar impact on humans: even though they are less efficient than their counterparts at the typical things their counterparts were optimized for, they impose new structural paradigms on human interactions that may be valuable in and of themselves, regardless of the performance of the database, and especially if they result in human behavioural patterns that make culture as a whole more efficient.

That's really what we're in it for.

So instead of saying "do this and we'll pay you with a new construction that exists so we can pay you", we could say "do this because doing it contributes to a shared good", like bittorrent seeding or running Folding@Home or SETI@Home. Apparently, for a bitcoin maximalist, that's blasphemy.

Meh. I prefer to think of blockchains as platforms for experimenting in shared goods. Shared-Goods-Infrastructure-as-a-Service, if you will.

So if you don't think blockchains will be useful without a bitcoin, that's fine. Just please get out of our way while we sneak the underlying principles of openness, transparency, and collaborative decision making into the rest of society.

Cheers.

