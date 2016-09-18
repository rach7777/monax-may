---

# fill in
title:     Playing With Chains
author: Ethan Buchman
excerpt:   "A demonstration of various eris tools for working with chains"
thumbnail:
category:  CAT
tags:      [TAG1, TAG2]

# use if needed
layout:    post
published: true
comments:  true
meta:      true
#thumbnail_raw:

---

# Introduction

Over the last few months we've been working on a number of tools for setting up and playing with blockchains.

Our namesake tool, located at `github.com/eris-ltd/eris-cli`, is woven tightly around [docker](),
and provides a simple framework for working with ecosystem applications.
All of its functionality, however, is available without docker,if you're willing to do some additional work.

In this tutorial then, I will show you how to use these tools natively, and then how to use them within the `eris-cli` framework.

If you don't care about using them natively, just [jump straight to eris-cli]()

# Getting Started - Natively
Steps: `install and configure go, fetch the go tools, install and configure node.js, fetch the javascript tools`

We presume you have [go installed], have set your `$GOPATH`, and have put `$GOPATH/bin` on your `$PATH`

```bash
go get github.com/eris-ltd/eris-keys
go get github.com/eris-ltd/mint-client/...
go get github.com/eris-ltd/eris-db/cmd/eris-db
```

If you already have some repositories present, `cd` to them and run

```bash
git pull origin master
```

before you install.

All the tools should now be installed.

# Overview

`github.com/eris-ltd/erisdb` contains a RESTful HTTP server wrapping an in-process [tendermint blockchain node](https://github.com/tendermint/tendermint).
It also exposes tendermint's built in rpc server.
It is updated every couple weeks (or when necessary) to reflect changes in the tendermint codebase.

`erisdb` is complemented by the javascript libraries at `github.com/eris-ltd/eris-db.js` and `github.com/eris-ltd/eris-contracts.js`, the former being a client library for the RESTful API, and the later an implementation of ethereum's web3 javascript framework for erisdb.

`github.com/eris-ltd/mint-client` contains a set of tools for working with tendermint chains, including

	- `mintgen` - for creating genesis files (initializing chains)
	- `mintconfig` - for creating config files (for running chains)
	- `mintinfo` - for reading information from the tendermint rpc
	- `mintx` - for crafting and sending transactions over the tendermint rpc

among others.

# Keys

Steps: `start the key server, create a key, save the details`

The `mintx` program depends on the `eris-keys` server. You can (should) start the keys server by running

```bash
eris-keys server &
```

Let's also generate a new key

```bash
ADDR=`eris-keys gen`
echo $ADDR
PUB=`eris-keys pub --addr $ADDR`
echo $PUB
```

The variables `$ADDR` and `$PUB` are for convenience later.

For more about the key signing daemon, see [the repo](https://github.com/eris-ltd/eris-leys)

# Starting a chain

Steps: `set the root directory, create the genesis file, create the node config file, create the priv_validator file, run the chain`

To start a chain, we need a root directory:

```bash
export TMROOT=~/.eris/blockchains/<chain_id>
mkdir -p $TMROOT
```

Now we can create the genesis file

```bash
mintgen known --pub=$PUB <chain_id> > $TMROOT/genesis.json
```

`mintgen` can make genesis files for any number of accounts/validators, and you can pass in a csv file for more fine grained control (it's easier than editing json)

See `mintgen --help` and `mintgen random --help` for more information

Now, we need a config file.

```bash
mintconfig --skip-upnp > $TMROOT/config.toml
```

`--skip-upnp` just makes start-up faster. See `mintconfig --help` or the config file itself for more options.

The last thing we need before running the chain is a `priv_validator.json` file.
Tendermint uses this file for signing blocks and votes in its proof of stake consensus algorithm.
It is mostly just a duplicate of the key we already generated in a form that the tendermint code understands,
but will soon be phased out in favour of direct use of eris-keys.

To generate the `priv_validator.json` for the key we generated, run

```bash
mintkey mint $ADDR > $TMROOT/priv_validator.json
```
The contents of `~/.eris/blockchains/<chain_id>` should now be:

```bash
config.toml    genesis.json    priv_validator.json
```

Now we're ready to launch the blockchain! Just run

```bash
erisdb $TMROOT
```

You should now see blocks streaming by.

:)

NOTE: Here we used `erisdb`, but we could equally well use `tendermint` itself. The only difference is that `erisdb` exposes some additional rpc endpoints that have tight integration with the `eris-db.js` and `eris-contracts.js` javascript libraries. If you want to run tendermint instead, at this point you can just

```bash
go get github.com/tendermint/tendermint/cmd/tendermint
tendermint node
```

All the setup we did works the same. If you don't do the setup, tendermint's default behaviour is to start syncing your node with the main test net, on which you won't have an account. If you want funds on the testnet, go [here](https://github.com/tendermint/tendermint/issues/120)

# Interacting with the chain

In this part of the tutorial I will describe how to use the `mint-client` command line tools for talking to the chain.

[Towards the end is an example of using the javascript libraries]().


## Status

Get the status of your chain:

```
mintinfo --node-addr=localhost:46657 status
```

Set the `MINTX_NODE_ADDR` environment variable (eg. in your `~/.bashrc`) to avoid passing the `--node-addr` flag (the rest of this tutorial assumes you've done so)

`mintinfo` has a command for [every tendermint rpc endpoint](https://github.com/tendermint/tendermint/blob/master/rpc/core/routes.go#L8).

See `mintinfo --help` and `mintinfo <cmd> --help` for more options.

## Simple Transaction

Let's send some funds from our address to another:

```
mintx send --pubkey $PUB --to 00112233445566778899aabbccddeeff00112233 --amt 5 --chainID <chain_id> --sign --broadcast
```

You can avoid passing the `--pubkey` flag by setting the `MINTX_PUBKEY` environment variable.

Run `mintx --help` and `mintx <cmd> --help` for more options.

## Accounts

Let's confirm our transaction went through by checking on the account:

```
mintinfo accounts 00112233445566778899aabbccddeeff00112233
```

The balance should be `5` !

We could get just the balance by doing

```bash
mintinfo accounts 00112233445566778899aabbccddeeff00112233 balance
```

Wherever possible, `mintinfo` allows you to specify sub-fields of the returned objects.

## Mintx Commands and Flags

`mintx` has lots more transaction types:

```
Available Commands:
  version     print the mintx version
  send        mintx send --amt <amt> --to <addr>
  call        mintx call --amt <amt> --fee <fee> --gas <gas> --to <contract addr> --data <data>
  name        mintx name --amt <amt> --name <name> --data <data>
  bond        mintx bond --pubkey <pubkey> --amt <amt> --unbond-to <address>
  unbond      mintx unbond --addr <address> --height <block_height>
  rebond      mintx rebond --addr <address> --height <block_height>
  permission  mintx perm <function name> <args ...>
```

Each takes a multitide of flags.
We've seen the `--sign --broadcast` flags, which send the transaction to eris-keys for signing and to a known tendermint node for broadcasting to the rest of the network.
We can also pass the `--wait` flag to wait for the transaction to be committed in a block, and to find out which block.
If the transaction is a call to a contract, using the `--wait` flag allows us to get the return value of the call.

`mintx` can also be used for creating transactions to be signed offline. Normally, the transaction nonce (which tracks the number of transactions sent by the account) is fetched from the blockchain and filled in automatically. But if you know it ahead of time (`mintinfo accounts <addr> sequence`), then on an offline computer you can use the `--nonce` flag to specify and the `--sign --binary` flags to sign the transaction and return the binary encoding as a hex string. Then take that hex string and run

```bash
mintinfo broadcast <hex encoded transaction>
```

to broadcast the signed transaction to the network.

## Create a Contract

Let's deploy a simple contract. Here's one that will store the value `5`, and then will add 1 to any value sent to it in the future.

```bash
export CODE=0x600560005568(35600160005260206000F3)60005260206000F3
```

In assembly, this would look like:

```asm
PUSH1 0x5 PUSH1 0x0 SSTORE PUSH9 CALLDATALOAD PUSH1 0x1 ADD PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 RETURN PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 RETURN
```

To deploy the contract, we use a create transaction:

```bash
mintx create --code $CODE --amt 1 --fee 0 --gas 1000 --sign --broadcast --wait
```

The command should hang for a few seconds before dumping the block and the new contract's address.
Now we know the contract has been created on the chain.

Let's check the storage to ensure the `5` was stored:

```bash
mintinfo storage <new contract address>
```

Great! And the account should have some code to:

```bash
mintinfo accounts <new contract address> code
```

## Call a Contract

Ok, let's call the contract! Since it just returns anything we send it plus one, lets send it the lucky number `7`:

```bash
mintx call --to <new contract address> --amt 1 --fee 0 --data 0x7 --sign --broadcast --wait
```

Again it will take a couple seconds, and again we should see the block get dumped. But we should also see a return value, and of course it should be `8`!

So that's great, but working at such a low-level can be a bit of a pain, unless you feel writing ethereum virtual machine byte code fun (as I for ungodly reasons do). But the mint-client is *supposed* to be a low-level too. If you want to write contracts in solidity or any other language, you can compile them, and then pass the result to `mintx`. Perhaps you have custom optimizations for the compilers, have your own ethereum language, or want to write custom code. Perhaps you just want to play around at a low-level to understand how ethereum really works. Then `mintx` is for you.

If you like the feel of `mintx` but want a better pipeline for contracts, [checkout the eris package manage](https://github.com/eris-ltd/eris-pm) - it's what's become of `epm`, if you remember epm ;)

## More

`mintx` offers other transaction types too. `mintx name` allows us to make entries in the name registrar, and `mintx permission` offers some administrative commands for managing account permissions via tendermint's permissioning system. The rest of the transaction types are for participating in the consensus.

See the [mint-client tests](https://github.com/eris-ltd/mint-client/blob/master/DOCKER/linked/test.sh) for more examples.

An identical version of the `mintgen`, `mintx`, and `mintinfo` tools were built for ethereum: `https://github.com/eris-ltd/eth-client`

# Javascript
#
#

# Getting Started - Docker

Now that you've had some experience with setting up a chain and using the mint-client tools, let's see how to do it using `eris-cli`.

`eris-cli` does much more than setup blockchains, but we maintain a specific docker image, `eris/erisdb`,
that works tightly with the `eris-cli` tool and which simplifies chain setup.
The `mint-client` tools are available in that image and work the same way, but with everything isolated in a container,
the environment is "cleaner", easier to replicate, and more manageable.

Indeed, the whole point of docker is to eliminate the headache of installing and configuring programs on your machine.

But of course docker can't quite eliminate the need to install docker.

## Install Docker

The easiest way to get docker, assuming you are on ubuntu, is to run

```bash
curl -sSL https://get.docker.com/ubuntu/ | sudo sh
```

If you are on mac or windows, you'll need to use [the docker toolbox](https://www.docker.com/toolbox).

## Install eris-cli

Now, to install the eris-cli:

```bash
go get github.com/eris-ltd/eris-cli/cmd/eris
```

Run `eris init` to initialize things.

Now type `eris` to see the list of commands.

# eris

The `eris` tool was designed around the notion of `service definition` files. `eris init` should have created a `.eris` folder for you, with some default service definition files in `~/.eris/services`.
A service definition file simply tells `eris` how to start some service. That includes a docker image for the service, what ports to expose, any relevant environment variables, and what services it might depend on. If you are familiar with `docker-compose`, its quite similar, but with more opinions.

What are those opinions?

Mainly that you should store all your files on `ipfs` and build services backed by blockchains :D

If you now run `eris services start keys`, it will pull the `eris-keys` image (from DockerHub) and start the eris-keys service in a docker container. Running `eris services ps` should show you the running keys service.

To see the known services, run `eris services known`, and to see those that are running or stopped, run `eris services ls`.

# Chains vs Services

While the `eris` tool is used for managing services, it gives special status to a certain kind of service, namely, blockchains.

The `eris chains` command is tightly integrated with our `erisdb` docker image, which wraps tendermint and the `mint-client` to give a more seemless user experience. Aside from a few opinionated design decisions, chains work just like services, and you can see the default chain definition file in `~/.eris/blockchains/default.toml`.

# New Chain

Launching a new chain is as simple as

```bash
eris chains new <chain_id>
```

If you now `eris chains ps`, you should see the running chain container.

If you want to see the `genesis.json` or `config.toml` that were created, just

```bash
eris chains plop <chain_id> genesis
eris chains plop <chain_id> config
```

Run `eris chains new --help` to see the different options for the `new` command.

It's basically a wrapper around `mintgen` and `mintconfig`. You can pass a `csv` file for accounts and for validators, and a list of config options.

You can also use `mintgen` and `mintconfig` natively to prepare a folder, and then pass in the whole folder with the `--dir` flag.

Once the chain is running, you can use the `mintinfo` and `mintx` tools as before to talk to it. Functionally, everything will work the same, but under the hood the keys server and the blockchain are running in containers. If you like, the `mintinfo` and `mintx` commands can be run from inside the containers too, but we'll leave that to another post.


# Chain-based Services

Ok now for something more interesting. You may have heard about `mindy`, our blockchain based DNS service. Let's use what we've learned to setup a one node mindy service and register a dns name.

First, you'll need to grab the mindy service definition. If you run `eris init --pull`, it should grab it for you. `eris services known` should now include `mindy`.

Now, the mindy service definition file has the following line:

```
chains = $chain:mint:l
```

Ignore the `:mint:l` part for now. `chains = $chain` means that when we start a mindy service, we have to specify a blockchain to use.

Since we already started a blockchain above (`eris chains new <chain_id>`), let's use that one:

```bash
eris services start mindy --chain=<chain_id>
```

If you now run `eris services ps`, you should see a `mindy` service, as well as a `tinydns` service. That's because mindy depends on tinydns, which acts as the actual dns server. All that `mindy` does is shuffle data from the blockchain to the `tinydns` zone file.

Ok, now that `mindy` is running, let's send a transaction to register a dns name. Of course, this will only work on the larger internet if you own the relevent domain name and point the name servers to the box you have mindy on. Since I won't assume you're doing that, we'll just use the `dig` tool to query a specific dns server.

First, the registration transaction:

```bash
IP=0.0.0.0
DATA="[{\"fqdn\":\"mysite.io\", \"address\":\"$IP\", \"type\":\"NS\"}, {\"fqdn\":\"mysite.io\", \"address\":\"$IP\", \"type\":\"A\"}]"
mintx name --name mysite.io --data "$DATA" --amt 1000000 --fee 0 --sign --broadcast
```

The DATA is admittedly overly verbose. But these are plumbing tools. Expect the porcelain to come soon.

Now wait about 10 seconds for the tinydns file to be updated by mindy.

Now

dig +short @0.0.0.0 mysite.io



































