---

layout:     content
title:      "eris:package_manager"
excerpt:    "The Smart Contract Package Manager"

---

# The Smart Contract Package Manager

The eris:package_manager (**EPM**) is the first smart contract package manager. EPM allows developers to easily and simply compile, deploy, and test suites of smart contracts in a cohesive manner.

EPM allows one to specify a suite of contracts to be deployed and setup from a simple package definition file (.pdx) to ensure that all of the contracts and transactions committed to the chain have met pre-established criteria. The package:

* keeps a log of the contracts which have been deployed so that you can then easily see those contracts;
* allows users to transact with contracts;
* allows users to query contract storage and/or accessor functions; and
* allows users to deploy a sequence of contracts.

# Getting Started

Rarely will contract devs only want to deploy one contract. Usually they will want to deploy a series of contracts. EPM assists in this with the package deployment feature. To get started, simply make a new file called package.pdx and inside of it simply add something like this:

{% highlight ruby %}
{% raw %}
# Package Email: you@example.com
# Package Repository: https://github.com/eris-ltd/hello-world-dapp

deploy:
  General/DOUG-v6.lll => {{DOUG}}
modify-deploy:
  General/repDB.lll => {{rep}}
  (def 'DOUG 0x9c0182658c9d57928b06d3ee20bb2b619a9cbf7b) => (def 'DOUG {{DOUG}})
transact:
  {{DOUG}} => "register" "rep" {{rep}} "" "" "" "" ""
query:
  {{DOUG}} => 0x18 => {{DOUG_LIKES_YOU}}
endow:
  {{DOUG}} => 10000000
{% endraw %}
{% endhighlight %}

Each line which does not begin with whitespace is read as a command sequence. The remainder of the lines relevant to that command must begin with whitespace (tabs or spaces do not matter). Lines which are blank or begin with a **#** will not be parsed.

The first portion of the command is the command, the remainder are the params for the command. Each param is separated by the **=>** characters.

## Deploy Command

The command is straight-forward. Deploy a contract params:

1. File of the contract to be compiled and deployed (relative path from the definition file, or absolute path).
2. The variable name of the contract (usually to be used later).

## Modify-Deploy Command

This command first modifies a section of a contract (usually substituting in a variable) and then deploys. Modify-deploy a contract params:

1. File of the contract to be compiled and deployed (relative path from the definition file, or absolute path).
2. The variable name of the contract (usually to be used later).
3. The portion of the contract which will be substituted.
4. What is to replace it (which can use variable names established by contracts deployed prior to this modification).

Modify-deploy commands may have multiple substitutions. Just add additional substitutions on new indented lines separated by **=>**

## Transact Command

The transact command is also straight forward. Transact params:

1. The recipient of the transaction.
2. The data for the transaction.

As with all EPM transactions, this is not meant to support value, it is meant to provide data. Each 32 byte transaction slot is separated by a space. Strings can be sent in quotes or not in quotes, hex address can be sent using 0x or without, empty slots are denoted by "".

## Query Command

The query command is used to query storage spaces. Query params:

1. The address of the contract to query.
2. The storage location of the contract to query.
3. The variable name to store the result as.

## Log Command

The log command will dump into your deploy log. Log params:

1. key
2. val

## Set Command

The set command is used to set key:val pairs for substitution later. Key params:

1. key
2. val

## Endowment Command

The endowment command is used to endow a contract. Endow params:

1. contract to endow
2. value of endowment

# Formatting of *.pdx Files

Ethereum Virtual Machine input data and storage deals strictly in 32-byte segments or words, most conveniently represented as 64 hex characters. When representing data, strings are right padded while ints/hex are left padded.

It is important to note that contracts deployed with EPM will, by default use our version of the LLL compiler, which in addition to adding some opcodes, changes strings to also be left padded.

This means that, by default, LLL will only compile for eris:db blockchains at this time. We are working on an improvement for this.

EPM accepts integers, strings, and explicitly hexidecimal strings (ie. "0x45"). If your string is strictly hex characters but missing a "0x", it will be treated as a normal string. Addresses should be prefixed with "0x" whenever possible. Integers in base-10 will be handled, hopefully ok.

Values stored as EPM variables will be immediately converted to the proper hex representation. That is, if you store "dog", you will find it later as 0x0000000000000000000000000000000000000000000000000000646f67.

# Directories

As part of the larger suite of Eris libraries centered on the eris platform, EPM works out of the core directory in `~/.eris/blockchains`.

A `HEAD` file tracks the currently active chain and a `refs` directory allows chains to be named. Otherwise, chains are specified by their `chainId` which is a signed hash of the genesis block used to track different blockchains.

<a class="action-big" href="{{ site.data.sites["docs"].url }}">Get Started Using eris:package_manager</a>