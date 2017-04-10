---
author: preston
categories:
- products
comments: false
date: 2014-12-17T00:00:00Z
deprecated: true
excerpt: Smart Contracts have arrived. Here's how Eris v 0.9 works, and how the rules
  of the blockchain game have changed.
meta: true
published: true
tags:
- eris
- thelonious
- decerver
title: Meet Eris. The distributed computing solution for industry.
url: /2014/12/17/eris-the-corporate-view/
---



<h2>Meet Eris.</h2>

An introduction to the open alpha release of Eris in ten points:

1. Take me to your repo.
2. What is Eris?
3. You said "blockchain." That sets off my bullshit alarm.
4. Wait - what? **ADMINISTRATOR PERMISSIONS ON A BLOCKCHAIN?!?** Did you actually just say that?
5. How do I get started with smart contracts?
6. What is the Decerver for?
7. Is it free? It is open-source? (Hint: yes)
8. What should I build?
9. You mentioned "smart contracts." What about legal ones?
10. How does all this change the rules of the game?

<h2>1. Take me to your repo.</h2>

* [**Here is our GitHub Repo**](https://github.com/monax).

<h2>2. What is Eris?</h2>

* Three words: **lower cost infrastructure.**

* Eris is the **Distributed Application Software Stack**, a platform designed to empower developers to build web-style interactive applications that utilise the power of the distributed internet, including blockchain databases, to run themselves securely and autonomously - **without servers.**

* The Eris Stack includes an open-source blockchain design called **Thelonious** and a decentralised application server called the **Decerver.**

* Thelonious is not a single blockchain: it is a **blockchain design.** We intend for developers to create their own blockchains based on the Thelonious design to administer their DApps. The Thelonious design itself is a heavily-modified derivative of Jeffrey Wilcke's Go client for the [Ethereum](https://ethereum.org) protocol.

* We think that blockchain database technology could be profoundly useful in mainstream applications, but that the limitations of technologies people have had to work with - before today, that is - prevented blockchains from realising their full commercial potential.

* Independent developers, small businesses, financial institutions, and public sector bodies alike can all benefit from this open-source technology to build innovative new products, reduce overheads, expand their reach, and achieve their objectives in the secure and reliable way that only blockchain technology allows.

* We call these serverless applications **Distributed Applications** or **DApps.**

* Apologies that we don't have any demonstrator applications just now apart from our ["Hello Doug" App](https://github.com/monax/hello-doug) (we've been pretty busy this week, as you might imagine). However, note we're aiming to release two technology demonstrators in early January - one, a streaming-video application with an in-built Bitcoin payment mechanism designed to showcase Eris' potential in DRM applications, and another, a marketplace application designed to bring together software developers building on Eris and potential customers who want blockchain tech, and help them to reach agreement on heads of terms (and create a cryptographically-secure transaction record of the same).

<h2>3. Ok, you said "blockchain," which sets off my bullshit alarm. You have precisely five seconds to convince me you know what you're talking about. </h2>

* Blockchains are a database technology that offers the possibility of realising levels of data security and process efficiency from which everyone deserves to benefit.

* Accordingly, we think blockchains would be rather more useful if there were more of them around. We'd prefer to see **millions of blockchains**, each automating and securing the task it was designed to manage, instead of the current situation where there are only a few public blockchains which do pretty much the same thing.

* Thelonious is the most flexible blockchain design we're aware of. You can parameterise Thelonious to do whatever the heck you want - including **exercising administrative control**, if the use-case calls for it. You can even change its security and consensus parameters **on command.**

* We recognise that "blockchain" clearly isn't the same thing as Bitcoin or cryptocurrency. Bitcoin is an application that uses a blockchain database. Blockchains are a database technology. Bitcoin is about alternative money - blockchains are about data.

*  Why haven't we made a cryptocurrency like everyone else, I hear you ask? Because Bitcoin was designed for a purpose - one it executes to near-perfection. But that doesn't make its design perfect for *everything*, particularly in a world where "fat finger" errors happen and mistakes are made. A cryptocurrency protocol that cannot be broken **also cannot be fixed.**

*  Mainstream data applications have to be built to different design parameters than cryptocurrencies - a fact which, in our view, is simply inescapable. The ability to parameterise administrator override privileges means the Thelonious blockchain design has the requisite flexibility for developers to design, build, test and - above all - **improve** really useful applications.

* Until today, Blockchains have been relatively untamed - a necessary factor for ensuring their security in a proof-of-work world - which makes them hard to use for specific applications. The vast majority also don't allow "smart contract" functionality (i.e. are paired up with a scripting language).

<h2>4. Wait - what? ADMINISTRATOR PERMISSIONS ON A BLOCKCHAIN?!? Did you actually just say that?</h2>

* Yep. We did. With **smart contracts,** anything is possible now.

**A. Meet GenDoug: the smart contract kernel of the Thelonious blockchain design**

* Thelonious is generalized to store arbitrary data and to establish permissions to modify that data through a set of self-administering and self-executing scripts, which are executed by a distributed virtual machine which *in turn* is married to a blockchain. These scripts are known as “**smart contracts**,” and they allow platform operators to define complex and fully customisable rules which govern the blockchain’s interaction with its users.

* Thelonious, like its uncle Ethereum, is smart contract-enabled. However, unlike any other blockchain design we are aware of, Thelonious is also smart contract-*controlled*.

* Thelonious' security and consensus parameters are not hard-coded into the blockchain, but moved into a smart contract kernel we call **GenDoug** (i.e. Genesis Block Doug) or just **Doug** for short. GenDoug is a smart contract kernel which tracks contracts, global variables, or anything else a blockchain application should need to give context to what would otherwise be standalone scripts of limited use.

* GenDoug architecture has the added bonus that where defects are found, or upgrades required, in any part of a blockchain system, a user or users possessing the requisite permissions can upgrade the system simply by broadcasting the upgrade to GenDoug and signing the transaction with their private keys.

**B. Why we think GenDoug is a really good idea**

* We think this flexible approach is absolutely essential for mainstream blockchain applications.

* While we were experimenting with the [Eris 0.1 prototype](https://github.com/project-douglas/eris), we realised that, as soon as contract writing for a blockchain system moves beyond one or two smart contracts to thirty or more (as we were), that - in the words of one of our co-founders - "you have a bunch of contracts, all with APIs you know, but you don't know what their addresses are - and you certainly can't hardcode them all in(to the blockchain) before deploying."

* Even if you decided to hard-code the contracts, once you did, you'd be stuck with them forever - or at least until you hard-forked the chain, which, for anyone who knows what that involves, is a real pain in the neck. So we invented a workaround.
* This means the logic of your blockchain and indeed your entire application can change/update itself *on command* as time goes on, without requiring a hard or soft fork of the chain. To our knowledge, no blockchain design currently in existence - apart from Thelonious, of course - can do this.

<h2>5. Ok. That's awesome. So, how do I get started with smart contracts?</h2>

* If you're planning on deploying smart contracts you'll want to check out the Eris Package Manager at some point. EPM allows you to easily and simply compile, deploy, and test suites of smart contracts in a cohesive manner. In addition, EPM allows developers to work with chains rather how Git works with files, by allowing developers to keep track of many chains, adding contracts or transactions to them, and committing blocks.

* You might also want to check the tutorials pages on our sites for the Decerver and Thelonious, which will be of considerable assistance to you.

* We have a smart contract library - the **Eris Standard Library** - which we will refine and add to as time goes by. We hope you will too (open-source ftw).

<h2>6. What's that "decentralised server" thing for?</h2>

* *Everything.*

* Eris' web browser core is the **Decentralised Server** or **Decerver.** It can plug into any API or other blockchain you want - just write a module wrapper and you're off to the races.

* The Decerver helps you, developers, build applications which leverage opt-in data ownership and significantly increased data utility for both customers and businesses -- a software design paradigm we call **Participatory Architecture**. Using peer-to-peer and distributed systems, the Decerver allows the creation of web style, data-driven, interactive ecosystem applications that can be safely, securely, and reliably deployed and managed.

* The Decerver significantly lowers the barrier to entry for the production, distribution and maintenance of ecosystem applications, all while allowing users to participate in the scaling and data security of these applications. Think Spotify way back in the day. Except more so.

* Some DApps will only require distributed transaction execution that a blockchain provides; some DApps will only require a distributed file system such as BitTorrent. Some DApps will require both. No matter the modular requirements for the DApp, the DApp will be able to rely on distributed computing as the basis for providing a harmonized set of data or files upon which the DApp's users rely when interacting with it.

* Aforementioned DApps display in CSS/Javascript/HTML through an ordinary web browser.

* Your new Decerver has Bitcoin, Ethereum and IPFS modules included out of the box. Naturally it can plug into Thelonious chains, too.

* BTCD is included for those who wish to run a full Bitcoin node with their Decerver. (Though our approach is commercial, rest assured we're crypto people, too.)

<h2>7. Are you sure you're not trying to sell me something? Is it open source?</h2>

* Eris is totally, 100% free to use. No purchase necessary.

* And yes, it's open-source. Everyone's invited.

* You make the rules. We'll make the tools.

* You're in charge of **your** application and **your** blockchain deployment. We're not.

* Thelonious blockchains stand on their own, not on top of any existing platform. No hard- or soft-fork of anyone's favourite decentralised chain is required. Thanks to the Decerver, you can still talk to Bitcoin and all of your favourite decentralised protocols. Indeed, you can interact with **as many blockchains as you like** through just one instance of the Decerver client.

* The only question is - what will you build first?

<h2>8. That's pretty cool. What should I build?</h2>

* Whatever you want! It's totally up to you.

* One thing we do know is that you can build stuff with Eris that's marketable. We talk to people nearly every day who want to use blockchains to achieve their objectives, but given the limitations of pre-existing technology, don't know how to.

* Businesses, public sector bodies and anyone else for that matter can exercise total control over a blockchain-powered database to provide a secure layer to deploy an interactive application, either internally or facing the outside world - no servers required.

*  On that note, it's worth adding that we're in the process of updating Thelonious' networking protocol so it'll work behind your garden-variety corporate routing and firewall infrastructure. Keep an eye out for an early 2015 update release.

<h2>9. You mentioned "smart contracts." What about legal ones?</h2>

* Glad you asked. Because of the ability to control a chain, a chain can also deal with legally-enforceable representations of value, real assets, or whatever else you can define, in full compliance with legal rules, fairly easily.

* You can get blockchain utility into the hands of your clients and customers without having to set foot into the regulatory minefield that is the cryptocurrency space.

* No magic there. Just... you know, databases interacting with legal rules in exactly the same way they do today. [Simples!](https://www.youtube.com/watch?v=dTSCUYcp20A)

* But if you really want to do a deep dive into smart contracts-as-legal contracts, we thought of that too (Eris Industries' CEO and COO are also qualified lawyers in the U.S. and England, respectively). They're doable but would need a lot of context provided by a DApp - and some things (like a will or a deed) that can't get electronically signed are obvious no-gos. (Though on that last point, you could always hash a PDF into whatever distributed file storage system your DApp uses.)

* We suggest you check out Eris Legal Markdown to get started.

<h2>10. So. Does this "smart contract" thing change the crypto game?</h2>

**A. [You bet](https://www.youtube.com/watch?v=Mj58IHA3urc).**

* Yes. Rather a lot.

* A blockchain controlled by a cryptographically-secure smart contract like Thelonious which is able to change the entire system's parameters, *on command* and without a fork, has never been built before. Same with the Decerver which allows a blockchain to talk to less-trusted APIs - or other blockchains. EPM and the dual-integration mechanism for ELM also represent new technologies.

* We didn't stop there. In many applications, especially industrial ones, **the token/mining reward model isn't a great fit for the data- or cost savings-driven motivations that prospective blockchain users and operators have expressed as their primary motivation for adoption.**

* When you have smart contracts, or a trusted administrator, you need neither tokens nor mining. So Thelonious lets you scrap both, or keep both. Whichever makes the most sense in a given case.

* Although the default setting for Thelonious is POW, for commercial applications we have created a high-security, low-electricity transaction verification mechanism we call "committing" which we think is well-suited to mainstream commercial use-cases.

**B. No tokens:**

* Tokens are no longer necessary to represent value or information. Smart contracts are both actors and databases, much in the same way that a "1.0" blockchain - in its totality, by providing a portion of traditional controller functionality - is both an actor and a database (with the transactional history - i.e. the chain of digital signatures which shows the current world-state/balances of tokens on that blockchain - being the data). Smart contracts therefore can perform the functions which most people associate with tokenised blockchains today just fine.

* Put differently, smart contracts don't merely enforce provisions relating to a set of assets: smart contracts also *are* the assets. Or any other information governing a user's interaction with the database in question, for that measure.

**C. No mining:**

* **"What about double spending!?!?1?one1??"** You cry. It's not so much an issue with smart contracts, as write permissions are usually governed by an instruction to the contract (the result of which is governed by the contract) signed by the sender's key. Any mistakes, thanks to GenDoug (i.e. your two year old starts playing with your iPad and wires your life savings to Japan), can now be rectified without hard-forking the database.

* As to automated database management, we see two possible solutions:

  1. **Lock it down**: specify that blocks will not be added to the chain unless they are signed by by specific nodes known to and controlled by the database administrator. That is, don't "mine" at all. We describe our rationale for this approach below. We feel it is most appropriate for commercial blockchain applications which will seek to leverage blockchain fault tolerance, transactional efficiency, verifiability, and security to enhance business process automation (and as a low-CAPEX scaling tool). Such applications call for only a 'parameterised-trust,' rather than "trustless," environment.

  2. **Get creative:** remember, consensus rules can now be scripted to limit who can send transactions or commit blocks, and how. We place the power over, and responsibility for, parameterising the rules to run a given application squarely on the shoulders of the developers who build it, who will know best how they want it to work.

  3. **A worked example of creativity in blockchain administration:** being software, the Thelonious chain will do what you tell it to do. In, e.g., a social media application, it may be that users' continued use of the application is contingent on their not misbehaving in relation to the transaction verification process (though I'm not quite sure what they would double-spend - a cat picture?), any violation of which would result in a loss of access to the system through an administrator or moderation function. Or a multi-signature authority could be required where both a committer *and* an administrator would need to sign a block before it formed part of the approved history. Really, there are a lot of options here.

**D. Summing up:**

* **Money is glorified data.** Smart contract systems deal with pure data better than existing blockchain alternatives. Eris lets you deploy smart contract systems.

* If you think blockchains are about the "TCP/IP of value" or the "internet of money," we'd suggest descending a few levels of abstraction. From there, you can pretty easily abstract your way back up to money and value, but along entirely traditional economic and commercial lines if you prefer.

* We don't have a uniform corporate view on what to call this approach. I call it "thinking commercially about how to build useful enterprise tools with blockchain databases." The rest of the team calls it "**crypto-utilitarianism**." *Vive la différence.*



