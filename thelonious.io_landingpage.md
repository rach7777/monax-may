#Design philosophy

##On trustlessness
Many blockchains are built to be standalone silos, and as such require a 'win or die' approach to their design, development, and maintenance. As a consequence, their security and consensus models are stagnant, and their utility limited. 

In our commercial view, "trustless" is a misnomer - and too much of it can be a bad thing. Even for the most ardent regular user of Bitcoin, the most prominent "trustless" network, will extend trust regularly to a certain extent, whether to the banks and exchanges that process USD transfers when they purchase Bitcoin, or to the manufacturers of their computers and operating systems on which they run the Bitcoin client. 

Furthermore, "trustlessness" is multi-directional, and it is not necessarily always the case that trust is a pain point for consumers. When dealing with a bank or a law firm, for example, consumers trust that deposits or funds held on account are safely kept; where these are not, other mechanisms such as insurance or deposit guarantees are available to secure them. When using web-based applications such as social networks and e-mail, they rely on the provider of those services to back up and secure their data.

Where commercial considerations render the platform operator trustworthy, we see that the question of trust is not between the user and the platform operator - but rather between the user and the platform operator's systems. In such a case, implementing a blockchain-based architecture is capable of enhancing security for the user vis-a-vis both the platform operator (in terms of certainty) and the world (in terms of foiling the efforts of malicious third parties to access that data).

Put differently, in most commercial contexts it is not the world that needs protection from platform operators. It is platform operators who need protection from the world. 

##The challenge
We at Eris Industries wanted to challenge the idea that a blockchain is not useful only if its functions are fully decentralised. To accomplish this, we have designed a blockchain which is not only smart contract enabled, but also smart contract controlled, such that specific instances of the chain can be run for particular applications in such a way that the application benefits from blockchain security logic as well as the technology rationalising [data relationships thereon]. 

#Thelonious

Thelonious is Eris Industries' open-source blockchain design. 

It is designed not to be one blockchain, but rather millions of them; is it meant to complement, rather than compete with, its larger, fully-distributed cousins. Thelonious 1.0 incorporates functionality to interact with both Bitcoin and Ethereum right out of the box, and is capable of being hooked into other protocols 

Thelonious allows developers to design, test and deploy consensus-driven applications without servers and without the expense of mining-driven network security. Although Thelonious' default setting is transaction processing through [proof-of-work], it is designed so that users can set their blockchain to possess a range of consensus parameters from mixed Proof-of-work proof-of-stake, to pure proof of stake, to a "lockdown" mode where mining is dictated only by nodes possessing certain key pairs. 

Thelonious is able to be interconnected with other blockchains, is able to have its security and consensus parameters change over time, and - because it is meant to be used by a single corporation or application - is fast. 

Furthermore, in order to make Thelonious more useful for individuals, small businesses and large enterprises alike, we have reconfigured the network protocol used by most blockchains so that Thelonious will work within existing enterprise routing and firewall infrastructure.

Thelonius is purpose-built so that it can easily be deployed to a variety of contexts, from corporate-level deployments to more decentralized and public deployments, or from deployments which require tokenization to those that only require the utility of a blockchain but not monetized tokenization. A single Thelonious client is all that is required in order to participate in all of these blockchains. 

#Try Thelonious for yourself

We're not talking about vaporware or white papers here - we're talking about real software that developers can use today. Head over to our GitHub page and try it out for yourself! 

