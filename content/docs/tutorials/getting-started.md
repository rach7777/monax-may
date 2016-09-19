---

layout: single
title: "Tutorials | Getting Started"
aliases:
  - /docs
menu:
  tutorial:
    weight: 5

---

Eris is the ecosystem application platform built by `Monax`.

There are four steps need to get moving with Eris:

1. **Install** the platform.
2. **Roll** the blockchain base for your ecosystem application.
3. **Deploy** your ecosystem application using smart contract templates and a simple, web-based user interface.
4. **Integrate** your ecosystem application with a web server or other microservices.

# Step 1. Install the Eris Platform

**Dependencies**: `eris` has 1 dependency: [Docker](https://www.docker.com/). Docker is a run anywhere container solution which makes development, deployment, testing, and running of ecosystem applications a breeze.

Currently we consider the most workable setup to be (what our tests consider authoritative). We are working steadily toward making eris available for a wide variety of host environments.

* HOST_OS = {{< data_coding authoritative_os >}}
* DOCKER = {{< data_coding docker_auth >}}

## Step 1.1. Install Docker

At the current time, `eris` requires `docker` >= {{< data_coding docker_min >}}. You can check your Docker version with `docker version`. We do not test against older versions of Docker: `eris` may or may not work against earlier versions and we can make no guarantees of usability there.

### Linux

Please see the [Docker](https://docs.docker.com/installation/) documentation for how to install for your distribution.

**Essential**! After you install Docker, you must make sure that the user you are using to develop with `eris` has access to the Docker socket (which is accessible via the `docker` Linux usergroup). When you are logged in as the user you can do this:

```bash
sudo usermod -a -G docker $USER
```

That command will add the current user to the `docker` group which will mean that Docker will not need to be called from `sudo`. After you run that command, then please log out of the current shell and open a new shell. After that `eris` will then be able to connect to Docker.

Make sure that everything is set up with Docker by running:

```bash
docker version
```

**Note** you will need to make sure that you perform the above command for the *user* which will be running Eris.

### OSX

We **highly recommend** that you utilize `brew` to install `eris`. As part of the installation of `eris`, Docker will be properly installed. If you are not a `brew` user then please install Docker via the [Docker Toolbox](https://www.docker.com/products/docker-toolbox).

**N.B.** -- At this time Docker for Mac (DFM), which is still in beta, is not currently supported.

### Windows

We **highly recommend** that you utilize `choco` to install `eris`. As part of the installation of `eris`, Docker will be properly installed. If you are not a `choco` user then please install Docker via the [Docker Toolbox](https://www.docker.com/products/docker-toolbox).

**N.B.** -- At this time Docker for Windows (DFW), which is still in beta, is not currently supported.

## Step 1.2. Install Eris

`eris` can be easily installed using our convenient binary releases.

We distribute binaries via our [Github Releases Page](https://github.com/eris-ltd/eris-cli/releases). You will simply need to download the proper zip or tarball for your architecture and then extract that into a place in your `PATH`.

### OSX Only

If you're a [Homebrew](https://brew.sh) user then:

```bash
{{< data_coding brew >}}
```

### Windows Only

If you're a [Chocolatey](https://chocolatey.org) user then:

```bash
{{< data_coding choco >}}
```

**N.B.** You'll want to run `eris` commands either from `git bash` or from the `Docker Quickstart Terminal` (which is really just `git bash`) window. If you prefer to use the `cmd` as a terminal, you still can: every command should work as expected, though all the tutorials will assume that you are using the `Docker Quickstart Terminal` and are structured to support **only** that environment.

### APT Package Installation

We have `apt-get` support for most current versions of Ubuntu. If you wish to use apt-get to install `eris` then you will simply perform the following:

```bash
{{< data_coding apt >}}
```

### RPM Package Installation

We have RPM support for most current versions of Fedora, CentOS, RHEL, etc. If you wish to use `yum` to install `eris` then you will perform the following:

```bash
{{< data_coding yum >}}
```

### ARM Installation (IoT devices)

[See this tutorial](/docs/tutorials/install-arm/) for more info on getting setup on IoT devices.

### Building From Source

If you would like to build from source [see our documentation](/docs/tutorials/install-source/).

### All Platforms

Check that everything installed correctly with:

```bash
eris init
```

The command will begin setting you up.

### Troubleshooting Your Install

If you have any errors which arise during the installation process, please see our [trouble shooting page](/docs/tutorials/install-troubleshooting/) or visit our [support forums](https://support.erisindustries.com)

# Step 2: Roll Your Own Blockchain in Seconds

If you want to create your blockchain it is very easy.

```bash
eris services start keys
eris chains make test_chain --chain-type simplechain
eris chains new test_chain --dir test_chain
```

That `test_chain` can be whatever name you would like it to be. This simple command will create a permissioned, smart contract enabled blockchain suitable for testing.

To check that your chain is running type:

```bash
eris chains ls
```

Stop and remove your chain:

```bash
eris chains rm -xf test_chain
```

Obviously, you will want an ability to make chains which you properly parameterize. As such you can always type:

```bash
eris chains new --help
```

To see the various ways which you can give to chains new for it to be instantiated properly.

Eris does not only work with permissioned smart contract networks. It works just as well with existing blockchains. Want to run bitcoin?

```bash
eris services start btcd
```

Want to run Ethereum?

```bash
eris services start eth
```

That's it! Your chain is rolled!

Let's remove all of the eris "stuff" before we move on to the next portion of the tutorials:

```bash
eris clean
```

# Step 2.a: Making a "real" permissioned chain.

There are three steps to making a permissioned chain:

1. Make (or Get) the public keys for the individuals
2. Make the genesis.json file
3. Instantiate the chain

We shall go through these in their logical order.

### Users Design

To do this we need to, first, consider, *who* will get *what* permissions and *why*. It is outside the scope of this tutorial to outline all of the considerations which would come into play when thinking about creating a permissioning system, but for the purposes of this tutorial, we will craft the genesis block to use the following paradigm:

* 3 Administrators (these would be developers who have **full** control over the chain) (one of which will be "running" the chain performing validation)

If you would like to understand all of the permissions which an eris chains smart contract network is capable of providing, [please see our documentation on the subject](/docs/documentation/db/).

We use an abstraction to simplify the chain making process called [Account Types](/docs/documentation/cm/latest/account_types/). This abstraction is just that, an abstraction to help users quickly get up to speed. In order to reduce the complexity of dealing with different types of accounts typically built on a chain, we use the idea of "account types". Account types are not restrictive in the sense that they are not the "only" types of accounts you can make with eris chains.

Account types are simply bundles of permissions no more no less. Using the eris tooling you can also create your own account types with your own bundles of permissions which will be helpful.

## Step 2.a.1. Make (or Get) the Public Keys

Everyone who interacts with an eris chains chain will need to have a properly formated keypair. To make a keypair we will use `eris keys`.

`eris keys` usually operates as a signing daemon, but when we use eris keys to *create* key pairs what we are doing effectively is writing files. As is usual with the eris tooling, `eris keys` is opinionated and will work by default against the following directory: `~/.eris/keys/data`. When a key pair is created, that key pair will get written into that directory.

Because we use Docker to take out most of the edge cases with various operating systems and simplify the development environment for our users, these files will be written to a file system located inside the eris keys container. As we go through this tutorial we will explain a bit about what that means. When we are using containers, these containers are not built to *hold* data, but rather are built to hold what is needed to run processes. But, if we're making keypairs, then we definitely want to *keep* these.

To accomplish this, we will use the `eris` tooling only. First we need to start the eris-keys daemon:

```bash
eris services start keys
```

By default, `eris` is a very "quiet" tool. To check that the keys service started correctly type:

```bash
eris services ls
```

You'll see something like:

```bash
SERVICE     ON     CONTAINER ID     DATA CONTAINER
keys        *      f2e9930e4a       3644788be1
```

which indicates that the keys services is on (running). To see a more comprehensive output for your services, try `eris services ls -a`.

To see what we can do with eris keys we will run:

```bash
eris services exec keys "eris-keys -h"
```

What this is doing is running the `eris-keys -h` "inside" the keys containers. Technically it is not inside the keys container, but inside a separate container based on the keys image with the data container mounted, but if this sentence doesn't make sense to you then feel free to ignore.

But instead of dealing with the `eris-keys` service directly, we mostly use `eris keys` from the eris cli tool. The `eris keys` commands are basically wrappers around the `eris-keys` commands which are ran inside containers. To see the wrappers which the eris cli tooling provides around the `eris-keys` daemon, please type:

```bash
eris keys -h
```

Now it is time to generate some keys!

For the purposes of this tutorial **only** we will also create all of the necessary keys for all of the "users" of the chain and we will do so without passwords. Again, this is for demonstration purposes only, for a production system you will not do what we're about to do.

```bash
eris keys gen
```

This will create one key for you. The output here should look something like this:

```irc
49CA2456F65B524BDEF50217AE539B8E10B37421
```

Now. Let's export that key onto our host's drive so that we can back it up and keep it safe in the future.

```bash
eris keys export 49CA2456F65B524BDEF50217AE539B8E10B37421
```

Note, that in the above command we used the output from the `eris keys gen` command with the `eris keys export`. You will want to replace the argument in the `export` command with whatever the address for the public key you created is. Your key will in the directory at `~/.eris/keys/data/49CA2456F65B524BDEF50217AE539B8E10B37421/`

To see the keys which eris-keys generated both *inside* the container type and available on your host machine type:

```bash
eris keys ls
```

Before we move on to actual chainmaking, if you would like to explore more of the eris keys functionality please see our [keys tutorial](/docs/tutorials/tool-specific/keyexporting/).

Now, we're all ready to make a chain.

## Step 2.a.2. Make the genesis.json

Before we begin, we should quickly talk through the various files which are needed to run an eris chain. When you ran `eris init` during the [getting started](/docs/tutorials/getting-started/) step, eris created a folder called `~/.eris/chains/default` on your host's hard drive. This is to hold the default files for using eris chains. There are a few primary files used by eris chains:

1. the config file for the tendermint consensus engine called `config.toml`
2. the chain definition file for eris chains called `chainName.toml` (where `chainName` is the name of your chain) (these are located in your ~/.eris/chains directory)
3. the `genesis.json` which tells eris chains how it should configure itself at the beginning of the chain (or, its genesis state)
4. the config file for the eris:db application engine called `server_conf.toml`
5. the keypair which the tendermit consensus engine will use to sign blocks, etc. called the `priv_validator.json`

In general you do not really need to mess with `server_conf.toml` unless you know what you're doing and need to move away from the default settings. Similarly, you should not need to edit `chainName.toml` unless you have a deeper understanding of docker or specific needs around how your chain will run.

The three files you *may* need to edit are the `genesis.json` and `priv_validator.json` (both of which we're about to get "made" for us) and the `config.toml`.

In any chain with more than one validator the `config.toml` file will be edited to fill in the `seeds` and `moniker` fields. The `seeds` field is used to point your consensus engine to the peers it should connect into. For more information on how to deal with this please see our [advanced chain deploying tutorial](/docs/tutorials/advanced/chain-deploying/). The `moniker` field is "your node's name on the network". It should be unique on the given network.

The `genesis.json` is the primary file which tells eris chains how to instantiate a particular chain. It provides the "genesis" state of the chain including the accounts, permissions, and validators which will be used at the beginning of the chain. These can always be updated over the life of the chain of course, but the genesis.json provides the starting point. Luckily `eris` takes care of making this for you and there is very little which should be required for you in way of editing (unless you know what you're doing of course, in which case why are you reading this ;-) ).

With all that said, we're ready to make a chain. First let us make a "fake" chain just to get a tour of the chain maker tool. Once we go through that process then we will make our "real" chain which we will use for the rest of this tutorial series. Let's see what eris chains make can do for us.

```bash
eris chains make -h
```

That will give you an overview of the chains maker tool. Now we are ready.

```bash
eris chains make toRemoveLater
```

This will drop you into an interactive, command line wizard. Follow the text and the prompts to chain making bliss. Since we're going to throw this chain away later you can just press "Enter" at each of the prompts or you can change the variables and get a feel for the wizard.

Once the wizard exits let's take a look at what was created:

```bash
ls ~/.eris/chains/toRemoveLater
```

You should see three `*.csv` files and a bunch of directories. Let's look in one of those directories:

```bash
ls ~/.eris/chains/toRemoveLater/toremovelater_full_000
```

In that directory you should see a genesis.json and a priv_validator.json. The marmots call these a "bundle" as generally they are what is needed to get a chain going (in addition to a config.toml which with the proper seed and moniker filled out).

What about those `csv` files? There should be three of them. Let's take a look:

```bash
cat ~/.eris/chains/toRemoveLater/accounts.csv
cat ~/.eris/chains/toRemoveLater/validators.csv
cat ~/.eris/chains/toRemoveLater/addresses.csv
```

The first two files can be used later to create a new genesis.json if the actual json gets lost. One of the things about this tooling is that it **creates** the keys for you. That is helpful in some circumstances. In other circumstances this is not helpful.

In general, we recommend that if you are making a chain for a consortium that you have your consortium members **make their own keys** and then send the public key to you. Once you've assembled the keys then you will create an accounts.csv and validators.csv files in this format and then run `eris chains make` with the `--known` flag. More information on complex chain making is included in our [advanced chain making tutorial](/docs/tutorials/advanced/chain-making/).

The last file is the `addresses.csv` file which is another artifact of the chain making process. It simply has the addresses and the "names" of the nodes. We find it useful when scripting out complex interactions and it is simply a reference file along the lines of `addr=$(cat $chain_dir/addresses.csv | grep $name | cut -d ',' -f 1)`.

OK, enough playing around let's get serious!

```bash
cd ~/.eris/chains
rm -rf ~/.eris/chains/toRemoveLater
```

That command will remove all of the stuff we've been working on. Per the above and after our review of the account types, we know we want to have two Root account types and one Full account type for our new chain. So let's get to business.

```bash
chain_dir=$HOME/.eris/chains/simplechain
chain_dir_this=$chain_dir/simplechain_full_000
```

That will just create a few variables we'll be using in the future. Now, we're ready.

```bash
eris chains make --account-types=Root:2,Full:1 simplechain
```

That's it! Let's double check the files to make sure we are squared away.

```bash
ls $chain_dir
ls $chain_dir_this
```

You'll a `genesis.json` and `priv_validator.json` in `$chain_dir_this`.

## Step 2.a.3. Instantiate the Blockchain

With all the files prepared we're ready to rock and roll.

```bash
eris chains new simplechain --dir $chain_dir_this
```

Check that the chain is running with:

```bash
eris chains ls
```

You'll see something like:

```bash
CHAIN        ON     CONTAINER ID     DATA CONTAINER
simplechain  *      efeeb0dd63       d06301b3a5
```

As with the `eris services ls -a` command, you can also see more information about your chain with `eris chains ls -a`. Note: the same holds true with `eris ls` and `eris ls -a`.

To see the logs of the chain:

```bash
eris chains logs simplechain
```

To turn off the chain:

```bash
eris chains stop simplechain
```

Boom. You're all set with your custom built, permissioned, smart contract-ified, chain.

You can remove all trace of the chain with:

```
eris chains rm simplechain --data --dir --file --force
```

and clean up your eris environment with:

```
eris clean
```

If anything went wrong with Step 2 please see our trouble shooting guide -> [^1], [^2], [^3], [^4], [^5], [^6].

# Step 3: Deploy your ecosystem application using smart contract templates

In general we are going to take three steps in order to get our contracts deployed to the blockchain:

1. Write a simple contract
2. Make sure your application package has the proper information
3. Deploy the contracts

### Contracts Strategy

We are going to use a very simple `get` / `set` contract which sets a variable and gets that same variable. It is about the easiest interactive contract one can imagine and as such we will use that for showing how to work with the eris platform.

## Step 3.1. Make A Contract for Idi

The first thing we're going to do is to add a very simple contract.

```bash
cd ~/.eris/apps
mkdir idi
cd idi
```

Now you'll make a file in this directory. Let's assume that is called `idi.sol` and has the following contents

```javascript
contract IdisContractsFTW {
  uint storedData;

  function set(uint x) {
    storedData = x;
  }

  function get() constant returns (uint retVal) {
    return storedData;
  }
}
```

What does this contract do? Well, it isn't very interesting, we know. It merely `gets` and `sets` a value which is an unsigned integer type. **Protip:** Get the file with `curl -X GET https://raw.githubusercontent.com/eris-ltd/coding/master/contracts/idi/idi.sol -o idi.sol` rather than copy pasting.

## Step 3.2. Fixup your epm.yaml

Next we need to make an `epm.yaml` and make it look something like this:

```yaml
jobs:

- name: setStorageBase
  job:
    set:
      val: 5

- name: deployStorageK
  job:
    deploy:
      contract: idi.sol
      wait: true

- name: setStorage
  job:
    call:
      destination: $deployStorageK
      data: set $setStorageBase
      wait: true

- name: queryStorage
  job:
    query-contract:
      destination: $deployStorageK
      data: get

- name: assertStorage
  job:
    assert:
      key: $queryStorage
      relation: eq
      val: $setStorageBase
```

**Protip:** Get the file with `curl -X GET https://raw.githubusercontent.com/eris-ltd/coding/master/contracts/idi/epm.yaml -o epm.yaml`

Now, what does this file mean? Well, this file is the manager file for how to deploy and test your smart contracts. `eris:package_manager` will read this file and perform a sequence of `jobs` with the various parameters supplied for the job type. It will perform these in the order they are built into the yaml file. So let's go through them one by one and explain what each of these jobs are doing. For more on using various jobs [please see the jobs specification](/docs/documentation/pm/latest/jobs_specification/).

### Job 1: Set Job

The `set` job simply sets a variable. `eris:package_manager` includes a very naive key value store which can be used for pretty much anything.

### Job 2: Deploy Job

This job will compile and deploy the `idi.sol` contract using Eris' compiler service (or run your own locally). The job will wait for the deploy transaction to confirm before it will proceed.

### Job 3: Call Job

This job will send a call to the contract. `eris:package_manager` will automagically utilize the abi's produced during the compilation process and allow users to formulate contract calls using the very simple notation of `functionName` `params`. `eris:package_manager` also allows for variable expansion.

So what this job is doing is this. The job is pulling the value of the `$setStorageBase` job (`eris:package_manager` knows this because it resolved `$` + `jobName` to the result of the `setStorageBase` job) and replacing that with the value, which is `5`. Then it will send that `5` value to the `set` function of the contract which is at the `destination` that is the result of the `deployStorageK` job; in other words the result of Job 3. For more on variables in `eris:package_manager`, please see the [variables specification](/docs/documentation/pm/latest/variable_specification/).

Finally, it is waiting on the call to be sunk into a block before it will proceed.

### Job 4: Query Contract Job

This job is going to send what are alternatively called `simulated calls` or just `queries` to an accessor function of a contract. In other words, these are `read` transactions. Generally the `query-contract` is married to an accessor function (such as `get` in the `idi.sol` contract). Usually accessor, or read only functions, in a solidity contracts are denoted as a `constant` function which means that any call sent to the contract will not update the state of the contract.

The value returned from a `query-contract` job then is usually paired with an assert.

### Job 5: Assert Job

In order to know that things have deployed or gone through correctly, you need to be able to assert relations. `eris:package_manager` provides you with:

* equality
* non-equality
* greater than or equals (for integers & unsigned integers values only)
* greater than (for integers & unsigned integers values only)
* less than or equals (for integers & unsigned integers values only)
* less than (for integers & unsigned integers values only)

Relations can use either `eq` `ne` `ge` `gt` `le` `lt` syntax, or, in the alternative they can use `==` `!=` `>=` `>` `<=` `<` syntax in the relation field. This is similar to Bash. To make this more explicit we have chosen in the above `epm.yaml` to use the `eq` syntax, but feel free to replace with `==` syntax if you want.

Both the `key` and the `val` (which in other testing frameworks are the `given` and `expect`ed in an assert function) use variable expansion to compare the result of what was supposed to be sent to the `setStorageBase` job (which should have been sent to and stored in the contracts' storage) with what was received from the `queryStorage` job (which in turn called the `get` function of the contract).

## Step 3.3. Deploy (and Test) The Contract

See the [chain making tutorial](/docs/tutorials/getting-started/#step-2-roll-your-own-blockchain-in-seconds) if you need to review the chain making process. This series of commands assumed you followed that tutorial and continued here after `eris chains stop simplechain`.

First, let's get our chain turned back on.

```bash
eris chains ls
```

If it's on, you'll see:

```
CHAIN        ON     CONTAINER ID     DATA CONTAINER
simplechain  *      efeeb0dd63       d06301b3a5
```

Whereas if it has been stopped, the `ON` field will have `-` rather than `*`. The same logic applies to services.

If simplechain is not running, then turn it on with:

```bash
eris chains start simplechain
```

or create a new chain if simplechain no longer exists.

Now, we are ready to deploy this world changing contract. Make sure you are in the `~/.eris/apps/idi` folder, or wherever you saved your `epm.yaml`. Note that this is a very common pattern in simple contract testing and development; namely to (1) deploy a contract; (2) send it some transactions (or `call`s); (3) query some results from the contract (or `query-contract`s); and (4) assert a result. As you get moving with contract development you will likely find yourself doing this a lot.

```bash
addr=$(cat $chain_dir/addresses.csv | grep simplechain_full_000 | cut -d ',' -f 1)
```

That will make sure we have available the address we would like to use to deploy the contracts. Now we're ready. If the above does not output an address then check your $chain_dir variable and also check that the `simplechain_full_000` variable exists in the addresses.csv.

```bash
eris pkgs do --chain simplechain --address $addr
```

You *should* be able to use any of the addresses you generated during the chainmaking tutorial since they all have the same permission levels on the chain (which, if you followed the simple tutorial are basically all public). If you are using this tutorial outside of the tutorial sequence then you can just give it the address that you'd like to use to sign transactions instead of the `grep simplechain_full_000` bash expansion.

(For those that do not know what is happening in that bash line: `cat` is used to "print the file" and "pipe" it into the second command; `grep` is a finder tool which will find the line which has the right name we want to use; the `cut` says split the line at the `,` and give me the first field).

Note that `eris:package_manager` can override the account which is used in any single job and/or, `eris:package_manager` can set a default `account` job which will establish a default account within the yaml. We find setting the default account within the yaml to usually be counter-productive because others will not be able to easily use your yaml unless they have the same keys in their `eris-keys` (which we **never** recommend). For more on using accounts [please see the jobs specification](/docs/documentation/pm/latest/jobs_specification/).

Since we have a deployed contract on a running chain, please do take a look at the available options for eris contracts with:

```bash
eris pkgs do -h
```

That's it! Your contract is all ready to go. You should see the output in `epm.json` which will have the transaction hash of the transactions as well as the address of the deployed `idi.sol` contract.

# Step 4. Integrate your ecosystem application

Let us expand the very simple idiscontract out into a very simple smart contract backed application. To do this, we will be using node.js. To use this tutorial you will need a relatively recent version of [node](https://nodejs.org/en/download/package-manager/) installed on your box.

What we are going to make is a very simple application which tells the user what the value held in idi's contract currently is, then it will ask the user what the value should be changed to, once the user enters the new value then the application will change the value in idi's contract and display the new value for the user. It couldn't get any more simple. To complete this we will conduct three steps:

1. Set up our Application
2. Build our Integration Script/Server
3. Run our Application

## Step 4.1. Set up the Application

As with all node.js applications, we will start by making a package.json. This should be made in the same folder as your `epm.yaml`. We will keep the `package.json` very simple.

```json
{
  "name": "idis_app",
  "version": "0.0.1",
  "dependencies": {
    "eris-contracts": "^0.13.1",
    "prompt": "*"
  }
}
```

**Protip:** Get the file with `curl -X GET https://raw.githubusercontent.com/eris-ltd/coding/master/contracts/idi/package.json -o package.json` while in the same directory as the `epm.yaml`.

Once you have saved your package.json then you will run (from the same directory) this command:

```bash
npm install
```

That will install eris-db.js and eris-contracts.js and their dependencies (plus another simple node.js package we'll use in the application).

For trouble shooting information regarding Step 4.1 please see our guide -> [^7], [^8], [^9]

## Step 4.2. Make the Main Application Script

Once we have that set up, then we'll make an `app.js` file and we'll add the following contents into it:

```javascript
// requires
var fs = require ('fs');
var prompt = require('prompt');
var erisC = require('eris-contracts');

// NOTE. On Windows/OSX do not use localhost. find the
// url of your chain with:
// docker-machine ls
// and find the docker machine name you are using (usually default or eris).
// for example, if the URL returned by docker-machine is tcp://192.168.99.100:2376
// then your erisdbURL should be http://192.168.99.100:1337/rpc
var erisdbURL = "http://localhost:1337/rpc";

// get the abi and deployed data squared away
var contractData = require('./epm.json');
var idisContractAddress = contractData["deployStorageK"];
var idisAbi = JSON.parse(fs.readFileSync("./abi/" + idisContractAddress));

// properly instantiate the contract objects manager using the erisdb URL
// and the account data (which is a temporary hack)
var accountData = require('./accounts.json');
var contractsManager = erisC.newContractManagerDev(erisdbURL, accountData.simplechain_full_000);

// properly instantiate the contract objects using the abi and address
var idisContract = contractsManager.newContractFactory(idisAbi).at(idisContractAddress);

// display the current value of idi's contract by calling
// the `get` function of idi's contract
function getValue(callback) {
  idisContract.get(function(error, result){
    if (error) { throw error }
    console.log("Idi's number is:\t\t\t" + result.toNumber());
    callback();
  });
}

// prompt the user to change the value of idi's contract
function changeValue() {
  prompt.message = "What number should Idi make it?";
  prompt.delimiter = "\t";
  prompt.start();
  prompt.get(['value'], function (error, result) {
    if (error) { throw error }
    setValue(result.value)
  });
}

// using eris-contracts call the `set` function of idi's
// contract using the value which was recieved from the
// changeValue prompt
function setValue(value) {
  idisContract.set(value, function(error, result){
    if (error) { throw error }
    getValue(function(){});
  });
}

// run
getValue(changeValue);
```
**Protip:** Get the file with `curl -X GET https://raw.githubusercontent.com/eris-ltd/coding/master/contracts/idi/app.js -o app.js` while in the same directory as the `epm.yaml`.

**N.B.** -- for *not Linux users*, please see the comments on lines 6-9 about the `var erisdbURL = "http://localhost:1337/rpc";` line of the script (spoiler alert, only do that on Linux). See our [docker-machine tutorial](/docs/tutorials/tool-specific/docker_machine/) for more information.

**N.B. 2** -- be sure to edit this line: `var contractsManager = erisC.newContractManagerDev(erisdbURL, accountData.simplechain_full_000);` in the `app.js` to reflect the chain name (in lowercase) and account if you did not make a chain with the name `simplechain` or a chain with >1 account. See `$chain_dir/accounts.json` for more info (see below for the step to retrieve this file.)

The code should be self explanatory if you understand even a little bit of javascript. Once we properly instantiate all of the objects then there are three functions.

The first function, the `getValue` function will call the `get` function of `idi.sol` (see the previous tutorial for the code of that contract) and then it will display the result of that to the command line. This function takes a callback which fires after the result of the call to idi.sol's get function (which simply returns the `storedData`).

The second function is a simple function which will prompt the user to change the value (there is no validation here to make sure it is a number, so when playing with this just sure make it is a number). Once the user has entered what the value should be then the `setValue` function will be called.

The final function, the `setValue` function will call the `set` function of `idi.sol`. It will sign the transaction using the account data populated in the account.json file and then send it to the chain. It will block until the transaction has been added to a block after which the callback will fire. The callback here is very simple in that it calls the `getValue` function to display what the result is after the `setValue` transaction has happened.

The beginning of the script, which gets everything sets up includes this line:

```javascript
var contractData = require('./epm.json');
```

But in the [previous tutorial](/docs/tutorials/getting-started/#step-3-deploy-your-ecosystem-application-using-smart-contract-templates) we only worked with an `epm.yaml`, not an `epm.json`. So what is the `epm.json`? That file is an artifact of the `eris pkgs do` process. If you look at the `epm.json` file it should look something like this:

```javascript
{
  "account": "1FDD813D68F73BBABFEA6EF6FB83118441CFC347",
  "assertStorage": "passed",
  "deployStorageK": "41672393A960D3A706C8345B5149961F8A755BBC",
  "queryStorage": "5",
  "setStorage": "67394093FD93BB4C8BEE2C1CB38BC454AAA56E86",
  "setStorageBase": "5"
}
```

The json file is the result of each of the jobs. What we really need from this file is the contracts address that was deployed (the key to the `deployStorageK` field) so that the app.js script knows what contract on the chain it should be "talking" to.

We need to do one final thing before we finish this section. We need to copy over the accounts.json which was an artifact of the chain making process and is included in our chains directory into this directory so that it can be consumed by the eris-contracts.js library.

```bash
cp $chain_dir/accounts.json .
```

For more about eris-contracts please see [the eris-contracts documentation](/docs/documentation/contracts.js/). If you have any trouble, please see our trouble shooting guide -> [^10]

## Step 4.3. Run The Application

Now we are ready to go:

```bash
node app.js
```

The first time you run the script it should tell you that the value is `5` or whatever value you entered into the `setStorageBase` job of the epm.yaml from the [previous tutorial](/docs/tutorials/getting-started/#step-3-deploy-your-ecosystem-application-using-smart-contract-templates). Then it will prompt you to change the value. The second time you run the script it should tell you that the value is whatever you entered the first time and so on.

Congratulations, you've just made your very own smart contract backed application on a permissioned blockchain! If you had any trouble with this step please see our trouble shooting guide -> [^11]

[^1]: If you get an error which looks something like this:

    ```irc
    Performing action. This can sometimes take a wee while
    Post http://chain:46657/status: dial tcp 172.17.0.3:46657: getsockopt: connection refused
    Container eris_interactive_eris_service_idi_tmp_deploy_1 exited with status 1
    ```

    That means that your chain is not started. Please start the chain and give the chain a second to reboot before rerunning the deploy command again.

[^2]: If you get an error which looks something like this:

    ```irc
    open /home/eris/.eris/keys/data/1040E6521541DAB4E7EE57F21226DD17CE9F0FB7/1040E6521541DAB4E7EE57F21226DD17CE9F0FB7: no such file or directory
    Container 74a9dbf3d72a2f67e2280bc792e30c7b37fa57e3d04aeb348222f72448bdc84a exited with status 1
    ```

    What is this telling us? Well, it is telling us that it doesn't have the key in the `keys` container. So what you'll want to do is to update with one of the keys you have generated during the prior tutorials.

    To see what keys are currently on your key signing daemon do this:

    ```
    eris keys ls
    ```

    If you do not have any keys then please take the time to [make some keys](/docs/tutorials/tool-specific/keyexporting). After you find a key which you currently have, then add that as the `address` flag to the `eris pkgs do` command.

[^3]: If you choose the wrong key then you'll get an error which will probably look something like this:

    ```irc
    Error deploying contract idi.sol: unknown account 03E3FAC131CC111D78B569CEC45FA42CE5DA8AD8
    Container edbae127e1a31f1f85fbe14359362f7943028e57dc5eec4d91a71df706f5240f exited with status 1
    ```

    This means that the account `03E3FAC131CC111D78B569CEC45FA42CE5DA8AD8` has not been registered in the `genesis.json`. The account which is not registered will be the same account you told epm to use via the signing server (`eris-keys`).

    To "see" your `genesis.json` then do this:

    ```
    eris chains cat simplechain genesis
    ```

    You can also see your `genesis.json` at `http://localhost:46657/genesis`. Note: replace `localhost` with the output of `docker-machine ip eris` if on OSX or Windows. See our [docker-machine tutorial](/docs/tutorials/tool-specific/docker_machine/) for more information.

[^4]: If the account you are trying to use has not been registered in the `genesis.json` (or, latterly, has not been given the appropriate [permissions](/docs/documentation/db/) via permission transactions) and been given the appropriate permissions, then it will not be able to perform the actions it needs to in order to deploy and test the contract. The easiest thing to do at this point is to [update your genesis.json](/docs/tutorials/tool-specific/genesisupdating/).

    Once you have the following sorted:

    1. The provided account parameter matches a key which is known to the signing daemon; and
    2. The provided account parameter matches an account in the `genesis.json` of a chain;

    Then you'll be ready to:

    ```bash
    eris pkgs do --chain simplechain --address ADDR
    ```

    Where `ADDR` in the above command is the address you want to use.

[^5]: If you have an error which complains about how a container cannot be removed which looks something like this:

    ```irc
    Error removing intermediate container 1f3a1d541241:
    Driver btrfs failed to remove root filesystem
    1f3a1d541241e757d48f34329508253e9ee139380b7b914a3b1104677eb0e8ee:
    Failed to destroy btrfs snapshot: operation not permitted
    ```

    Then rerun the `pkgs do` command with the `--rm` flag at the end, which will stop the containers from trying to be removed as part of the tear down sequence.

[^6]: If you have an error complaining about not being able to reach the compiler service, like this:

    ```irc
    failed to send HTTP request Post https://compilers.eris.industries:10114/compile: dial tcp: i/o timeout
    Error compiling contracts
    Post https://compilers.eris.industries:10114/compile: dial tcp: i/o timeout
    ```

    Then that means one of the following:

    * You're working offline, e.g. on the train, or
    * You're behind a corporate firewall/proxy and can't access the compiler URL.

    To fix this, you can either go online, or download and run the _compilers_ service locally by doing the following - you need to be online for this, though:

    ```bash
    eris services start compilers
    ```

    When you run this for the first time, it will download the _compilers_ Docker image, and then start the service.

    Once the service is running, you can deploy packages by adding the address of your compiler service to the command line parameters. Replace the IP address with your local IP address, depending on your OS. If you're on Windows or Mac OS X, you will have to use the Docker-Machine VM's IP address (`192.168.99.100` by default):

    ```bash
    eris pkgs do --chain simplechain --address $addr --compiler 192.168.99.100:9091
    ```

    When you're done with your work, you can stop the _compilers_ service like the other eris services:

    ```bash
    eris services stop compilers
    ```

[^7]: If you are on Ubuntu 14.04 LTS, the version of NPM which will likely be installed will create an error when installing eris-contracts. Please see the [fix here](https://github.com/eris-ltd/eris-contracts.js#installation).

[^8]: If you are behind a firewall then you may need to let npm know about your proxy. To do that add a line to your ~/.npmrc:

    ```
    proxy=http://myproxy.com
    ```

[^9]: If you get an error which looks like this:

    ```irc
    > bufferutil@1.2.1 install /root/.eris/apps/idi/node_modules/bufferutil
    > node-gyp rebuild

    gyp ERR! build error
    gyp ERR! stack Error: not found: make
    gyp ERR! stack     at F (/usr/lib/node_modules/npm/node_modules/which/which.js:78:19)
    ```

    Then you will need to install `make` on your platform with `apt-get install make` (or the equivalent package manager for your operating system).

[^10]: If you do not have an `epm.json` file that means there was a problem with the contracts deploy. Please resolve that problem by carefully following the [previous tutorial](/docs/tutorials/getting-started/#step-3-deploy-your-ecosystem-application-using-smart-contract-templates) before continuing with this tutorial.

[^11]: If you just started your chain you may not have any contracts on it. To solve this, run:

    ```bash
    eris pkgs do --chain $chainname --address $addr
    ```

    Where `$chainname` is the name of the chain you want to use and `$addr` is the address of the account you would like to use. [See the contracts deploying tutorial for more information](/docs/tutorials/getting-started/#step-3-deploy-your-ecosystem-application-using-smart-contract-templates).

    When you do the deploy command you may get an error which looks like this:

    ```irc
    Error creating data container: Invalid container name (eris_data_idis app_tmp_deploy_1), only [a-zA-Z0-9][a-zA-Z0-9_.-] are allowed.
    ```

    This is an "error" from Docker. What it means is that you have a space in the `"name"` field of your package.json which is used by eris to setup the container. We will control for this error in the future, but for now just replace the space in the name field with an underscore `_`.

    When you run the app.js if you get an error which looks like this:

    ```irc
    Error callback from sendTransaction
    /home/ubuntu/.eris/apps/idi/app.js:29
        if (error) { throw error }
                           ^
    Error: Error: socket hang up
        at createHangUpError (http.js:1472:15)
        at Socket.socketOnEnd [as onend] (http.js:1568:23)
        at Socket.g (events.js:180:16)
        at Socket.EventEmitter.emit (events.js:117:20)
        at _stream_readable.js:920:16
        at process._tickCallback (node.js:415:13)
        at httpRequest.onreadystatechange (/home/ubuntu/.eris/apps/idi/node_modules/eris-db/lib/rpc/http.js:101:26)
        at dispatchEvent (/home/ubuntu/.eris/apps/idi/node_modules/xmlhttprequest/lib/XMLHttpRequest.js:572:25)
        at setState (/home/ubuntu/.eris/apps/idi/node_modules/xmlhttprequest/lib/XMLHttpRequest.js:591:14)
        at handleError (/home/ubuntu/.eris/apps/idi/node_modules/xmlhttprequest/lib/XMLHttpRequest.js:516:5)
        at ClientRequest.errorHandler (/home/ubuntu/.eris/apps/idi/node_modules/xmlhttprequest/lib/XMLHttpRequest.js:443:14)
        at ClientRequest.EventEmitter.emit (events.js:95:17)
        at Socket.socketOnEnd [as onend] (http.js:1568:9)
        at Socket.g (events.js:180:16)
        at Socket.EventEmitter.emit (events.js:117:20)
        at _stream_readable.js:920:16
    ```

    What that means is that the api port for your chain is not running. There is a very easy fix for this:

    ```bash
    eris chains stop -rf $chainname
    eris chains start $chainname
    ```

    Where `$chainname` in the above sequence is the name of the chain you are using. What those commands will do is to first stop and remove the service container for the chain (this will leave its data container) and then it will restart the chain's service container but when it does so, eris will make sure the api port for your chain is running.