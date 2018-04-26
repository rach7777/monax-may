---
author: casey
categories:
- use_cases
comments: true
date: 2017-02-02T00:00:00Z
meta: true
published: true
tags:
- use_cases
- insurance
- resilience_bonds
thumbnail: resilience_bonds.jpg
excerpt: "In this post Casey does a deep dive into an interesting use case for ecosystem applications, resilience bonds."
title: "Use Case Deep Dive: Insurance Linked Securities"
url: /2017/02/02/use-case-deep-dive-insurance-linked-securities/
---

[{{< image_blog "resilience_bonds.jpg" >}}](https://www.flickr.com/photos/graciouswarrior/3679403408)

Recently, I had the distinct pleasure to be able to speak at the [Swiss Re blockchains event](http://cgd.swissre.com/events/Blockchain_insurers_are_building_up_trust.html). During one of my two presentations I was given the opportunity to do a deep dive into a very complex and interesting use case.

**N.B. 1** -- The following is a rather long post. Please come back to it when you have some time to dig in.

**N.B. 2** -- The deck I used for the talk is embedded at the bottom of the post if you would like to see or share it.

**N.B. 3** -- If you are unfamiliar with blockchains, smart contracts, or ecosystem applications, or if you find yourself a bit confused about the terminology used in this post, feel free to read our explainer series which tackles:

* [blockchains](/learn/blockchains?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog)
* [permissioned blockchains](/learn/permissioned_blockchains?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog)
* [smart contracts](/learn/smart_contracts?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog)
* [ecosystem applications](/learn/ecosystem_applications?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog)

### Introduction to Insurance Linked Securities

[Insurance linked securities](https://www.irmi.com/online/insurance-glossary/terms/r/risk-securitization.aspx) allow us to leverage markets to insure big, complex events. [These instruments](https://www.irmi.com/online/insurance-glossary/terms/s/securitization-of-risk.aspx) seek to encapsulate risk into securitized instruments that can be bought and sold on markets. Insurance linked securities (or, `ILS` for short) use a risk index to value the security (or a specified loss event) and explicitly build risk factors into pricing of the instrument.

ILS instruments are an absolutely vital component of the insurance domain because, as Pascal Bouvier [recently wrote](https://www.linkedin.com/pulse/my-current-fintech-wishlist-pascal-bouvier-cfa):

> [T]he potential for pooling risk, segmenting risk, providing liquidity to certain asset classes seems rather interesting. Big problem to solve, bigger opportunity.

But it's more than a "big opportunity". ILS instruments are also a way in which markets can be brought to bear to insure against very complex risks. The risks which stem from events such as hurricanes, earthquakes, or volcanoes, bring losses which are massive and need to be covered very quickly. Such loss events affect insured customers in very large numbers; are relatively random in when and how they occur; and present a massive bottleneck to traditional claims management processes for primary insurers. As climate change accelerates the number and significance of catastrophic events, ILS instruments are increasingly being leveraged by the insurance community to ensure that customers will have their losses fully covered.

Currently there is really only one instrument which is commonly used within the market. `Catastrophe Bonds` [are debt instruments](http://www.investopedia.com/terms/c/catastrophebond.asp) meant to raise money in case of a catastrophe such as a hurricane or earthquake. For a brief history and overview of these increasingly important instruments [see here](http://en.entropics.se/cat-bonds/the-history-of-cat-bonds/).

But the use case I was *really* examining was `Resilience Bonds`.

### Introduction to resilience bonds

[Resilience bonds](http://www.swissre.com/global_partnerships/Swiss_Re_and_partners_to_develop_resilience_bonds.html) link catastrophe bonds with capital investments in resilient infrastructure to reduce losses. For a brief history and overview of these instruments [see here](https://www.brookings.edu/blog/the-avenue/2015/12/16/financing-infrastructure-through-resilience-bonds/).

Resilience bonds are interesting in the insurance linked securities space because, as [Artemis put it](http://www.artemis.bm/blog/2015/12/09/resilience-catastrophe-bond-framework-developed-by-rebound/):

> An increasing number of the world’s ILS ([Insurance Linked Securities]) managers are embracing the fact that they provide disaster risk capital and find this a draw for investors looking to invest responsibly. The RE:bound ([Resilience bond]) program could bring a big opportunity for this aspect of ILS and catastrophe bonds to be stressed and help the market to grow.

In the chart below I roughly sketch out the flow of how resilience bonds are structured.

{{< lucidchart "d7a846ba-7326-413a-9e5d-d0c72085af65" >}}

On the left hand side are the three major categories of actors involved in the ecosystem. They are sponsors (usually a special purpose vehicle managed by a large reinsurance company), issuers (cities and other organizations responsible for building infrastructure), and investors. These three groups of actors get together to originate a resilience bond.

The resilience bond is effectively three different systems bundled together. These systems are in the middle of the diagram.

#### Project management component

In the resilience bond is a project management component that tracks the building of resilient infrastructure (nicely described in [this UK Government report from 2011](https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/69269/climate-resilient-infrastructure-full.pdf)). This could be a flooding control system, or a new sea wall; this could be deployment of wide-field sensor arrays, or stronger bridges.

The effect of the project management component is that as resilient infrastructure is built two things occur: first, the impact that a risk event will have upon a wide geographical region is reduced. Next, this leads to a reduction in the premium cost on the insurance component (covered below). It will also lower the principal risk on the catastrophe bond component (also covered below).

As an example, if an issuer greatly increases the resilience of an elevated highway and an earthquake occurs which **does not** collapse the elevated highway, then the amount which primary insurance companies need to pay out will be greatly reduced. In addition, the reinsurance actors will have fewer primary insurance claims submitted to them.

#### Parametric insurance component

Within the "bundle" of risks, rights, and obligations that is a resilience bond is a component that includes a parametric insurance policy. Parametric insurance, for those that are not familiar, is an insurance policy which pays out on the occurrence of a well-defined, pre-agreed trigger.

Such a trigger could be that it was below freezing for more than 8 hours in a particular area. The "area" may, for example, be a vineyard and the freezing temperatures may present a risk to vines in the vineyard. The data which supports the parametric trigger is likely to have been transmitted via IoT sensor arrays deployed in the vineyard to the insurance company by way of (an) IoT platform(s).

Traditional crop insurance would require a vineyard owner to prove actual damage to their crops, require an adjuster to come inspect that the damage did in fact occur, and require the insurance company to conduct a full claims process on the loss. Parametric insurance avoids the hassles that the customer has with submitting their claim, being available at the appointed time of the adjuster's visit, and then waiting for the claim to be processed. Parametric insurance, on the other hand is particularly clean in the context of crop insurance. Namely, when the agreed trigger occurs, they get a check in the mail or money in their bank account.

Parametric insurance also is cost effective for the primary insurer who need only know that the agreed trigger was "fired" and then they send the money. This avoids the major hassles that traditional claims management has for insurance companies. Of course it is true that parametric insurance is likely not possible to cover many types of risks (such as, e.g., a car accident); but for some risk events, parametric insurance is very attractive to both customers and insurance companies.

In the case of the risks which resilience bonds would typically cover, the triggers would be likely to come from governmental or international organization data providers (such as, in the United States, USGS or NOAA). The parametric insurance component of the resilience bond is a relatively simple trigger linked to the defined catastrophic event (such as an earthquake, a flood, a hurricane, or a volcano).

#### Catastrophe bond component

The final component of the resilience bond instrument is the catastrophe bond; these were covered above in the introduction section.

### How can we systematize resilience bonds

As readers can see, resilience bonds are incredibly complex instruments. Their origination and servicing costs are extremely high; and they have numerous and varied participants. For these reasons, as well as others, they are extremely hard to productize. Why? There are three predominant reasons:

#### Attribution & authenticity costs

Attribution and authenticity costs stem from the challenge that business ecosystems have around data fidelity and data reliability across the participants. Business ecosystems such as those contemplated by this use case need to be able to manage large sets of important data while also enabling multiple divergent participants to be able to rely on data being accurate, precise, and attributable to a given actor within the ecosystem.

For example, investors need to understand what the state of the infrastructure built is in order to be able to properly price their catastrophe bonds. Sponsors need to be able to rely on the data that provides the parametric trigger. Issuers need to be able to verify what data is being fed into the parametric insurance's pricing engine. Currently the costs in being able to systematically share authenticated, ordered data are prohibitive. However, this is what [blockchains in industry](/learn/permissioned_blockchains?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog) were born to do.

#### Reconciliation costs

The servicing of resilience bonds presents enormous reconciliation costs due to the number of actors and complexity of the information which needs to be reconciled across the ecosystem of actors. The manner in which the lowered premiums and lowered principal risk are handled is often via a rebate schemes. Calculating these rebates presents a significant multi-lateral reconciliation challenge to the participants in the resilience bond ecosystem. Currently the costs in being able to provide assurances as to business processes across a range of companies are prohibitive. Again, what blockchains in industry were born to do.

#### Coordination costs

Finally, we have a range of coordination costs that apply to the components of the resilience bond. How, for example, will infrastructure projects be approved to qualify for the rebating scheme? How will the progress on infrastructure projects be measured? These questions, and a very long list of other coordination requirements, mean that resilience bonds are very unlikely to take off if we continue to build applications and platforms as single-company endeavors. However, when we begin to leverage what [ecosystem applications](/learn/ecosystem_applications?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog) can provide, we can begin to see how these systems can be systematized which would mean that the giant opportunity that Pascal Bouvier identified above moves into the realm of the possible.

### Benefits of building resilience bond ecosystems

By leveraging ecosystem application technology, resilience bond management systems gain three primary benefits.

#### Fidelity over pricing model data

One of the most challenging aspects of participating in ILS instruments across the board is the extreme amount of complexity that needs to be integrated into how these instruments are priced within the market. This observation has led to systems like [OASIS](http://www.oasislmf.org/), which seek to systematize climate change data into models that can be used within ILS markets for determination of when and how extreme weather events will be over time. In addition, there is a plurality of data which ILS market participants utilize to determine if their modeling is correct.

In such systems there are two major aspects. The first aspect is the raw data which is fed into the pricing model. This data is often paid for at high cost from established data feed providers. The market participants relying on this costly data could both reduce their costs and increase their certainty regarding the sourcing and fidelity of the data which is inputted into their (usually proprietary) pricing models. Other time the data is provided by a national government, or an international organization. In these instances, the data provider may decide that publishing the data is [no longer in their interests](http://www.nature.com/news/us-government-takes-animal-welfare-data-offline-1.21428), or worse, may decide that skewing the data *is* in their interests. Having fidelity over the raw data which feeds into the pricing models is increasingly important as providers of trusted data are reduced in numbers.

The second aspect is the pricing models themselves. These are a competitive differentiator and are very likely to remain proprietary, closed, and isolated within the data centers or cloud machines of a given market participant. A well designed ecosystem application *can* and *should* be able to incorporate many components and systems which are proprietary to **single participants** in the overall ecosystem.

#### End to end lens of resilient infrastructure capital projects

Another of the challenging aspects of participating in resilience bonds is that all the participants need to have a clear visibility on the qualification, design, and building of the capital projects meant to reduce the impact of the catastrophic event which would trigger the parametric insurance component of the resilience bond instrument. Gaining a clear view, at an ecosystem level, of the qualification, design, and building of the capital projects is vital to be able to properly administer the complex rebating schemes which are integral to the overall outcomes intended by the instrument.

#### Optimize instrument's objectives across stakeholders

One of the trends we, as a platform provider, have observed from watching the many application builders who leverage our [industry leading platform](/platform?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog) is that over time ecosystem applications are allowing companies to not only reduce costs of business processes by moving some of the management of collective business processes to a collaborative space (namely, the ecosystem application) but also it allows participants to optimize objectives by a more deterministic understanding of data and processes.

Just as a parametric insurance policy not only reduces costs for insurers by reducing ambiguity in the claims management process, but also increases customer satisfaction (given the challenges to customers inherent in claims management), similar effects across the participating entities in a resilience bond system are very much possible.

### What would a resilience bond ecosystem application look like

After all that prose, now we get to the systems diagrams portion of this post. When we talk about building ecosystem applications, typically we look at the application from three different points of view:

* first is a systems point of view,
* second is a functional point of view, and
* third is a network point of view.

The diagrams below to touch on these three points. These diagrams are not meant to be blueprints, but rather as points of discussion. It is entirely likely that different architectures can and would be developed. It is also true that the documents do not fully capture the complexities involved in what a resilience bond management ecosystem application would look like.

#### Systems view of the application

First, let us talk through some of the factors that come into play when thinking about the application from a systems point of view.

{{< lucidchart "d61d127c-d0ec-4bbe-a28e-bb6917fb7684" >}}

This diagram is purposefully very high level. On the left hand side of the diagram one can observe the ecosystem application's validator pool which "runs" the application. Probably such an application would utilize a pool of validators that was somewhat equally controlled by a group of sponsor(s) of the instrument, a group of issuer(s) of the instrument, and a group of the investors on the instrument.

On the top half of the remainder of the diagram we have the interfaces. Typically these will be web- or mobile-based interfaces used by the business users of the system. They would likely run on different application servers depending on who the participant was. The point here is that even though the raw, "base" data everyone is looking at is different, that data can populate user interfaces that have been built and optimized by entirely different companies for their various business users' needs.

On the bottom half of the diagram are data platforms that are populated very likely by IoT sensor arrays. Sensors can easily populate blockchains and be used to provide deterministic outcomes of particular processes at an ecosystem level using smart contract technologies. Ideally such IoT sensors would include cryptographic and networking primitives in their software such that they can directly sign data and send that to the ecosystem application via one of the validators. Different architectures could require aggregation of data at an IoT data platform level and then sending of the data to the ecosystem application. It would depend on a variety of factors such as what data was needed, how certain that data needs to be coming from the sensor, and how much data flow was required. For the purposes of this design we have modeled that IoT sensors would be used to detect whether the catastrophic event had occurred which would likely mean that one would be considering very low data volumes and the sensors could be hooked into the blockchain directly.

#### Functional view of the application

Second, let us talk through some of the factors that come into play when thinking about the application from a functions point of view.

{{< lucidchart "819cb85d-9b89-4776-ad47-e86a2f8f00c3" >}}

This diagram places the ecosystem application in the middle of the diagram. So let's begin there. Within the ecosystem application we have three predominant "sub-systems" that will be leveraged to track the three major components of the resilience bond instrument. Of course one would need authentications, authorizations, approvals, and the like, which are not included in the diagram, but would be provided by something like our [smart contract based insurance SDK](/library?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog#insurance-sdk)).

These smart contracts would then be plugged into various systems utilized by the various participants in the ecosystem. The key thing to derive from the diagram is how will payments work. Most of the remainder of the diagram has been covered above. Payments are obviously a very important part of the ecosystem application. Functionally there are two ways that payments will work. The first way is that the issuer plugs the ecosystem application into their payments platform which then leverages a legacy connection to their bank. The second, and probably better way, is that the issuer's bank is an active participant in the ecosystem application and provides a smart contracts based payments interface within the ecosystem application that authorized entities can utilize. That smart contracts based payments interface is then plugged into the banks legacy systems **by the bank**.

While many banks are leveraging blockchains and smart contracts, only those that are deepest into their experimentation and piloting understand that by providing such services for their customers (rather than focusing solely on bank-to-bank coordination) they can leverage ecosystem applications not only as a cost reduction exercise but also as a profit opportunity. Such a service, which is not out of reach for many banks to be able to provide to large corporation customers, would basically be this, `we'll run a node on your ecosystem application and move the money around in the real world for you`. Such a service would require banks to leverage the trust that large corporations already place in them to keep payments destinations secret in combination with the instructions from the ecosystem application to move the money around.

#### Network view of the application

Lastly, let us talk through some of the factors that would come into play when thinking about the application from a network point of view.

{{< lucidchart "f8faeb7d-ef51-43ef-843e-a628a2a35f4d" >}}

One of the mistakes that many companies are making just now is to think about "blockchains" as if they were a singular, linear blockchain. That's fine if your **only** paradigm is bitcoin or its derivatives.

However, to really solve enterprise needs much more complex networks are not only possible, but preferable. A single, linear chain isn't really going to be scalable, it assumes that the information it's authenticating is not sharded, and mounds and mounds of privacy features need to be built on top of what was built to be, fundamentally, a `transparency machine`. These needs led blockchain designers and architects to begin thinking through how to address them. One of the predominant lines of thought in how to address scalability, shardability, interoperability, and privacy is to adopt more complex network structures than a singular, linear blockchain provides.

These more complex network designs are currently nascent and will be unlikely ready for full production use until (at the earliest) late in 2017. These next generation complex network designs, break down into roughly three categories.

The first category is that which is preferred by many in the bitcoin community. This is commonly referred to as "sidechains", which I call "clothesline architecture". This complex network assumes that there will be a single, heavy chain and off that "heavy" chain will hang "lighter" chains. This architecture is not really well suited to the complex information requirements that need to be intertwined in the ecosystem application that is the subject of this post.

The second category is the "hub only" approach which is the approach taken by [Corda by R3](https://www.corda.net/) and the [Interledger protocol by Ripple](https://interledger.org/). This complex network assumes that with only minimal rules on the other side of the interface, that a bunch of systems (some blockchain, some legacy) can be plugged into the "platform". Neither of these codebases advertise themselves as "blockchains" and that is for a reason. They aren't. They are meant to be the key hubs that a bunch of other systems will plug into.

Where Monax is putting its time and attention, and what is most suitable for this particular ecosystem application, is what I call "hub & spoke architecture". Proposals such as [the Ethereum Foundation's Casper/Sharding proposal](https://blog.ethereum.org/2016/12/06/history-casper-chapter-1/), or [Cosmos by Tendermint](https://cosmos.network/) have many advantages over other complex network designs to support this ecosystem application.

They have an ability to provide filtering of information flows between and across subnetworks within the overall network. They have an ability to asynchronously call smart contracts on other subnetworks. They shard well, scale well, and provide a much better privacy baseline than other proposals. If you want to learn more about these next generation systems, please start with Cosmos!

### How do we build this ecosystem application?

We work with a significant number of companies who are at very different levels in their understand and use of ecosystem application technology. While this technology and our space generally remains very fluid and lessons are being learned every day, patterns are starting to emerge that can teach us lessons about how to most effectively move forward with building and releasing ecosystem applications.

At Monax we break these down into four phases:

* Education phase
* Experimentation phase
* Prototyping phase
* Production phase

In each of these phases we typically try to help our users address what we are starting to see as the "big ticket items".

#### Education phase

There are two big boxes to check if you are seeking to move to production. The first box to check is whether the value proposition of the technology generally is clearly understood within your organization. At this point in time there are a range of competing core value propositions about what ecosystem application technology can do for your organization. We see it at conferences all the time. Various companies tell almost completely incompatible stories from one another which leads to confusion within organizations as to "what we think this tech could do for us".

The second box to check is whether your organization understands the big shift in mindset that is required to fully leverage ecosystem application technology. This technology is fundamentally about coordinating across companies, meaning it requires that we take a collaborative approach to building software and to "participate" in an application rather than "owning" an application. This is not a small mindset shift for large, conservative organizations to make. However, if your organization does not understand the mindset shift, and at a sponsor level embraced it, then your blockchains experimentation are very unlikely to succeed. If your organization does understand the shift, you'll be well positioned to leverage ecosystem applications to their fullest.

#### Experimentation phase

There are two big boxes to check if you are seeking to move to production and have successfully ticked the boxes noted above. The first box to check is to identify how you will exploring viable use cases. One of the challenges that many organizations face when they are moving from the education phase into the experimentation phase is that they can get overwhelmed by the possible. The easiest way through the classic paradox of choice is to have a solid experimentation plan. Will you go broad with quick sprints on various use cases? Then we recommend having a dedicated team that develops expertise on one or two general purpose ecosystem application platforms. Do you want to go methodically with a very few focused use cases? Then we recommend communicating clearly to your vendors what your requirements are and perform more platform evaluation during this phase.

The second big box to check is to identify the pathways to production. This is generally use case specific and comes on the back of a successful proof of concept ("POC") that is recommended for product development budget. The companies that we know that are furthest along do not worry too much about business casing when they are actually building POCs but rather iterate fast toward solving complex business problems. This doesn't mean that they embark upon useless POCs, mostly it is to note that they only formulate a general hypothesis about what the business case would be when they are POC-ing. Included in the pathway to production are often three major components:

* a `technical roadmap` for the ecosystem application along with systems to integrate and how the network operating the ecosystem application is expected to grow;
* a `business case` as to new opportunities opened and/or old problems solved and the expected ROI for migrating to the application; and
* a `budget` that at a minimum supports the entire prototyping stage.

Of course every organization is unique, and what I'm mostly speaking to is general in nature.

#### Prototyping phase

There are (creatively) two big boxes to check if you are seeking to move to production and have already successfully ticked the boxes noted above. The first box to check is to slowly remove the technical scaffolding which was used in the experimentation phase. To provide two clear examples of what I mean, when most companies are in experimentation phase they do not address [the very hard problems of key management](/2016/03/19/keys-keys-keys/?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog) or of integrating with their legacy systems. During the prototyping phase is when this scaffolding which was built to support the experimentation phase comes down.

The second box to check is to begin extending out participation in the ecosystem application outward to include other companies. One of the things that we are learning quickly is that while it is important to take a collaborative approach to building what is, fundamentally, collaborative software, most organizations get more done faster in the experimentation phase if they do it mostly internally and once they've built the business case around a particular use case that *then* they begin to extend participation. This could mean that you invite others into the application you've been working on, or it could mean that you connect workstreams from other participants and effectively "merge" the code built during the experimentation phase. However it happens with your application this is typically the time to do it.

#### Production Phase

Once the application has finished the prototyping phase and a group of participants in the ecosystem application have committed to move the application to production, then the production phase can begin. There are two big boxes to tick. First, is to harden the system, battle test it, stress test it, and generally have your IT department get comfortable with the operational requirements that participating in this ecosystem application will require.

The second box to check is to fully negotiate the governance framework for the application. We'll have more coming on the lessons learned here after we've gleaned a few more lessons!

### How can Monax help build this ecosystem application

This has been a single use case example of how to leverage ecosystem application. However, this is our company blog, so let me tell you about how Monax can help!

First and foremost, cross-industry use cases such as the one described in this post are how are exactly the type of use cases [our industry leading ecosystem application platform](/platform?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog) have been built to support.

We also have built our [Insurance SDK](/library?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog#insurance-sdk), dual integration addon module, business process modeling addon module, claims management addon module, together can provide a majority of the functionality needed to move forward with this use case **today**. In addition, on our products roadmap are a parametric insurance addon module as well as a catastrophe bonds addon module both of which are optimized versions of our basic addon modules that integrate the nuances of those components of the system. Coming this year is an Apache Camel plugin which will greatly assist in connecting ecosystem applications to legacy systems.

Finally, to support development and education efforts we have our [premium support and education packages](/packages?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog) which remove many of the blockers application builders have from experimentation all the way to production.

Get started today by [contacting us](/?utm_campaign=resilience_bonds&utm_source=monax_io&utm_medium=launch_blog#contact-monax)!

<a class="embedly-card" href="http://www.slideshare.net/CaseyKuhlman/smart-contract-use-case-examination-insurance-linked-securities">Smart contract use case examination: insurance linked securities</a>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

[(Photo credit: CC-BY-SA: Lou @ Flickr )](https://www.flickr.com/photos/graciouswarrior/)
