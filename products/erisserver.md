---

layout:     content
title:      "eris:server"
excerpt:    "The Distributed Application Server and Events Manager"

---

# The Distributed Application Server and Events Manager

The eris:server helps developers build applications which leverage opt-in data ownership and significantly increased data utility for both customers and businesses -- a software design paradigm we call **Participatory Architecture**. Using peer-to-peer and distributed systems, the eris:server allows the creation of web style, data-driven, interactive distributed applications that can be safely, securely, and reliably deployed and managed. The eris:server significantly lowers the barrier to entry for the production, distribution and maintenance of distributed applications. All while allowing users to participate in the scaling and data security of the application.

More specifically, the eris:server is a distributed application server harmonizes actions across various modules which act as distributed file stores, distributed data stores, or other utility modules. The eris:server integrates distributed data stores (blockchains), a distributed filesystem, a scripting layer, and a legal integrator to incorporate [Eris' Flavor of Legal Markdown]({{ site.url }}/products/erislegal/)-based contracts into the smart contract stack -- effectively putting the "contract" into "smart contracts."

Applications built for the eris:server are based on web design modalities. In other words, the user interfaces for these applications are written in languages which almost any developer, and even some [heads of state](http://techcrunch.com/2014/12/08/barack-obama-becomes-the-first-president-to-write-code/), can write. Applications for the eris:server use HTML, CSS, and Javascript to provide their user interface.

Each of the modules which the eris:server utilizes has an established interface which exposes functions to a javascript runtime that executes inside of the eris:server's core. These exposed functions allow a distributed application developer to design and implement a distributed application *almost* entirely in javascript -- with the exception that if a blockchain that uses smart contracts is needed for that distributed application, the developer will need to use one of the smart contract languages to build those smart contracts (and the other exceptions of html and css of course).

When put together it looks like this:

{% image decerver-structure.png alt="Decerver Structure Diagram" %}

# What is Participatory Architecture?

Participatory architecture is a way to design software which engages the application's users to assist in the data management and scaling of the application and in return allows users to have an increase in the ownership and utility of their habits and relationship data.

## How Interactive Applications Are Built Today

Modern interactive application developers face a difficult challenge. Many users have grown to expect that interactive applications (which, today, are mostly web-based) are free. Meanwhile hosting providers who lend the infrastructure and servers for distributing and operating those same interactive applications do not share the users' expectations. This leaves application developers with the challenge of managing distribution and operational costs (predominantly in the form of servers) for an application which is free to its users.

Over the course of the past decade, many developers have adopted the following paradigm to address this challenge:

1. Ideate a new product
2. Find VC money
3. Build and release the product
4. Find VC money
5. Scale the product
6. Find VC money
7. Build a revenue model which is probably advertising-based

This is not meant to imply any negative connotations regarding any of these steps. We at Eris Industries are VC funded and we feel that the VC pipeline is a viable, and valuable, mechanism for the development of new products.

The portion of that paradigm which we feel could use a review is Steps 5 and 7. The challenge for application developers when it comes to providing a free application to users is that, if there is not an early exit by being acquired by a larger software firm, then the product must be scaled and then a revenue model for that product must be built. Yet developers' options are extraordinarily limited if the application's users have an expectation that they will be able to use the application without paying money to the developers and operators of the platform.

The only viable model which has proven worthwhile in building such a business is to provide greater and greater amounts of targeted advertising. The better an application's advertising platform, the easier it is to gain revenue for the application via targeted advertising. In order to provide a better advertising platform, application developers must "know" their users better than their competition "knows" its users.

The end result of this development paradigm is that application developers have an exceedingly strong incentive to amass large amounts of data regarding their users' habits and relationships. This data can then be packaged and sold to advertisers. Increasingly, users are becoming skeptical of what data they provide to application developers.

So how can new application developers address this fundamental challenge?

## User Assisted Scaling

One way to address this fundamental challenge in modern application development is to change the paradigm and adopt participatory architecture. In an application built using participatory architecture design, the applications' users are enlisted to assist in the distribution and operation of the application. While there are many specific ways to think about how to enlist the users of an application to assist in scaling, the basic idea is to build an application which may or may not be financially free to use, but where users participate in the scaling of the application by providing usage of their hard drives to assist in the distribution of the application or by providing usage of their processors to assist in the data management and security of the application, or both.

Is it realistic to expect that users would be allowed to participate in the distribution and operation of an application in this way? **Sure it is**. Spotify has found [great success](http://www.npr.org/blogs/therecord/2011/11/09/141594727/how-spotify-works-pay-the-majors-use-p2p-technology) using this paradigm. Initially, Spotify allowed users to cache files locally, and then used a proprietary technology very similar to BitTorrent's peer-to-peer file sharing protocol to enlist the assistance of users in distributing the gargantuan quantities of content available within the application. Spotify is currently [moving away](http://torrentfreak.com/spotify-starts-shutting-down-its-massive-p2p-network-140416/) from this paradigm toward a server-client model, as revenues for the premium version of Spotify have justified the move to a different architecture. Even though Spotify is moving away from a peer-to-peer paradigm at this point in the life of the application, it is unavoidable that when revenues of the application were lower, the peer-to-peer technology greatly reduced costs over the course of the application's development toward a mature platform with stable, sustainable revenue.

The core hypothesis of participatory architecture is that users will accept the tradeoff of participating in the scaling of an application for an increase in data ownership over data which is, fundamentally, theirs.

## Increasing User Data Ownership

The question of who owns what data is complex. Many developers feel that they own the data on which their applications operate because that data resides on server clusters which are (presumably) leased or owned by the developer. Many users feel that they own the data because it is their interactions, habits, or relationships which are being tracked. This debate between developers and users is largely philosophical. Indeed, it is possible that both of these arguments can be true at the same time.

The core principle of participatory architecture is that the data which users decide to place into a distributed data store utilized by a distributed application should always be opt-in, and they should always retain control over that data using public-private key encryption. Desigining software using a participatory architecture paradigm, developers are able to focus on providing users with utility and design over **their** data rather than attempting to leverage that data for the developers' sole benefit.

# What is a Distributed Application?

A distributed application utilizes distributed or peer-to-peer technology, rather than centralized server-client model, to build an interactive, cohesive application. Typically, distributed applications are built such that they are able to autonomously operate due to the distributed network of users participating in the operation of the application. Distributed applications, or **DApps**, may or may not provide an explicit incentive mechanism for users to participate in the operation of the application.

Some DApps only require a distributed data store; some DApps only require a distributed file system; some DApps require both a distributed data store and a distributed file system. No matter the modular requirements for the DApp, the DApp should rely on distributed computing as the basis for providing a harmonized set of data or files upon which the DApp's users rely when interacting with the application.

## Distributed Applications Built on the eris:server

Developers wishing to build distributed applications on the eris:server are able to benefit from having a harmonized interface in which to build out their applications which can utilize a distributed file store and multiple distributed data stores in a cohesive, harmonized manner. Specifically, DApps built for or operating on the eris:server are able to have authenticated, user-authorized, harmonized interactivity with the following distributed file stores:

* [IPFS](http://ipfs.io)

as well as the following distributed data stores:

* [eris:db]({{ site.url }}/products/erisdb/)
* [tendermint](http://tendermint.com)
* [BTC](https://bitcoin.org)
* [ETH](https://ethereum.org)

Each of these modules has a harmonized [interface](https://gobyexample.com/interfaces) which exposes established functions to a javascript interpreter we call Atë. The Atë layer is a virtual machine which receives http and websocket messages from the eris:server's frontend layer and simply responds to these messages as any other server-side javascript scripts would operate.

Atë provides a limited interface which does not have the full range of capabilities which [Node.js](https://nodejs.org) would normally provide to a server side javascript context for security reasons. Only functions which have been purposefully exposed to Atë, along with core javascript functions, are able to be called from the javascript model files which run "serverside".

The general manner in which Atë operates best is that model scripts built to be run in the Atë layer of the eris:server utilize an **actions** paradigm. Actions which need to take place within the distributed modules which are exposed to Atë will generally need to be formulated and scripted within the Atë before being sent to the distributed module. Atë can also act as a simple router from frontend javascript interactions with the dsitributed modules. The choice is up to DApp designers.

# The eris:server's Design Philosophy

The eris:server is the first application server purpose-built to operate distributed applications. At Eris, our design goals when building the eris:server were twofold.

We wanted to begin to break down the monolithic nature of many distributed systems currently in use which require a complete buy-in to the system's methodology of doing things, rather than utilizing well-established conventions within software design.

We also wanted to be able to build an application server which was capable of providing authenticated actions at a meta level between and across different distributed systems rather than solely within one system. We see a huge need for such an authenticated actions paradigm and the eris:server is the first application server which specifically provides interfaces for authenticated cross-module actions.

## Breaking Down the Distributed Monoliths

Distributed Application development currently faces a fundamental challenge. It is incredibly difficult to move from ideation to implementation to iteration. Most distributed protocols are built in a manner which makes them difficult to develop on top of without having to completely fork an existing monolithic application or protocol and making the desired changes to the core protocol.

There is no reason why it should be so difficult for distributed application developers to move from ideation to implementation. The eris:server was built using very simple design paramaters to purposefully be able to capitalize on existing knowledge and conventions in integrated application development -- which has predominantly been web-based rather than desktop based. This is why DApps served by the eris:server are not viewed in a QT or GTK or other desktop style interface but rather are viewed in a normal browser.

## Authenticated Cross Module Actions

Being able to perform authenticated actions across distributed modules has been a very difficult proposition for DApp makers. In the context of a single module, particularly in the distributed data stores which the eris:server uses, which are called blockchains, it has been possible for distributed application developers to perform authenticated, ensurable, repeatable actions. However, their ability to provide such assured interactivity has been limited to the context of a single distributed module.

However, let us say that a single action which a user was to take required querying some information on one blockchain (or distributed data store), sending a transaction to another blockchain and perhaps reading or writing a file to a distributed file store. In the past there was no way in which such an action could be assuredly provided by distributed application developers.

Now, the eris:server makes this possible. Because the eris:server ensures that the model files which are loaded into the Atë layer are exactly what they purport to be using cryptographic finger printing paradigm called checksums, and because users have an ability to review these files and their operations **prior** to the eris:server running the files, the users of a DApp running on the eris:server can have assurance that the actions the DApp will take between the various distributed modules which it has access to will be the same action, all the time.
