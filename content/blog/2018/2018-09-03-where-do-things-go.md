---

date:      2018-09-03T00:00:59+01:00
title:     "Example Active Agreement: What Goes Where"
author:    Casey Kuhlman, CEO
excerpt:   "In this post, we talk in more depth about the object model developed for Active Agreements and how to structure applications to leverage it."
thumbnail: ravi-sharma-651030-unsplash.jpg
categories:
  - active agreements
tags:
  - monax
  - agreements network
  - legal products
  - sample archetypes

series:
  id: active-agreement-samples
  number: 2
  about: "This is a series of posts where the marmots will be outlining how the Monax Platform and the Agreements Network can be used in harmony to create the legal products of the future."

draft: false
utm:
  source: "website"
  medium: "blog"
  campaign: "agreements network"

---

{{< image_blog "ravi-sharma-651030-unsplash.jpg" >}}

<!-- if this article is part of a series, related articles will appear here -->
{{< blog_series >}}

In my previous post in this series I looked at the extensibility of active agreements process engine when combined with service providers. In this post we are going to dig a bit deeper into the object model of an active agreement as a means of showing how all the various pieces fit together.

## Defining our puzzle pieces

The object model is, in a nutshell, the placeholders for things. In programming parlance `object models` act similarly to **coat racks**. The let us know, for example, that the "coats" go here, the "hats" go there, and the "umbrellas" go in the other place.

Within the context of the Agreements Network, we provide an established object model for an active agreement (what we call a legally compliant "contract" that runs within the context of the network).

An active agreement contains "hooks" on which to put things. The key pieces of the object model are:

1.  `Documents`: The documents field of an active agreement is a placeholder for adding unique identifiers of documents that are held off-chain. These can be one or more contract templates, they can be a finalized signed copy of an agreement, they can be deeds, or any other document one wants to keep. As mentioned above, documents *are not* kept in the Agreements Network itself. They are kept in other systems (more on this in a minute).
2.  `Parameters`: The parameters field of an active agreement is a placeholder for a set of fields for structured information we want to keep **on-chain** the give us some information about the active agreement. These are, typically, the "variables" in a contract. They can be things like a start date, an expiration date, a penalty percentage, the names of the parties, etc. Whatever variables have been established by the archetype producer as blanks to be filled in when creating an active agreement, or key pieces of information that on-chain or off-chain systems will need to perform calculations.
3.  `Workflows`: The workflows field of an active agreement provides links to the smart contract address of the workflow models that are uploaded into the system and will provide the structured flow of the active agreement. These process models allow us to sequentially model -- in a graphic modeller -- the key legally relevant events we want to track **within the Agreements Network** itself. For more about workflows please see my [previous post](/blog/2018/08/21/example-active-agreement-workflows-and-interfaces) in this series.
4.  `Fulfillment events`: The fulfillment events field of an active agreement provides a place where additional data (or, as lawyers may think of it, **evidence**, may be attached to an active agreement). Fulfillment events are generally data that is held in external systems similar to how documents are stored.

## Storing and distributing the puzzle pieces

Let's look at the object model of a fictional active agreement which is for the sale of some goods. If you want to review the use case we're talking about please see my [previous post](/blog/2018/08/21/example-active-agreement-workflows-and-interfaces) in this series. The below is a bit of coding but hopefully it's approachable. The object model of an active agreement actually contains more fields than the below, but I'm just pulling out the relevant pieces for this post.

```json
{
  "documents": [
    {
      "name": "proseTemplate",
      "hoardAddress": "6EDC6101F0B64156ED867BAE925F6CD240635656"
    },
    {
      "name": "contractLogicScript",
      "hoardAddress": "9D3F269B3885B60732C3EE51C8E2CC9DD0F0678B"
    }
  ],
  "parameters": {
    "deliveryAfterOrder": "21",
    "lateDeliveryPenalty": "5"
  },
  "formationProcessInstance": "413AC7610E6A4E0ACEB29596FFC52D243A2E7CD7",
  "executionProcessInstance": "A072341D3BBD4FDD3CD5D0EBADB0EB37887E3311",
  "fulfillmentEvents": [
    {
      "name": "order1234",
      "hoardAddress": "9F24307DA7E74BC54D1E829764E2DE7AD0D8DF6E"
    }
  ]
}
```

Let's start from the top and pull out these pieces. First we have a prose template, in our sale of goods active agreement this might have a payment clause which reads as this

```txt
Payment Terms. Buyer shall make payment separately for each Order. Buyer
shall pay the net amount of all invoice amounts within
{{paymentAfterDelivery}} days of the date of receipt of invoice unless
the terms of Supplier's invoice allows for prepayment with a discount.
Invoices shall not be sent earlier than the date on which the goods
are delivered to Buyer. Where Seller delivers the goods later than
{{deliveryAfterOrder}} days to the Buyer's location then the parties
agree that the total invoiced amount will be discounted by
{{lateDeliveryPayment}} percent.
```

In the above provision -- which is structured to be approachable mostly to lawyers -- the areas where there is a `{{variable}}` those are variables that would be filled in by the `parameters` fields. So if we combined the `parameters` with the `proseTemplate` document we can create the agreed contract which would read like this:


```txt
Payment Terms. Buyer shall make payment separately for each Order. Buyer
shall pay the net amount of all invoice amounts within 21 days of the
date of receipt of invoice unless the terms of Supplier's invoice allows
for prepayment with a discount. Invoices shall not be sent earlier than
the date on which the goods are delivered to Buyer. Where Seller delivers
the goods later than 21 days to the Buyer's location then the parties
agree that the total invoiced amount will be discounted by 5 percent.
```

Next we have our contract logic scripts. These scripts allow us to logically do things such as allow the computers to calculate the actual price to be invoiced. These scripts are, by design, **not kept** within the Agreements Network. Rather we keep references to them in the object model of the active agreement. Then they can be loaded and ran within the context of a logic engine operated by a company like Monax. Keeping this design allows these logic scripts to be verifiable, but also to leverage private data and be ran only in the context which they need to be. It also allows the Agreements Network to run nicely with other projects such as [Accord's Ergo](https://github.com/accordproject/ergo) and other upcoming engines for running contract logic.

Rather than showing the specifics of any one language, for the purposes of this post I'll just show some pseudo code that should be readable by most folks. If we wanted to build a script that could calculate payment based on the above legal language that would look something like this:

```js
if ( delivery_is_late ) {
  invoiceAmount = ( widgets * pricePerWidget ) - lateDeliveryPenalty
} else {
  invoiceAmount = ( widgets * pricePerWidget )
}
```

Next, we have the parameters. Each parameter includes a type, a key, and a value. The type and key are defined by the archetype producer and allow us to understand "what kind of data is held in this place". We need this because machines treat dates very differently than words and both very differently than numbers.

For our purposes we'll just extract a few relevant parameters here, for an actual live active agreement there would very likely be more parameters than this.

What the below tells us is that there is a numeric value which is saved as the variable `deliveryAfterOrder`. Computers can understand this as a number and that means that they can add, subtract, multiply, and do other things that you'd do with numbers against it. Also contract templates if they're built appropriately can then use this variable to fill in the blanks of a contract template for a human readable version of the provision.

```json
"deliveryAfterOrder": "21",
"lateDeliveryPenalty": "5"
```

Next we have workflows, but these have been covered in other sections of this series.

Finally we have a fulfillment event. This fictional event has been a machine readable order thats been placed according to the terms of the active agreement. It could potentially look like this:

```json
{
  "name": "order1234",
  "order": {
    "widgets": 20,
    "pricePerWidget": 50,
    "currency": "USD"
  }
}
```

As noted above, we generally would keep fulfillment events off-chain. These are designed to be encrypted and placed in other off-chain systems which allow us to then have both verifiable computation but also much better privacy enclaves.

## Storing our off chain systems

The Agreements Network is built to leverage (but does not require) an open source system built by Monax called `hoard`. The code for this system is [available here](https://github.com/monax/hoard). What this system gives us is two things. First it gives us an envelope encryption system (more on this in the next post in this series). Second, it gives us content addressability for a variety of storage systems.

The second piece of this is very important. What it means is that we can store documents in a variety of centralized or distributed systems such as S3, Google Cloud Storage, a computer's file system, or even [IPFS](https://ipfs.io/). But not only can we store files in a variety of locations how we store them is in a manner which allows us to "address" them as their "content". This means functionally that when we "open" a file, we do not reference a human readable manner such as "My Contract, Final FINAL, FINALLY final v20.docx" but rather we open the file based on it a unique "hash" of the file. For more information on how this works please see this relatively approachable [Wikipedia entry](https://en.wikipedia.org/wiki/File_verification). The basic idea is that we take the "fingerprint" of a file based on its contents (meaning the 1's and 0's at it's core) and we use that as it's filename.

This may seem to be a not big deal, but it greatly helps us to do two things in one time. Namely, reference a particular file based on it's contents; and second ensure that what we pull out of a system is authentically what we want it to be.

In the object model out lined above you will see lines which look like this:

```json
{
  "name": "contractLogicScript",
  "hoardAddress": "9D3F269B3885B60732C3EE51C8E2CC9DD0F0678B"
}
```

In this the `hoardAddress` is the unique hash of a file. If we change one small bit of a file that entire hash will change and this means that when we pull a file out of hoard we have assurances that it is what we expect it to be.

## Fitting the puzzle pieces together

How do these pieces fit together to automate contracting? To understand these components let's zoom in on one piece of the diagram that I used in my previous post.

{{< image_blog "example_sale_of_goods_5.png" >}}

Here we are focusing on the transition point within the process model from the time the goods were delivered and the invoice we created. **The question we need to answer is how much should the seller invoice the buyer for?**

Remember we had a prose template that can be taken to court and understood by lawyers. The zoomed in portion of that contract is outline above (against this is just an example).

That prose is all well and good but computers can't make heads or tails of those words in order to perform a specific calculation. So we need to then have something that at Monax we call a **contract logic script**. This is a bit of code which when ran by the Monax platform can be written in a variety of programming languages or newer optimized languages for contracts like the Accord project's [Ergo](https://github.com/accordproject/ergo) or the upcoming [OpenLaw VM](https://medium.com/@OpenLawOfficial/openlaw-dev-update-july-10-towards-a-loan-agreement-demo-618cfd841861).

This contract logic is not ran in the context of the Agreements Network because in order to do its job it needs to be able to understand information which is private and does not need to be held within the Agreements Network itself. However, it also needs some information which **is** held within the Agreements Network. Using this combination of on chain information and off chain information is a key design criteria for how to build successful systems.

Now to run the above quasi-code in order to answer the question how much should be invoiced for we need a few bits of information.

*   We need the `number of widgets ordered`, this is pulled from the fulfillment event.
*   We need the `price agreed to`, this is pulled from the active agreements parameters.
*   We need the `date the order was submitted`, this is pulled from the process diagram.
*   We need the `date the order was delivered`, this is pulled from the process diagram.
*   We need the `late delivery penalty`, we get this from the active agreement's parameters.

When we have these bits of information, all of which can be easily assembled for the contract logic engine from combining on chain and off chain data, then we can run the script and calculate how much should be invoiced for.

So let's say the seller sends the invoice. Now that needs to be checked by the buyer's accounts payable department. Luckily they have access to all the same on chain and off chain information and assuming they have a way to operate a logic engine (via the Monax Platform or any other system) they can easily utilize the same bits of evidence and same logic script to confirm that they were invoiced correctly.

## Conclusion

This is the point in the story (if not before) where folks say, hey, what about privacy. Privacy is utterly essential. It's also very challenging to get right, so my next post will cover that in detail.

Happy contracting everyone!

[Photo](https://unsplash.com/photos/GyhakN_lgec) by Ravi Sharma on [Unsplash](https://unsplash.com).
