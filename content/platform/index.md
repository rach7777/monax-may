---

layout:     wide
title:      "eris:platform"
excerpt:    "Components of the Eris Platform"

---

Eris is a platform which includes the following components:

[eris:cli](eriscli) -- The command line interface to the eris platform

[eris:db](erisdb) -- A permissionable smart contracts machine with an enterprise grade API server

[eris:pm](epm) -- A smart contracts package manager

[eris:legal](erislegal) -- Eris' implementation of Legal Markdown document assembly mechanism

The Eris platform is built to enpower rapid prototyping, and smooth operation, of smart contract backed applications. It utilizes the following concepts:

* `Services` -- processes or tools which a smart contract backed application needs to have running on a given node in order to properly conduct its business. Services can be public blockchains, distributed file storage systems, middleware components, key servers, or any other process which is Docker compatible and needed for a given application.
* `Chains` -- permissioned smart contract networks which a smart contract backed application needs to have running on a given node in order to properly conduct its business. Chains utilize the flexible and stable eris:db container to reduce the complexity of working with permissioned smart contract networks.
* `Contracts` -- smart contract packages are, by definition, needed for a smart contract backed application; this portion of the eris platform reduces the complexity of testing and deploying smart contract packages needed for the application.
* `Files` -- smart contract applications often are paired with a distributed file storage system. Eris provides harmonized, reduced complexity access to the [IPFS](https://ipfs.io) protocol for distributed file storage system.
* `Actions` -- flexible step-by-step processes needed for the application.