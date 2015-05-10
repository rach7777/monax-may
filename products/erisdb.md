---

layout:     content
title:      "eris:db"
excerpt:    "The Makers' Blockchain Design"

---

# The Makers' Blockchain Design

eris:db is Eris Industries' open-source blockchain design. eris:db is both smart contract enabled as well as smart contract controlled.

eris:db is not *a single blockchain*, it is *a blockchain design*. It is purposely designed not to be one blockchain, but millions of them: to complement, rather than compete with, its larger, fully-distributed cousins. Although at its base level eris:db can deploy a blockchain which has the same parameters as the draft ethereum blockchain, eris:db was designed with a different set of parameters in mind. We have designed eris:db as a corporate-, organisation-, family-, or application-specific blockchain to work in conjunction with the [eris:server]({{ site.url }}/products/erisserver/) and the other components of Eris Industries' **Distributed Application Platform**.

eris:db allows developers to use blockchain architecture to design, test, deploy, and operate distributed applications. Developers who use a eris:db client to manage their blockchains are able to benefit from having a parameterized smart contract in the genesis block which is capable of managing the consensus and security mechanism of the blockchain through the use of smart contracts. By moving the block consensus and security mechanism out of the client and placing those parameters and instructions into the blockchain itself, we have been able to significantly diversify the types of blockchains which a single client can manage.

Combined with the eris:server, eris:db is able to interact with other blockchain protocols and APIs with ease. Using the eris:server and eris:db together allows developers to harmonize the building of their distributed application with a chain that has been purposely designed for their application rather than trying to fit their application into the structure of a general-purpose blockchain that was not designed for them.

But what about security? In distributed systems, security and consensus are different names for very similar concepts. eris:db puts the power, and the responsibility, onto distributed application developers for properly parameterizing the eris:db blockchain design for their application. Whether security comes in the form of checkpointing a chain against Bitcoin's (or eventually ethereum's) larger, heavier, and more secure blockchain, or whether security comes in the form of greatly restricted **committing** ("committing" being eris:db' equivalent of what other blockchains call "mining") ability, eris:db allows developers to craft consensus and security mechanisms which match the design goals of their distributed application.

eris:db was designed for deployment in a variety of contexts, from locked-down internal corporate deployments to more decentralized and public deployments, or from deployments which require tokenization to those that only require the utility of a blockchain but not monetized tokenization to compensate miners for automated database management services.

A single eris:db client is all that is required in order to participate in all of these blockchains.

# What is a Blockchain?

Blockchains have their origins in cryptocurrency platforms, in particular Bitcoin, where they represent historical records of verifiable monetary stake. They were designed in the first place to solve the double spending problem, that is, to establish consensus in a decentralized network over who owns what and what has already been spent. More generally, blockchains are authenticated records of the history of a network's activity, distributed among the users of the blockchain all around the globe.

A blockchain is an authenticated database which automatically processes, broadcasts, and validates data-driven transactions while also preventing the incorporation of unauthorised transactions. Simultaneously, a blockchain operates as a distributed data store, meaning there is no single master node within the cluster; every node is an equal peer.

Blockchains carry out their functions automatically, requiring neither servers nor human administrators to operate themselves reliably and predictably.  They accomplish this through a process which is often called mining” or "forging" but which we simply call **committing**. This process generally involves bundling the transactions which have come into the system during an established time, along with other parameters into a **block** of transactions and other data which is then placed into the **chain** of blocks that together formulate the world state of data.

Most modern databases store the world state of the data and keep the logs of transactions with the database as a separate "thing". Blockchains, on the other hand, build the world state of the data from "blocks" of authenticated transactions that are "chained" together over time. Thus it is always immediately possible to tell if something is valid, as it must have come from a valid history, and everyone agrees completely on the sequence of valid history.

A blockchain enables anyone to securely store arbitrary information -- in most cases, a token balance -- within the system simply by securing the private keys associated with the addresses at which that information is stored. This has given blockchains the flavour of alternative value-transfer systems that are highly resistant to intervention by regulatory authorities or malicious third parties.

Next generation or blockchain "2.0" technologies such as eris:db place their focus on the fault-tolerant aspect of blockchains, seeing them as a means of reducing the economic impact of server failure, third party attack or the destruction of business premises.

These blockchains are generalized to store arbitrary data and to establish permissions to modify that data through a set of self-administering and self-executing scripts which are executed by a distributed virtual machine which in turn is married to a blockchain. These scripts are known as “smart contracts,” and they allow platform operators to define complex and fully customisable rules which govern the blockchain’s interaction with its users.

## Benefits of Blockchain Technology

What we have when abstracting a blockchain to a certain level is a distributed, self-authenticating, time-stamped store of data. Indeed, the core design of a blockchain is an elegant way in which to overcome many challenges in distributed systems.

Blockchains allow for the development of distributed systems which do not rely on what traditional databases call 'master-slave' clusters. In a blockchain backed system, there is not even a notion of master-slave relationships between the nodes in the cluster. Instead, blockchain backed systems utilize the idea of peer nodes and consensus models to resolve the current world state of the data. Breaking the data-driven transactions into blocks allows the consensus of the database to be negotiated in a reasonable manner rather than on a per-transaction basis.

In addition, blockchains allow for transactional certainty. Traditional databases store the current world state of the data, and if they are programmed to do so, have additional entries covering previous transactions within the data store. In addition, traditional databases are also able to maintain logs of the history of the interactions. Blockchains are designed differently in that the logs of the transactions with the data set are used to formulate the world state of the data. The use of cryptographic authentication of time-stamped blocks of transactions allows the entire network the benefit of certainty of the entire transactional history.

This is an extremely important point when comparing traditional data stores to blockchains. In a traditional database a current entry in a particular field of, say, `10` does not allow us to understand -- without additional programming of the database -- whether the field is currently `10` and whether it used to be `0` and `10` was added to it or whether it was originally `0` and then `15` was added to it and later `5` was taken out of it. If the database is being used simply to track the current world state of the data -- say for a blog or newspaper -- it may not matter whether the data interaction was `0+10=10` or was `0+15-5=10`, but for many applications this difference matters.

The general Blockchain design not only requires that the transactional history of the data store is captured, but that it is cryptographically certain once there is sufficient consensus within the network. In other words, in a blockchain if we know the state of the data at the genesis of the blockchain and we accept the state of the date at `time.Now()` we can be assured that there is one and only one way in which to get from the original state to the current state. Similarly, if we know the state transitions at each phase of the building of the data store (what in blockchains we call blocks) then we can step-by-step recreate the entire world state of data to reach what is the current world state of the data at `time.Now()`.

## Securing Traditional Blockchains

Fully decentralised networks such as Bitcoin use distributed computing power to process and verify transactions broadcast upon them. The network, being aware of the history of all transactions, engages constantly in a process of automated database management and transaction verification through the voluntary provision of computing power, in a process which many blockchains call “mining”, but for eris:db we call "**committing**".

Providers of this computing power – known as “miners” or "committers" – solve complex computational problems, which (in the case of mining) is done in exchange for the reward of cryptographic tokens (such as bitcoins) which the network hopes will become valuable over time due to their scarcity and/or their usability. This provides an incentive to continue securing the network, although there are certain risks – such as inter-miner collusion to incorporate false transactions into the blockchain – that the model also presents.

The term blockchain is a fairly literal term. The way that blockchains grow over time is that transactions which are broadcast to the network are bundled; this set of transactions is combined with -- in many blockchains -- a "proof of work" (which is a very difficult puzzle that a computer -- [or human](http://www.righto.com/2014/09/mining-bitcoin-with-pencil-and-paper.html) -- performs) and together these formulate a block. These blocks are then combined in chains where each subsequent block integrates the block headers (roughly, the solution to the cryptographic puzzle) of the previous block.

The difficulty of falsifying historical transactions under the "mining" database management model increases exponentially as the blockchain grows in size, and

> Bitcoin relies on this mechanism to resist double-spending attacks; for malicious third parties to [falsify transactions] without being detected, they would not only have to redo all the work required to compute the block where that [bitcoin] was spent, but also recompute all the subsequent blocks in the chain.

[Androulaki et al., 2012](http://link.springer.com/chapter/10.1007/978-3-642-39884-1_4#page-1)

Each new participant of such networks usually comes into possession of the complete transaction history when they first join, increasing the number of independent copies of the blockchain in existence, thereby further decentralizing network consensus and rendering malicious interference with the transaction history still more difficult to achieve.

## Weaknesses of Traditional Blockchains

It is said that structuring a blockchain in this way renders it "trustless": that is to say, transactions are so difficult to falsify, and the transaction history so difficult to fraudulently amend, that users do not need to trust any individual entity, or group of them, to secure the information they want secured on the blockchain database or to impede the addition of new transactional data which has been validly broadcast.

This model, however, has significant weaknesses. One of the key weaknesses is that it requires most blockchains to act as standalone silos, and requires a "win or die" approach to their design, development, and maintenance. As a consequence, innovation is slow to be adopted by these networks; their security and consensus models are largely static, and their utility is commensurately limited. Many blockchains are released without significant "mining power" to ensure their security. If they use the traditional proof of work security model, they can be easily attacked.

Another key weakness is that many blockchains rely upon incentivization of the security and consensus mechanism by utilizing tokenization. The reality for many of these blockchains is that the tokens which are issued to miners as a reward for participating in the security and consensus mechanism will never be worth very much. This mechanism is not dissimilar to a company paying its security guards in shares of the company. While this may work well for a company of the stature of Apple or Google with consistently high share value, it may not be able to properly incentivize the security guards working for a company whose shares are of less value and which experience higher volatility or rapid depreciation.

The final challenge which many traditional blockchains face is that due to their public nature, many will simply not be able to work without an anti-spam mechanism of some sort. The anti-spam mechanism used by most blockchains is that data which is to be stored in the blockchain must be accompanied by some payment or deposit of the blockchain's built-in token. This creates a "pay-to-play" atmosphere which suits those individual nodes who possess a significant amount of the tokens well, but may not suit those individuals who do not possess the tokens. Indeed, this is an insurmountable problem for many blockchains and outside of "wealthier" users subsidizing others so that they might benefit from the utility of whatever function that blockchain is meant to provide, there is no answer.

# The Issue of Trust

Many of the advantages and disadvantages of blockchain architecture stem from the idea that nodes on the network are not necessarily trustworthy. Most blockchains are designed to withstand untrustworthy nodes within the network via their consensus mechanism. This design parameter, however, begets some limitations which are discussed above.

The idea which many blockchain advocates take from the consensus protocol is the idea of extended trustlessness to an ever wider range of the overall distributed application, of which the blockchain is providing one piece. While the idea of increased certainty and verifiability is, indeed, appealing, the idea of moving to a fully trustless environment presents many challenges.

## Examining Trustlessness

"Trustless" is largely a misnomer -- and too much of it is not necessarily a good thing. Even the most ardent advocate of Bitcoin, the most prominent "trustless" network, will extend trust regularly to a certain extent, whether to the banks and payment processors which process their fiat currency transactions when they purchase Bitcoin, to the manufacturers of their computers and operating systems on which they run the Bitcoin client, and to the Bitcoin Core developers themselves -- and then there's also [situations like this](http://en.wikipedia.org/wiki/Mt._Gox).

Further, it is not necessarily always the case that trust is a pain point for consumers. When dealing with a bank, for example, consumers trust that deposits or funds held on account are safely kept; where these are not, other mechanisms such as insurance or deposit guarantees are available to secure them. When using web-based applications such as social networks and e-mail, they rely on the provider of those services to back up and secure their data. Indeed, if trust vis-a-vis data and financial services providers were truly a vexing pain point for most consumers, there would be a rush of hosting providers for ownCloud and email-in-a-box solutions along with a drastic increase in transactional volume of non-fiat currency. While we see limited upticks in adoption of those systems, there is [by no means a rush](http://www.ofnumbers.com/2014/06/23/separating-activity-from-growth-on-bitcoins-network/).

Finally, "trustlessness" ignores the fact that in commerce, mistakes are made and a degree of human discretion is required to remedy them. Mechanisms that run completely automously and which cannot be broken **also cannot be fixed**.

## Who is Trustlessness For?

Given that the modern, commercial world neither does operate nor needs to operate in a completely trustless environment, it is not entirely clear to us why so many blockchain advocates retain the idea that a blockchain system must be cryptographically pure and purely trustless in order to be worth existing. It is not as if trustworthiness is a new problem. Entire industries have been developed to handle the boundaries and rules of the trust-trustlessness sides of the spectrum -- not the least of which is the legal system, which operates as a potent safeguard for consumers and commercial entities alike.

For the vast majority of commercial entities, legal norms provide a material constraining mechanism which bounds the actions which any entity can take. While there are indeed challenges which remain to broaden access to justice, and while we feel that things do need to improve, it does not follow that one should throw out hundreds of years of legal and commercial norms simply because we now have elliptic curve cryptography.

Instead of defaulting to a position where the operator of a commercial platform is untrustworthy, let us examine the problem from a different perspective. Where commercial considerations render the platform operator trustworthy, we see that the question of trust is not between the user and the platform operator -- but rather between the user and the platform operator's systems. In such a case, implementing blockchain-based architecture is capable of enhancing security for the user vis-a-vis both the platform operator (in terms of certainty) and the world (in terms of foiling the efforts of malicious third parties to access that data).

Put differently, commercially viable reduced-trust networks do not need to protect the world from platform operators. They will need to protect platform operators from the world for the benefit of the platform's users.

## From Trustless to Verifiable

While trustlessness is a tricky subject commercially for all the reasons discussed above, increasing the verifiability of data-driven interactions is a goal which all entities and organizations -- whether commercial, corporate, not-for-profit, or individual -- can benefit from. This is why, at Eris, we prefer to focus on increasing verifiability rather than engaging in largely philosophical debates about the quantum of trust. And when it comes to increasing verifiability for all parties to a given data-driven interaction, there are few technologies currently invented which match blockchains.

# What are Smart Contracts?

To begin with, smart contracts are neither particularly smart nor are they, strictly speaking, contracts. That aside, they do provide a fairly well placed metaphor for what they really are: blockchain housed scripts which represent unilateral promises to provide a determinate computation. These scripts are compiled into very low level operation codes and stored in the blockchain's data store at a particular address -- which is determined when the contracts are compiled and deployed to the blockchain. When a transaction is sent to that address the distributed virtual machine executes the script's operation codes and is able to use the data which is sent with the transaction.

Smart contracts are modular, repeatable, autonomous scripts, typically running on a blockchain, which can be used to build distributed applications for yourself, for a community, for a client, for a bounty, or even just for fun. They can be mixed and matched, and easy to iterate, rather like lego bricks combined with pre-set templates.

Smart contracts can be coded to reflect any kind of business or engineering logic which is data-driven: from actions as simple as up-voting a post on a forum, to the more complex such as loan collateralisation and futures contracts, to the highly complex such as repayment prioritisation on a structured note. Relationships and obligations which are 'smart contractified' benefit from blockchain security logic and also the increase in verifiability.

By building business logic in smart contracts, developers and lawyers can give their users and clients an increase in the verifiability and certainty which comes with distributed technology while simultaneously building a system of rules which will be structured so that it can keep up with increases in automation in the world around us.

So, how does one structure a smart contract? Here's a simple overview: take a data-driven interaction -- any interactions you like -- and establish:

* what the different users agree are the specified parameters for the interactions;
* the data that will be used to measure the interactions;
* the sequence of the interactions;
* the rules of the interactions; and
* what should happens when the limits of the data’s ability to describe the interactions are crossed.

Put that on a distributed data store matched with a distributed virtual machine and you’ve got a smart contract.

## Benefits of Using Smart Contracts

There are many benefits of using smart contracts; not the least of which is a large increase in verifiability of data-driven interactions and their outcomes or knock-on effects. While, at their core, smart contracts are simply software scripts no different than those which may run in any application stack, they have one unique quality to them which any other random software script does not: certainty. Smart contracts have visibility across the blockchain they live on. That is to say, if someone has access to read the blockchain, they will have access to see the compiled script. This is a very different idea than being told that a certain script will operate in a certain way on servers which you may not control.

Let us step back for a moment from the specifics of smart contracts and think about a commercial deal which will involve a dozen entities and many different data-driven interactions throughout the life of the deal. How the IT departments for the commercial entities would likely structure the administration of the data driven aspects of the deal would be to establish a tracking system which is completely under the control of that commercial entity and, perhaps, provide some programmatic interface for others to query records or send new information regarding a record. It is likely that each of these dozen commercial entities will each establish a similar system to monitor and track the data interactions over the course of the deal.

This is where the execution certainty of smart contracts married with the historical transaction certainty of a blockchain should become increasingly interesting for commercial players. If the commercial entities were wise about how they structured the deal, they could track all of their data-driven interactions on a smart contract-enabled blockchain without having to build twelve different systems, ensure their interoperability, and expend labour-time to appropriately categorize and file relevant transactional data. Every entity having access to the blockchain will be able to completely verify the entirety of the interactions as well as the entire history of the data set, which would be automatically maintained over the life of the deal and summarised at its conclusion.

Under the current software design paradigm which would likely be deployed for such a deal, this would never happen. Each entity would keep full control over the scripts or software tracking and executing any downstream functions after a new or update record transaction.

While the different commercial entities may be legally incorporated and would not be required to move to a completely trustless system of the kind described above, they would all experience significant cost savings from the increased verifiability and automation a blockchain-based smart contract system would permit.

## Challenges of Working With Smart Contracts

At the moment, there are two primary limitations to working with smart contracts. The first challenge is temporary, the second challenge is fundamental.

The first challenge of working with smart contracts is that there is something of a prisoner's game with respect to their adoption. That is to say: the most significant benefits of smart contract adoption come when numerous commercial entities begin to automate their data-driven interactions using smart contracts and a blockchain which is purpose-built for that (and preferably only that) multi-party interaction. Given that the number of individuals with the technical proficiency to develop and deploy smart contract systems is few, this challenge should not be underestimated. In a single commercial entity's context, in the short-term the design and deployment of smart contract systems would for many applications be less efficient than carrying on with a centralized software stack with redundancy built-in. However, in the context of multiple commercial entities, the redundancies of data and scripting capabilities required for multiple parties to track and manage a deal tips the efficiency scales heavily toward smart contracts, with marginal returns increasing over time with subsequent iterations and increasing blockchain use throughout a given market.

The second challenge of working with smart contracts is that smart contracts are simply software. They are not the "living, breathing" documents that people generally think about when they think of "contracts" and as such they are not inherently enforceable. Indeed, they can "enforce" or, better, administer some of the state of the data which they have access to on the blockchain on which they reside. Yet, beyond that there is little reach that smart contracts have. For the foreseeable future they will not be enforceable in any court, and few parties will be able to rely on smart contract technology alone to structure all of the terms of a commercial transaction in code.

# eris:db' Design Philosophy

eris:db is the blockchain client purpose built to manage a multitude of chains, each with their own consensus and security mechanisms. It is the first blockchain design we are aware of that is not only smart contract-enabled, but also smart contract-controlled.

Not only are eris:db blockchains smart contract controlled, they are also purpose built to be flexibly deployed in more limited context than is currently possible with most blockchain designs which rely on pure proof of work that can be attacked with sufficient processing power.

## A Smart Contract Controlled Blockchain

When we say that eris:db is "smart contract controlled", this is what we mean:

* Most blockchains hard-code the consensus and security for the blockchain into the clients which are built to manage the blockchain. The only way to change the consensus and security mechanism for that blockchain is to change the hard coding of a majority of the clients on the network for a sufficient time such that the blockchain eventually gains a fork of itself and continues operating.

* eris:db is designed differently. Because the consensus and security mechanism for any eris:db-compatible blockchain is built into the blockchain, the eris:db client is able to assemble blocks and manage the consensus of the blockchain using parameters which are built into smart contracts which reside on the blockchain itself. So a eris:db blockchain is a self-defining, self-contained blockchain which does not require a hard-coded consensus and security mechanism.

While this design is new, the power of such a blockchain should be evident to those familiar with blockchain technology. This means that to change the consensus and security mechanism for a eris:db blockchain the operators of the blockchain simply need to change some smart contracts on the blockchain (provided they have sufficient privileges to do so).

An example may help to illustrate the power of a smart contract-controlled blockchain. Let us continue with the example given above where a dozen commercial entities wish to track a particular deal which has numerous data-driven interactions on a particular eris:db blockchain. To ensure that other entities are not able to participate in the chain, the blockchain designers may parameterize the eris:db blockchain such that only three private keys from each of the twelve entities may send transactions, create smart contracts, or commit (eris:db' equivalent of "mining" in other blockchains) blocks. These consensus and security parameters are "hashed" into the genesis contracts of the blockchain and the blockchain is deployed. Everything goes as planned for a few months, until one of the entities has a server go down such that the hard drive for the server cannot be recovered. The private keys for one of the three nodes of that entity were on that server and the entity did not have a backup of the private keys. It can safely be assumed that these keys are -- at this point -- either compromised or are lost.

At this point in most blockchains, the commercial entity would simply have to have one less participant in the blockchain and rely on its other two nodes. However, with a eris:db smart contract controlled blockchain, the entity would simply notify the other entities of the change and provided sufficient consensus was achieved, could simply swap out the address of their third node to a new set of public-private keys (hopefully backed up this time) on a new server.

The process would likely work in a similar nature if, for example, a new commercial entity was going to enter the deal and was given three nodes of its own to participate in the smart contract blockchain. Since all of these interactions are governed from smart contracts, whatever consensus rules can be scripted can be use to manage a blockchain.

If a group of researchers is working on a new consensus algorithm they no longer need to program those in difficult to manage languages hard-coded into clients, but they simply need to build them in one of the in-development smart contract languages.

Lastly, if a distributed application designer decides to build a distributed application using eris:db and the initial state of the application is fairly locked down while the application design team builds and test the distributed application, they can hash those parameters into the smart contracts which control the blockchain so as to protect the blockchain while they develop the application. Later, when the application is ready for release they can simply change the consensus mechanism, perhaps to mirror a standard proof of work or other consensus algorithm suitable for a very public blockchain so that their users can help manage the data and security of the blockchain.

## GenDoug

eris:db' *chief of operations* is GenDoug, a smart contract configured in a particular eris:db chain's genesis block, through which all protocol validation passes. GenDoug enables developers to, among numerous other things, "lock-down" their blockchains, specifying which public addresses, if not all of them, are permitted to transact, create new smart contracts, or mine the chain. In general, GenDoug controls the definition of the chain. All parameters which have to do with how that specific eris:db chain should be read and operated by the eris:db client will stem from GenDoug, including the parameters described above as well as the consensus and security mechanism used by that chain.

## Tokens, No Tokens, Your Choice

eris:db runs on junk. Junk is a notional token which may or may not have value within the context of a eris:db blockchain.

At this point, junk is hard-coded into a eris:db client. However, given that the only reason for including a token in a blockchain client is for distributed "crypto-economic" incentives, and given that eris:db is about securing productivity gains arising from blockchain utility what we call "crypto-utilitarian", during an upcoming release cycle we will be completely abstracting the entire notion of tokenization of the blockchain to a fully smart contract-governed design. After that, junk will remain available for use by distributed application developers, but it will be instituted as standalone contracts, as we have done for the consensus and security mechanisms, rather than hard-coded into the client.

eris:db, like its uncle ethereum, also runs on "gas". Gas in both eris:db and ethereum is "purchased" (in an ethereum client with ether, in a eris:db client with junk). Gas is the amount of computational cycles which any given transaction can spawn. Gas is largely used as an anti-spam mechanism. Each operation code used by the distributed virtual machine costs a set amount of gas. As these operation codes are executed gas is "spent". If the user has not sent enough gas with the transaction then the transaction fails with an out of gas error.

Currently eris:db works quite differently than ethereum with respect to gas. ethereum allows clients to use as much gas as can be bought with the ether in that user's account up to a maximum gas amount for any given block. eris:db, due to our different design parameters, has a default gas price of 0 junk but has a maximum amount of allowable gas per transaction so that no single transaction can overload the virtual machine. One shouldn't worry -- to our knowledge our team has made the most complex contracts which have been run on any blockchain, including ethereum, so we are well aware of how much gas is needed to perform very complex operations and the max gas per transaction we've built as a default into eris:db is greater than that. As eris:db moves towards a smart contract controlled junk, the max gas per transaction will be simply a parameter to be defined by distributed application developers.

Also, because the default gas price is 0 junk, and because eris:db clients are meant to be agnostic as to whether the blockchain uses a token or does not, new users are able to easily be onboarded to a eris:db blockchain even before they have purchased any junk (if junk is even used or useful on that blockchain).

# Designed with Enterprise in Mind

eris:db is ready for business. We have designed it so that commercial entities who have hesitated to embrace participatory architecture and blockchain technology can feel comfortable in their ability to control the blockchain while still allowing for the other benefits which come with participatory architecture design.

With one eris:db client, commercial entities will be able to control an innumerable amount of blockchains, each purpose built to solve a particular enterprise challenge.
