---
author: casey
categories:
- products
comments: true
date: 2014-12-21T00:00:00Z
deprecated: true
excerpt: Last week Eris Industries launched and open sourced a range of products which
  we think are interesting. We like that they allow us to not only build DApps more
  efficiently and effectively but that they also allow us to perform three distinct
  types of actions on a distributed stack which were not possible before.
meta: true
published: true
tags:
- eris
- thelonious
- decerver
title: Expanding the Range of the Possible for DApp Makers
# url: /blog/2014/12/21/eris-what-is-now-possible/
slug: eris-what-is-now-possible
---



One of the most exciting things about developing software is that one has the capacity to expand the range of what is possible in a real and tangible way. This excitement, I grant you, is not unique to software development as other industries and professions also have the possibility. Yet many others do not. With law, for example, there is often a long delay between when the professional begins work on a particular case and the tangible outcome. However, with software, the feedback loop is tighter.

At times, with software which is on the edge, the feedback loop is almost too tight. We are able to instantly have an idea as to how users and potential users are moving through our content and whether they are converting or not (which for us comes in the form of `git clone`). While there has been a decent amount of discussion as to Thelonious, our blockchain design, we feel that that actually is missing the point which we are trying to make more generally.

Eris, which was released last week in its new form, included a range of components which together provide a suite of tools for DApp makers. In particular, there were three distinct types of actions which DApp makers did not previously have easy access to, but now that they do.

I'd like to take a moment to talk about each of these three and why they are important to us as DApp makers.

### Now Possible: Scripting Attack Vectors

During the DAO Design Jams, and in innumerable other sessions with Tyler and others, we have talked and talked about possible attack vectors which would render smart contract systems vulnerable. These systems should be designed to withstand such attack vectors. However, Tyler always had to keep the attack vectors in his head -- and at a theoretical level -- when he was designing systems.

Yet now, with the addition of Ate's scripting layer, along with EPM's ability to quickly deploy tens or hundreds of contracts and transactions, we now have the capability to instantly deploy a system of contracts and then instantly run a series of attack vectors (either held in *.pdx files or in Ate scripts) against those contracts.

And because of the way in which EPM handles packages, we can not only build scripts representing real attack vectors we can also:

* package them (using either NPM or EPM)
* distribute them (using GH, BitBucket or soon IPFS)
* discuss them
* iterate them

all with ease.

Having scripted attack vectors also lets us run attacks against systems of contracts and compare various components or systems against one another -- all on throw away chains which can be worked on collaboratively in a distributed manner with a Thelonious client. This was not possible before. It was possible in a server based application environment, but it was not available for DApp makers or for smart contract developers. And it is extraordinarily necessary. Especially in systems which are designed to withstand multiple external attack vectors, the inability of DApp designers and developers to properly test against a *range* of attack vectors was -- to us as DApp makers -- a glaring hole.

Not only can developers now script attack vectors, they can also run tests after the attack vectors have been performed (or as they are being performed). Again, this was not previously available. When we built the original Eris POC we had to manually test every single on blockchain interaction. Eventually we built a Ruby interface for handling this. We have extended that into a much more robust testing paradigm which did not previously exist.

Enjoy scripting attacks!

### Now (Well, Soon) Possible: Scripting Consensus

We have not yet fully finished moving consensus into the Thelonious virtual machine. Yet, when we do, what will be possible is to script out consensus mechanisms in the same languages we write smart contracts in. These will then be distributed with a Thelonious chain.

This completely opens up the field for collaborative research into new blockchain technology at the consensus and security level. Researchers no longer need to change the parameters of a consensus mechanism in a client, rebuild that client, and distribute the new client to their fellow researchers. They simply need to change a few smart contracts, deploy the contracts with EPM to a Thelonious blockchain and have their fellow researchers grab the blockchain from a peer server. This makes it significantly easier to advance the state of research into security and consensus mechanisms in a distributed environment.

Not only does this significantly lower the barrier to entry for consensus and security research, but also when combined with scripted attack vectors discussed above, research into various consensus and security mechanisms can actually benefit from having **the exact same attack vectors ran against them** to *measure* performance of various algorithms against other algorithms rather than to continue to *theorize* about performance.

Not only is it possible to now (well, soon) script consensus and run it in a distributed virtual machine, it is also possible to:

* package consensus algorithms (with EPM)
* distributed them
* discuss them
* iterate them

all with ease.

So if you're a consensus and blockchain security researcher, give it a go, and share your work.

Enjoy scripting consensus mechanisms!

### Now Possible: Verifiable Cross Module Actions

The original Eris we built was able to marry a smart contract distribution controller with another distributed technology (at that time torrents) to provide a cohesive application -- admittedly a not very good one, but a POC which worked -- that ran on pure distributed technology. An interactive web-style application running without servers other than a single-core bootstrapping server. It was tremendously satisfying to see a message in a browser window generated by the combination of a return value of a query to a smart contract along with a return value of a query to a completely independent distributed file cache.

With the Decerver we have an even easier, more secure, more flexible, more stable, and more verifiable ability to perform predefined actions across distributed modules. The entire idea of Decerver is to break down the monoliths of distributed technology and provide DApp developers with a cohesive framework in which their applications will be able to take actions across distributed modules.

This has not been possible before now. To explain why we feel this is necessary, let's compare trying to build a cohesive application on distributed technology to a modern web application.

In a web application, the application designers have the ability to use different low level modules to perform different tasks. They are able to rely on message queues, databases, caching systems, and a variety of other components to provide the functionality which is needed for the web application to operate in a cohesive manner. Also, in a web application if its developer wants to change from using one database to another or from using one message queue system to another it will usually take a bit of work but is almost always possible without having to completely rebuild the entire application. In other words, besides a bit of work to actually change the code which calls the database or queuing system (as well as to migrate the data) there was no additional work which would be required if the application was built on a relatively modern web application framework. Certainly the entire application would not have to be dismantled and rebuilt just because one low level module was being changed.

Yet compare that idea to DApp development where flamewars are, well, not infrequent. Where, so help you god, if you say something new about one of the -- ultimately -- low level modules of the entire application stack. We love Bitcoin (the MySql of blockchains). We love Ethereum (the MongoDB of blockchains). We love Counterparty. We love Ripple. We love Thelonious. We love Namecoin (the Redis of blockchains). And we want to be able to use the best blockchain for the right components of our DApps. And we don't want to have to completely buy into one of these ecosystems -- all of which are very young and therefore largely unstable.

These ecosystems almost entirely require vendor lock-in for developers who want to build stuff on their protocol. And this is a problem for DApp makers who simply want to optimize the underlying technology on which their application rests by having choices for the right tools to be able to perform the right task. But also for resiliency of the application. If an application developer is building something on a specific blockchain for a specific reason and that blockchain ends up not being the best fit after a certain time for that developer -- what is the developer to do? There was no tool in existence within the distributed technology space which explicitly sought to be agnostic to the underlying modules.

**This** was why we built Decerver.

What does this mean? It means things like a DApp which we will soon release that will contain an application running on a smart contract backbone, with a BTC payment layer, and a distributed file storage system to disseminate the content *are now possible*. This application will rely on one server operating on one core with 512M of RAM as a bootstrapping peer server; it is built entirely upon distributed, p2p technology with the minor exception of one bootstrapping peer server to avoid the first peer problem. We are not talking about an application focused on small text files here as we were with the first [Eris](https://github.com/project-douglas/eris). We are dealing with the other end of the spectrum file size wise. We hope it will be ready for release in the middle of January, and when we release it, we will fully open source all aspects of this DApp -- from the chain configuration determining the consensus mechanism of the Thelonious instance where part of the application's logic will reside, to the Ate scripts which control the cross module actions, to the attack vectors and tests we used to ensure the DApp was ready for distribution. We will release all of this to the public.

Not only are cross module action scripts now possible, because its just javascript, we can use NPM to:

* package cross platform actions
* distributed them
* discuss them
* iterate them

all with ease.

Enjoy verifiable cross module actions!

### Putting This All Together

See, here's the thing about Eris Industries. Sure we released a blockchain, but to be honest, we built it for ourselves. If others find it useful, that's fantastic; if they do not, then there is no harm to us. We will continue to develop it because we want to; because it is helpful to us. We make no money on Thelonious. We have no direct financial stake it its success or failure -- outside the success of applications which we will build on it. Thelonious' success ultimately depends on the applications which reside on it; whether enough applications use it; and whether a community develops around it. And we have built it and designed it for application developers. We didn't give Thelonious the tag line "The Makers' Blockchain" as marketing speak; we gave it that tag line because its what we believe.

That said, we would love for you to take a look at Decerver. Because whether we are right or wrong about blockchain design, the simple fact of the matter is we are building an application server which will allow people to talk to any blockchain, let me repeat, **any** blockchain, file storage system, or utility. All that blockchain, file storage, or utility has to do is to satisfy a simple interface. This was the reasoning behind #2014MarmotAward as well as #2015MarmotAward (which if you'd like to see a distributed tech as the basis of, please do let us know in the comments, on Twitter, or in IRC).

Decerver is, and will be for a while now, a work in progress. This is a new paradigm. A DApp centric paradigm.

There has not, before, been a suite of tools which was built **for the DApp makers** for all the guys are not core developers of what is, fundamentally a low level, protocol and are not invited to all the fancy conferences, but who, instead, slave away in their distributed garages trying to make distributed things. We are DApp makers, its what we do, its what we love, its what we intend to keep doing.

We have open sourced some tools and we'd love if they helped you make DApps. If they don't then there's no problem; keep doing what you were doing before.
