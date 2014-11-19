#Thelonious: the world's first smart contract-controlled blockchain design 

##The Blockchain: a very brief introduction

###Overview

One key component of the Eris stack is a database known as a blockchain. Our blockchain design, Thelonious, is different from most others in that is expressly designed with commercial use in mind.

Blockchains have their origins in cryptocurrency platforms such as Bitcoin, where they represent historical records of verifiable monetary stake. They were designed in the first place to solve the double spending problem, that is, to establish consensus in a decentralized network over who owns what and what has already been spent. More generally, blockchains are authenticated records of the history of a network's activity, distributed among hundreds of thousands of users around the globe. The combination of their distribution and cryptographic architecture makes them near-impossible to falsify or destroy.

A blockchain like Bitcoin's enables anyone to securely store arbitrary information - in most cases, a balance - within the system simply by securing the private keys associated with the addresses at which those balances are stored. This has given blockchains the flavour of alternative value-transfer systems that are highly resistant to intervention by regulatory authorities or malicious third parties. 

Next generation or blockchain "2.0" technologies such as Thelonious place their focus on the fault-tolerant aspect of blockchains, seeing them as a means of reducing the economic impact of server failure, third party attack or the destruction of business premises. These blockchains are generalized to store arbitrary data and to establish permissions to modify that data through a set of self-enforcing and self-executing scripts. These are known as “smart contracts,” and they allow platform operators to define complex and fully customisable rules which govern the blockchain’s interaction with its users.

###Benefits of blockchain technology

Fully decentralised networks such as Bitcoin use distributed computing power to process and verify transactions broadcast upon it.  While the details of how this process works are technically complex, for present purposes it suffices to note that the network, being aware of the history of all transactions, engages constantly in a process of automated database management and transaction verification through the voluntary provision of computing power, in a process known as “mining”. 

Providers of this computing power – known as “miners” – solve complex computational problems, in exchange for the reward of valuable cryptographic tokens (such as bitcoins). This provides an incentive to continue securing the network, although there are certain risks – such as inter-miner collusion to incorporate false transactions into the blockchain – that the model also presents.

The difficulty of falsifying historical transactions under this database management model increases exponentially as the blockchain grows in size; “for malicious third parties to [falsify transactions] without being detected, they would not only have to redo all the work required to compute the block where that bitcoin was spent, but also recompute all the subsequent blocks in the chain.” Each new participant of such networks usually comes into possession of the complete transaction history when they first join, increasing the number of independent copies of the blockchain in existence, thereby further decentralizing network consensus and rendering malicious interference with the transaction history still more difficult to achieve.

###Weaknesses of current blockchain implementations

It is said that structuring a blockchain database in this way renders it "trustless": that is to say, transactions are so difficult to falsify, and the transaction history so difficult to fraudulently amend, that users do not need to trust any individual entity, or group of them, to secure the information they want secured on the blockchain database or to impede the addition of new transactional data which has been validly broadcast. 

This model, however, has significant weaknesses; chief among them is that it requires most blockchains to act as standalone silos, and requires a 'win or die' approach to their design, development, and maintenance. As a consequence, innovation is slow to be adopted by these networks; their security and consensus models are stagnant, and their utility is commensurately limited. 

In our commercial view, "trustless" is a misnomer - and too much of it can be a bad thing. Even the most ardent regular user of Bitcoin, the most prominent "trustless" network, will extend trust regularly to a certain extent, whether to the banks and exchanges that process USD transfers when they purchase Bitcoin, to the manufacturers of their computers and operating systems on which they run the Bitcoin client, and to the bitcoin developers themselves. 

Furthermore, "trustlessness" is multi-directional: it is not necessarily always the case that trust is a pain point for consumers. When dealing with a bank or a law firm, for example, consumers trust that deposits or funds held on account are safely kept; where these are not, other mechanisms such as insurance or deposit guarantees are available to secure them. When using web-based applications such as social networks and e-mail, they rely on the provider of those services to back up and secure their data.

Finally, "trustlessness" ignores the fact that in commerce, mistakes are made and a degree of human discretion is required to remedy them. Contractual mechanics which cannot be broken also cannot be fixed.

###Redefining "trustlessness"

Where commercial considerations render the platform operator trustworthy, we see that the question of trust is not between the user and the platform operator - but rather between the user and the platform operator's systems. In such a case, implementing a blockchain-based architecture is capable of enhancing security for the user vis-a-vis both the platform operator (in terms of certainty) and the world (in terms of foiling the efforts of malicious third parties to access that data).

Put differently, commercially viable trustless networks do not need to protect the world from platform operators. They will need to protect platform operators from the world. 

###The challenge

We at Eris Industries wanted to challenge the idea that a blockchain is not useful unless its functions are fully decentralised. To accomplish this, we have designed a blockchain which is not only smart contract enabled, but also smart contract controlled, such that specific instances of the chain can be run for particular applications in such a way that the application benefits from blockchain security logic, fault tolerance, and authentication properties.

Like the abstracted layer for data processing that is "the cloud", the blockchain is merely an abstracted layer for computation and the delegation of information processing. In this network, joining is as simple as sending information along with a computable structure file that specifies the intent, or the "contract", upon which the logic applies. 

Thelonious is such a system, and is the first of its kind ever deployed.

##Intended use

Thelonious is Eris Industries' open-source blockchain design. 

It is designed not to be one blockchain, but millions of them: to complement, rather than compete with, its larger, fully-distributed cousins.  Thelonious 1.0 allows developers to use blockchain architecture with their own custom security and consensus parameters, and thus enables them to design, test and deploy consensus-driven applications without servers and without the expense of mining-driven network security. 

Combined with the DeCerver, Thelonious is able to interact with othe blockchain protocols and APIs with ease. Functionality for Bitcoin and Ethereum is included right out of the box. Because it is meant to be used by a single corporation or application, it is fast. Additionally, in order to make Thelonious more useful for individuals, small businesses and large enterprises alike, we have reconfigured the network protocol used by most blockchains so that Thelonious will work within existing enterprise routing and firewall infrastructure.

Thelonius is purpose-built with the intent of being deployed in to a variety of contexts, from corporate-level deployments to more decentralized and public deployments, or from deployments which require tokenization to those that only require the utility of a blockchain but not monetized tokenization to compensate miners for automated database management services. A single Thelonious client is all that is required in order to participate in all of these blockchains. 

##Try Thelonious for yourself

Unlike other projects in the distributed computing space, there is no "pre-sale" and there are no tokens (e.g., bitcoins) needed to run a Thelonious chain - users will not need to "pay to play". There is no reason that an Eris platform should ever be anything but free for an ordinary person to use.

We're not talking about vaporware or white papers here - we're talking about real software that developers can use, today. Head over to our GitHub page and see what you can build! 

