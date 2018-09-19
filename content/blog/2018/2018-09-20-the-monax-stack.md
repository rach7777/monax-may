---

date:      2018-09-11T00:25:01+01:00
title:     "The Monax Stack: What Makes Legal Products Go."
author:    Nina Kilbride, CCO
excerpt:   "An overview of the free and open-source components of the Monax Stack."
thumbnail: "-----.png"
categories:
  - legal engineering
tags:
  - Monax
  - legal products
  - open source

draft: false
utm:
  source: "website"
  medium: "blog"
  campaign: ""

---

{{<image_blog " -----.png">}}

# The Monax Stack: What Makes Legal Products Go

One critical feature of the Monax stack is that it is composed almost entirely of free and open-source tools. Open-source codebase means quick auditability and forensic validation of operations, while encryption of content enables protection of valuable data.

The Monax stack has grown out of a longstanding mission: to simplify processes over the legal contract lifecycle that help businesses startup, succeed and grow. This means building a best-in-class stack of tools that performs interoperably with growing ecosystems, from the ground up, where necessary. Combined, these tools create the necessary infrastructure layer for companies and lawyers to answer the question: “what if legal agreements could talk to each other?”

The next question is, “how does it work?” The Monax stack is composed of a number of tools that combine to deliver the infrastructure necessary to create the **legal layer for networked commerce.** The Monax Platform offers users a suite of tools to help them grow their value propositions with legal products. Monax Platform tools are user-friendly products that make it easy to get started running and maintaining digital legal products.

## The Monax Platform

### Monax Legal Product Modeler (“LPM”) is a no-code tool for making legal contract workflows.

The Monax LPM is a product-authoring engine that enables legal template producers to design and deploy smart contracts on the Agreements Network. The LPM combines several user needs into one tool. First, it memorializes a prose template of complete legal terms and conditions associated with a contract. Second, the modeler connects that template with a set of parameters, which are the data points that will need tracking during the lifecycle of an Active Agreement. These parameters are then used to design process models conforming to Business Process Modeling Notation (BPMN). The Monax LPM converts BPMN files to Solidity code, deployed and operated using the Agreements Network. Because BPMN is a well-adopted, open-source standard, it serves as an interoperable model for designing, deploying and proving
legally significant processes on The Agreements Network.
[More about building legal products by Casey Kuhlman.](https://monax.io/blog/2018/09/03/example-active-agreement-what-goes-where/)
[More about BPMN for legal product by Jan Henrik Scheufen and Nina Kilbride.](https://www.hyperledger.org/blog/2018/08/16/business-process-modeling-the-missing-link-between-legal-know-how-and-blockchain-based-legal-products)

### Monax Smart Contracts Suite

The Monax Smart Contracts Suite are a set of tools created out of our experience designing blockchain-based smart contracts and applications and are key building blocks for executing legal products. These Solidity smart contracts are geared toward interoperable legal operations functionality rather than any particular token-based substrate. The Monax smart contract suite represents the most comprehensive set of interoperable, tested, functional solidity smart contracts on the market today and are available open-source as of September 2018.

### Integrations Flywheel

Integrations Flywheel. Legal products often need to communicate with outside data sources like document assembly programs, “oracles” and services like financial, compliance and insurance products. Integrations builders may offer their services on the Agreements Network, creating a Flywheel of best-in-class services for users. Integrations providers may also be ecosystem users of other services in the integrations Flywheel.

## Underneath the Monax Platform Hood

### Blackstone

Blackstone is the Monax-built RESTful API that enables users to connect seamlessly with the underlying legal operations and distributed ledger that power the Monax platform. Blackstone makes it easy for users to start and run an Agreements Network validator node and interact with data stored in the network. RESTful API is an open standard that enables internet interoperability according to agreed upon communications rules.

### Scalia

Scalia is a legal document assembly and parsing tool first released by Casey Kuhlman as LegalMarkdown in 2012. It is used to construct and interpret parameterized legal prose documents and structured data models useful during the contract lifecycle.

### Hoard

Hoard, also built by Monax, is a stateless, deterministically encrypted, content-addressed object store. Hoard gives smart contract developers and applications a way to access and use objects stored in several locations, then forget that information once a process has terminated. [Hoard](https://github.com/monax/hoard) supports files Interplanetary File System (IPFS) and Amazon’s S3.

### The Agreements Network

[The Agreements Network](https://agreements.network/) is a proof-of-stake distributed ledger designed to be fit for operation of commercial legal products at scale. It was originally developed by Monax, and launched by a cohort of ecosystem cofounders who share a need for a blockchain tooled for legal product. The Agreements Network operates on core technical governance principles that are transparent, [skin-in-game models](https://monax.io/blog/2018/06/05/skin-in-game-governance-on-the-agreements-network/)  intended to incentivize production and profitable activity for all ecosystem participants. The Agreements Network is built with a free and open-source stack, including [Hyperledger Burrow](https://www.hyperledger.org/projects/hyperledger-burrow), an open-source, Ethereum Virtual Machine (EVM)-compatible, permissioned blockchain codebase. Hyperledger Burrow enables users to build and deploy Ethereum-compatible Solidity smart contracts and configure the permissions and operations as needed for unique needs. The Burrow component of the Monax stack ensures a robust, tested blockchain reference layer underpinning the Agreements Network’s governance frameworks.

### Vent

Vent, built by Monax, enables caching and querying of solidity smart contracts. Smart contracts don’t automatically have a way to output their information, they are pretty dumb. Vent allows users to put the “smart” in their smart contracts by accessing and extracting data stored in the blockchain.

One critical feature of the Monax stack is that it is composed almost entirely of free and open-source tools. Open-source codebase means quick iteration and auditability and forensic validation of operations, while encryption of content enables protection of valuable data.

That’s it, the Monax stack for  legal contracts that can “talk to each other!”! To find out more, contact us for a demo.
