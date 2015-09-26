---

layout:     content
title:      "eris:db"
excerpt:    "The Makers' Blockchain Design"

---

# The Makers' Blockchain Design

eris:db is Eris Industries' series of tools built around the [Tendermint Blockchain Client](https://github.com/tendermint/tendermint). The Tendermint blockchain client is a permission-able, smart contract enabled, proof of stake based blockchain design.

eris:db contains the following modular tools (all available able in a handy Docker container):

* eris-db API wrapper which provides a JSON-RPC server optimized for heavier loads than normal blockchain clients can handle; and
* mint-client CLI tools which provide a whole range of functionality around the tendermint blockchain client.

Developers who use a eris:db client along with the eris platform generally to manage their blockchains are able to benefit from having a parameterized smart contract in the genesis block which is capable of managing the consensus and security mechanism of the blockchain through the use of smart contracts.

When combined with its API client libraries and a simple bridging script, eris:db is able to interact with other blockchain protocols and APIs of any kind making data acquisition, data processing, atomic swaps, and other (currently) challenging paradigms a breeze. Using the client libraries and eris:db together allows developers to harmonize the building of their distributed application with a blockchain that has been purposely designed for their application rather than trying to fit their application into the structure of a general-purpose, public blockchain that was not designed for them.

eris:db was designed for deployment in a variety of contexts, from locked-down internal corporate deployments to deployments of a consortium of enterprises to more decentralized and public deployments, or from deployments which require monetized tokenization to those that only require the utility of a blockchain but not monetized tokenization to compensate miners for automated data management services.

A single eris:db client is all that is required in order to participate in all of these blockchains.

For more on what a blockchain is please see [our explainer]({{ site.data.sites["docs"].url }}/explainers/blockchains/).

For more on what a smart contract is please see [our explainer]({{ site.data.sites["docs"].url }}/explainers/smart_contracts/).

## Securing Traditional Blockchains

In distributed systems, security and consensus are different names for very similar concepts. eris:db puts the power, and the responsibility, onto distributed application developers for properly parameterizing their eris:db blockchain for their application. Whether security comes in the form of checkpointing a chain against bitcoin's (or ethereum's) larger, heavier, and more secure unpermissioned blockchain, or whether security comes in the form of only allowing whitelisted **validaters** to participate in the security mechanics, eris:db allows developers to craft consensus and security mechanisms which match the design goals of their distributed application.

Fully decentralised networks such as bitcoin use distributed computing power to process and verify transactions broadcast upon them. The network, being aware of the history of all transactions, engages in a process of continual, automated database management and transaction verification through the voluntary provision of computing power, in a process which many blockchains call “mining”, but for eris:db we call "**validating**".

Providers of this computing power – known as “miners” or "validators" – solve complex computational problems, which (in the case of mining) is done in exchange for the reward of cryptographic tokens (such as bitcoins) which the network hopes will become valuable over time due to their scarcity and/or their usability. This provides an incentive to continue securing the network, although there are certain risks – such as inter-miner collusion to incorporate false transactions into the blockchain – that the model also presents. Each new participant of such networks usually comes into possession of the complete transaction history when they first join, increasing the number of independent copies of the blockchain in existence, thereby adding further resiliency to the network and rendering malicious interference with the transaction history even more difficult to achieve.

## Weaknesses of Traditional Blockchains

It is said that structuring a blockchain in the way which public blockchains are structured renders it "trustless": that is to say, transactions are so difficult to falsify, and the transaction history so difficult to fraudulently amend, that users do not need to "trust" any individual entity, or group of them, to ensure the presence of information they want secured on the blockchain database.

This model, however, has significant weaknesses. One of the key weaknesses is that it requires most blockchains to act as standalone silos, and requires a "win or die" approach to their design, development, and maintenance. As a consequence, innovation is slow to be adopted by these networks; their security and consensus models have challenges evolving, and their utility is commensurately limited. Many blockchains are released without significant "mining power" to ensure their security. If they use the "traditional" unpermissioned proof of work security model, they can be easily attacked.

Another key weakness is that many blockchains rely upon incentivization of the security and consensus mechanism by utilizing tokenization. The reality for many of these blockchains is that the tokens which are issued to miners as a reward for participating in the security and consensus mechanism will never be worth very much.

This mechanism is not dissimilar to a company paying its security guards in shares of the company. While this may work well for a company of the stature of Apple or Google with consistently high share value, it may not be able to properly incentivize the security guards working for a company whose shares are of less value and which experience higher volatility or rapid depreciation.

To provide a concrete example of the effects of tokenization in real world commercial applications, consider that many, single mainstream finance deals *routinely* outsize the entire market cap of all of the cryptocurrency tokens currently in existence; this begs the question of how to properly incentivize transaction verification in the "trustless" model when a particular deal has more value than the entire market cap of the system.

The final challenge which many traditional blockchains face is that due to their public nature, many will simply not be able to work without an anti-spam mechanism of some sort. The anti-spam mechanism used by most blockchains is that data which is to be stored in the blockchain must be accompanied by some payment or deposit of the blockchain's built-in token. This creates a "pay-to-play" atmosphere which suits those individual nodes who possess a significant amount of the tokens well, but may not suit those individuals who do not possess the tokens. Indeed, this is an insurmountable problem for many blockchains and outside of "wealthier" users subsidizing others so that they might benefit from the utility of whatever function that blockchain is meant to provide, there is no answer.

# The Issue of Trust

Many of the advantages and disadvantages of blockchain architecture stem from the idea that nodes on the network are not necessarily trustworthy. Most blockchains are designed to withstand untrustworthy nodes within the network via their consensus mechanism. This design parameter, however, begets some limitations which are discussed above.

The idea which many blockchain advocates take from the consensus protocol is the idea of extended trustlessness to an ever wider range of the overall distributed application, of which the blockchain is providing one piece. While the idea of increased certainty and verifiability is, indeed, appealing, the idea of moving to a fully trustless environment presents many challenges.

## Examining Trustlessness

"Trustless" is largely a misnomer -- and too much of it is not necessarily a good thing. Even the most ardent advocate of Bitcoin, the most prominent "trustless" network, will extend trust regularly to a certain extent, whether to the banks and payment processors which process their fiat currency transactions when they purchase Bitcoin, to the manufacturers of their computers and operating systems on which they run the Bitcoin client, and to the Bitcoin Core developers themselves -- and then there's also [situations like this](http://en.wikipedia.org/wiki/Mt._Gox).

Further, it is not necessarily always the case that trust is a pain point for consumers. When dealing with a bank, for example, consumers trust that deposits or funds held on account are safely kept; where these are not, other mechanisms such as insurance or deposit guarantees are available to secure them. When using web-based applications such as social networks and e-mail, consumers rely on the provider of those services to back up and secure their data. Indeed, if trust *vis-a-vis* data and financial services providers were truly a vexing pain point for most consumers, there would be a rush of hosting providers for ownCloud and email-in-a-box solutions along with a drastic increase in transactional volume of non-fiat currency. While we see limited upticks in adoption some of those systems, there is by no means a rush.

Finally, "trustlessness" ignores the fact that in commerce, mistakes are made and a degree of human discretion is usually required to remedy these mistakes. Mechanisms that run completely automously and which cannot be broken **also cannot be fixed**. It is not as if trustworthiness is a new problem. Entire industries have been developed to handle the boundaries and rules of various points along the the trust-to-trustlessness spectrum -- not the least of which is the legal system, which operates as a potent safeguard for consumers and commercial entities alike.

For the vast majority of commercial entities, legal norms provide a material constraining mechanism which bounds the actions which that entity can take. While there are indeed challenges which remain to broaden access to justice, and while we feel that things do need to improve, it does not follow that one should throw out hundreds of years of legal and commercial norms simply because we now have elliptic curve cryptography and cryptoeconomics.

## From Trustless to Verifiable

While trustlessness is a tricky subject commercially for all the reasons discussed above, increasing the verifiability of data-driven interactions is a goal which all entities and organizations -- whether commercial, corporate, not-for-profit, or individual -- can benefit from. This is why, at Eris, we prefer to focus on **increasing verifiability** within distributed systems rather than engaging in largely philosophical debates about the quantum of trust.

When it comes to increasing verifiability for all parties to a given data-driven interaction, there are few technologies currently invented which match blockchains.

# eris:db's Design Philosophy

eris:db is the blockchain client purpose built to manage a multitude of chains, each with their own consensus and security mechanisms. eris:db blockchains are also purpose built to be flexibly deployed in more limited context than is currently possible with most blockchain designs which rely on pure proof of work that can be attacked with sufficient processing power.

# Designed with (Information Age) Enterprises in Mind

eris:db is ready for business. We have designed it so that commercial entities who have hesitated to embrace participatory architecture and blockchain technology can feel comfortable in their ability to control the blockchain while still allowing for the other benefits which come with participatory architecture design.

With one eris:db client, commercial entities will be able to control an innumerable amount of blockchains, each purpose built to solve a particular enterprise challenge.

<a class="action-big" href="{{ site.data.sites["docs"].url }}/tutorials/getting-started/">Get Started Using eris:db</a>
