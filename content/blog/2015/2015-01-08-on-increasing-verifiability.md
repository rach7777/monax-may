---
author: casey
categories:
- business in emerging markets
comments: true
date: 2015-01-08T00:00:00Z
excerpt: How do we increase verifiability for small businesses in all markets is currently
  a job for SaaS solutions. But are there more distributed options? This post (a think
  piece) explores that question.
meta: true
published: true
tags:
- emerging markets
- sme
- investment
- smart contracts
thumbnail: saas-structure.png
title: On Increasing Verifiability of Data For Small Businesses
# url: /blog/2015/01/08/on-increasing-verifiability/
slug: on-increasing-verifiability
---

The other night, a friend posed the following:

>  Let us say that I and X other people want to fund a venture in an economy not our own. Let us say the deal was structured so that the funders group gets Y% of revenue until the raise is repaid in full plus Z% interest until the principal is paid. Wouldn't that be a great use case for a smart contract?

So what is happening here? This is fairly standard revenue-linked debt financing, but perhaps with a cross-border, crowd-fund component. This was posed, for the record, in the context of a cryptoequity, cryptoasset, and smart contract discussion. And yes, debt financing could make a very fine use case for a smart contract.

See, here's the thing though, it wouldn't make a great single smart contract. It would make an adequate smart contract. But it would make a fantastic basis for increasing verifiability for the entire business to be ran on a suite of smart contracts which would be responsible for tracking sales and then calculating interest, revenue distribution, and other things.

This is crucially important for many businesses in emerging economies as well as many other economies. For years, I was a lawyer for such businesses and/or their investors. The one common theme that I have seen in years of advising small and medium emerging economy businesses, is that they struggle with verifiability. Some may argue that many businesses in such contexts do not have computers so how could they even track things. This is simply not the case in my experience. Most middle class folk, and certainly business owners, even in the most poor countries I've lived in, have increasingly had access to smart phones and computers. So it is not really a technical problem for many; at least at this point in history.

While many businesses may not have an interest in increasing the verifiability of many aspects of their businesses, many others do. And investors in those businesses built in emerging economies, which are often (but not exclusively) diaspora or groups of diaspora *need* to have increased verifiability as to what is happening with their investments.

#### Increasing Verifiability with SaaS Based Solutions

The current answer for how to increase verifiability of business information for many small business in many economies is to use a software as a service (SaaS) solution. This is usually a webapp built by a company which is providing services to another company; this is *part* of what people mean when they say "the cloud". This makes sense for many business, and for investors, and is certainly a [positive and important step](http://tekfin.com/2012/05/24/equity-pressure-and-alternative-funding-solutions/) toward increasing verifiability of the business.

The general premise which I have, my operating hypothesis, is that while SaaS solutions do increase verifiability for small businesses, the system which must be established to provide effective coverage of the data of the company -- and how that system is to be built on a SaaS model backbone -- is not ideal. Let me explain.

When only dealing with a simple accounting system for a small business this system appears to work well. Indeed, a single account on [Xero](https://xero.com) or something similar would go a long way vis a vis keeping accounts on paper, taking photos of those accounts and sending an email with a picture attachment from a single smart phone. And, for the record, yes, I have reviewed accounts for clients under exactly that scenario; sometimes you just have to work with what you have. That alone would be a drastic improvement on using paper based solutions with human agents to track everything. This system could be used to track revenue and expenses of the business and produce a report which could be circulated among the funders of the venture along with their repayments for a given period.

Next, let's add a bit more complexity to the system managing the company's data. Say the business wanted to use [Vend](https://www.vendhq.com/) as its POS system. Vend scans outgoing products (sales) and provides a point of sale (POS) solution and then is able to sync that data to an accounting system -- like Xero. At this point, what would (functionally) be happening is that the agent responsible for entering sales into the books now would no longer be a human bookkeeper looking at receipt books, but rather would be an automated, robotic agent who (1) keeps records in its system of sales and then (2) uses API interaction to register and send across data to another provider (in this example -- Xero). At this point there are two sets of sales data -- one with the Vend system and one which is used by the accounting system to formulate a portion of the overall bookkeeping system. These data sets, while kept in sync via APIs between the accounting system and the POS system, are redundant.

Now, let us add one more layer of complexity. A company does not have only revenue. It also has expenses. Let us say that the business wanted to have increased verifiability as to expenses so it integrated a solution like [Xpenditure](https://www.xpenditure.com) into its system. Xpenditure is a solution which allows businesses to take a picture of their receipts and the solution will then translate those into expense reports which can be synced via APIs back to an accounting system -- like, say, Xero. Again, we have a similar thing happening as with the sales side of the business. The agent responsible for *tracking* accounts payable would no longer be a human agent writing in books, but rather would be an automated, robotic agent writing to a data set (which in turn is synced to another data set in the accounting system). As with the sales system, the interaction between Xpenditure and Xero would be based on API paradigms which are currently well developed in the SaaS world.

Each of the companies providing this SaaS solution system is responsible for the following:

* providing a helpful user interface (what I call data utility, perhaps an arbitrary label)
* providing an available anywhere data set (partially this is a data transmission function, partially it is a user interface function)
* doing useful things with that data (again, data utility)
* storing and securing data (data storage and permissions)
* providing an interactivity layer with other service providers (usually this is a data transmission function)
* making sure that the world state of "their" piece of the data stays properly synchronized with the "others" pieces of the data (again, a data transmission function)

The result here is a drastic increase in verifiability over a paper based system for the business owners (who no longer need to be in the office at the same time as the bookkeepers to verify all the things) as well as for the funders. The funders are able to verify that receipts from both the accounts receivable (Vend based SaaS system) and accounts payable (Xpenditure based SaaS system) sections result in the profit loss which is calculated by the accounting system (Xero based SaaS system) and then they can see that their repayments are definitely on point by comparing the amount they were transmitted against the sales figures (since that was the agreement that was posited in the hypothetical). This is, undoubtedly, a better solution than currently exists in vast numbers of small businesses all around the world.

#### Taking Stock

Let's take a look at what we have so far.

We have an increase in **utility** for the data-driven (financial) interactions of this company by using three cloud-based SaaS solutions which are built to interact with one another.

We have an increase in **verifiability** for the data-driven (financial) interactions of this company by moving tracking functions from human agents to robotic agents under human supervision and also because we have distributed the tracking functions and thus have distributed our points of failure over just corrupting one clerk (which is a single point of failure in many paper based accounting systems).

> Well, then, job done, no? The business wins.

Not quite. It benefits from this SaaS based system for sure. But is this structure resilient? Is it flexible? Is it self managing? Can it adapt?

#### The Challenges of the SaaS Approach

So we have briefly covered the structure and benefits of using a SaaS solution of a fictional business which has distributed funders. Let's look at some of the challenges that system presents.

**Data portability** -- many, but certainly not all, SaaS solutions allow some ability to export one's data. But few SaaS solutions make this easy. This is simple, because the business model -- while based on the provision of *data utility* functionality -- requires leveraging the *data storage* as a factor toward folks continuing to pay for the *utility* provided by the service.

**Data interoperability** -- the lovely harmony described above works precisely because engineers at the various companies have found it is in their respective company's interests to build APIs between these systems and ensured that they work together. Data is routed between their respective silos; and it is a wonderful thing when the system works. But the challenge here is that there is an `in-group` \|\| `out-group` mechanism in place in many SaaS ecosystems wherein these integrated systems work really quite well if you stay within the group, but if you do not want to stay within the group then there is often a problem. Let's say the business was located in a jurisdiction that for whatever reason, Xero was forced to stop operating. The business would have to (1) migrate their data to a new service provider (see the above) and *also* ensure that (2) the new service provider also had plugins with the other pieces of their SaaS stack (or, migrate those as well).

This is a challenge for businesses, especially small businesses, and I think it is unnecessary. If a software company wants to provide *data utility* services to its customers (which, really, is what most SaaS is about), that is great, but I query whether SaaS providers need to *hold* the data.

#### Is There Alternative Architecture?

One possible alternative to the SaaS + API system described above which is slowly developing, is **participatory architecture** (disclosure, I made this term up out of thin air, mostly because it makes sense to me). One of the tenets of participatory architecture is to try to separate out the layers of data-driven interactions namely:

* data utility
* data transmission
* data verifiability
* data permissions
* data storage

because each of these are distinct challenges.

With a SaaS based solution, what happens is that the entire data set of an organization is parsed vertically (as in, sectioned into accounting data, expense data, sales data, continuing with our fictional business described above) and then service providers who the organization elects for any given vertical column then become responsible for providing the full vertical stacking of the data-driven interaction for that section of the entire data set of the company. This becomes their zone of responsibility for the fictional business's data. The architecture roughly looks like this:

{{< image_blog "saas-structure.png" >}}

There are two things which I am struck by when thinking about this system from an organization's perspective (which, as a consumer of SaaS services for a long time I have done lots of). The first thing is the amount of redundancy in this system. Each of those service providers syncs its data with another service via the data transmission. This creates numerous redundant data sets. This may be a good thing; but it may not be. Secondly, there is a challenge of dealing with bad data points which get into the system and how the various syncing services handle changes to the data set and propagation of those changes across the whole of the data set. This second problem is likely a minor nuisance, but I have experienced it multiple times when dealing with such API driven systems.

Now, let's look at **one way of many** ways in which a participatory architecture system could be used to redesign the above paradigm. In participatory architecture the emphasis is more on mastering the horizontal partitions of a data-driven interaction -- the rows in the diagram above. Service providers then are able to specialize in providing, say, transmission from sensor systems back to a [Decerver](/platform/db) -- or any receiver of data built on participatory architecture design principles. Specialists in structuring data storage are empowered to work on the best way to store data and the more arbitrary the better. Obviously, the same would apply through the other parts of the stack. The arrangement could look something like this:

{{< image_blog "pa-structure.png" >}}

In the above diagram, each of the color overlays is a service provider. They have been arranged just to show that different approaches are possible to deal with the overall dataset, and it does not require that, for example, two and only two consensus mechanisms are used.

The crucial factor with participatory architecture, is to move away from a vertically arranged silo where a few service providers lend their computation and storage to the client (the business in this narrative) in return for a payment and toward a space where storage and computation are shared between the service provider and the business and the costs of development and operation of a service for a company are somehow realigned. Yet, in order for such an idea -- along with its many predecessors -- to succeed, it would have to happen in a way in which the client business need not have to spin up AWS instances, understand how to migrate a PostgreSQL, MongoDB, and MySQL datastores, etc.

> One *theory* that we have at Monax Industries is that participatory architecture could have a chance at reconciling the value add of big data and information aggregation with privacy.

And the privacy issue is a norm that, while I only briefly discussed before, is increasingly important through an increasing number of sectors; as it should. If the computation and storage of a business's data are rebalanced between the service provider and the business, a few things are likely to start happening.

* resiliency increases as the system develops fewer points of failure
* specifications between the layers of the stack become increasingly important to negotiate between service providers
* harmony within the dataset increases because the data set is viewed holistically rather than as pieces of different silos
* using private key encryption increases the utility of the data vis a vis passwords
* privacy has a chance

There may be more (or some of these may not apply -- this is, afterall, a think piece).

#### What Role Smart Contracts Can Play in Increasing Verifiability

There are two roles which smart contracts can play here.

The first role is that when the data stack is reformulated along the lines as described above then smart contracts can be structured to determine what the data storage is in a new way which current SaaS solutions do not currently provide for.

Remember, if you will, the original question this post began with. The idea the question is getting at is how can we bring closer **what is agreed** (namely the terms of the debt financing) to the **data of the interaction**.

Here's what I mean by that in the context of the fictional agreement hypothetical at the beginning of this piece. The original agreement was that Y% of revenue would be paid (along with Z% interest) to the funder group by the business until the original debt was repaid. Using current SaaS based solutions one can calculate this without a challenge. Xero won't ever know anything about what is to be paid to the funders, but you can enter transactions every repayment period back to the funder group and they can compare that against a statement they could be sent which was calculated within the Xero system. Or, alternatively, they could be granted limited access to the Xero system so that they could have some ability to verify that the reported sales numbers matched what the business actually is telling itself that it sold. Again, there is nothing wrong per se with this setup.

> However, at Monax Industries, we think we can do better bringing the agreements and the data of the interaction more closely aligned.

In a smart contract system a dashboard could be developed which would only need to know the revenue and the terms of the agreement, and the funders could see exactly what they were going to be paid in real time. Also, if the business is doing well and all the parties agreed that the terms of the deal should change, and if the system was built using smart contracts, when those smart contracts (the rule frameworks for what was agreed) change, then the entire data flow can update itself appropriately.

Smart contracts' ability to shuffle data around between permissions groups is a massive win for privacy, and for service providers, because it would mean that service providers would no longer have to keep access to storing data and instead could keep focused on providing utility of data; or in providing really great transmission systems, or really great permissions tables; wherever a service provider is able to add a value add.

The second role which smart contracts can play is in verifiability of execution. In a smart contract system, an investor would be able to have computers it controls verify every single execution cycle which led to any particular repayment, from expenses logged to sales made to other calculations which resulted in the repayment due to the funder group. Or, it could just let the robots do their super easy jobs, trust that everything was running smoothly, and just rake in the returns from this (now) booming fictional company!

Together, this dynamic nature (and its resultant adaptability) along with the ability to verify computation (and its resultant certainty) of smart contracts dramatically increases the strength of the entire system as compared to a current SaaS based model.

How, exactly, to get to a point where we can move beyond such theories as these, is still a work in progress.

#### Concluding Thoughts

This is mostly a think piece, I do not mean to imply that this is the only way to get from A to Z, but I wanted to explain a bit more about how smart contract based systems could assist in further increasing verifiability for small business. I'd welcome your input as to where you see increases in verifiability for small business which I may not have included in this narrative. What did I miss? What did I get wrong? Please do let me know.
