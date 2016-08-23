---

# fill in
title:     On Tendermint
author:    tendermint
excerpt:   "A short tribute to tendermint and recent proof of stake research"
thumbnail:
category:  CAT
tags:      ["blockchains", "tendermint", "proof of stake"]

---

Tendermint isn't perfect - depending on what you want. 

There's even a side of me that says, asymptotically, Proof of Work might be fine (once devices are close to the thermodynamic limit and ubiquitous). 

But tendermint is interesting because it's so plain.  
It takes a working, [byzantine proof distributed consensus algo (DLS)](), packages updates into blocks, 
laces it all in pretty crypto, and punishes you if you try to double spend. 
At least 67% of validators are required for the consensus to make any progress and it has no shame in that; 
its simplicity means there is today a working codebase (alternative proof of stake systems will be more difficult to program and test);

Besides, a working opinionated tendermint is a base upon which we can start to innovate. 
We can experiment with alternatives to the round robin using cryptoeconomically secure prngs. 
Who knows, maybe the probabilities can be such that someone with out any coin can get a chance to mint a block every thousand. 
It could also help with partitions - suppose, if the network detects its partitioned, and some validators on one side sign off on that fact, 
then the chances for people who aren't bonded to be a valid proposer goes up, so people who aren't bonded can provide availability in 
real-time if necessary (this would buy us the same advantages that we might get from using GHOST, ala [Vlad Zamfir]()) . 
Maybe that's crazy, I need to think about it more.

We can also adjust the 67% requirement straight up, at the risk of increased attacks, 
but with sufficient analytical tools it may be possible to have an "emergency mode" which establishes a 
real-time non-deterministic fork-choice rule that makes the network more resilient. 

The point is tendermint is a foundation with very simple and clear guarantees that has a working (and elegant!) codebase 
from which we can experiment further. 

A problem with some of the latest research is that it studies cryptoeconomics in an isolated universe where there are no other economics and where P=NP (except crypto). 
Such is justified for a mathematician, and in concerning for our distant future, where by some shamanic mathemagic 
P will equal NP except for crypto and people will no longer need to eat food or build stuff with, like, matter.  

But in the meantime there's a focus on trying to figure out what the best meaning for each word is, in a hyper pure context, 
and some seem to have discovered that bashing tendermint is a helpful way to illustrate the contrast between designs, because, like, is or isn't tendermint a blockchain? 
I think my [on-blockchains]() post gives the most general definition of a blockchain, ie.

1) independent txs packaged in blocks and proposed as updates by proposers under a fork choice rule 

2) incentivized by assets at stake 

3) one database, many distinct cryptographic domains 

4) p2p basis.  

Git and IPFS are hashchains, and git has a non-deterministic fork choice rule called "software engineering". 
IPFS of course nails 3 and 4.  
We could make wild analogies and abstract away all day but they don't really do 1 and 2. 

Tendermint clearly covers all of them, but its almost like it cheats its way through 1 
by using DLS to get classic consensus guarantees and no forks (so it doesn't need to make a choice).  
Which means instead of doing DLS consensus in your datacenter or across a set of nodes all of which you control, 
you can do DLS across a diverse group of entities, and incentivize them to not go byzantine by the cost of slashing. 
That seems pretty great!  

But there's a relevant point about tendermint being centralized - it is *different* from bitcoin and flying fox and casper because of its fixed round robin scheme, 
which means you can't lose all the keys and still start up again (which some have taken to be the *definition* of decenetralization). 
Ok, well why would you care to do that anyways! If all the bitcoin keys were lost, bitcoin would have no value, and no one would care to recover that
particular chain.
And anyways, as mentioned, we *can* experiment with proposer mechanisms, once we've got clients hooked and we're making moneeeyyyyyy :D

