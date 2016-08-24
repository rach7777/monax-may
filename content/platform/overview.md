---

date: 2014-10-06
title:      "platform"
excerpt:    "The Distributed Application Platform"
menu:
  main:
    parent: platform
weight:  10
aliases:
- /components/eriscli/
- /components/epm/

---

```
Eris is a platform for building, testing, maintaining, and operating distributed applications with a blockchain backend. Eris makes it easy and simple to wrangle the dragons of smart contract blockchains.
```

# The Eris Platform

eris helps developers build applications which leverage a software design paradigm we call **Participatory Architecture**. Using distributed and peer-to-peer systems, eris allows the creation of data-driven, interactive distributed applications that can be safely, securely, and reliably deployed and managed.

eris significantly lowers the barrier to entry for the production, distribution and maintenance of distributed applications. All while allowing users or other orgnaizations to easily and simply participate in the scaling and data security of the application.

# Features

eris:cli is the gateway to the eris platform. The `eris` tool is centered around a very few concepts:

* `services` -- things that you turn on or off
* `chains` -- develop permissioned chains
* `contracts` -- our smart contract tool chain
* `actions` -- step by step processes

These concepts (along with a few other goodies) provide the core functionality of what we think a true distributed application would look like.

Please see the documentation for more on eris:cli.

# The Smart Contract Package Manager

```
The Eris Package Manager Deploys and Tests Smart Contract Systems
```

The eris:pm is our [smart contract](https://docs.erisindustries.com/explainers/smart_contracts/) package manager. eris:pm allows developers to easily and simply compile, deploy, and test suites of smart contracts in a cohesive manner.

eris:pm is a high level tool which provides easy access to most of the eris:db tooling. eris:pm is used to deploy and test suites of smart contracts. In general it will wrap the mint-client tooling, along with eris-keys and eris-compilers to provide a harmonized interface to the modular components of the [eris](https://docs.erisindustries.com) open source platform.

eris:pm is closer to an ansible or chef like tool than it is NPM in that it is a deployment sequence and testing tool. eris:pm uses an **epm definition file** to tell the package manager what jobs should be ran and in what order.

In eris:pm a *job* is a single action which is performed (such as a transaction, a contract deployment, a call to a smart contract, or a query of information). The results of these jobs are then kept in variables and may be used in later jobs.

Please see the documentation for more on eris:pm.

<a class="action-big" href="https://docs.erisindustries.com/tutorials/getting-started/">Get Started Using eris:pm</a>

<a class="action-big" href="https://docs.erisindustries.com/tutorials/getting-started/">Get Started Using eris</a>
