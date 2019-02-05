---

# Pretty normal stuff
date:      2019-02-05T10:46:38Z
title:     "What if the smart contract has a bug?"
author:    "Casey Kuhlman, CEO"

# excerpt is used for the text below the title when we share and also is the summary of the post on https://monax.io/blog
excerpt:   "In this post Casey addresses one of the biggest questions we often get at Monax. What if our smart contract has a bug?"

# this image should be stored in /content/blog/images/YEAR/. It will appear as a thumbnail on any listings,
# as well as at the top of the post itself
thumbnail: yosh-ginsu-146166-unsplash.jpg

# check the categories on the existing blog. should only have ONE
categories:
  - engineering

# tags should be meaningful for your blog. if you want this article to show on a 'use case' page, you can use
# the following TAGS -  'fleetleasing' 'creatives' 'lawyers' or 'entrepreneurs'
tags:
  - agreements network
  - smart contracts
  - solidity

# set draft to 'false' when you're ready to publish
draft: false

# used when using the shortcode utm_link in a blog post to another
# the campaign generally should match the category above
utm:
  source: "website"
  medium: "blog"
  campaign: "engineering"

---

{{< image_blog "yosh-ginsu-146166-unsplash.jpg" >}}

Within the zeitgeist of blockchain technology there is an understand of two things which lead people to believe something that is really a red herring when it comes to technical solutions. First people understand that blockchains and smart contracts are built to be "immutable". Second people understand that whenever code is involved there are bugs. The result of the intersection of these two understandings is an idea that the adoption of smart contract technology -- particularly when applied to actual, legal, contractual duties -- will **never** work. The problem with the idea is that it is just dead wrong when it comes to how actual, real-world systems are built.

> tl;dr: If your blockchain system does not allow you to overcome code bugs then it has been built by amateurs.

## Unpacking the phrase "smart contract"

Before we begin really looking at this issue we need to have a clearer understanding of what "smart contracts" are when that term is used by blockchain folks. If you are completely unfamiliar with this term then head over to our [explainer on the subject]({{< relref "/learn/smart_contracts.md" >}}). For those that have a generalized understanding of how this term is used within the blockchain ecosystem, let's take a *slightly* deeper look at how Ethereum style smart contracts actually work. 

In the Ethereum style of smart-contracting the bits of code that are added to a blockchain which we call "smart contracts" are broken into two major components:

1. The code that is run whenever the contract's address receives an inbound transaction which has been appropriately signed by the sender's private key.
2. A set of storage that can be manipulated **only** by the code itself. This is basically the code's "disk space" which only it can write to (everyone with access to the blockchain can technically read it, although making sense of what is read takes a bit more work).

It is indeed true that the *code* that an Ethereum style smart contract deploys with is immutable. But that, frankly, isn't the interesting bit for most real-world systems. Most real-world systems rely heavily on the *storage* provided by the smart contract -- which is, by design, mutable (with the caveat that under the protocol only the code of the smart contract can validly modify it's storage).

## Smart contract design patterns

There are three patterns of design which we rely on heavily when we're building the [Agreements Network](https://agreements.network) protocol. These three patterns, when used in conjunction allow us to provide for full upgradeability of our system and therein overcome a significant number of bugs. 

`Pattern A`: the **factory** pattern. The factory pattern is a design pattern within Ethereum style coding that will be familiar to many who have experience with object-oriented programming. The basic idea is that you deploy one smart contract to the blockchain which has the capability of "cloning" itself and when performing that clone to take a set of parameters and create it's clone a certain way depending on how the parameters have been given to the factory. Factories, as we design them, also keep records of their children and as such act as registries of the objects which have come "out of their factory". This is a very powerful pattern to leverage because it ensures that all the smart contracts which have been created by a factory will have the exact same dynamics. So, for example, if a bug is found within a smart contract, we can then find which factory is responsible for the smart contract which has a bug. This, in turn, lets us "walk" a tree of smart contracts to understand how infected a particular system is. However, to overcome the bug we need to leverage the other two relevant design patterns.

`Pattern B`: the **micro-services broker** pattern. The micro-services broker pattern within Ethereum style coding is not as widely used as the factory pattern within the community. This is because on many public blockchains it is relatively expensive. However in newer public blockchains -- like the Agreements Network -- and certainly on permissioned networks, this is a design pattern that is very important. Whenever we deploy a smart contract system to a blockchain we deploy a **hub** to that system. Every contract within the system knows of this hub. We call it **DOUG** (DOUG is an old contract, the ideas for which were first defined by one of Monax's founders Tyler Jackson; DOUG stands for the Decentralized Organization Upgrade Guide). Whenever one contract within a smart contract system we use wants to talk to another contract within that system it *first* asks DOUG for the address of a service by *name*. This allows us to then, over time, swap out and improve individual services. To fix a bug within a service that does not "store" information, in other words for those things that "process" then all we need to do is to deploy the new smart contract and overwrite the entry within DOUG with the new version and address information. Assuming that the interface of the contract hasn't changed then the system continues to work seamlessly. If the interface changes then we have to do a bit more work, but DOUG's versioning system allows for this extensibility. This pattern is very helpful for upgrading to new factories and for upgrading processing engines within a system. However, for those contracts which regulate a particular "object" (say, a legal agreement) then we need to do a bit more work and leverage the final relevant pattern.

`Pattern C`: the **object:proxy** pattern. The object:proxy design pattern is the only of these three patterns which was not pioneered here at Monax. It is leveraged extensively by Aragon, SpankChain, and a few others within the ecosystem. This pattern allows us to fix bugs and upgrade the code which relates to a particular "object" within a specific system. It also greatly reduces the amount of code which is held within a blockchain's storage. Looking back to the two "pieces" of an Ethereum style smart contract, what this pattern essentially seeks to do is to separate these two components into different contracts. We have, first, a `proxy` contract. This proxy contract contains the "code" which is used to modify the storage. However, because of some nuances in how Ethereum style smart contracts work -- namely their "immutability" -- if we want to upgrade the "code" but keep the "storage" then we have a **lot** of work to do. Enter this pattern. On the one hand we keep the "code" in the `proxy` contract. Then, as a second step, we move the `object` into it's own contract. This contract has -- basically -- a very very few lines of code that says: "do what my proxy contract says". This means that when we want to upgrade the "code" for a particular object we can swap out the `proxy` contract without having to worry that we will lose the storage associated with the contract. 

## Bringing it all together

When we designed the Agreements Network protocol (which underlies the [Monax Platform](https://monax.io/blog/2018/12/04/introducing-the-monax-platform---contract-lifecycle-management-for-the-digital-age/)), we explicitly designed it based on the ability for the users of the protocol to upgrade **every**. **single**. **piece**. of the system. This is important for any system, but it is absolutely vital when one is trying to ship a system which will manage and track legal obligations. 

The three patterns above, the final of which will be shipped this week to the Agreements Network's fifth testnet (T5) allow us to fully upgrade every bit of code within the system while still retaining the storage -- or state -- of every bit of the system. We can also upgrade the underlying blockchain without affecting end-users ability to retain the current state of their data. 

So, the next time someone asks "what if there's a bug in the smart contract" then just reply "well, then you upgrade the code"!

[Photo](https://unsplash.com/photos/qexZLgMcbPc) by Yosh Ginsu on [Unsplash](https://unsplash.com).
