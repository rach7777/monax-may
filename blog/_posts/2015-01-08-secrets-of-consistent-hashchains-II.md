---

title:          "Secrets of Consistent Hashchains II: History on Deposit"
layout:         post
published:      true
comments:       true
meta:           true
author:         ethan
category:       blockchains
tags:           [blockchains]
excerpt:        "A blockchain is a silly sort of a datastructure designed to keep thousands of computers in sync while providing a useful service that is not controlled or owned by anyone in particular. Read more of Part 2 of Ethan's blockchain tome here."

---

## Preface

Some members of the community have (rightly) taken issue with my use of the term `eventual consistency`, as it has a well-defined formal meaning in computer science and I am abusing it here. However, as this is an informal expose and not a formal technical document, I will continue to abuse this term, since it has a semantic convenience that roughly expresses a proof-of-work blockchain's philosophy of history.

I also find it rolls off my fingers more elegantly than `strong probabilistic guarantee`.

## Agreed (Eventually)

In a [previous post](https://eng.erisindustries.com/blockchains/2014/12/22/secrets-of-consistent-hashchains-I/), we explored the first secret of distributed hash chains: a consensus that hinges on proof-of-work gives you an eventually consistent history. Notwithstanding the obvious inefficiency and tremendous expense incurred by a perennial drive to do a useless computation as absolutely fast as possible, proof-of-work based systems are utterly impervious to what any sensible individual might consider a reasonable definition of history. That's what we mean by eventual it's a history written (or re-written) by whatever ends up being the most work, regardless of what *actually* happened.

In fact, what *actually* happened is exactly the matter at stake here. The whole point of a blockchain is to **establish agreement on a canonical ordering of a set of transactions**, on a timescale that is on the order of the expected network propagation delay, which as at least an order of magnitude or two greater than that of the transactions themselves.

Blockchains achieve this by assigning someone (possibly multiple people, if it is not well designed) every so often, by way of structured random lottery, to the task of deciding on the ordered set of transactions to appear in the next block, and employing a set of rules to allow others on the network to determine if the proposal is valid. At each step, the ideal is for the network to make an atomic decision about what happened next in history. Bitcoin is a first approximation to this process.

The [Blockstream](http://www.blockstream.com/sidechains.pdf) team introduced the term *Dynamic Membership Multi-party Signature* (DMMS) to describe the cryptographic object resulting from the process of block creation and validation that is a blockchain (more specifically, its headers). Over time, participants in the network *sign* the history by solving a partial hash collision, effectively endorsing everything that came before it and adding a new set of entries to the history.

What this means is that a blockchain itself is really a kind of collective signature, whose membership (the signatory `in-group`) is sampled repeatedly from a fluctuating distribution of resources allocated in the network; or *a never ending computation in which a group of humans produces a cryptographically signed account of history*.

## From Forks to Knives

### Why should our record of history, our collective signature, ever be re-written?

History changes all the time in the real world, whenever an accountant cooks the books, or $60 billion goes missing from a federal budget, or when a mistake is just simple human error. In a blockchain, history changes when a fork emerges and becomes longer than the original chain. So if we want to protect our collective history, we need to protect ourselves from forks.

In an ideal proof-of-work (PoW) system, embedded in an idealized socioeconomic circumstance, where every single internet enabled device might be able to participate at a proportionally equivalent level, we could possibly avoid malicious forks altogether. If we could embed proof of work at the very heart and fabric of the economy such that for all intents and purposes it was simply not possible to mount a 51% attack, then maybe PoW would work. Good luck figuring that one out! I suspect we're at least 50 years and a couple nanotechnology breakthroughs away from anything like that.

**In the meantime, cryptosystems are here now, complete trustlessness is a facade, and we're already dealing with an energy crisis we don't need digital money to create another one.**

### What to do?

A key part of the problem, if you'll recall, is the lack of a secure proof-of-past. But there *were* computers online who experienced the past, the real history. If only there were some way for those computers who *saw* the *real* history to punish those who try to create competing histories.

**Cue, the knife.**

An essential principle in the design of successful cryptoeconomic protocols is to *be slightly fascist*. So the most natural thing to do, at least for a cryptoeconomist, and as [suggested first](https://blog.ethereum.org/2014/01/15/slasher-a-punitive-proof-of-stake-algorithm/) by perhaps the [world's best cryptoeconomist](https://blog.ethereum.org/author/vitalik-buterin/), is to randomly select potential block signers, and allow them to participate in the DMMS only if they put up a security deposit and sign the new blocks with the key to that deposit. That way, if the signer ever signs off on a fork, anyone else can produce a proof that the key signed two competing blocks. So we can punish the signer by slashing his entire deposit, and incentivize the act of providing evidence by giving some of the slashed deposit to the witness. In the legal world, this is exactly how we incentivize whistleblowing litigation -- which when you think of it is not unlike what we are trying to achieve in the cryptoeconomic realm. Such an approach, of slashing deposits and giving to the "witness", is known as *Slasher*, and has begun to see [renewed interest](https://blog.ethereum.org/2014/10/03/slasher-ghost-developments-proof-stake/), including a recent implementation in the form of a new blockchain protocol, aptly named [Tendermint](http://tendermint.com/).

A PoW-based consensus system provides an [anonymous byzantine consensus with security derived from moderately hard puzzles](https://socrates1024.s3.amazonaws.com/consensus.pdf), as a function of its difficulty. If you can solve the puzzles faster, or can offer the computational power for solving the puzzles as a service that benefits from economies of scale, it's easy to see how the network's security can be compromised. On the other hand, a security-deposit-based consensus provides something more like semi-anonymous byzantine consensus with security derived from moderate wealth at stake, where an attack costs at least half as much as the total capital on deposit, since as soon as we detect a fork, we slash deposits of everyone who double signed. Half the capital on deposit can be much greater than the cost of controlling half the network's hashing power, provided the market cap of the chain is sufficiently high. As of writing, the [cost of attacking bitcoin](http://www.coinometrics.com/bitcoin/brix) is around $500 million while its [market cap](http://coinmarketcap.com/) is nearly 10 times higher.

## Staking out History

Consensus based on security deposits draws on an even earlier proposal known as proof-of-stake (PoS). In PoS, the number of times you get to participate in signing a block is proportional to the amount of coins (tokens, stamps, whatever the stake metric is) you have within the network. The problem with such a proof-of-stake system, however, is that it does not even offer eventual consistency in the event of a fork; everyone can still commit blocks on both chains, so there's no reason for one chain to win out over the other. Slasher solves this by punishing those who fork.

Critically, however, Slasher only works in the short term: once a security deposit is returned (it has to be returned, and fees paid upon it, otherwise no one will put it up in the first place), the signer has nothing at stake, so he cannot be punished by the protocol, and is thus free to go back and start a fork from before he had stake on deposit. Call it the long-range-nothing-at-stake attack (LRNSA); it is a fundamental, possibly insurmountable problem for proof-of-stake systems.

So how does this work? First, suppose everyone is online all the time (ridiculous, but work with me). We can simply make a rule that says: "forks that start before the current deposit period are invalid." Since everyone is online, those who create short term forks will be slashed, while those who create longer term forks will be ignored. We can soften the rule by using what Vitalik calls [expontential subjective scoring](https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/) instead, where the score of a fork according to a user decays exponentially in the difference between the height it starts at and the current blockchain height according to that user. This effectively stifles the LRNSA, *so long as* users come online at least as often as the length of a deposit period (which can be on the order of weeks or months, possibly years).

However, some might appreciate the freedom of being able to go offline for longer. In particular, as my [crypto-grandma](https://twitter.com/leashless) put it while discussing proof-of-stake with [Vlad Zamfir](https://twitter.com/VladZamfir) and I, "If your currency breaks because the internet went down, you didn't do a good job."

For bitcoin, which remember is a pure PoW system, if the internet goes down, or is partitioned, we know what happens when it starts up again or the networks reconnect: whoever ends up with the longest branch is the winner.

Woopdee-doo for bitcoin.

In a stake-based system, however, there is much greater opportunity for mischief, and the possibility that the network consensus is forked -- for good. In the meantime, **the fucking internet went down**, so there are clearly very serious issues that need to dealt with, by humans, almost certainly at an [engineering level](http://www.itnewsafrica.com/2012/02/east-africas-cut-internet-cable-causes-disruption/), probably at a [political level](http://techcrunch.com/2014/12/31/indian-government-censorsht/), and with any luck at a [cultural level](http://edition.cnn.com/2014/03/27/world/europe/turkey-youtube-blocked/) too. So maybe if the internet goes down, we take a deep breath, put away the blockchains for a minute, deal with whatever ridiculous event has just transpired, and when we get back online, start talking to everyone and figure out where we all left off last.

I bet we'd pull it off just fine.

If you don't think that sounds particularly promising, I don't blame you. Maybe proof-of-work is the only way to guarantee consensus in the face of the internet going down. Proof-of-work just works, if you will. But only because it doesn't care about *real* history, only whichever group of shmucks managed to do the most work. Maybe there's something better we haven't thought of.

In the meantime, this is fun, so lets continue with Slasher and Proof-of-stake :)

Even while the network is up, but new machines are joining it for the first time, or the first time in a very long time, it is a struggle to bring them up to date securely and trustlessly. If you've been online sometime within the last deposit period, you find some peers and ask them for the current state, *and trust them because there is real money at stake* (this is what we mean by secure -- you can calculate how much it would cost you to lie and to be lied to). This scenario works. *But*, if you have never been online (e.g., you have had no history of or reason to care about the history of this particular dataset), or you have not been online for multiple deposit periods, you have no such security.

## Digital History of an Analog System

So this is where things get interesting, and where subjectivity, trusted third parties, *on boarding*, and out-of-band communication come to the forefront.

Remember our discussion of bitcoin forking from my previous post, and the out-of-band communication that was engaged to deal with it? It's [impressive how much went right](https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki#what-went-right) with that.

So we need to embrace that capacity explicitly as part of our designs; we need to keep better metrics and statistics on our networks; regular broadcast feeds of those metrics on popular media outlets; standardized APIs for using and querying various sets of services to inform an agent's [subjective role in consensus](https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/); [running multiple versions of the software to defend against software bugs](https://blog.conformal.com/the-bitcoin-consensus-red-herring/). education, planning, and fire drills for maintaining resiliency and teaching others about how to respond in the event of a fork.

Real history -- what *really* happened -- is a building that is constantly on fire, and we need to work together to put the fire out.

> At the end of the day, a peer-to-peer (p2p) consensus network is a thermodynamic system evolving its state in the face of adversarial and entropic assailants, like malicious actors and inefficient computation.

The production of heat by high speed hashing is one approach to maintaining the consistency of the state by generating sufficient entropy to thermodynamically justify the organized consensus.

The other approach is to embed additional sensory organs and computational elements into the design of the protocol, to make it smarter, more organized, and vitally (for us) more adaptive to its environment.

Feedback loops and adaptive organs can work toward offsetting the entropic demands of an organized cryptoeconomic system, engaging layers of processing and execution that descend more elegantly down the ladder of energy gradients than an ASIC ever could. Maybe that's more suited as a [secret of consistent carbon chains](http://www.ler.esalq.usp.br/aulas/lce1302/life_as_a_manifestation.pdf) but what are these hashchains if not extensions of our collective biology?

Riiiight.

Finally, another approach to the long-range-nothing-at-stake problem, as suggested and endorsed enthusiastically by our dear Vlad Zamfir, is to have blockchains last only as long as their security deposit period. This becomes the kernel of a fascinating approach to multichain technology.
