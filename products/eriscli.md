---

layout:     content
title:      "eris:cli"
excerpt:    "The Distributed Application Platform"

---

# The Distributed Application Platform

eris helps developers build applications which leverage opt-in data ownership and significantly increased data utility for both customers and businesses -- a software design paradigm we call **Participatory Architecture**.

Using peer-to-peer and distributed systems, eris allows the creation of data-driven, interactive distributed applications that can be safely, securely, and reliably deployed and managed. eris significantly lowers the barrier to entry for the production, distribution and maintenance of distributed applications.

All while allowing users to easily and simply participate in the scaling and data security of the application.

More specifically:

```
Eris is a platform for building, testing, maintaining, and operating distributed applications with a blockchain backend. Eris makes it easy and simple to wrangle the dragons of smart contract blockchains.
```

# What is Participatory Architecture?

Participatory architecture is a way to design software which engages the application's users to assist in the data management and scaling of the application and in return allows users to have an increase in the ownership and utility of their habits and relationship data.

## How Interactive Applications Are Built Today

rework

## User Assisted Scaling

One way to address this fundamental challenge in modern application development is to change the paradigm and adopt participatory architecture. In an application built using participatory architecture design, the applications' users are enlisted to assist in the distribution and operation of the application. While there are many specific ways to think about how to enlist the users of an application to assist in scaling, the basic idea is to build an application which may or may not be financially free to use, but where users participate in the scaling of the application by providing usage of their hard drives to assist in the distribution of the application or by providing usage of their processors to assist in the data management and security of the application, or both.

Is it realistic to expect that users would be allowed to participate in the distribution and operation of an application in this way? **Sure it is**. Spotify has found [great success](http://www.npr.org/blogs/therecord/2011/11/09/141594727/how-spotify-works-pay-the-majors-use-p2p-technology) using this paradigm. Initially, Spotify allowed users to cache files locally, and then used a proprietary technology very similar to BitTorrent's peer-to-peer file sharing protocol to enlist the assistance of users in distributing the gargantuan quantities of content available within the application. Spotify is currently [moving away](http://torrentfreak.com/spotify-starts-shutting-down-its-massive-p2p-network-140416/) from this paradigm toward a server-client model, as revenues for the premium version of Spotify have justified the move to a different architecture. Even though Spotify is moving away from a peer-to-peer paradigm at this point in the life of the application, it is unavoidable that when revenues of the application were lower, the peer-to-peer technology greatly reduced costs over the course of the application's development toward a mature platform with stable, sustainable revenue.

The core hypothesis of participatory architecture is that users will accept the tradeoff of participating in the scaling of an application for an increase in data ownership over data which is, fundamentally, theirs.

## Increasing User Data Certainty

rework

# What is a Distributed Application?

A distributed application utilizes distributed or peer-to-peer technology, rather than centralized server-client model, to build an interactive, cohesive application. Typically, distributed applications are built such that they are able to autonomously operate due to the distributed network of users participating in the operation of the application. Distributed applications, or **DApps**, may or may not provide an explicit incentive mechanism for users to participate in the operation of the application.

Some DApps only require a distributed data store; some DApps only require a distributed file system; some DApps require both a distributed data store and a distributed file system. No matter the modular requirements for the DApp, the DApp should rely on distributed computing as the basis for providing a harmonized set of data or files upon which the DApp's users rely when interacting with the application.

## The Two Camps of Distributed Computing

add

## Distributed Applications Built on eris

rework

# The eris Design Philosophy

eris gives distributed application developers and users choice.

* Choice in crafting the set of technologies which is right for their distributed application.
* Choice in crafting which pieces of the application need to go in which data storage, data organization, and/or data dissemination facilities (which is what an application frontend -- no matter the backend -- needs).
* Choice in where and how users are able to interact with their applications in a participatory manner which allows users (particularly superusers) to help application developers share the cost of scaling their application.

All in an easy, simple to use, infinite expandable application platform which can run (nearly) anywhere.

## Breaking Down the Distributed Monoliths

Distributed Application development currently faces a fundamental challenge. It is incredibly difficult to move from ideation to implementation to iteration. Most distributed protocols are built in a manner which makes them difficult to develop on top of without having to completely fork an existing monolithic application or protocol and making the desired changes to the core protocol.

There is no reason why it should be so difficult for distributed application developers to move from ideation to implementation. eris was built using very simple design paramaters to purposefully be able to capitalize on existing knowledge and conventions in integrated application development.

<a class="action-big" href="{{ site.data.sites["docs"].url }}">Get Started Using eris</a>
