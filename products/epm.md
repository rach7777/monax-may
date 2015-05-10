---

layout:     content
title:      "eris:package_manager"
excerpt:    "The Smart Contract and Blockchains Package Manager"

---

# The Smart Contract and Blockchains Package Manager

The eris:package_manager (**EPM**) is the first smart contract package manager. EPM allows developers to easily and simply compile, deploy, and test suites of smart contracts in a cohesive manner. In addition, EPM allows developers to work with chains somewhat how git works with files by allowing developers to keep track of many chains, adding contracts or transactions to them, and committing blocks.

EPM allows one to specify a suite of contracts to be deployed and setup from a simple package definition file (.pdx), and easily tested using a package tests file (.pdt) to ensure that all of the contracts and transactions committed to the chain have met pre-established criteria. The package:

* keeps a log of the contracts which have been deployed so that you can then easily see those contracts;
* allows users to transact with contracts;
* allows users to query contract storage;
* allows users to deploy a sequence of contracts; and
* allows users to start, stop, and restart ethereum servers with predefined options.

While theoretically any chain can be supported -- provided it satisfies the interface established by the decervereris:server interfaces' blockchain module -- there is currently only support for the following blockchains:

* **eris:db** (aka, thelonious, in-process and rpc);
* **genesisblock** (for deployments of eris:db's genesis blocks);
* **ethereum** (in-process); and
* **bitcoin** (basic support through blockchain.info module built for the eris:server).

# Getting Started && Commands

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

# Formatting of *.pdx and *.pdt Files

Ethereum input data and storage deals strictly in 32-byte segments or words, most conveniently represented as 64 hex characters. When representing data, strings are right padded while ints/hex are left padded.

It is important to note that contracts deployed with EPM will, by default use our version of the LLL compiler, which in addition to adding some opcodes, changes strings to also be left padded.

This means that, by default, LLL will only compile for eris:db blockchains at this time. We are working on an improvement for this.

EPM accepts integers, strings, and explicitly hexidecimal strings (ie. "0x45"). If your string is strictly hex characters but missing a "0x", it will be treated as a normal string. Addresses should be prefixed with "0x" whenever possible. Integers in base-10 will be handled, hopefully ok.

Values stored as EPM variables will be immediately converted to the proper hex representation. That is, if you store "dog", you will find it later as 0x0000000000000000000000000000000000000000000000000000646f67.

# Testing

To test a deployment suite, write a txt file where each line consists of query params (addr, storage) and the expected result. A parameter can be included for storing the result as a variable for later queries. You can see examples in [this test file](https://github.com/eris-ltd/epm-go/tree/master/cmd/tests/definitions).

# Directories

As part of the larger suite of Eris libraries centered on the [eris:server]({{ site.url }}/products/erisserver/), EPM works out of the core directory in `~/.decerver/blockchains`.

A `HEAD` file tracks the currently active chain and a `refs` directory allows chains to be named. Otherwise, chains are specified by their `chainId` which is a signed hash of the genesis block used to track different blockchains.

# Command Line Interface

To install the command line tool, cd into `epm-go/cmd/epm/` and hit `go install`. Assuming your `go bin` is on your path, the cli is accessible as `epm`. Simply running that will look for a `.pdx` file in your current directory, deploy it, and run the tests if there are any (in a `.pdt`) file.

## Commands

- `epm -init`
    - Initialize the decerver directory tree and default configuration files
- `epm -deploy`
    - Deploy a genesis block from a genesis.json file.
    - The block is saved in a hidden temp folder in the working directory.
    - It can be installed into the `~/.decerver` with `epm -install`, or all at once with `epm -deploy -install`.
    - Specify a particular `config.json` and `genesis.json` with the `-config` and `-genesis` flags, respectively.
    - Otherwise, it will use the default `config.json` and `genesis.json`
    - Deploy will automatically open vim for you to edit config files as you deem fit, before saving them to the working directory
- `epm -install`
    - Install a chain into the decerver tree.
    - Specify a particular `config.json` and `genesis.json` with the `-config` and `-genesis` flags, respectively.
    - Otherwise, it will use the `config.json` and `genesis.json` present in the working directory (from calling `deploy`)
    - Trying to install before deploy will fail.
- `epm -checkout <chainId/name>`
    - Checkout a chain, making it the current working chain.
    - It will be written to the top of the `~/.decerver/blockchains/HEAD` file.
    - Use `epm -deploy -checkout` to checkout a chain immediately after deployment, but before installing.
    - Or run `epm -deploy -install -checkout` to kill all birds with one stone.
- `epm -fetch <dappname>`
    - Deploy and install a chain from a package.json and genesis.json in a dapp repository
    - Easiest way to sync with a dapp specific chain using just the package.json and genesis.json
- `epm -run <dappname>`
    - Run a chain by dapp name. Expects the chain to have been installed (probably by `epm -fetch`)
- `epm plop <genesis | config>`
    - Plop the default genesis.json or config.json (respectively) into the current working directory
- `epm -[clean | pull | update]`
    - Clean epm related dirs, pull updates to the source code, and re-install the software, respectively.
- `epm -add-ref <chainId> -name <name>`
    - Create a new named reference to a chainId
    - Note you can avoid this by using, for example, `epm -deploy -install -name <name>`, to name the chain during installation
- `epm -[refs | head]`
    - Display the available references, or the current head, respectively.

## Flags

- `-no-gendoug` can be added to force simplified protocols without a genesis doug
- `-config` to specify a chain config file
- `-genesis` to specify a genesis.json config file
- `-name` to attempt to select a chain by name
- `-chainId` to attempt to select a chain by Id
- `-type` to specify the protocol type (eg `bitcoin`, `eth`, `thel`, `genblock`, etc.)
- `-i` to boot into interactive epm mode
- `-diff` to display storage diffs, as specified by wrapping the commands to be diffed in `!{<diffname>` and `!}<diffname>`
- `-dont-clear` to stop epm from clearing its smart contract cache every time (primarily used to handle modify deploys)
- `-c` to specify the contract root path
- `-p` to specify the `.pdx` file
- `-k` to specify a `.keys` file
- `-db` to set the root directory
- `-log` to set the log level
- `-rpc` to talk to chains using rpc
- `-host` and `-port` to set the host and port for rpc communication

# Try EPM for Yourself

Its pretty easy to get started:

{% highlight sh %}
go get github.com/eris-ltd/epm-go
cd $GOPATH/src/github.com/eris-ltd/epm-go/cmd/epm
go get -d
go install
{% endhighlight %}

If you would like EPM to be able to work with your blockchain, please get in touch.