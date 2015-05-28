---

layout:     content
title:      "eris:db"
excerpt:    "The Makers' Blockchain Design"

---

# The Makers' Blockchain Design

eris:db is Eris Industries' open-source blockchain design. eris:db is both smart contract enabled as well as smart contract controlled.

eris:db is not *a single blockchain*, it is *a blockchain design*. It is purposely designed not to be one blockchain, but millions of them: to complement, rather than compete with, its larger, fully-distributed cousins. Although at its base level eris:db can deploy a blockchain which has the same parameters as the draft ethereum blockchain, eris:db was designed with a different set of parameters in mind. We have designed eris:db as a corporate-, organisation-, family-, or application-specific blockchain to work in conjunction with the [eris:server]({{ site.url }}/products/erisserver/) and the other components of Eris.

eris:db allows developers to use blockchain architecture to design, test, deploy, and operate distributed applications. Developers who use a eris:db client to manage their blockchains are able to benefit from having a parameterized smart contract in the genesis block which is capable of managing the consensus and security mechanism of the blockchain through the use of smart contracts.

When combined with the eris:server, eris:db is able to interact with other blockchain protocols and APIs making data acquisition, data processing, atomic swaps, and other challenging paradigms a breeze. Using the eris:server and eris:db together allows developers to harmonize the building of their distributed application with a blockchain that has been purposely designed for their application rather than trying to fit their application into the structure of a general-purpose, public blockchain that was not designed for them.

eris:db was designed for deployment in a variety of contexts, from locked-down internal corporate deployments to more decentralized and public deployments, or from deployments which require tokenization to those that only require the utility of a blockchain but not monetized tokenization to compensate miners for automated database management services.

A single eris:db client is all that is required in order to participate in all of these blockchains.

For more on [what a blockchain is]({{ site.data.sites["docs"].url }}/explainers/blockchains/) please see [our explainer]({{ site.data.sites["docs"].url }}/explainers/blockchains/).

For more on [what a smart contract is]({{ site.data.sites["docs"].url }}/explainers/smart_contracts/) please see [our explainer]({{ site.data.sites["docs"].url }}/explainers/smart_contracts/).

## Securing Traditional Blockchains

In distributed systems, security and consensus are different names for very similar concepts. eris:db puts the power, and the responsibility, onto distributed application developers for properly parameterizing the eris:db blockchain design for their application. Whether security comes in the form of checkpointing a chain against Bitcoin's (or eventually ethereum's) larger, heavier, and more secure blockchain, or whether security comes in the form of greatly restricted **committing** ("committing" being eris:db' equivalent of what other blockchains call "mining") ability, eris:db allows developers to craft consensus and security mechanisms which match the design goals of their distributed application.

Fully decentralised networks such as Bitcoin use distributed computing power to process and verify transactions broadcast upon them. The network, being aware of the history of all transactions, engages in a process of continual, automated database management and transaction verification through the voluntary provision of computing power, in a process which many blockchains call “mining”, but for eris:db we call "**committing**".

Providers of this computing power – known as “miners” or "committers" – solve complex computational problems, which (in the case of mining) is done in exchange for the reward of cryptographic tokens (such as bitcoins) which the network hopes will become valuable over time due to their scarcity and/or their usability. This provides an incentive to continue securing the network, although there are certain risks – such as inter-miner collusion to incorporate false transactions into the blockchain – that the model also presents.

The difficulty of falsifying historical transactions under the "mining" database management model increases exponentially as the blockchain grows in size, and

> Bitcoin relies on this mechanism to resist double-spending attacks; for malicious third parties to [falsify transactions] without being detected, they would not only have to redo all the work required to compute the block where that [bitcoin] was spent, but also recompute all the subsequent blocks in the chain.

[Androulaki et al., 2012](http://link.springer.com/chapter/10.1007/978-3-642-39884-1_4#page-1)

Each new participant of such networks usually comes into possession of the complete transaction history when they first join, increasing the number of independent copies of the blockchain in existence, thereby further decentralizing network consensus and rendering malicious interference with the transaction history still more difficult to achieve.

## Weaknesses of Traditional Blockchains

It is said that structuring a blockchain in this way renders it "trustless": that is to say, transactions are so difficult to falsify, and the transaction history so difficult to fraudulently amend, that users do not need to trust any individual entity, or group of them, to secure the information they want secured on the blockchain database or to impede the addition of new transactional data which has been validly broadcast.

This model, however, has significant weaknesses. One of the key weaknesses is that it requires most blockchains to act as standalone silos, and requires a "win or die" approach to their design, development, and maintenance. As a consequence, innovation is slow to be adopted by these networks; their security and consensus models are largely static, and their utility is commensurately limited. Many blockchains are released without significant "mining power" to ensure their security. If they use the traditional proof of work security model, they can be easily attacked.

Another key weakness is that many blockchains rely upon incentivization of the security and consensus mechanism by utilizing tokenization. The reality for many of these blockchains is that the tokens which are issued to miners as a reward for participating in the security and consensus mechanism will never be worth very much. This mechanism is not dissimilar to a company paying its security guards in shares of the company. While this may work well for a company of the stature of Apple or Google with consistently high share value, it may not be able to properly incentivize the security guards working for a company whose shares are of less value and which experience higher volatility or rapid depreciation. To provide a concrete example of the effects of tokenization in real world commercial applications, consider that many, single mainstream finance deals *routinely* outsize the entire market cap of all of the cryptocurrency tokens currently in existence; this begs the question of how to properly incentivize transaction verification in the "trustless" model when a particular deal has more value than the entire market cap of the system.

The final challenge which many traditional blockchains face is that due to their public nature, many will simply not be able to work without an anti-spam mechanism of some sort. The anti-spam mechanism used by most blockchains is that data which is to be stored in the blockchain must be accompanied by some payment or deposit of the blockchain's built-in token. This creates a "pay-to-play" atmosphere which suits those individual nodes who possess a significant amount of the tokens well, but may not suit those individuals who do not possess the tokens. Indeed, this is an insurmountable problem for many blockchains and outside of "wealthier" users subsidizing others so that they might benefit from the utility of whatever function that blockchain is meant to provide, there is no answer.

# The Issue of Trust

Many of the advantages and disadvantages of blockchain architecture stem from the idea that nodes on the network are not necessarily trustworthy. Most blockchains are designed to withstand untrustworthy nodes within the network via their consensus mechanism. This design parameter, however, begets some limitations which are discussed above.

The idea which many blockchain advocates take from the consensus protocol is the idea of extended trustlessness to an ever wider range of the overall distributed application, of which the blockchain is providing one piece. While the idea of increased certainty and verifiability is, indeed, appealing, the idea of moving to a fully trustless environment presents many challenges.

## Examining Trustlessness

"Trustless" is largely a misnomer -- and too much of it is not necessarily a good thing. Even the most ardent advocate of Bitcoin, the most prominent "trustless" network, will extend trust regularly to a certain extent, whether to the banks and payment processors which process their fiat currency transactions when they purchase Bitcoin, to the manufacturers of their computers and operating systems on which they run the Bitcoin client, and to the Bitcoin Core developers themselves -- and then there's also [situations like this](http://en.wikipedia.org/wiki/Mt._Gox).

Further, it is not necessarily always the case that trust is a pain point for consumers. When dealing with a bank, for example, consumers trust that deposits or funds held on account are safely kept; where these are not, other mechanisms such as insurance or deposit guarantees are available to secure them. When using web-based applications such as social networks and e-mail, consumers rely on the provider of those services to back up and secure their data. Indeed, if trust *vis-a-vis* data and financial services providers were truly a vexing pain point for most consumers, there would be a rush of hosting providers for ownCloud and email-in-a-box solutions along with a drastic increase in transactional volume of non-fiat currency. While we see limited upticks in adoption some of those systems, there is [by no means a rush](http://www.ofnumbers.com/2014/06/23/separating-activity-from-growth-on-bitcoins-network/).

Finally, "trustlessness" ignores the fact that in commerce, mistakes are made and a degree of human discretion is usually required to remedy these mistakes. Mechanisms that run completely automously and which cannot be broken **also cannot be fixed**.

It is not as if trustworthiness is a new problem. Entire industries have been developed to handle the boundaries and rules of the trust-trustlessness sides of the spectrum -- not the least of which is the legal system, which operates as a potent safeguard for consumers and commercial entities alike. For the vast majority of commercial entities, legal norms provide a material constraining mechanism which bounds the actions which any entity can take. While there are indeed challenges which remain to broaden access to justice, and while we feel that things do need to improve, it does not follow that one should throw out hundreds of years of legal and commercial norms simply because we now have elliptic curve cryptography.

## From Trustless to Verifiable

While trustlessness is a tricky subject commercially for all the reasons discussed above, increasing the verifiability of data-driven interactions is a goal which all entities and organizations -- whether commercial, corporate, not-for-profit, or individual -- can benefit from. This is why, at Eris, we prefer to focus on **increasing verifiability** within distributed systems rather than engaging in largely philosophical debates about the quantum of trust.

When it comes to increasing verifiability for all parties to a given data-driven interaction, there are few technologies currently invented which match blockchains.

# eris:db' Design Philosophy

eris:db is the blockchain client purpose built to manage a multitude of chains, each with their own consensus and security mechanisms. It is the first blockchain design we are aware of that is not only smart contract-enabled, but also smart contract-controlled. Not only are eris:db blockchains smart contract controlled, they are also purpose built to be flexibly deployed in more limited context than is currently possible with most blockchain designs which rely on pure proof of work that can be attacked with sufficient processing power.

## A Smart Contract Controlled Blockchain

When we say that eris:db is "smart contract controlled", this is what we mean:

* Most blockchains hard-code the consensus and security for the blockchain into the clients which are built to manage the blockchain. The only way to change the consensus and security mechanism for that blockchain is to change the hard coding of a majority of the clients on the network for a sufficient time such that the blockchain eventually gains a fork of itself and continues operating.
* eris:db is designed differently. Because the consensus and security mechanism for any eris:db-compatible blockchain is built into the blockchain rather than the blockchain client, the eris:db client is able to assemble blocks and manage the consensus of the blockchain using parameters which are built into smart contracts which reside on the blockchain itself. So a eris:db blockchain is a self-defining, self-contained blockchain which does not require a hard-coded consensus and security mechanism.

While this design is new, the power of such a blockchain should be evident to those familiar with blockchain technology. This means that to change the consensus and security mechanism for a eris:db blockchain the operators of the blockchain simply need to change some smart contracts on the blockchain (provided they have sufficient privileges to do so).

An example may help to illustrate the power of a smart contract-controlled blockchain. Let us continue with the example given above where a dozen commercial entities wish to track a particular deal which has numerous data-driven interactions on a particular eris:db blockchain. To ensure that other entities are not able to participate in the chain, the blockchain designers may parameterize the eris:db blockchain such that only three private keys from each of the twelve entities may send transactions, create smart contracts, or commit (eris:db' equivalent of "mining" in other blockchains) blocks. These consensus and security parameters are "hashed" into the genesis contracts of the blockchain and the blockchain is deployed. Everything goes as planned for a few months, until one of the entities has a server go down such that the hard drive for the server cannot be recovered. The private keys for one of the three nodes of that entity were on that server and the entity did not have a backup of the private keys. It can safely be assumed that these keys are -- at this point -- either compromised or are lost.

At this point in most blockchains, the commercial entity would simply have to have one less participant in the blockchain and rely on its other two nodes. However, with a eris:db smart contract controlled blockchain, the entity would simply notify the other entities of the change and provided sufficient consensus was achieved, could simply swap out the address of their third node to a new set of public-private keys (hopefully backed up this time) on a new server.

The process would likely work in a similar nature if, for example, a new commercial entity was going to enter the deal and was given three nodes of its own to participate in the smart contract blockchain. Since all of these interactions are governed from smart contracts, whatever consensus rules can be scripted can be use to manage a blockchain.

## GenDoug

eris:db's *chief of operations* is GenDoug, a smart contract configured in a particular eris:db blockchain's genesis block, through which all protocol validation passes. GenDoug enables developers to, among numerous other things, "lock-down" their blockchains, specifying which public addresses, if not all of them, are permitted to transact, create new smart contracts, or mine the chain.

In general, GenDoug controls the definition of the chain. All parameters which have to do with how that specific eris:db chain should be read and operated by the eris:db client will stem from GenDoug, including the parameters described above as well as the consensus and security mechanism used by that chain.

## Tokens, No Tokens, Your Choice

eris:db runs on junk. Junk is a token which may or may not have value within the context of a eris:db blockchain, depending on how that particular blockchain has been designed to operate.

# Designed with Enterprise in Mind

eris:db is ready for business. We have designed it so that commercial entities who have hesitated to embrace participatory architecture and blockchain technology can feel comfortable in their ability to control the blockchain while still allowing for the other benefits which come with participatory architecture design.

With one eris:db client, commercial entities will be able to control an innumerable amount of blockchains, each purpose built to solve a particular enterprise challenge.

<a class="action-big" href="{{ site.data.sites["docs"].url }}">Get Started Using eris:db</a>
