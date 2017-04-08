---
author: zach
categories:
- philosophy
comments: true
date: 2016-03-02T00:00:00Z
excerpt: Sensible Blockchain Stacks
meta: true
published: true
tags:
- eris
- tendermint
- consensus
- application
- web services
- blockchain
title: 'On Eris and Tendermint: Application and Consensus'
url: /2016/03/02/eris-and-tendermint/
---

<div class="note">
	<em>Note: since this blog post was written, we have changed our name to Monax Industries and will be changing the name of our product to "Monax" in early 2017. We have left these posts unedited for the purposes of historical record, as the software was named Eris at the time.</em>
</div>

At Monax Industries and Tendermint, we're often asked: "what is the difference between Eris (Monax Industries' software) and Tendermint?"

Apart from being two different companies and two different products, the simple answer boils down to application and consensus.

Eris:db is the application layer for blockchain applications. It's the backbone for deploying and interacting with your application logic.

Tendermint is the consensus layer. It's the engine that drives your application, once built, forward in time and keeps it in synch.

As an application layer, Eris:db has opinions about what a blockchain should look like. As a consensus layer, tendermint has opinions about how the consensus should operate.

It is much like the difference between Wordpress (a content management platform) and Apache (a web server); Wordpress is an application platform that has opinions about how to tie together PHP/node & MySQL. Apache is a web server that has opinions about, well, doing what servers do.

Some developers build custom applications with Wordpress. Indeed, Wordpress makes it easy *by making assumptions for you*. Others might not like these assumptions and thus build applications from scratch that talk directly to Apache. Don't like Apache? Use Nginx with Wordpress instead. Don't like Wordpress? Go and use Liferay or Zotonic. As separate modules, the developer has choice and flexibility.

{{< image_blog "eris-tendermint.png" >}}

Admittedly, the analogy's not a perfect one - in our view, a content management system such as Wordpress is really more like `eris:db`, whereas `eris` the CLI is a more comprehensive blockchain application and database management system.

This is where, in case you haven't already noticed, eris is all-in on [Docker](https://www.docker.com/). In the future, this will allow eris:db to plug into any type of consensus. Additionally, eris:cli should simplify the workflow of developing a Tendermint chain *sans* eris:db, over [tmsp](http://tendermint.com/posts/tendermint-socket-protocol/).

Another way of looking at it might be the difference between an empty toolbox and a Swiss Army Knife. Tendermint gives you a really nice toolbox. You can take this box and put whatever you want in it, and the box will keep your [stuff](https://www.youtube.com/watch?v=jl17CYYSzUw) together and let you get on with the business of building your useful application.

Eris, by contrast, gives you a ready-to-go Swiss Army knife with plenty of useful tools and services (including BigChainDB, ZCash, Bitcoin, Ethereum, OpenBazaar, Tendermint, and ErisDB). Some you might not want, so don't use them. If you want new ones added, take off the baseplate and add the new tool. And since eris:db may not suit your purposes, building a chain that talks directly to Tendermint core over abci might be what you want.

Either way, eris:cli is intended to make running both eris:db and Tendermint simple. If it isn't, please take to [twitter](https://twitter.com/monaxHQ) and tell us what you'd like to see.

We made these design decisions because [proof-of-work consensus makes zero sense](http://cointelegraph.com/news/proof-of-work-proof-of-stake-and-the-consensus-debate) for enterprise blockchain applications.

#### Marmots and mint

{{< image_blog "marmots-and-mint.jpg" >}}

Monax Industries' relationship with Tendermint started shortly after we released our Alpha product in December of 2014 (thelonious/decerver), where we'd forked Ethereum, ripped the guts out of its consensus and replaced it with a bunch of smart contracts in order to create Eris:DB's predecessor - a design that was, the first (and for about six months, the only) permissioned blockchain in existence. Those of you who have been following the company for some time will remember we initially called it "Thelonious."

But a fork of an existing proof-of-work design was not going to cut it for us. So Ethan went searching for an alternative and about two months later, he stumbled on Tendermint.

*"Byzantine Fault Tolerant consensus. With Proof-of-Stake."*

"Awesome," thought Ethan. Shortly thereafter Monax Industries and Tendermint began collaborating on the Tendermint codebase and, over the next few months, [eris:db](/platform/db/) was born.

#### Towards modularity

Intimately linked to [tendermint consensus](https://github.com/tendermint/tendermint/wiki), eris:db has a handful of application state features which reside over and above the consensus layer. This lack of modularity is certainly not ideal, as Casey elaborates [here](/2015/12/31/on-blockchain-clients-in-2016/), so we began working to refactor Tendermint.

Although we didn't know it, things were heading this way for awhile. It was a particularly memorable night in Tel-Aviv during marmot dev retreat this past fall where Ethan laid it all out for me.

From the tips of his fingers the very next day:

[*On Applications and Consensus*](/2016/02/22/apps-and-consensus/)

The tl;dr (though you should definitely read it!) for the above is: Two separate processes. Two separate states. Choose your application. Choose your consensus. And because consensus is at a lower level, it is perhaps (in some cases - not others) more important to get right.

It's through that lens that we announce today, with mixed emotion, that Ethan will be leaving Monax to co-found Tendermint as CTO. Much like the codebase is being refactored, so are the companies. And we'll certainly be crossing paths again. Indeed, we've known each other for 5 years, lived together for 3, worked in the same research lab, and have pretty much been shooting the intellectual shit since we first met. And after I dropped out of grad school (because, you know, [Bitcoin](https://www.youtube.com/watch?v=ru-Z5kvd9js) ), he taught me how to code. Bitcoin is cool, no doubt (decentralized money and all), but when it comes down to it, the most exciting aspect of this technology is a plurality of chains with a plurality of consensus'. And the ongoing refactor (see again [On Applications and Consensus](/2016/02/22/apps-and-consensus/)) will help achieve this goal.

Although this ongoing transition has been a looming burden on several of us, I'm actually quite excited for what the future will bring. Even more so following the week Ethan and I spent in San Francisco with Jae and Dustin prior to [The Block Chain Conference](http://www.theblockchainconference.com/). We discussed at length the distinctions described in this post which should, moving forward, clarify the entrypoint for both developers and business folk looking to build out blockchain applications. I'll offer another analogy: Monax is a mechanic shop (read: Formula 1 pitstop) with most parts of the car built for you and Tendermint is the manufacturer of Ferrari engines. There you have it: application and consensus.

This shift towards seperation of the application and consensus will likely reap many benefits for the crypto ecosystem as a whole. The Bitcoin community is starting to realize this. In the words of [Muneeb Ali](https://medium.com/@muneeb/forking-a-network-86d1b766d38d#.a5k2kajx3):

```markdown
We’ll need to cleanly separate consensus-breaking code from non-consensus breaking code and have formal methods to verify implementations against protocol specifications.
```

So what does this look like from a technical perspective? Bear with us as the design considerations are being fleshed out. Pictured below is an early conceptual overview of how we view the interaction between the various components. We'll have more to say about this in the coming months. Stay tuned!

{{< image_blog "eris-chains-overview.png" >}}

How does this fit in with the various components of the stack you already know and love? Awhile back I [tweeted](https://twitter.com/cerebralbosons/status/682691657473503233) a first pass on visualizing the stack as a whole. Here's v2 with a few little additions. With all the moving pieces involved, it ought to be clear why docker is the right choice, despite the pain points.

Not much will change on the UX of eris:cli, other than additional modularity when it comes to consensus, i.e., ability to "plug into" whichever consensus you'd like. This'll allow for much greater experimentation moving forward, as we "transition from first-generation blockchain tech to second-generation blockchain tech" to paraphrase IBM's John Wolpert keynote from the conference mentioned above.

The marmots are excited. Are you?

{{< image_blog "eris-stack-v2.png" >}}
