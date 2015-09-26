---

layout:     content
title:      "eris:cli"
excerpt:    "The Distributed Application Platform"

---

```
Eris is a platform for building, testing, maintaining, and operating distributed applications with a blockchain backend. Eris makes it easy and simple to wrangle the dragons of smart contract blockchains.
```

# Eris: The Distributed Application Platform

eris helps developers build applications which leverage a software design paradigm we call **Participatory Architecture**.

Using distributed and peer-to-peer systems, eris allows the creation of data-driven, interactive distributed applications that can be safely, securely, and reliably deployed and managed.

eris significantly lowers the barrier to entry for the production, distribution and maintenance of distributed applications. All while allowing users or other orgnaizations to easily and simply participate in the scaling and data security of the application.

# What is a Distributed Application?

A distributed application utilizes distributed or peer-to-peer technology, rather than centralized server-client model, to build an interactive, cohesive application. Typically, distributed applications are built such that they are able to autonomously operate due to the distributed network of users or organizations participating in the operation of the application. Distributed applications may or may not provide an explicit incentive mechanism for users to participate in the operation of the application.

Some applications only require a distributed data store; some applications only require a distributed file system; some applications require both a distributed data store and a distributed file system. No matter the modular requirements for the application, if the application relies on distributed computing as the basis for providing a harmonized set of data or files upon which the application's users rely when interacting with the application then we'd classify it as a distributed application.

## Bridging The Two Camps of Distributed Computing

In general, we notice two camps which would self identify within the definition of "distributed computing". On the one hand are those who do "cloud" stuff. On the other hand are those who do peer-to-peer stuff. These camps do not seemingly have a strong link between them, which is a shame because they have a lot to teach one another.

eris finds itself straddling these two camps. We have built eris to embrace the containerized and swarm based future of modern software operations while also optimizing for peer-to-peer applications. Indeed, Eris is as much a pure docker tool as it is a smart contracts platform.

## Distributed Applications Built on Eris

Applications have a variety of data and process management challenges. Some of those challenges can be addressed by using participatory architecture and some of those can be better addressed by traditional architecture.

No matter how the application is built, no matter the individual modules required for the application, no matter the blockchain(s) and/or smart contract network(s) the application will interact with or rely upon, eris should be able to run it.

We have build eris to embrace true blockchain agnosticism. One can build an application which requires any major blockchain backend, any major file distribution system, or any major messaging layer. No longer do distributed application developers need to "opt in" to only one blockchain's ecosystem to wrap them in a warm hug of "we've got everything you need right here".

# What is Participatory Architecture?

Participatory architecture is a way to design software which engages the application's users (whether those are individuals or organizations) to assist in the data management and scaling of the application and in return allows users to have an increase in the ownership and utility of their habits and relationship data.

## User Assisted Scaling

In an application built using participatory architecture design, the applications' users are enlisted to assist in the distribution and operation of the application. While there are many specific ways to think about how to enlist the users of an application to assist in scaling, the basic idea is to build an application which may or may not be financially free to use, but where users participate in the scaling of the application by providing usage of their hard drives to assist in the distribution of the application or by providing usage of their processors to assist in the data management and security of the application, or both.

The core hypothesis of participatory architecture is that users will accept the tradeoff of participating in the scaling of an application for an increase in their ability to verify data and processes. The basic idea of participatory architecture is that while open source software development systemicatically distributes development costs across organizations, running that software could also -- in certain contexts -- benefit from an increase in the distribution of the operation costs.

One of the crucial aspects of participatory architecture, as opposed to the traditional "data ownership" model, is that all of those participating in the system will always be looking at the same data set rather than having to negotiate and syncronize the data set they "own" with those "owned" by others whether via API calls or screen scraping or however that is done. All while building on highly verifiable and resilient systems.

# The eris Design Philosophy

eris gives distributed application developers and users choice.

* Choice in crafting the set of technologies which is right for their distributed application.
* Choice in crafting which pieces of the application need to go in which data storage, data organization, and/or data dissemination facilities (which is what an application frontend -- no matter the backend -- needs).
* Choice in where and how users are able to interact with their applications in a participatory manner which allows users (particularly superusers) to help application developers share the cost of scaling their application.

All in an easy, simple to use, infinite expandable application platform which can run (nearly) anywhere.

## Breaking Down the Distributed Monoliths

Distributed Application development currently faces a fundamental challenge. It is incredibly difficult to move from ideation to implementation to iteration. Most distributed protocols are built in a manner which makes them difficult to develop on top of without having to completely fork an existing monolithic application or protocol and making the desired changes to the core protocol.

There is no reason why it should be so difficult for distributed application developers to move from ideation to implementation. eris was built using very simple design paramaters to purposefully be able to capitalize on existing knowledge and conventions in integrated application development.

<a class="action-big" href="{{ site.data.sites["docs"].url }}/tutorials/getting-started/">Get Started Using eris</a>
