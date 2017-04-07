---

type:   docs
layout: single
title: "Platform"
index_file: ""
excerpt:    "The Ecosystem Application Platform"
path: "content/platform"
aliases:
    - /explainers/the-monax-stack/
menu:
  platform:
    weight: 1

---

```
{{< data_sites what_is_monax >}}
```

## Introduction

<div class="note">
    <em>Note: As of 2017, our product has been renamed to Monax. The references on this page have been recently changed.</em>
</div>

The Monax Application Platform is built from the ground up to provide a logical base for developers and devOps to build, test, and operate ecosystem applications. It is designed to support multiple blockchain nodes connected to multiple blockchain networks with different smart contract interpreters all seamlessly connected to other microservices necessary to build, test, and run the ecosystem application such as key management systems and distributed data lakes.

Developers and devOps who use [blockchains](/explainers/blockchains), [smart contracts](/explainers/smart_contracts), key management systems, and distributed data lakes have access to a core set of tools tackling big problems. Tackling big problems of coordination and reconciliation across our increasingly interconnected organizations requires building applications that are meant to run on an ecosystem level. These are what we call [ecosystem applications](/explainers/ecosystem_applications). Ecosystem applications are the next generation of process management tools and the Monax platform is the gateway to building sophisticated enterprise-grade ecosystm applications.

The CLI provides a logical and powerful toolkit for developers seeking a harmonized experience for connecting into multiple blockchains (whether for testing or due to client requirements).

## Overview of an Ecosystem Application

{{< image src="/images/docs/overview-of-an-ecosystem-application.jpg" >}}

The above diagram provides a high level overview of the different pieces of an ecosystem application. The green boxes are part of the Monax technology stack while purple represents external services managed by the CLI.

## Features

<div class="note">
    <em>Note: Current and future versions of the software (0.16 and forward) have replaced the <code>eris</code> command with the <code>monax</code> command as shown below.</em>
</div>

The CLI is a modular platform of numerous connected services and tools that simplify building, testing, and running ecosystem applications.

### Chains

`monax chains` is the gateway to unlocking the power of permissionable, smart contract optimized blockchains -- of which our [monax:db](/platform/db) client is the industry leader. It exposes a range of options for developers to create, administer, and operate blockchains of various varieties.

### Packages

`monax pkgs` is the gateway to unlocking the power of smart contract systems. It exposes a range of options for developers to create, build, test, and deploy complex systems of smart contracts to their `monax chains`.

### Keys

`monax keys` is the gateway to the common signing pipe that `monax` exposes. It exposes a range of developers to quickly get up to speed with prototyping their ecosystem applications. It also provides the reference API implementation for wallet-makers, and other, more advanced, signing solutions to satisfy in order to work seemlessly with the `monax` platform.

### Files

`monax files` is the gateway to unlocking the power of distributed data lakes. It exposes a range of functionality for working with content-addressable and distributed data management systems.

### Services

`monax services` is the gateway to unlocking services which your application needs to rely upon. It exposes a range of base operational functionality for integrating microservices into your ecosystem application.

## Software Development Kits

We build smart contract based SDKs that accelerate your time to market with complex ecosystem applications.

<a href="/library" class="btn btn-lg btn-primary">Learn More about Monax's SDKs  <i class="fa fa-check-square"></i></a>

## Premium Support & Education

At Monax, we provide premium support and education packages that empower your developers to build faster.

<a href="/packages" class="btn btn-lg btn-primary">Learn More about Premium Support  <i class="fa fa-check-square"></i></a>

## What is the Platform Used For?

{{% use_case_selector %}}
