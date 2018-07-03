---
author: casey
categories:
- products
comments: true
date: 2015-08-30T00:00:00Z
deprecated: true
excerpt: We have been thinking (and discussing) licensing of blockchain tech and tooling a lot internally recently. Here's what we think.
meta: true
published: true
tags:
- licensing
- blockchains
thumbnail: licensing.jpg
title: 'On Licensing: Why Monax is GPLv3'
# url: /blog/2015/08/30/on-licensing/
slug: on-licensing
---



[{{< image_blog "licensing.jpg" >}}](https://www.flickr.com/photos/adulau/3011878917/)

[(Photo credit: CC-BY-SA: Alexandre Dulaunoy @ Flickr )](https://www.flickr.com/photos/adulau/)

Over the course of this weekend Preston and I have spent most of our time reviewing our licensing posture. As we are preparing for future growth of not only our company, but indeed the permissioned smart contract network space generally, it was important to us to make sure that we had released all of our effort using a proper licensing structure.

Getting licensing right, for an open source company, is a necessary (if wholly insufficient) component to success of that company. There are a number of considerations to take into account when licensing open source software. Every project is unique, and you should not read this post as advocacy for any particular licensing framework (although we have a soft spot for the venerable GPL licence series), so every project should take into considerations all of its context, get a lawyer, and figure out what is sensible for that project. Basically, this is not legal advice and your mileage may vary depending on your project's goals.

### Step 1: Set The Goals

And `goals` we think are the right place to start when thinking through licensing of open source software. At Monax Industries our goals are as follows:

* make smart contract technology usable for a broad range of developers;
* work within an ecosystem that makes this technology usable for larger, regulated enterprises;
* be as open as we can; and
* support tooling and infrastructure which is built as free and open software.

With our goals clearly defined then we moved along to thinking through what we build and the various tensions which bely various open source licences.

### Step 2: Understand The Licences

There are five "major" licences for open source software:

1. MIT
2. Apache
3. LGPL
4. GPL
5. AGPL

each of which has its own unique characteristics, requirements, and limitations. There have been arguments for, quite literally, decades between these licences; much of that debate (for me) centers around the idea of what is the best way to support the development and maintenance of software which is then given away. For two (now historical) views on this debate please read [this GPL focused post](http://www.gnu.org/philosophy/enforcing-gpl.en.html) and [this Apache focused post](http://blog.p2pfoundation.net/why-apache-defeated-the-gpl-license-developer-freedom-vs-user-freedom/2013/01/21). Both of those pieces are an excellent read.

The difference between these licences usually boils down to one question:

```
What happens with changes I make to the software?
```

I'm greatly summarizing here but the answers to these questions roughly boil down to the following:

```
1. MIT -- who gives a shit
2. Apache -- you can make proprietary changes, sell them, and keep them closed
3. LGPL -- you can make proprietary changes and (sometimes) keep them closed
4. GPL -- you can make proprietary changes and must keep them open if you "distribute" the software
5. APLG -- mostly the same as GPL but if you're running a web service which uses the licensed software you are "distributing"
```

There is one more subtle and important question which appears during licensing discussions, especially in an increasingly open source world where software is built on software is built on software all of which may have various licensing components. This is generally called "embedding" software. The basic question folks must understand is this:

```
If I use other software to build my software does that affect my ability to license the software?
```

The `*GPL` series is known to have "infection" properties. This means if your program "embeds" software which has one of the `*GPL` licenses then the "whole damn thing" is `*GPL` licensed.

So to summarize, if your software "embeds" (also known as "imports" or "links" in various programming languages) software that is licensed using one of the these licences this will *usually* be the result (again, I am generalizing here and this is not legal advice; mileage may vary)

```
1. MIT -- who gives a shit
2. Apache -- no infection, end result can be any licence
3. LGPL -- LGPL infects; all importing or embedding software becomes LGPL
4. GPL -- GPL infects; all importing or embedding software becomes GPL
5. AGPL -- AGPL infects; all importing or embedding software becomes AGPL
```

Embedding used to be an extremely complicated concept with numerous challenges across programming languages. Modern microservices architecture simplifies this to a certain degree simply because there is less need to "embed" software within other software.

### Step 3: Review What Other Similar Projects Have Done

We are in the smart contracts and blockchains business. In our view the closest analogies to the software we're building can be found in the area of databases. So let's look at the licensing structures for various databases:

1. [Postgresql](http://www.postgresql.org/about/licence/) -- Proprietary license; similar to MIT
2. [Mysql](http://www.mysql.com/about/legal/) -- Commercial licensed with a [FOSS exception](http://www.mysql.com/about/legal/licensing/foss-exception/) to that license that is compatible with a variety of other open source licenses but leans GPL. Mysql has attempted to confine the "infection" of its code is how I read the FOSS exception. A throwback to its older nature.
3. [MongoDB](https://www.mongodb.org/about/licensing/) -- AGPL license with commercial exception for not open sourced changes.
4. [Microsoft SQL Server](http://www.microsoft.com/en-us/Licensing/product-licensing/sql-server-2014.aspx#tab=2) -- Proprietary, commercial only licence
5. [Oracle](http://docs.oracle.com/database/121/DBLIC/editions.htm#DBLIC116) -- proprietary licence

But there are two major components to consider when thinking about a database backend. There is the database itself, surveyed above, but there are also the database drivers and connectors which are used by other programs to connect to the database. Generally, if a programming language wants to be able to have programmatic access to a database it must have a driver available, native to that programming language, which can be used by other programs to talk to the database. Most of the drivers for databases are released with fewer restrictions because it is generally more accepted that simply using the drivers in a validly proprietary piece of software should not infect the whole piece.

MongoDB's licensing (which, personally, I think is quite elegant) makes the explicit assumption that its core database is AGPL while the drivers for that database are licensed Apache (presumably, to limit the infection of other, validly proprietary software, which needs to talk to the database). This strikes an elegant balance because rarely, if ever, should a company using MongoDB have to make changes to the MongoDB binary itself. Modern database software does not need as many changes at the core database level as older database technology does for most usage.

### Step 4: Decide What Works For Your Project

Given our approach to blockchaining is not very different that MongoDB's we have taken a similar approach to licensing. For example our eris:db product (a robust server around a permissioned smart contract machine) is licensed GPL3 (more on this in a minute) while our client libraries (which are made to be importable by middleware and browser level javascript suites) are (currently) licenced LGPL. The client libraries *may* move to Apache in order to enable non-disclosure of changes to the client libraries.

The question in all software that the licensor must ask themselves is fundamentally, what needs to be changed in this cohesive software project? From our perspective, we hope very little. Our whole goal with Monax Industries' eris stack is to make these systems work in a variety of contexts with very little modification. We, mostly, take a `configuration over modification` approach to our blockchain and tooling work.

Those coming from a world where forking BTC is the start of any blockchain client may not understand this, but for us we have moved so much of the functionality of "what you want to do with the blockchain client" **out of the client itself** and into different layers, for example the EVM smart contract interpreter, or the genesis permissions options available on the Tendermint blockchain via `snatives` contracts.

Given that very little functionality need to be changed to the eris:db itself, and if those changes were made, the community should be able to take the benefit from it; given that the eris:db binary imports a variety of base libraries with varied licensing; given that we want to make this server be changeable and used for web services without triggering the distribution requirement (it is, fundamentally, a server afterall); given that we default to as open as possible, we have settled on GPLv3 for the eris:db container.

For `eris` itself we have arrived at the same conclusion albeit with different considerations. Monax is, fundamentally, a convenience wrapper around Docker ([as of this writing, licenced Apache](https://github.com/docker/docker/blob/master/LICENSE)) optimized for blockchain and smart contract applications, we view it as "infrastructure tooling". Or, the confluence of two lines of software development we feel should be licenced as openly as possible. Tooling is a bit of a challenge with trying to keep your software open because of the infection principles of GPL.

Before proceeding one must consider some of the history of free software thinking; which means we have to start with someone like [Stallman](https://en.wikipedia.org/wiki/Richard_Stallman). For someone who thinks like Stallman licensing would probably break down like this: `MIT < Apache < LGPL < GPL < AGPL`. However, many modern open source proponents would reverse those arrows to make the sequencing look like this: `MIT > Apache > LGPL > GPL > AGPL`. The difference really boils down to whether you want to **retain the right to enforce that changes to your software be disclosed**. As explained in the p2p blog post linked to above, for many developers, the second interpretation is better (admittedly, MIT is sometimes left out of that array because of its lack of patent protections) because there is less of a consideration as to the infection and embedding questions. As I said before some of the consideration is technical and, modern, microservice architecture hedges some of the embedding concerns which would be raised by the above as it has generally been settled that talking to a program over an API is **not** embedding.

For these reasons, at Monax we would lean toward the Stallman approach with the carve out that we think, for the purposes of Monax's products, AGPL goes too far.

### Conclusion

We proudly default our products to GPL licences because, for us, it mostly strikes the correct balance of openness.
