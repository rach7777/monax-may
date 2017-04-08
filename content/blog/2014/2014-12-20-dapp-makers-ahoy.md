---
author: andreas
categories:
- products
comments: true
date: 2014-12-20T00:00:00Z
deprecated: true
excerpt: 'If someone is asking themself this question: I want to make distributed
  apps, why should I choose Eris'' tools?, I will give my answer.'
meta: true
published: true
tags:
- eris
- thelonious
- decerver
title: Decerver and Thelonious from a DApp-maker Perspective
url: /2014/12/20/dapp-makers-ahoy/
---



If someone is asking them self this question -- "I want to make distributed apps, why should I choose Eris' tools?", I will give a good answer.

The way most of us got started was by making smart contracts and systems of smart contracts on Ethereum. Before Eris or Project Douglas, during the early PoC releases, Dennis was making dapps, and a little later (under his tutelage) so was I. At this point contract writing was very primitive, and the only way to write useful code was with LLL. This is still pretty much the case, although we have high hopes for Solidity and the new Serpent 2.0 -- the latter of which has been working well for us in our early testing. In those early days, you had to basically manage each byte yourself, where to put it in memory, etc. It was a lot of work for; even the smallest things.

Ethereum grew fast, though, and new stuff was added all the time, and after a little while it was possible to make very large (100+ contracts) systems. This is what made it possible to write non trivial dapps, like for example "decentralized reddit" -- the centerpiece of Project Douglas -- and my "People's Republic of DOUG". Admittedly, neither of these systems were very good -- at least not compared to normal web applications -- but for smart contract based systems they were pretty advanced. They were the most advanced systems that existed (and probably still are).

Given the size of these systems, and the constraints that Ethereum places on the code (such as the gas cost of operations, security considerations, etc. -- all of which there are reasons for of course) the need for more advanced tools grew.

One thing I desperately needed in order to move forward with my PRODOUG dapp was off-chain storage, or the system would collapse under its own weight. Another issue was the deployment of these massive systems. Copy pasting hundreds of contracts into the Alethzero transaction window was not a good way of doing things. Also, RPCing to the client wasn't gonna cut it for these type of apps.

There was an obvious need for more layers between the user interface and the ethereum client. These were the same issues the Project Douglas guys were trying to solve (and to some extent they already had). When I felt that PRODOUG had most of the core stuff it needed, I was gonna start cleaning up, optimizing, and try and collaborate more with the PD guys, who were not only wrestling with the same issues that I was, but whom I had also become friends with during Casey's Dao Design Jams and such (except for Dennis who I already knew). As I approached them in the fall, the goal for me was just to learn and learn more about their tools. Basically just continue to put out dapps and dapp tools, and have Dao Design Jams like before. Turns out they had started working on something bigger.

The point here being -- we are dapp makers. We design our systems around the real issues that arise when building smart contract based applications. Most (if not all) of our systems and subsystems (Atë, Thelonious, C3D, DeCerver, etc.) are designed to solve specific issues that we had when making dapps. We come up with big ideas too, and have a vision for the future and all that, but this is an important thing to know. At the core we are dapp makers. We are dapp makers that noticed things we needed were missing, and decided not to wait around for other people to hand them to us.

Unfortunately, despite being dapp makers, we didn't include a lot of dapps with this release. That's only because we had to focus intensely on the platform -- our new tools. The dapps will be coming, in numbers.

We're not gonna sit around in the future either, and wait for others to find the problems (or for someone to solve them). It'll continue like before. We'll be there along with all the others who wants to push this stuff forward. We're not basing our stuff on what we think others might need, based on what they think is happening -- we find out for ourselves. This I think will make our software very useful, and it is certainly worth checking it out and learn what it actually does.

To be a bit more exact about what we built.

Thelonious gives dapp makers more control over the blockchain. Actually, 99% of the work any of us did, or do, was/is done on private chains, and that's where most dev work will continue to take place -- even with development *for* ethereum (since there's no cost in ether). The idea of one chain per dapp was new to me, but is a pretty natural one in my opinion. Especially since our chain design comes with a genDoug (which could be seen as a little operating system for the chain).

Decerver allows dapp makers to mix the blockchain component with off-chain storage (and other important things that a dapp needs).

Atë gives dapp makers a Javascript layer that makes communicating with the blockchain client (and any other components of Decerver) a lot easier, safer, and more clean. You no longer have to put this logic in client side javascript.

C3D (and later ESL) make it easier for dapp makers to work with and structure contracts, so that large systems of contracts become manageable. We will write more about this as we produce more tutorial dapps.

Decerver client allows HTML/CSS/JS to stay the standard. It also improves client/server communication. Frees users from being slaves to the webbrowser (which is not really designed for dapps).