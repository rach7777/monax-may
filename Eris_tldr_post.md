For suggesting comments etc. This is the near-final draft - anyone who formats it into Markdown will win one marmot and lunch

After months of teasing, for which I do not apologise, the six members of the Eris Industries team have finally released Eris version 0.9, the public alpha of our platform. 

Eris is the Distributed Application Software Stack. The software is released on an open-source licence and is ready-to-use. Right now. Today.

Head on over to our website (yes, I just hyperlinked to it twice in a row) for a succinct description of the platform, our design principles, and team members, and to get linked to relevant bits of our GitHub Repo.

Cognisant that we’ve been in stealth mode until today, I’m aware we have some detailed explaining to do. Please find this below in twelve points:

What is a Distributed Application? Why should I care?
Eris: a very brief introduction
Blockchain = Database
Commercially-relevant blockchain design
If you read nothing else in this blog post, read this
Well, that’s cool. How much does it cost?
I like Bitcoin. Can the Eris Decerver talk to Bitcoin?
So Eris isn’t a cryptocurrency?
Why should I develop on your platform?
It’s your blockchain now.
That isn’t very crypto of you.
Concluding thoughts
1) What is a DApp? Why should I care?

A) You should care because blockchains are about to get really useful.

A distributed application – or DApp (pronounced like ‘tap’) – is an application which runs on a distributed or decentralised basis utilising, among other things, an authentication database known as a blockchain. 

Rather than server mainframes utilising a master-slave model, blockchains utilise peer-to-peer communication protocols where there is reduced, or zero, reliance on a central infrastructure such as a server farm. 

Blockchains thus present an enticing proposition for application developers looking to create new internet-based applications. Provided blockchain networks are sufficiently widely distributed, they have shown themselves to be highly secure, to operate themselves without human intervention, to not require servers (though servers can be dropped in to speed things up a bit) and to be nearly indestructible. 

They achieve this without utilising any fixed physical infrastructure or requiring much by way of administrative oversight. 

These characteristics could, if employed more widely, be profoundly useful in applications in civil society, government, and business. The Eris Decerver uses a custom blockchain design which allows these constituencies to leverage and benefit from that utility.

B) And flexible, too.

Blockchain development and DApp development aren’t separate processes: the blockchain is the DApp. By bringing these development pathways together and moving important components of consensus into a virtual machine, we can make blockchain databases far more flexible and, ultimately, responsive to an application developer’s needs. 

This is particularly critical for mainstream commercial applications, where businesses often express reticence to use traditional proof-of-work consensus through “mining” – since mining

requires reliance on unregulated and anonymous overseas mining operations and their hardware,
opens up chains to 51% attacks (among other things), and
isn’t appropriate or fit for purpose where utility/cost savings are the primary driver for adoption, rather than the prevailing model of crypto-token asset price inflation.
The Eris stack’s Doug kernel (described more particularly below) can encode any consensus parameters which are required or prudent, including proof-of-work, proof of stake, and locked-down chains where mining is not necessary at all, making Eris capable of working within a wide range of potential solutions.

C) OK. Now you have my attention. Give me a worked example.

Sure thing. Let’s use Bitcoin, which itself is arguably the first blockchain DApp.

When we strip away the currency application and the political themes, we see a highly secure, simple, and efficient system for managing arbitrary data and controlling write permissions on the database. Moving up a level of abstraction, we see the same thing, except a specific application which is designed to manage the confirmation, clearing and settlement processes relating to a native unit of account predictably and reliably.

As finance professionals will be aware, bank software systems dealing with middle- and back-office functions relating to settlement are complex, labour-intensive, and expensive. Each component of legacy infrastructure incurs high costs in the form of buildings, hardware, and humans for each entity involved in a particular transaction, and there is a lot of room for human error. 

Bitcoin collapses complex business process logic into a single, self-managing distributed application – namely, its blockchain. In so doing, it takes physical infrastructure and human discretion out of the equation for the problem parameters it was designed to address. 

Bitcoin does for its own brand of settlement what DApps can do for practically anything else.

D) What Eris does

Eris makes it easy to make DApps. We stripped away servers and replaced them with decentralised servers, or Decervers, the web browser core of the Eris stack which allows you to take physical and institutional infrastructure out of the equation for virtually any problem you can define.

From a distributed Twitter to a distributed bank, if you can code it, Eris can run it. And everything – from what features you want, to how you “mine” the chain, to whether you even need to mine at all – is parameterisable.

And, what’s more, Eris DApps display through an ordinary web browser. User-friendliness ahoy.

2) Eris: a very brief introduction

To rehash, Eris works by marrying self-executing, cryptographically-secure scripts, known as Smart Contracts, to a blockchain database and a number of other components.

A) The Components

This allows, for the first time, a highly customizable platform to build applications and web services (such as, for example, social networks, asset management platforms, or DRM) with reduced, minimal, or nil reliance on server mainframes or cloud providers: 

Individual deployments are designed to accommodate, and are controlled by, systems of smart contracts. Eris deployments are governed by a smart contract kernel we’ve named Doug (as in Project Douglas, which we built for our version 0.1 prototype back in June). Eris’ Doug kernel holds the logic that runs the Thelonious blockchain and tracks content which is stored elsewhere on a distributed network such as BitTorrent. It allows platform operators to exercise a high degree of administrative control over their blockchain when this is required by the proposed use-case.
The decentralised server, or Decerver, component of Eris allows you to get your DApp talking to any other software you like – all you have to do is write a module wrapper, and you’re off to the races.
Additionally, we’ve reconfigured the network protocol of our blockchain design, which we call Thelonious, or the Makers’ Blockchain Design, a heavily modified derivative of the draft Ethereum Go client. As a result, Eris will work within existing enterprise firewall and routing infrastructure.
Eris is open-ended and allows you to utilize blockchain architecture for any purpose you choose. It is designed to spawn millions of custom-built blockchains…
…that is, being smart contract-controlled, you no longer need to marshal vast amounts of processing power to secure the database. 

B) The Upshot

This allows you to deploy as many blockchains as you or your organisation can handle, each one built to fit your specifications, rather than trying to shoe-horn your applications into a single blockchain built to our specifications. 

“Mining” on the Thelonious protocol can be fully parameterised to meet the needs of a particular use-case. From a “locked down” chain where only specified addresses controlled by the administering entity are able to sign blocks, to multi-signature block signing authority, to one where that old chestnut proof-of-work is used, if you can drop it into Doug, you can deploy it. 

Which consensus/security model works best for your application is entirely a matter for you.

3) Blockchain = Database

Blockchains aren’t magical money machines. They’re just databases. The functions they perform are determined by the problems they’re designed to address.

In the cryptocurrency space’s efforts to date to create a parallel financial system, blockchains have shown that they are highly efficient at regulating data-driven human relationships on a grand scale. The argument could be made that Bitcoin, for example, is designed to be an autonomous alternative to a central bank designed to rest beyond all human control. This calls for a distributed, mining-driven proof-of-work security model. But this is only one application – there are doubtlessly many more (last time I checked, most databases were used in applications other than robot central banks).

The design principle we distill from Bitcoin is that a sweeping vision can be very simply expressed in code. But we believe it’s the blockchain’s ability to manage data, not its specific implementation in Bitcoin, that is relevant when considering the technology’s wider use. Bitcoin’s (very successful) consensus model is appropriate for Bitcoin, but probably isn’t appropriate for everything else.

Put differently, if you don’t need to incentivise miners to secure your database, and can adequately secure the chain yourself or in concert with others, you don’t need to mine.

4) Commercially-relevant blockchain design

Different use-cases call for different design parameters.

Through the Doug kernel, platform operators can write and pilot their own blockchain-governed architecture and determine:

the cost of operating a Distributed Application Software Stack on whatever parameters they choose,
versus

the cost of legacy infrastructure
and make a decision as to which stack works best for the particular application. 

5) If you read nothing else in this blog post, read this

A) The bit we really wanted you to read

The rules of an Eris deployment are fully customisable.

They can be amended such that platform operators can set any rules they want, utterly arbitrarily, at any time. Alternatively, you can structure your Doug to transparently guarantee that certain consensus parameters could not be changed, neither by the chain’s creator nor anyone else. Or you could forbid anyone from ever changing any rules, utterly arbitrarily, at any time.

How you structure your Doug is entirely up to you. We will make this design optionality straightforward to implement through a UI at a later date.

It means you can design these databases for use in businesses, financial institutions, and other organisations, who should be able to:

operate entirely in accordance with the law, in exactly the same way as databases do today;
obtain the utility, security and resiliency of a distributed application which is custom-built to solve a specific pain point, 
while retaining control over their data, 
with zero reliance on a third-party cloud provider, 
with a dynamic, changeable, smart contract-governed database management model (rather than the blunt instrument present-day mining rewards represent),
which provides an up-to-date and provably accurate audit and transaction log which manages itself, 
without having to worry about a network failure that is beyond their control or the regulatory risks that arise from cryptocurrency use, and
iterate and customise, again and again, without having to spend much of anything on additional infrastructure.
B) When dealing with real obligations and real entities, a degree of centralisation is a fact of life and always will be

We see this design optionality as a feature, not a flaw. While Eris can be used for traditional “trustless” parameters such as Bitcoin’s, for mainstream commercial applications the Bitcoin model can be clumsy. 

Chief among these problems is that, with a fully-decentralized protocol like Bitcoin or other meta-protocols built on top of it, that which cannot be broken also cannot be fixed. Fully decentralised protocols thus introduce substantial risk – regulatory (AML, KYC, oversight) and operational (network failure, miner collusion, irreparable human error, changed circumstances) – which corporates are unlikely to accept.

Commercial prudence demands flexibility and levels of oversight which existing protocols simply do not offer. 

C) Understanding the difference between “trustlessness” and “accountability” 

The term “trustless” is a misnomer. Bitcoin users regularly extend trust to a handful of anonymous and shadowy mining conglomerates, off-chain service providers, and even the Bitcoin client itself (assuming that most of them haven’t audited its code on their own). 

The value of trustlessness lies – as with all other value – in the eye of the valuer. If you’re developing a platform for a bank, chances are your trustless platform isn’t going to be designed to protect the bank’s customers from the bank. It’ll be designed to protect the bank and its customers from malicious third parties. Giving the bank the admin keys so it can fix any errors or unilaterally improve the platform is probably something its customers want.

This is no bad thing: a bank’s customers, even if exposed to the bank’s counterparty risk, would benefit from a reduction in exposure to its software stack.

D) This is cool

On the whole, we think that’s pretty cool.

6) That is cool. How much does it cost?

Nothing. 

There is no pre-sale, there are no tokens, it’s open-source and it’s free to use. All you have to bring to the party is your creativity.

What will you build with your Decerver?

7) I like Bitcoin. Can Eris talk to Bitcoin?

You bet. (We like Bitcoin too.)

Bitcoin, IPFS (distributed file store), Thelonious and Ethereum (in its current form) functionality are included out of the box. All of these protocols are accessible through the use of a single Decerver client.

You can plug anything else into your Decerver (e.g., BitTorrent, which we used for Eris version 0.1) by simply writing a module wrapper.

8) So it isn’t a cryptocurrency?

Nope. It’s a platform. You can make a cryptocurrency with it, or incorporate tokens, if you want to. But it isn’t necessary.

8) Why should I develop on your platform? 

Existing, borderline-monopolist businesses such as Google and Facebook provide free-to-use services, paid for with a historically unprecedented loss of individual privacy and total surrender of users’ data ownership.

This is because these firms recoup their expenses by repackaging user data for use by advertisers – and reduce their expenses by rolling over for governments when instead they probably should be waging a vigorous, and very public, legal and political battle to protect their users.

I hate that.

Developers can use Eris to challenge existing providers by leveraging the distributed internet for data storage and processing power, utilising the peer-to-peer paradigm where users voluntarily participate in the management of their data rather than begrudgingly accepting unfair terms set by a faraway corporation.

Casey, our CEO, calls this software paradigm “participatory architecture.” We hope you will, too.

9) It’s your blockchain now

Again, Developers can implement fully-distributed trust an Eris DApp and implement proof-of-work and fully distribute a chain. We leave that decision entirely up to you.

The key point, however, is that now you don’t have to.

10) This isn’t very crypto of you.

Is it not? More times than I can count, I’ve heard the complaint that the “one chain to rule them all” mantra is inconsistent with the ethic of decentralisation. General-purpose chains address one set of needs, for which they are most appropriate; application-specific chains running on Eris will address another.

The Decerver lets you build applications that interface with them all, through one Decerver client. And having the option to get away from tokenisation allows you to explore other types of consensus arrangements and degrees of trustlessness that might be more appropriate for your application. 

We’ve designed Eris to provide a reduced-trust or distributed-trust layer for users to freely interact with any software platform, including Bitcoin and other major chains, without

burdening the primary decentralised chains with extraneous additional data,
requiring a hard fork of any decentralised chain,
being exposed to anonymous and shadowy mining operators,
constituting a standalone cryptocurrency itself, or
even requiring interaction with the cryptocurrency space at all.
In terms of what this means for the cryptocurrency ecosystem, independent, application-specific chain-based architecture is not designed to compete with Bitcoin and the others, but to augment them.

11) Concluding thoughts

Our objective is to give users back control over their data and privacy, and render business processes more efficient, through the use of peer-to-peer networks.

The best way to accomplish this is not to build a standalone monolith which takes the form of a single database, but to give developers the tools and the flexibility they need to make useful, and free-to-use, web applications.

This release represents Eris Industries’ first step in this direction. Long may the journey continue.
