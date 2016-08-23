---

# fill in
title:     "Deprecation Warnings: What Do They Mean"
author:    casey
excerpt:   "In preparation for the upcoming release of our 0.10 stack, we have deprecated some of the old tool chain. This post describes what's happening."
thumbnail:
category:  products
tags:      [decerver, thelonious, deprecation, epm, eris-cli]

# use if needed
layout:    post
published: true
comments:  true
meta:      true
#thumbnail_raw:

---

We have received some incoming communication with respect to the deprecation notices we have placed onto the readme's of Thelonious and Decerver. This is the explanation of what is replacing those repositories.

Our permissioned smart contract network (blockchain) design which was called Thelonious has been continued and integrated into the [Tendermint](https://github.com/tendermint/tendermint) project. We have been supporting the Tendermint project by paying one of our Core Developers to work on the Tendermint protocol and blockchain design. Tendermint is a permission-able, proof of stake based blockchain design. More about why we have switched from the old Thelonious design to the new Tendermint design will be forthcoming on our [Engineering Blog]({{ site.data.sites["blog_eng"].url }}).

Decerver, the distributed application server, has more or less been tabled. The idea behind the design was to provide a single server that was able to be plugged into various distributed protocol backends. While the goal was laudable, the implementation was awful. We realized quickly that the implementation conflated API client libraries with a router and http end point framework that a frontend could hook into. Both of these pieces can be, in our estimation, better handled by a series of good node-base client APIs and a node framework such as express. The middleware of an application need not (strictly speaking) be written in node, but we are heading in the direction of fully supporting node. The decerver has officially been replaced with a nice API and client library around the Tendermint blockchain in the form of [eris-db](https://github.com/eris-ltd/eris-db) and [eris-contracts](https://github.com/eris-ltd/eris-contracts.js).

EPM is being replaced by a combination of [eris-cli](https://github.com/eris-ltd/eris-cli/tree/develop) and [eris-pm](https://github.com/eris-ltd/eris-pm). EPM as a tool became overly bloated and unweidly with three different blockchain designs compiled into the binary and other challenges. The functionality of running, installing, creating, and organizing blockchains is now handled by the eris-cli tool. The smart contract package management functionality of EPM is now handled by eris-pm.

At this point we are still putting the finishing touches on the 0.10 release and our documentation is not totally where it will be in another month; we are working as quickly as we can to put the pieces of the stack back together for everyone after the major redesign process we have been engaged with over the past three or so months.

That said, even though Decerver, Thelonious, and EPM have been marked for deprecation, if you still would like to play around with that tool chain we are happy to answer any questions you may have via github or our [support portal]({{ site.data.sites["support"] }}). We are encouraging folks, however, if they are just starting to explore Eris to use the updated stack if they have an ability to work with little documentation or with the older stack if they require a bit more documentation.

For some of the background as to the overall implementation of the stack and our motivations for this redesign from a platform perspective please [see here](https://github.com/eris-ltd/eris-cli/tree/develop#why).