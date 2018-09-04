---

# fill in
date:      2018-08-21T00:00:00Z
title:     "Example Active Agreement: Workflows and Interfaces"
author: Casey Kuhlman, CEO
excerpt:   "This post covers a simple sale of goods contract and how to use workflows along with integration providers to bring agreements to life."
thumbnail: sale-of-goods.jpg
categories:
  - active agreements
tags:
  - monax
  - agreements network
  - legal products
  - sample archetypes

series:
  id: active-agreement-samples
  number: 1
  about: "This is a series of posts where the marmots will be outlining how the Monax Platform and the Agreements Network can be used in harmony to create the legal products of the future."

published: true
comments:  false
meta:      true
utm:
  source: "website"
  medium: "blog"
  campaign: "agreements network"

---

{{< image_blog "sale-of-goods.jpg" >}}

If you'd like to learn more about the Agreements Network you can find out more at: the [Agreements Network](https://agreements.network) site. We've also written about the network on [our blog](https://monax.io/tags/agreements-network/). This post is written for those who have a baseline understanding of the goals and aims of the Agreements Network, so if you're unfamiliar at least start with [this introductory post](https://monax.io/blog/2018/04/27/monax-is-pleased-to-introduce-the-agreements-network/).

## Setting the Stage: What Are Active Agreements

At the core of the Agreements Network are what we have titled "Active Agreements". This name was not chosen lightly. Indeed, it was chosen after much deliberation to evoke what we view as the primary benefit of running legal contracts with the context of a blockchain network. That benefit is the ability to move from legal contracts are a flat, fundamentally paper-based "thing" to a world where "agreements" are an "active" component of the digital back office.

The mechanism used by the Agreements Network to do this is to leverage a business process modeling standard called BPMN (business process modeling notation). As we've written about [on the Hyperledger blog](https://www.hyperledger.org/blog/2018/08/16/business-process-modeling-the-missing-link-between-legal-know-how-and-blockchain-based-legal-products) this opens up the world of machine readable systems to folks who may not have deep coding experience. Under the hood the Agreements Network's high level API translates instructions encoded into BPMN files (which can be created via graphical "modeling" tools) into specific process diagrams that are ran by Solidity based smart contracts that are baked in as first class citizens of the Agreements Network.

There are numerous benefits to both creators of Active Agreement templates (which the Agreements Network labels as "Archetypes"). One of the largest, is that those who are creating the Archetypes can enable Active Agreement users who create agreements based on the Archetype to rapidly evolve their solutions. In the remainder of this post, I'll outline first a very simple business process flow for a dead simple sale of goods contract, and then tease out how that solution can evolve over time.

What we at Monax have found in our explorations with the market is that business process modeling is a clean way to move contractual instruments closer to machine readability without requiring strong coding skills. However, existing business process modeling systems are built to run only within the context of a single company and as such are not strongly suited to the cross company necessities if we are to track the fulfillment contractual agreements. This is where a business process modeling engine that runs on a blockchain becomes exceedingly interesting and important. In other words, the portions of a business process flow which move across company boundaries (and therefore cannot be tracked in a legacy business process engine) map cleanly to the legally relevant events we care about from a contract management perspective. Neat, huh?!

## Example Business Process Model for a Sale of Goods

For the purposes of this example we'll outline a dead simple process flow. This process flow may not be the exact way every single sale of goods contract is built to operate, but that isn't what is important to understand about the example. The process engine within the Agreements Network can handle all kinds of iterations. We'll settle on the following six step process:

1. Buyer sends order
2. Seller ships goods
3. Buyer accepts goods
4. Seller sends invoice
5. Buyer pays invoice
6. Seller receives payment

Each of these processes happens in serial. That is to say there is a linear process flow where `1.` always happens before `2.`, and `2.` before `3.`, etc. While in the real world there may not be a strong sequential link for the buyer to accept the goods formally before the seller sends the invoice, for the purposes of this example we will assume that the contract is written as such.

A first run at building this as a process would look like this:

{{< image_blog "example_sale_of_goods_1.png" >}}

There are two swim lanes in the diagram. One for tasks that would be completed by the Buyer and another for tasks that would be completed by the Seller. Each of the boxes within the swim lane are called, within business process modeling parlance "activities". We can think of them most cleanly as "tasks". The lines between the boxes provide the flow of the process. Within the context of the process engine tasks will not be able to be completed until the directly previous task has been completed.

So, one may ask at this point, "how do we complete the task"? This is where things start to get interesting. In the early days of a legal product's evolution it is possible that numerous systems and APIs would not be connected into the Agreements Network; in such an occasion we can most easily model that the task will be completed by a human going into a web application and clicking a button that says, in effect, "I did this". At that time within the context of the blockchain we have a bite sized piece of evidence that the appropriate user (the Buyer) says "I did this" and we have a time stamp on that evidence. But, this becomes just one more thing for folks to do in their day.

What if, we then extended the system and built a simple integration so a shipping provider's API? This can easily be done by any application that sits on top of the Agreements Network. At that stage we could then read from the shipping provider's API based on the order number and know when the goods have been shipped and when they have arrived. This change could be done without really requiring the legal process designer to make any changes (although practically speaking it would be easier for applications if they did). At this stage the process diagram would evolve to look like this:

{{< image_blog "example_sale_of_goods_2.png" >}}

Next, let's assume that an application provider was able to build two more integrations: one with an accounting system (say, Xero or Quickbooks) and one with a payments provider (say, Stripe or TrueLayer). This would then extend the automation benefits of the system where the accounting system can register a specific order number and that can be used by the integration provider to track the shipments, and then it can be used by the system when the goods have been received to send an invoice via the accounting system and finally that can be used to trigger automatic payments over traditional payment channels. At this stage the process diagram would evolve to look like this:

{{< image_blog "example_sale_of_goods_3.png" >}}

What about all the cool stuff that's getting built in the blockchain world to perform payments and do other interesting things you may ask? Well, we've thought of that. The Agreements Network processes allow what are called "System Tasks" these are tasks which can reach out to other smart contracts. Initially the Agreements Network will launch and these tasks can talk to smart contracts in the context of the Agreements Network; however, once the Network joins the [Cosmos Network](https://cosmos.network) these tasks will be able to talk to smart contracts on other blockchains including of course Ethereum. So with a blockchain based payment mechanism in combination with some traditional integrations provided by an application the process diagram would evolve to look like this:

{{< image_blog "example_sale_of_goods_4.png" >}}

## Conclusion

If at this point in the post you are saying, well I don't really understand the value here because existing Inventory Management Systems deal with much of this, that is a fair point. However, don't get too wrapped around the axle by the use case chosen here. The important point is not the use case, that was chosen for this first post because buying goods is something that everyone has experienced before. This post is meant not to detail a specific use case, but rather to focus on how one would leverage the business process modeling engine within the Agreements Network to build legal products that can provide **easy wins and rapid evolution**.

Happy contracting everyone!

[Photo](https://unsplash.com/photos/1-29wyvvLJA) by Andrew Neel on [Unsplash](https://unsplash.com).
