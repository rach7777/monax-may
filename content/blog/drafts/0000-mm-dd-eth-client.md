---

# fill in
title:     A command-line ethereum client
author: Ethan Buchman
excerpt:   "Demonstration of some tools for working with ethereum chains"
thumbnail:
category:  CAT
tags:      [TAG1, TAG2]

# use if needed
layout:    post
published: false
comments:  true
meta:      true
#thumbnail_raw:

---

# Introduction

The [live ethereum network] is up and running, and so far things have gone quite smoothly.
If you are using `geth`, you have probably discovered that the main/only interface to your chain is through a javascript console.
I'm not the biggest fan of javascript, and so in an effort to avoid it I have build some command line tools in golang for talking to and working with ethereum chain(s).

Note these tools are still in an early stage of development, so please do not use them with large sums of value on the live ethereum network (yet).

Furthermore, you may have noticed that all key management in `geth` is done in the same process running the live daemon.
In an effort to separate out this functionality, we have built `eris-keys`, a stand-alone signing daemon that works with both `secp256k1` (the keys used by bitcoin and ethereum) and `ed25519` (the keys used by everyone else who matters). Thus the tools we build for crafting/sending transactions depend on this key server.

# Grab the tools

Let's grab the tools. I will presume you have [go installed], and that you have set your `$GOPATH` and put `$GOPATH/bin` on your `$PATH`.

```bash
go get github.com/eris-ltd/eris-keys
go get github.com/eris-ltd/eth-client/...
```

Start the eris-keys server:

```bash
eris-keys server &
```

In current form, the `eth-client` has three tools:

```bash
ethgen - for creating genesis.json files
ethinfo - for querying an ethereum chain for information
ethtx - for crafting and broadcasting transactions
```

# Ethereum Test Chains

Let's boot up a test chain and send some transactions to it. First we need to generate a key:

```bash
ADDR=`eris-keys gen --type=eth`
```

This will create a new ethereum key for you and return the address (`echo $ADDR`).

Now let's create a directory for our new chain and make a genesis.json file in it using our address:

```bash
mkdir ~/.myethereum
ethgen $ADDR > ~/.myethereum
```

Splendid! Take a look at that genesis file if you like. Now let's boot the chain (we presume you already have [geth] installed):

```bash
geth --datadir ~/.myethereum --rpc --mine --genesis ~/.myethereum/genesis.json --maxpeers 0
```

This will start a private ethereum chain on your machine. Note the unfortunate reality of ethereum's proof of work means you need at least
1GB of free RAM for mining to work. It may take some time for mining to get started, but within a couple minutes you should be mining away.

# Ethereum Transactions

Now that you have a chain setup and are mining it, let's send a transaction!

First, we'll generate another account to send funds to:

```bash
ADDR2=`eris-keys gen --type=eth`
```

Now let's craft a transaction:

```bash
ethtx send --addr $ADDR --to $ADDR2 --amt 10 --gas 21000 --fee 100000 --sign --broadcast
```

The command should execute successfuly, returing the transaction ID.

We can now check the account:

```bash
mintinfo account $ADDR2
```

The balance should be `10`!

Ok, let's break down the `ethtx` command a little bit. Ethereum only has one official transaction type, but it serves three distinct purposes.
You can simply send funds from one account to another, you can create a contract, and you can call a contract.
So `ethtx` has three main commands: `send`, `call`, and `create`.
Over time, `ethtx` will incorporate commands for talking to the major dapps, to facilitate interactions with them. The first such dapp will be the name reg, and you'll be able to use `ethtx name` to register a new name there.

I should note, the `ethtx` flags accept both hex and base 10 numbers. If you are using hex, make sure to prefix with `0x`.

You can also specify a transaction's nonce with the `--nonce` flag. If no nonce is specified, the correct one is fetched from the blockchain.

The `--sign` and `--broadcast` flags allow you to specify exactly what you want to do. Maybe you only want to craft the bytes for transaction and sign it later? Maybe you only want to sign it and broadcast it later? Or maybe you want to do everything now, in which case both `--sign` and `--broadcast` are appropriate. Soon, we will add a `--wait` feature so you can wait until the transaction is actually committed in a block.

# Ethereum Contracts

Time to deploy a contract. You will need some ethereum byte code. Here is the bytecode for the simplest transaction imagineable:

```bash
0x6005600055
```

In assembly, this would look like:

```asm
PUSH1 0x5 PUSH1 0x0 SSTORE
```

The net result of this contract is that the number `0x5` gets stored at position `0x0`.

Let's deploy it:

```bash
ethtx create --data 0x6005600055 --amt 0 --gas 35000 --fee 100000 --sign --broadcast
```

TODO: ethinfo storage ...


































