---

layout:     wide
title:      "eris:pm"
excerpt:    "The Smart Contract Package Manager"

---

# The Smart Contract Package Manager

```
The Eris Package Manager Deploys and Tests Smart Contract Systems
```

The eris:pm is our [smart contract]({{ site.data.sites["docs"].url }}/explainers/smart_contracts/) package manager. eris:pm allows developers to easily and simply compile, deploy, and test suites of smart contracts in a cohesive manner.

eris:pm is a high level tool which provides easy access to most of the eris:db tooling. eris:pm is used to deploy and test suites of smart contracts. In general it will wrap the mint-client tooling, along with eris-keys and eris-compilers to provide a harmonized interface to the modular components of the [eris](https://docs.erisindustries.com) open source platform.

eris:pm is closer to an ansible or chef like tool than it is NPM in that it is a deployment sequence and testing tool. eris:pm uses an **epm definition file** to tell the package manager what jobs should be ran and in what order.

In eris:pm a *job* is a single action which is performed (such as a transaction, a contract deployment, a call to a smart contract, or a query of information). The results of these jobs are then kept in variables and may be used in later jobs.

Please see the documentation for more on eris:pm.

<a class="action-big" href="{{ site.data.sites["docs"].url }}/tutorials/getting-started/">Get Started Using eris:pm</a>