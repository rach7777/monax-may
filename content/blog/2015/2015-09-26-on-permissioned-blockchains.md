---
author: Casey Kuhlman, CEO
categories:
- blockchains
comments: true
date: 2015-09-26T00:00:00Z
deprecated: true
excerpt: This is a think piece examining the idea of application-specific blockchains.
  Where are they useful? Where are they not useful?
meta: true
published: true
tags:
- blockchains
thumbnail: mostpit.jpg
title: On Permissioning Your Blockchains
# url: /blog/2015/09/26/on-permissioned-blockchains/
slug: on-permissioned-blockchains
---



[{{< image_blog "mostpit.jpg" >}}](https://www.flickr.com/photos/kevincortopassi/3108413681/)

### Preface

Permissioned blockchains are now a thing. That's interesting in and of itself, but it is also insufficient to really capture the benefits of this technology along with their unique placement within the fuller spectrum of data management options which organizations have.

This is an attempt to clarify our position with respect to where permissioned blockchains sit within the spectrum of viable data management solutions.

**tl;dr**: permissioned blockchains sit roughly on a spectrum between permissionless blockchains and "traditional" distributed databases, providing most of the benefits of permissionless blockchains without some of their constraints.

What *all* blockchains fundamentally do which no other data management solution I know of does, is to provide a level of verifiability out of the box which ensures that every (full) node on the network can *independently* verify **what the data is**.

Before going deeper, let's first take a look at comparing blockchains to [hub and spoke](https://en.wikipedia.org/wiki/Hub_and_spokes_architecture) data management architecture.

### Blockchains (Permissioned and Permissionless) Architecture v. Hub and Spoke Database Architecture

There are four main areas in which blockchain based applications differ from those which are built using a hub and spoke database architecture. Note these differences apply no matter whether the blockchain in question has a proper access control layer (and as such is conceptualized as a *permissioned blockchain*) or does not (and is conceptualized as a *permissionless blockchain*).

#### 1. Assembling v. Receiving Data

Every node in a blockchain network "assembles" its view of **what the data is** by ensuring that it has the full, and agreed set of transactions and applying those transactions as state transfer functions over the previous state of the data. In a hub and spoke architecture, the nodes within the network (usually) receive data updates from the hub rather than independently assembling what the world state of the data is via receiving the transactions and assembling the state locally.

What I mean by this is roughly analogous to the difference between being told a fact in a class and performing a mathematical proof in class based on assumptions provided by a teacher. One only requires acceptance by the "receiver" while the other requires effort by the "assembler".

The fundamental difference architecturally is, essentially, the "freedom" which the various nodes on the network have to tell clients which are hooked into them **what the data is**. By clients in this context I do not mean blockchain peers, but rather clients *of the blockchain node* (such as middleware or light clients).

This "freedom" is what blockchain-ers are (sometimes) talking about when the speak to the "decentralization" benefits of the blockchain in question. At other times, the "decentralization" portion of what blockchain-ers are talking about relates to a different matter: that of whether the blockchain has an access control layer or does not (something which this post will speak to below).

#### 2. Distributed Cryptographic Verifiability

Blockchains allow nodes on the network to have cryptographic verifiability over the data and state changes entered into the network out of the box. This level of verifiability **can be added** to a non-blockchain based database back end (as Hyperledger, among others, have purportedly explored). The difference being whether the cryptographic certainty is a first class citizen of the network or whether it is an addon is likely irrelevant for many applications which have lower levels of cryptographic "purity" and are integrated into real world fact patterns which must, by definition, be less than cryptographically pure.

With respect to this "difference" there is likely no huge benefit which blockchains can provide that a properly constructed hub and spoke database architecture cannot provide *outside* of a convenience and ease of use function. While blockchains present their own operational challenges to organizations seeking to use them, one thing they are extraordinarily good at is abstracting away digital signing algorithms, state changes, and the cryptographic verification of those into a coherent client for users.

#### 3. Sharding, Computational Effort "Parallelizing", and Performance

Blockchains are (currently) non-shardable. This is a very important difference between blockchains and hub and spoke database architecture. There are theoretical options for addressing shardability such as [this proposal by Ethereum's Vitalik Buterin](https://github.com/vbuterin/scalability_paper/blob/master/scalability.pdf) and an analogous presentation made by Vlad Zamfir at Scaling Bitcoin. However, it must be noted that currently these are theoretical in nature.

The practical effect of this non-shardability is that every (full) node on the network must perform the **full amount of computational effort** required to manage, verify, and perform the state change operations which are necessary antecedents to updating the world state of the data post a block of transactions being received. A shorter me would say: all the nodes individually do all the computing for all of the network.

There is another side to this coin, which is that it is *significantly* easier to run blockchain nodes in a "cloud-y" manner than it is hub and spoke databases. Hub and spoke databases scale vertically due to their design; on the other hand blockchains scale horizontally due to their design -- which exactly how "cloud-y" applications are meant to scale.

Hub and spoke database architecture is appealing if you are willing for your data management solution to be fully outsourced to Amazon's DynamoDB or another similar solution provider and/or if your application requires vertical scaling. However, the counter argument also holds, if you need the data management solution to be easily spun up and distributed amongst nodes which are not fully integrated into infrastructure of the data management solution (e.g., if you are in IoT land and worried about device independence) then a blockchain architecture is likely more appealing.

With `eris`, for example, one can add an additional node to a given blockchain with one command and a simple IP address of a peer server that the node in question should use as a connector. This makes nodes easily scalable horizontally in a similar manner to how heroku and other cloud based applications deal with processing.

The fundamental difference architecturally is, essentially, that blockchains are going to be significantly more constrained in the amount of transaction processing they are able to perform because blockchains are built to be independently redundant with respect to the data management functions; whereas hub and spoke databases can be built to operate using truly parallel computation.

This consideration may become abrogated over time, but it is the current state of play.

#### 4. Data Visibility Controls

Blockchains, currently by definition, do not have an ability to restrict access to nodes on the network from reading **what the data is**. That data, of course, can be obscured or "mixed" to provide some level of privacy, but at a fundamental level blockchain nodes interacting with a network are unable to control read access to the data as the entire chain of blocks would, by definition, become unverifiable and difference (1) would break down completely.

Hub and spoke architecture, on the other hand, has a much greater ability to restrict read access to what the data is and as such provide a much higher level of privacy than a blockchain architecture can (currently) attain.

#### Overview of Differences

A cursory overview of the above differences would lead many to the conclusion that blockchains do not make any sense as a data management solution. Indeed, it is true that blockchains are awful at performance and privacy; yet, I do not hold the view that they are make no sense as a data management solution. It really, truly, does depend on what the application is trying to achieve.

If an application is not trying to optimize for performance, because it is a redundancy focused application which needs unified state changes across a distributed network, then one not need to worry about the performance limitations outlined in (3).

If an application is not trying to achieve privacy, because it is a transparency focused application, then one not need to worry about the privacy limitations outlined in (1) and (4).

Difference (2) is, admittedly, mostly an operational convenience difference rather than an architectural or technological difference.

### "Globally Decentralized" v. "Locally Decentralized"

I get Meher's critique of the "trusted ledger space" (which he's using in place of my "permissioned blockchain" formulation) in this tweet:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/bedehomender">@bedehomender</a> <a href="https://twitter.com/ethereumproject">@ethereumproject</a> <a href="https://twitter.com/monaxHQ">@monaxHQ</a> Trusted ledger space has mostly argued against Bitcoin and not for itself - it&#39;s a big gap.</p>&mdash; Meher Roy (@MeherRoy) <a href="https://twitter.com/MeherRoy/status/647495732237336576">September 25, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

That said, it is semi necessary to consider permissionless blockchains in the context of this piece, because understanding of blockchains is skewed toward their public implementation.

As I have argued elsewhere, the "DNA" of a permissioned blockchain is no different than the "DNA" of a permissionless blockchain if we avoid the discussion of the presence of an access control layer. This is why the section above was formulated to speak about blockchains generally vis a vis hub and spoke blockchain architecture.

So, as Monax Industries sees them, permissioned blockchains differ from permissionless blockchains based on the presence or absence of an access control layer built into the blockchain clients. What are the fundamental implications of having an access control layer?

#### 1. Consensus Participant Restrictions

The first primary difference between a properly conceived permissioned blockchain and a permissionless blockchain is whether the participants in the blockchain have an ability to restrict who can participate in the consensus mechanism of the blockchain.

Permissioned blockchain designs (at least as we've conceived them) allow the network to appoint a group of participants in the network who are given the express authority to provide the validation of blocks of transactions. Or, to participate in the consensus mechanism. What this effectively means is that there indeed *is* more control over the network itself.

#### 2. Capabilities Restrictions

The second primary difference between a properly conceived permissioned blockchain and a permissionless blockchain is whether the participants in the blockchain have an ability to restrict who can create smart contracts (if the blockchain is [logic optimized](/2015/08/10/how-i-current-explain-blockchains/)) and/or transact on the blockchain.

#### Analogizing These Fundamental Differences

The easiest way to explain the differences between permissioned and permissionless blockchains is to analogize. Ethan has [compared](/2015/04/30/on-blockchains/) a blockchain architecture to a hub and spoke architecture via comparing democracy to dictatorship:

> [C]onsider this: democracy can be orders of magnitude less efficient at governing large bodies of humans than hierarchical dictatorships, but for one reason or another countries continue to turn to democracy (granted, weak forms of it) rather than dictatorship because of the kind of culture it produces. Blockchain technology may have a very similar impact on humans: even though they are less efficient than their counterparts at the typical things their counterparts were optimized for, they impose new structural paradigms on human interactions that may be valuable in and of themselves, regardless of the performance of the database, and especially if they result in human behavioural patterns that make culture as a whole more efficient.

While the analogy isn't 100% perfect, I do think it holds as a mechanism for explaining the differences between technical stacks. Yet the analogy begets the question: if blockchains are slower, less performant, more democratic data management solutions then what level of participation is that democracy operating at?

In the "real world" we do not say that local counsels and other lower forms of government are not democratic because they do not allow everyone in the world to participate in the democracy mechanism. In other words, it is not true that the only form of democracy is global democracy.

Yet, in blockchain land these things often get conflated. Coming from a governance reform background, it is odd to me that folks in blockchain-land make this argument. Political science categorizations of governance mechanisms as [democratic](https://en.wikipedia.org/wiki/Democracy) do not depend in the slightest on whether a set of non-citizens to the group is excluded or not.

While it is not the most perfect definition in all of political science, if we look at the "elements of democracy" from Wikipedia (again, this is only used as a basis for analogy and I'm not writing a doctorate in polisci here) we have:

> A political system for choosing and replacing the government through free and fair elections. (*N.B.*, in blockchain-land we usually call this the fork choice rule)

> The active participation of the people, as citizens, in politics and civic life. (*N.B.*, in blockchain-land we usually call these full nodes participating in the consensus mechanism)

> Protection of the human rights of all citizens. (*N.B.* in blockchain-land we usually call this the protocol's rules)

> A rule of law, in which the laws and procedures apply equally to all citizens. (*N.B.* in blockchain-land we usually call this the protocol's rules)

One is unable to find, by analogy, any less democratic systems which simply exclude non-citizens. So, if in permissioned blockchain-land a group of participants decides to exclude "non-citizens" of the group, but complies with the remainder of the elements, is it less of a blockchain? I, personally, say no.

#### Revisiting Decentralization

Now, lets turn to the idea of decentralization itself. The World Bank, who employs some global experts on *political* decentralization, breaks this inherently subjective and ambiguous term into three major forms (at least when speaking to the administrative application of governance mechanisms at a sub-state level, which is typically what folks mean when they say "decentralization" in a political science context).

> `Deconcentration`. Deconcentration -- which is often considered to be the weakest form of decentralization and is used most frequently in unitary states -- redistributes decision making authority and financial and management responsibilities among different levels of the central government....

> `Delegation`. Delegation is a more extensive form of decentralization. Through delegation central governments transfer responsibility for decision-making and administration of public functions to semi-autonomous organizations not wholly controlled by the central government, but ultimately accountable to it....

> `Devolution`. A third type of administrative decentralization is devolution. When governments devolve functions, they transfer authority for decision-making, finance, and management to quasi-autonomous units of local government with corporate status....

[Reference for the above](http://www1.worldbank.org/publicsector/decentralization/admin.htm)

It is important to note that, at least within the political science community, that decentralization is not equated to *devolution*, nor is it equated to everyone has an ability to participate, but rather looked at as a spectrum of possible options for increasing resiliency within the governance network.

It could perhaps be argued that permissioned blockchains have weaker forms of decentralization than permissionless blockchains, but I would largely disagree with that from a technical perspective because the consensus mechanism is exactly the same. The delta is who can participate in the consensus mechanism.

On a systemic level, especially as applied in an enterprise, the critique may hold that the decentralization is a weaker form of decentralization. Indeed, a single company blockchain may only avail the enterprise of *deconcentration* amongst business units (and perhaps internal audit along with external audit).

Fundamentally, however, it would still be within the realm of what most folks would consider "decentralization" even though we have constrained the "decision makers" in the system. Instead of relying on pure market dynamics and open competition to provide the "decentralization", permissioned chains simply rely on preagreement amongst a founders group to provide their "decentralization".

### The Benefits of Permissioned Blockchains

If we are in the land of blockchains (in other words, we have analyzed the differences with hub and spoke architecture and decided that for our given application a blockchain based architecture is more interesting than a hub and spoke architecture). Then we must consider the relative advantages which permissioned blockchains have *vis a vis* their permissionless cousins. We must also consider permissioned blockchains have *vis a vis* their cousins on the other side of the spectrum: hub and spoke distributed databases.

#### 1. Performance

Blockchains in general are not very performant. But one can get *better* performance from a blockchain system by limiting what that system is actually trying to manage. Because all the full nodes on the network perform all of the computation redundantly rather than in a segregated (traditional parallel computing) fashion, when one is running a full node on a public blockchain such as Ethereum's, one is performing all of the computation for all of the things on the entire network. Should Ethereum explode in popularity, this will be a ton of computing power you would devote to managing the computational effort for *not* the application you are trying to use.

Now for many, that is exactly the point, that all the applications are being ran by all of the full nodes. And it definitely makes sense for some applications. However, it doesn't make sense for every application. Particularly those applications which are enterprise in nature and need to have increased performance.

Why, for example, would a bank run a bond lifecycle application on a public blockchain? The arguments for it are basically that the "network will handle it", but in that sense the bank is outsourcing its data processing costs to the network in a manner which most banks are trying to stop doing (because from the bank's perspective the "ethereum network" is, functionally, no different from a clearing house in that context).

Should the bank choose to, as Fred Wilson argued, participate in the data management processes of the network, then they will be devoting significant computing resources to "not their application".

In some situations this may be appropriate. I'd say, for example, where identity was concerned this would be very appropriate. However, where there is a mission critical application which needs to have some level of performance and a greater participation by the bank than simply "another application" on the network, then formulating a smart contract network (I mean, blockchain) focused on managing the computation required for that debt application would likely make more sense.

Permissioned blockchains do not abrogate the requirement that every (full) node on the network perform all of the computation for all of the network. However, effectively they are breaking the computation requirements for a given meta-network into segments which only apply to that particular application. This is particularly true where the blockchain in question has been checkpointed against a heavy, public blockchain such as bitcoin or ethereum. The difference here is one, fundamentally, of scope rather than implementation.

If Ethereum is the World's Computer, that also necessitates that it is the UN of computing. Meaning it is, by definition, going to be *extremely* slow in comparison to a bunch of servers running scripts against a hub and spoke database. But this isn't the correct lens in which to view Ethereum (as readers who have reached this point in the piece should well realize), as Ethereum is not trying to be a better scripting language.

A permissioned smart contract network will be more performant than Ethereum for a *given* application because each node will only need to perform the computation necessary to support that *given* application, but it will also be significantly slower than scripting languages and hub and spoke databases. In this sense permissioned smart contract networks are more like a "County's Computer" than the "World's Computer" and as such they do not have the requirements that the UN of computing would have, and they can be built to be more focused and responsive to the "County's" needs.

#### 2. Governance Over Process Is A Challenging Business Problem

To begin with, let me quote Ethan (again):

> Blockchains are neat because they take the old concept of commits, tx logs, and replication in database architecture and replace it with an integrated system of authenticated state transitions. That's valuable, potentially very valuable for core infrastructure and services in our economy, for all kinds of things, like transparency and auditing and accountability and so on. Blockchains make auditing and verification easy. You should be able to use that for more than just currencies. Maybe not for some silly "Yo" app, but for next generation smart government and auditable economy, that's going to matter.

Reference

When we get to the land of smart contracts instead of simply blockchains and tokens, the focus of effort for Monax since the days when Andreas was working on PRO-Doug and Tyler, Preston and I were prototyping a foundation in smart contracts and Ethan was working on Cryptoswartz (or, proof of custody), what we're essentially talking about (as I've argued [elsewhere](/2015/09/15/smart-contracts-intro/)) is "business process automation which reaches outside of the glass doors". In other words, across organizations.

And let's get real for a second. Business process automation is not something which needs to be ran on the Worlds Computer in order to be useful. To be clear, I'm not trying to denigrate Eth's messaging, I indeed like that positioning. That said, there is tons of utility in a smart contract network which is completely independent of having a globally decentralized, globally available, permissionless ledger.

There is a real challenge here for enterprises which are seeking to put in place business process automation in consortium's. They may need to have a space to move in different directions and optimize for different ideas than a public network would be optimized to achieve. Would enterprises seek to build applications on public blockchains the main constraint they'll have is that the blockchain has been optimized for the lowest common (global) denominator rather than being optimized to achieve what the consortium is trying to achieve.

In this sense, permissioned blockchains can be used iteratively to accomplish very specific business problems and optimized to achieve those solutions rather than having to be built for only the lowest common denominator. The end result here is that it is easier to marry the specific business challenges and governance over business processes to the data management solution used by the network.

#### 3. Cost Structure

Finally, there is the cost structure. Public blockchains are costly to deal with and they are so for a pretty simple reason: spam control. Ethereum has a pricing structure which is linked to computation operations.

So every time a contract needs to go into a for loop, users of that contract must to pay to run that for loop. How  much users are required to pay will be determined how many times the contract must iterate through the loop. The more times through the loop, the more computational operations will be required, and the more money must be spent.

What happens in Ethereum if users do not send enough money to a contract when they interact with it? That transaction does not happen. Plain and simple. Ethereum has a valid reason for why it does this: if a contract has an infinite loop in it and they did not have a pay-per-computing-operation mechanism a single contract could seize up the entire network by throwing all of the full nodes into an infinite loop.

Controlling this attack vector on a permissioned blockchain can happen in a very different manner than *having* to rely on market and pricing dynamics. With erisdb style chains we implement a maxgas per transaction to stop the network from seizing and there are other ways to control this if you have more visibility or control over the smart contract network (oh, sorry, blockchain).

### Securing Permissioned Blockchains

There is a fallacy I have heard now and again that permissioned blockchains are significantly less secure than permissionless blockchains which have an economic incentive to "mine" and protect the integrity of data.

When people say that permissioned blockchains don't have the same level of security as permissionless blockchains sometimes they are equating blockchains ​_without_​ permissioning systems to "permissioned" blockchains.

These are very different things indeed. A blockchain which does not have an access control layer baked in as a first class citizen of the client used to operate it, such as the one recently used by UBS to conduct a smart bond proof of concept, is a very different animal than a blockchain design which expressly whitelists those that are able to participate in the consensus mechanism. In the UBS scenario, an adversary which is able to get into the VPN (assuming this was their architecture for the simple proof of concept; I assume they would not do this in production) and connect into the blockchain could potentially attack the network using increased mining capacity. We had nothing to do with the referenced proof of concept, and everything I just referenced is available publicly on Twitter.

The security model of public blockchains ​_actually_​ is not their overall hash rate, but rather is the non-predictive distribution of power over ​*what is* among nodes unlikely to collude​, meaning the security model ​*is*​ the relative distribution of the pie size of the hash rate rather than the "volume" of the hash rate. This is why folks get antsy when big mining farms get too close to the redline.

The hash rate *does* provide a barrier to entry and also a barrier to quickly acquiring a sufficiency of the non-predictive distribution of power over *what is*. Yet this barrier to entry, and/or barrier to control, can just as easily be provided by a properly conceived access control layer as it can be provided by market dynamics. Free marketeers may not like that I argue that there are many ways to control the relative slices of the overall pie representing the power over *what is*, but nevertheless the logic, I'm pretty sure, still holds.

A possible attack vector at this point for overtaking a permissioned blockchain is thieving (or brute forcing) of the private keys for the validator set. This attack vector is **extremely unlikely** it must be reinforced, however it is mathematically possible.

Yet, this is a very different matter from the security critique of permissioned blockchains which has largely centered on low hash rates. Indeed, since eris:db is built on a proof of stake backbone, the entire critique with respect to hash rates is wholly unfounded if applied to eris:db chains specifically; but exploring that is for another day.

### Postface

This is a very hard argument (for me) to encapsulate into a tidy soundbite for folks because it is intricate and subtle. Hopefully, some of these many words make some sense as you continue your exploration of this very interesting and important technology.

**Photo Credit** [Kevin Cortopassi @ flickr](https://www.flickr.com/photos/kevincortopassi/) CC By-ND, 2008
