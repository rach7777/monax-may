---

type:   docs
layout: li
title: "Platform"
index_file: ""
excerpt:    "The Ecosystem Application Platform"
path: "content/platform"
aliases:
    - /docs/explainers/the-eris-stack/
menu:
  platform:
    weight: 1

---

```
{{< data_sites what_is_eris >}}
```

# Introduction

`eris` is the first Application Platform built from the ground up to provide a logical base for developers and devOps to build, test, and run ecosystem applications. It is designed to support multiple blockchain clients connected to multiple blockchain networks with different smart contract interpreters all seamlessly connected to other microservices necessary to build, test, and run the ecosystem application such as key management systems and distributed data lakes.

Developers and devOps who use [blockchains](/explainers/blockchains), [smart contracts](/explainers/smart_contracts), key management systems, and distributed data lakes have access to a core set of tools tackling big problems. Tackling big problems of coordination and reconciliation across our increasingly interconnected organizations requires building applications that are meant to run on an ecosystem level. These are what we call [ecosystem applications](/explainers/ecosystem_applications). Ecosystem applications are the next generation of process management tools and `eris` is the gateway to building sophisticated enterprise-grade ecosystm applications.

`eris` provides a logical and powerful toolkit for developers seeking a harmonized developer experience for connecting into multiple blockchains (whether for testing or due to client requirements).

# Overview of an Ecosystem Application

{{< lucidchart "c9c45723-6780-475b-8b20-fff15edc6b29" >}}

The above diagram provides a high level overview of the different pieces of an ecosystem application. The green boxes are part of the `eris` technology stack while purple represents external services managed by `eris`.

# Features

`eris` is a modular platform of numerous connected services and tools that simplify building, testing, and running ecosystem applications.

## Chains

`eris chains` is the gateway to unlocking the power of permissionable, smart contract optimized blockchains -- of which our [eris:db](/platform/db) client is the industry leader. `eris chains` exposes a range of options for developers to create, administer, and operate blockchains of various varieties.

## Packages

`eris pkgs` is the gateway to unlocking the power of smart contract systems. `eris pkgs` exposes a range of options for developers to create, build, test, and deploy complex systems of smart contracts to their `eris chains`.

## Keys

`eris keys` is the gateway to the common signing pipe that `eris` exposes. `eris keys` exposes a range of developers to quickly get up to speed with prototyping their ecosystem applications. It also provides the reference API implementation for wallet-makers, and other, more advanced, signing solutions to satisfy in order to work seemlessly with the `eris` platform.

## Files

`eris files` is the gateway to unlocking the power of distributed data lakes. `eris files` exposes a range of functionality for working with content-addressable and distributed data management systems.

## Services

`eris services` is the gateway to unlocking services which your application needs to rely upon. `eris services` exposes a range of base operational functionality for integrating microservices into your ecosystem application.

# Software Development Kits

We build smart contract based SDKs that accelerate your time to market with complex ecosystem applications.

<a href="/library" class="btn btn-lg btn-primary">Learn More about Monax's SDKs</a>

# Premium Support & Education

At Monax, we provide premium support and education packages that empower your developers to build faster.

<a href="/packages" class="btn btn-lg btn-primary">Learn More about Premium Support</a>