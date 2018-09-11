---

date:      2018-09-11T00:25:01+01:00
title:     "Solving problems with Active Agreements: supply chain fraud."
author:    Nina Kilbride, CCO
excerpt:   "Using Monax and legal engineering to match fulfillment contracts in the supply chain."
thumbnail: "4-way-match.png"
categories:
  - legal engineering
tags:
  - agreements network
  - legal products
  - sample archetypes

draft: false
utm:
  source: "website"
  medium: "blog"
  campaign: "agreements network"

---

{{<image_blog "4-way-match.png">}}

# Legal Engineering Design Example: Four Way Match for supply chain fraud reduction

Last week, Monax CEO Casey Kuhlman described the mechanics of making legal agreements talk to each other via Active Agreements, articulating the elements and fulfillment events for a sale of goods contract. If you missed it, [check it out here](https://monax.io/blog/2018/09/03/example-active-agreement-what-goes-where/).

This week, we look at how we can use that functionality to create a basic, real-life solution to a legal engineering problem. As a practical matter, many contracts for the sale of goods are part of the global supply chain and require a number of standardized fulfillment events in order to deliver goods in exchange for payment. These fulfillment processes are themselves driven by contracts. Lack of tight control over the legal documents, as well as goods and responsible parties, means the existing supply chain has unnecessary gaps where fraud and counterfeit goods can leak into the system, and where theft can more easily pull value out.

This post discusses how legal operations that underpin the global supply chain can be improved by using packages of basic templates to integrate, automate and verify fulfillment. From a legal engineering perspective, Active Agreements in the supply chain contract lifecycle present a unique opportunity to fix pervasive gaps in the supply chain and build efficient, reliable, more bankable processes. We start with a basic element: matching documents and events representing different fulfillment events to a single transaction to promote basic process integrity.

## Modeling a package: 4-way match.

Monax's Legal Product Modeler simplifies the complexities of the global supply chain with FOSS tools. Monax's Legal Product Modeler enables grouping of legal templates and processes in order to connect contracts and fulfillment events together.

{{<image_blog "supplychain-archetypes.png">}}

The starting point is a match between the basic phases of a contract and fulfillment lifecycle: **purchase order**, **invoice**, **bill of lading**, and **inspection**.

**Purchase order.** Begins a transaction by identifying the willing buyer, seller and goods.

**Invoice.** Records that payment is due on a transaction. Invoices are trade receivables, potential digital assets that are poorly managed in existing systems. Tight digital control of invoices enables new trade receivables financing while closing a vector for money laundering via false invoicing.

**Shipping documents.** These documents may vary but will typically include a [bill of lading](https://en.wikipedia.org/wiki/Bill_of_lading) identifying the goods, title, shipper, method, destination and other transactional data.

**Inspection.** A physical inspection or other sensor-driven measurement is the fourth link in the 4-way match. This provides the evidentiary foundation requirements that exist locally to validate the transactions, while also providing a check on product loss and counterfeiting.

To build a complete lifecycle, we will turn the above documents into templates that communicate with each other as events occur, creating a bundle of easily stored, easily proved evidence about who did what when during a transaction.

## The Templates

A contract lifecycle in the supply chain is easy to model with Monax's legal product modeler, which enables creation and management of the complete lifecycle of digital legal agreements. The basic template is composed of a set of legal documents and workflows that coordinate a unique shipment of goods: purchase order, invoice, bill of lading and inspection. The templates are composed of a complete digital terms and conditions, a set of parameters, (the variables that should be cross-checked across the documents) and a workflow made with the Monax legal product modeler. Workflows power the Monax smart contract engine and writes critical information to the Agreements Network as described in the workflow. The models are in a common open-source convention (Business Process Modeling Notation) to ensure easy interoperability with other systems.  Because Monax is configured for legal operations, access to crucial information can be designed to be need to know.

{{<image_blog "purchase-order-prose.png">}}

{{<image_blog "purchase-order-model.png">}}

These parameters are the same fields required for an invoice, but at a separate operations stage/ invoice that matches the purchase order. Shipping workflows are modeled in Business Process Modeling Notation that matches shipping documents, like a bill of lading, to the purchase order and invoice. Finally, an inspection, via human or sensor, completes the package of evidence.

{{<image_blog "invoice-prose.png">}}

{{<image_blog "invoice-model.png">}}

## The Result:

Prevention of fraud in the supply chain saves money and enables growth. Automating trade finance means not only efficiency, but certainty and control of operations and risk to unlock trapped value in the supply chain, for example, expanded access to capital via trade receivables finance. In our upcoming legal engineering blogs, we will discuss the next steps: integrating the physical, financial and regulatory back end using Monax’s legal process modeling tool, as well as document assembly and more legal product modeling, user stories and more..... Stay tuned!
