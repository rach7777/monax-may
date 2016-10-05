---
author: casey
categories:
- eris
comments: true
date: 2016-06-05T00:00:00Z
excerpt: Why they're applications which run on an ecosystem level, aka, the entire
  point of the exercise.
meta: true
published: true
tags:
- value
- eris
- ecosystem applications
thumbnail: ecosystem_applications.jpg
title: What are ecosystem applications?
url: /2016/06/05/ecosystem-applications/
---

[{{ printf "/images/blog/%s/%s" .Page.Now.Year "ecosystem_applications.jpg" }}](https://www.flickr.com/photos/frenchy/4469177031/)

**You've been warned.** This is a long piece. Come back to it when you have some time.

A special thanks to all those who helped shape and mold my thinking in this area. You (mostly) know who you are.

## Introduction

I knew Anthemis would be a wonderful fit for our company the moment that Sean Park, one of its Founders, started talking about ecosystems; which was, IIRC, the first day I met him. Sean is a believer in ecosystems and networks as a way to achieve scale in the information age where bigger `!=` better.

For my part, I've also long been a believer that being able to understand how ecosystems operate, change, and evolve is the differentiating skillset necessary to achieve success within environments where levels of complexity are high. And information age economies have a `lot` of complexity.

## Context: The Industrial Age => Information Age Transformation

As we continue the march from the industrial age to the information age a number of things are starting to matter less than they once did and a number of other things are starting to matter more than they did before. The tectonic plates of globally-focused businesses, digital nomads, and information abundance have combined to massively transform a range of industries already and are hardly finished.

These changes, which will take a generation or two to fully play out (much less to fully understand), originally powered the first generation of collective process management tooling which was focused on providing the base business process automation for a given **enterprise**. This generation of tooling, led by companies like SAP, Oracle, and others, effectively leveraged economies of scale over data and data processing power which on-premise data centers could provide. This generation of software emphasized the enterprise as the center of the universe. Or, something like this:

{{ printf "/images/blog/%s/%s" .Page.Now.Year "Bartolomeu_Velho_1568.jpg" }}

These same changes later powered the second generation of collective process management tooling which is focused on extending the benefits of software defined process automation into **smaller businesses**. This generation of tooling, led by companies like SalesForce, Xero, Github, and others, effectively leveraged economies of scale over data and data processing power which IaaS systems could provide (until they eventually needed their own data center). This generation of software emphasized the "App" (or, latterly, the "Platform") as the center of part of the universe. Or, something like this:

[{{ printf "/images/blog/%s/%s" .Page.Now.Year "banksy_rat.jpg" }}](https://www.flickr.com/photos/dandeluca/2908872934/)

In our view we are entering into the third generation of collective process management tooling which will focus on extending the benefits of software defined **relationships** for businesses of many different sizes. This generation of tooling, which will be led by the companies we currently label "blockchain" and "smart contract" companies, will leverage the economies of redundancy over data and data processing power which networks of peers can provide. This generation of software will emphasize the "Ecosystem" as the center of part of the universe. Or, something like this:

[{{ printf "/images/blog/%s/%s" .Page.Now.Year "walking_on_trains.jpg" }}](https://www.flickr.com/photos/16210667@N02/11665732305/)

## Small is Hot; Big is Not

In order to move forward with the next generation of collective process management tooling, we need to understand what are the big challenges which businesses face. This requires there to be a marmot-y hypothesis around where business is going. The remainder of this section is my own thesis.

One of the biggest changes which has only just begun, is in the likely reduction in competitive economies of scale for large producers of goods. Increasing equalization of labor and resources costs in a truly globalized economy are very likely to create a context where one of the great cost differentiators for the production and distribution of physical products is transportation. This is, in turn, likely to require many supply chains to move toward smaller producers hooked into a range of distribution networks from local to global in scope.

As 3D printing, makers shops, and [manufacturing automation](http://continuations.com/post/145503327830/the-coming-paradigm-shift-in-manufacturing) continues to equalize the ability of smaller producers to competitively build physical products and as technology such as automated air and ground transportation along with increased [shipping efficiency](http://www.kpler.com/) continues to equalize the ability of smaller producers to competitively distribute physical products, it is highly likely that smaller producers will gain in relative power to larger producers for many types of goods in the future.

Collectively the above two paragraphs coagulate into the idea that smaller producers will have advantages in the information age which they lacked in the latter industrial age due to their smaller scale. There will of course be exceptions to this, but mostly the above will be a techno-philia change.

Changing tastes also play a role. For example, and I admit this is a subjective comment but still, most folks I know would prefer locally sourced "ingredients" when given a choice. It is becoming increasingly clear that [brand authenticity](http://www.authenticbrandindex.com/) is one of the major differentiating factors when consumers are faced with a paradox of choice. In other words, a **connection** to a given producer's brand is increasingly important to consumers. One theory as to the driver of this change is that it is due to the fact that, at the end of the day, we are social creatures, and that we crave the human connections embedded in how we go about our business.

Collectively the above paragraph coagulates into the idea that authentic producers will have advantages in the information age which they lacked in the latter industrial age. There will of course be exceptions to this, but mostly the above will be a techno-phobic change.

These vectors align in the direction that small is *hot* and big is *not*. Big box stores are dying; malls and one-stop-shops are not far behind. Big law firms are losing lawyers to smaller, niche firms. Small agriculture is (again) a thing. And smaller app-based banks are beginning to eat away at large banks' customer bases. The "sharing economy" across the board.

And while, from a philosophical perspective, I'm in alignment with small, local, and genuine, that simply doesn't scale.

By way of a simple example, a small business in some portion of the world can always list their products on the internet. By doing so they have an ability to find customers, prepare shippings, and deliver to a global customer base. This is elegant. Yet it is not totally realistic for the vast majority of small businesses.

Thus the theory behind EBay, Amazon, and Etsy's successes -- they act as the front office of a global customer base and the small business just needs to act as the back office (and also make good products). But Amazon, et al., do more than act as the front office. They also run "the platform" on which these small businesses can sell their goods. These "platforms" will list products, process transactions, provide customer servicing add-ons, or whatever suits the business of *the platform*.

So, and I finally have come full circle to software, if we are truly in a globalized world where small and/or authentic matters more than big and/or bland, how do the small and authentic work together instead of *having* to rely on "the platform"? What if they want to run "the platform" themselves by banding together? As an ecosystem. How can they build applications that run on an ecosystem level, or, as we call them `ecosystem applications`?

The rest of this post will look at that question in more detail.

## Blockchains and Smart Contracts: Two Toolkits for Building Ecosystem Applications

The problem that blockchain technology solves is not electronic P2P cash, nor is it settlement latency, it is the problem of `attribution and ordering of inbound events; at an ecosystem level`.

When I send someone a bitcoin, what am I "really" doing?

Well, I'm signing a message which says that "I, keyholder of key X, am transfering title over *this* 'object' (in the example's case, a bitcoin) to the keyholder of key Y." My signed message then is broadcst across the network. The network then analyzes this message to determine if the message has been properly signed and if it has, then the network transfers title over the "object" in question to the keyholder of key Y.

Of course, in bitcoin's case, there is a censorship-resistant, permissionless network behind all of it, but that is not the interesting bit in my view. To me, the interesting bit is that the network, without relying on passwords or logins, is able to effectively attribute actions. See passwords and logins cannot safely be "held" at a network level. In traditional software architecture, they can be safely "held" by an application that is designed to run under the control of a single entity. Yet, if we take away the assumption that there will be a single arbiter of the password then we need to utilize a different system for attribution. We also need to remove the assumption that our application can rely on IP Addresses. In traditional architecture, this provides a backup for determining attribution.

Instead of keeping a single holder of our passwords or IP Addresses when we  build applications that operate on an ecosystem level we rely on digital signature algorithms and elliptical curve cryptography. This technology, in combination with the ordering and timestamping functionalities that validators (or, in POW chains, miners) provide, solves the first problem ecosystem applications have: **the problem of who did what when**.

When blockchains are analyzed under this paradigm, their [BFT](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance) consensus algorithms (implemented in a variety of ways) and their [PKI](https://en.wikipedia.org/wiki/Public_key_infrastructure) provide a nice abstraction for application makers to begin building applications that run on an ecosystem level and need to know, well, `who did what when` (without utilizing passwords or IP Addresses) in a reliable, resilient manner.

What's the key difference in how blockchains and more simple fault-tolerant databases (such as [rethink](https://www.rethinkdb.com/), [riak](https://github.com/basho/riak) or [etcd](https://github.com/coreos/etcd)) which are also able to solve the problem of "who did what when"? The difference is an assumption about the network configuration. These fault-tolerant database technologies assume that the network is controlled by a single entity. Raft, the consensus engine used by these databases, is what's known as `fault tolerant` -- or `FT` -- rather than `byzantine fault tolerant` -- or `BFT`. The difference between `FT` and `BFT` is important. The primary difference is a diffusion of power over who is the final arbiter of "who did what when". Makers of FT databases such as rethink, riak, and etcd have also been able to rely upon security assumptions about how their network and permission environment is configured.

Blockchains, whether unpermissioned or permissioned, do not assume that there is a single entity controlling "what the data is" (or, alternatively phrased "who did what when"). And this is not a small difference in the design assumptions. While it is true that modern, fast, blockchain technology is **much** closer to rethink, riak, or etcd in how they approach a number of underlying technical problems than they are to bitcoind, even the newer, faster chains do not relax the assumption that the data is going to be held **across** entities rather than **within** entities. This is exactly why they are being thought of as one important tool for opening up a range of new applications -- applications that run cohesively at an ecosystem level.

The *attribution* problem that blockchains solve is insufficient, alone, to actually be able to build coherent applications that run on an ecosystem level beyond very simple applications; such as moving electronic cash from one person to another.

The next problem that needs to be solved is **deterministic computation**. This is the problem that the "thing" the community currently calls "smart contracts" solves. At least according to [the definition we adopt](http://www.coindesk.com/making-sense-smart-contracts/), the problem that smart contract technology solves is not escrowing funds, it is the problem of `is computation happening in an agreed manner`.

What do I mean by deterministic computation? I mean that all participants in the ecosystem need to be able to compute something and achieve the same result.

This sounds rather easy at first blush, doesn't it? Isn't that what computers are supposed to do? It is indeed, for the most part, what computers do. However, computers are designed to perform computation, not deterministic computation. Let's look at the two major sources of non-determinism in an effort to understand why we need to control them in order to avail ourselves of a method to build ecosystem applications.

The first major source of non-determinism is randomness. Every programming language I know of has a way to "make" a random number so that one can perform operations on it. Programmers use these random numbers to accomplish a variety of programming tasks. And yet, if one were to allow randomness within a strongly deterministic system of computation, all the members of the ecosystem who were running the application would "make" a different random number as the basis for the computation task. This means they would then have a different outcome for the entire computational sequence which depended on the random number. When one is trying to ensure that computation achieves exactly the same result across the ecosystem that is a bug, not a feature.

The second major source of non-determinism is time. Every programming language also has a sense of time. This allows programmers to do stuff like get `timeNow()` and add a few days to create a filter of upcoming events. This is all well and good, but it is unlikely that the members of the ecosystem will have their computer clocks so finely tuned that they are **exactly** the same -- down to the millisecond. One of the features that we design for when thinking about ecosystem applications, is that they can and should be verifiable by later in time participants. For example, if the ecosystem is in a highly regulated industry, then auditors for the various participants in the ecosystem may need to perform an audit on the year's activities. The `timeNow()` at the end of the year will very much *not equal* the `timeNow()` when the computation was originally performed. This will result in auditors getting a different result.

If we can take these sources of non-determinism out of the computation layer, then we can build systems where multiple actors in an ecosystem can, in real time or later in time, verify and notarize that a computation has happened in an agreed manner. But in order to "verify and notarize" a computational sequence, we must have what I call *deterministic computation*.

The other problem that smart contract technology solves, is a distribution problem. In order for ecosystem participants to perform the computation, they need to **have** the computational sequence. In "normal" computing we solve this by either: (a) installing applications on a given device; or (b) all connecting to the same cluster of devices where an application has been installed and is running.

But with ecosystem applications, we typically solve this in a different way. We often, but not always, put the application's logic "on" the blockchain. We use the immutability characteristics of chain tech along with a smart contracts interpreter (often called, a VM (for virtual machine)) to not have to worry about downloading and installing these computational sequences. We simply connect in to the ecosystem's network and go vroom!

## Data Lakes, Message Queues and PKIs: Three (more) Toolkits for Building Ecosystem Applications

While blockchains (providing us `who did what when`) and smart contracts (providing us `deterministic computation`) are two tools that give ecosystem application builders two main capabilities necessary for building ecosystem applications, we still have a few more base requirements to really enable this technology to flourish. Namely we need to solve `content` and `privacy`.

In applications that are built on traditional architecture we can have content which resides on a single device or a cluster of devices that is under the control of a single entity. If that entity decides, for whatever reason, to stop servicing an application or stop serving particular content, it can so decide unilaterally. However, when we are building applications meant to exist outside the control of a single participant within the ecosystem, we cannot make such an assumption. This is where the IPFS project's thoughts about the [permanent web](https://ipfs.io/) are so crucial.

How we will deliver and store content within our ecosystem application is only one portion of the content problem. The other is how we "relate" to it. In other words, how do we know that "this is 'it'" whatever "it" may be. In computational terms this is solved by **content addressable storage** and it is the one of the key components for how to think about designing ecosystem applications. No matter how we deliver and store content, we need to be addressing the content with precision.

Content addressable storage gives us, in general, assurances that "this is 'it'". In traditional architecture when we are retrieving files from a remote server (to download an app, or to load a web page), there is always a risk that either the remote server was hacked in some way, or the file was "swapped" while it was on the wire between the remote server and your device. Depending on whether we trust the pipes (this is, for the record, part of what `SSL` gives us) and/or whether we trust the remote servers' credentials (that it is, e.g., Apple, Inc. is the company behind apple.com, the other major part of what `SSL` gives us) we may need to take further actions to ensure that what was downloaded is "it". Although SSL is a well worn system, if we want to be very careful that "this is 'it'" what we do is after we download a file from the internet we take its hash (which can be thought of as the "fingerprint" of a file) and compare that hash to one that has been provided by the publisher. This allows us to (if we trust the publisher) ensure that what we downloaded is what the publisher produced. When dealing with content addressable storage, which is local to your device, you can have assurances that the file was not "swapped" and that the file is pointing at what the network would like one to point at, because in most content addressable systems we reference data by its hash.

The final, major, challenge is around privacy. There are two types of privacy which are necessary to examine. The first one is a `me only` type of privacy. This means that there need to be things which are known only to me. We typically define these as secrets. Secrets are things like one's private keys, or logins, or other information which should be available only to you. Those things are necessary for ecosystem applications. Within the Bitcoin world, wallet software provides a very valid `me only privacy` function. There are a range of possible options for how to build generic ecosystem applications while also enabling `me only privacy`. However, mostly ecosystem applications only need to "interface" with the generics so these will not be covered in great detail here.

The second type of privacy is a `come over here I want to tell you a secret` type of privacy. Because within ecosystems, we don't necessarily assume that all participants `need/want/have_a_right` to have all the information about all the things. This is where private message queues (or, as some may call it p2p messaging) and an authenticated public key infrastructure (a PKI) with a given identity mechanism comes into play. Private message queues give us the `come over here ... a secret` part of the whole problem. An authenticated PKI solves the `**I** want to tell **you**` part of the whole problem. These two toolkits, message queues and a PKI give us the final piece of what, at least theoretically, is a complete look at the components necessary to build most ecosystem applications. (For the record, if I was sitting in SWIFT's position I'd be focusing resources on these tools rather than blockchains.)

A summary table:

| **tool** | **problem** | **nerdy term** |
|----------|-------------|----------------|
| blockchains | `who did what when` | attributable data |
| smart contracts | `computation that happens in an agreed manner` | deterministic computation |
| data lakes | `what content are we talking about` | content addressable storage |
| message queues & PKIs | `come over here I want to tell you a secret` | shared secrets |

## What Do Ecosystem Applications Run On?

The short answer is that nobody really knows. There are two competing ideas within the marketplace.

Idea one is that a _single binary_ so beautiful enough and wonderful enough connecting into the _one network_ that is so perfect and fitting for all needs that everything will just run it, and then all participants from all ecosystems seeking to build ecosystem applications will simply turn on that binary, and do whatever they need to do.

This is, for lack of a better metaphor, the OSX style of ecosystem applications. In the OSX style, the magic binary of wonder connecting into the one true network will be able to solve privacy, scalability, extensibility, authentication, consensus, and network establishment (among a few other needs) for all the ecosystems for all time. Because it is the binary of wonder, it will provide for all base needs including gated (or ungated) access to static content, gated (or ungated) access to various applications states, and an ability to communicate with a range of ecosystem participants in a coherent and consistent manner.

Idea two takes the opposite perspective. That there can be no binary which can, to a sufficient degree of both standardization as well as flexibility, truly meet the divergent needs that ecosystem application makers actually have. This is, again for lack of a better metaphor, the linux style of ecosystem applications.

For those of us who fall squarely in camp two, we feel that ecosystem application makers can greatly benefit from increased modularity along with increased standardization around *how the modules fit together*. Something we've talked about at a more technical level [here](https://monax.io/blog/2015/12/31/on-blockchain-clients-in-2016/) and [here](https://monax.io/blog/2016/04/03/wtf-is-eris/).

In our view focusing standardization efforts not at the point of what a single binary built to operate a single network can do, but rather on standardizing the way in which various, flexible components can talk to one another, is what will really empower progress.

{{ printf "/images/blog/%s/%s" .Page.Now.Year "ecosystems_2.png" }}

And yet, progress toward what? What do these things actually look like?

## What Does an Ecosystem Application Look Like?

It depends. But hopefully it looks and feels like a "normal" application, in whatever context the ecosystem application is being deployed. The advantage of leverging distributed systems technology to build ecosystem applications is that while the backends are very different than "normal" applications, we ideally want the front ends (what the users of the application, well, use) to feel no different.

In order to do this, however, we need to solve a whole range of problems around distribution of standard components which are deployable on as wide a variety of hardware and operating system configurations as is possible.

If we are going to bring machines properly into being first class participants in our ecosystem applications we need to expand beyond simply supporting the "big 3" OS's. We also need to make it quick and easy for users to start and stop these complex applications in a consistent manner.

Thus, why `eris` leverages docker under the hood to make the application user's perspective as seamless as possible and to take out many of the edge cases when building for a wide range of OS and hardware combinations.

{{ printf "/images/blog/%s/%s" .Page.Now.Year "ecosystems_1.png" }}

## How Do We Go About Building Ecosystem Applications?

Much of my thinking in this area was refined from observing ecosystems evolve during my time doing international development work, including tons of reading and thinking about how to change and evolve complex social systems within the context of fragile and/or failed states. Study of the human factors of combat and lots of insurgency theory didn't hurt. Studying the hippies and beatniks didn't hurt either.

But the biggest step in my thinking here came from Kevin Kelly's Out of Control; a book sent to me by a friend a few months after we started our company.

### Lesson 1: Ordering matters.

When building ecosystem applications, it matters the order in which you go about formulating the ecosystem. Since we're building applications humans will, at some remove, interact with, then the ordering matters on both a technical level as well as on an interaction level.

First you need to have enough code to get a sufficient amount of capital interested to then take the code and implementation of the various aspects of that ecosystem to the next phase. This needs to be done in concert with an actor within a given domain who has some ability to "convene" participants. Then you need to continue having a conversation and negotiation with the market both in terms of revenue and capital. Again, in concert with an entity who has "convening power". This is much more like gardening than it is like manufacturing.

But what code should one focus on at first? We would argue that some level of interactivity in order to show what the backend can do, along with some idea of the backend architecture, some idea of what the business logic looks like, and a great story to tell are the proper combination to have when doing the initial move from code to capital. This is not really any different, indeed its basically the same thing, as fund raising from VC's. Only when building an ecosystem application often you won't be raising from a traditional VC structure.

After the first conversation with the market that raises money sufficient for the ecosystem application builders to move beyond MVP stage, then the real fun begins. At this point the technical development usually will split into four tracks:

* `track one`: business logic refinement,
* `track two`: network logic refinement,
* `track three`: plugging into the rest of the things, and
* `track four`: interaction logic refinement.

Similarly the non-technical side will now likely split into two different tracks:

* `track one`: governance over the ecosystem application (more on governance later), and
* `track two`: increasing the "convened" participants one concentric ring in the circle outward from the original few "conveners".

Once those tracks finish their first major series of work and "go live" happens, and the thing runs and is increasing in value, then it either continues to do its thing by evolving and/or it goes back to the capital market for "scaling capacity".

What's the point here? The point is that building an ecosystem is a lot like building a business. But the target participants are often very different than those involved in building a traditional business.

### Lesson 2: Destruction matters.

In every large change which happens in business, society, politics, or, frankly, any complex system, there will need to be some destruction of the old in order to make room for the new. This is uncontroversial, and we generally call it `creative destruction`.

Yet, simple destruction does not an ecosystem make. Usually wanton destruction makes for wastelands. This is one of the key lessons I learned from a story told in Kelly's Out of Control. In that book, Kelly details a group who was trying to "bring back the prairies" in the midwest of the United States. The scientists knew that fire was an important part of the lifecycle of prairies, but for many years their efforts were unsuccessful because of *when* they triggered the fire. They eventually learned that they needed to trigger the fire at the correct time in order for the right effects to happen within the ecosystem they were attempting to catalyze.

What they learned was this. First you plant the fire resistant plants and make sure they are hearty. Then you burn the place.

Ecosystem application makers would be wise to learn from this. That which will be destroyed when ecosystem applications come online include massive swathes of back office personnel who currently are responsible for ensuring that the enterprise's generation 1 process automation tooling is kept in sync with other ecosystem participant enterprises' generation 1 process automation tooling. Yes, in many large organizations this is still a human driven process. But also, and probably later, existing processes within various markets will be provided with an opportunity to run more efficiently within ecosystem applications than they currently are able to run in a silo'ed environment under the control of one participant.

Those involved in building ecosystem applications need to have a relatively sophisticated understanding of the timing around when would be appropriate within the adoption curve of our technology to start triggering the various fires which will be a necessary, if perhaps ugly, portion of the overall creative destruction process that is constantly happening.

### Lesson 3: Governance matters. A Lot.

My prior life involved doing governance reform work. As such, a lot of what I had to do to be successful, was to act as a convening body around various problems which needed to have some consensus as to what the response was going to be. But I had to do this with politicians which is always tricky because of the second and third level effects in which political systems operate.

I was the first development worker to expressly use budget I sort-of controlled to fund consensus activities with the Upper House of the Somaliland parliament. This was the "House of Elders"; a clan nominated, almost exclusively old men actor within the complex Somaliland governance ecosystem. Given that we (development workers) were supposed to be there (Somaliland) promoting democracy **and** governance (note the ordering), it had been frowned upon to work with the upper house due to the fact that it was an appointed rather than elected body. Yet it was one of the most powerful actors within the ecosystem; often acting as the level-headed ballast within the system as the "younger hotheads" in the "political class" did what they do in the Presidency and the lower house of parliament. For me it was a no brainer that I would be much more effective at my job if I worked with them to help them overcome some of the big problems in Somaliland. Problems that, eventually, were going to require their attention.

Not the least of these, was that the Constitutional powers of the Upper House were quite ambiguous. And without a sufficiently strong judiciary to act as a counterbalance on the fundamental questions of constitutional law (namely, and I'm channeling my Constitutional Law professor here: `who decides who decides`), the Upper House was in an awkward position to have the most (or least, depending on who you asked) power in defining their own future within a more mature Somaliland governance ecosystem. Less cryptically, the Upper House needed to decide if it would be elected (as the Constitution said they should be) or remain an appointed body (as the society had, for the most part, accepted).

I talked with the Chairman of the Upper House and I said I was interested in facilitating a discussion here by providing background research on the key decision points that Upper Houses typically need to make and in convening a sufficiently powerful caucus of members of his House to begin achieving consensus on what the answers to those decision points would be. Indeed, this model is how I generally operated. Help to define what the decision points are via pulling lessons from other systems based on a comparative and distillation process (which should sound familiar if you've heard me talk about how we do [legal engineering](http://www.slideshare.net/CaseyKuhlman/legal-engineering)), and then to facilitate discussion amongst the key stakeholders within various systems so that they can come up with their first answers to those questions. After that the "campaign" was generally handed off for execution by other folks who had a different focus.

After doing the research and facilitating our first few sessions with the caucus, I expressed some concern to one member of my team. I was concerned that we were spending an inordinate amount of time "talking about how we were gonna talk" and not enough time "just talking". My team member told me that it was fine; that this is the way that things were done; and that I needed to learn a bit more patience. So I bit my tongue. It took a few more sessions to get the process questions out of the way. But once those processes of discussion were settled upon; and the agenda to discuss was settled; then, and only then, the discussion flowed. (Unfortunately at least during my tenure, it never reached sufficient consensus.)

Why do I tell that story? Because it is a lesson which ecosystem builders should take to heart. That building governance mechanisms is complex, but it is doable if one understands the context well, learns from what came before, and sufficiently outlines a path to evolution.

## What is Next for Ecosystem Application Builders and Users?

Everything.

Stay tuned.

[(Photo credit 1: CC-BY: francois schnell @ Flickr )](https://www.flickr.com/photos/frenchy/)

[(Photo credit 2: CC-BY: Dan DeLuca @ Flickr )](https://www.flickr.com/photos/dandeluca/)

[(Photo credit 3: CC-BY-ND: Craig Sunter @ Flickr )](https://www.flickr.com/photos/16210667@N02/)
