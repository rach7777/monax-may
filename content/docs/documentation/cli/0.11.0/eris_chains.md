---

layout: single
title:      "Documentation | eris:cli | eris chains"

---

# eris chains

Start, stop, and manage blockchains.

## Synopsis

Start, stop, and manage blockchains.

The chains subcommand is used to work on erisdb smart contract
blockchain networks. The name is not perfect, as eris is able
to operate a wide variety of blockchains out of the box. Most
of those existing blockchains should be ran via the [eris services ...]
commands. As they fall under the rubric of "things I just want
to turn on or off". While you can develop against those
blockchains, you generally aren't developing those blockchains
themselves. [eris chains ...] commands are built to help you build
blockchains. It is our opinionated gateway to the wonderful world
of permissioned smart contract networks.

Your own blockchain/smart contract machine is just an [eris chains new]
away!

```bash
eris chains
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -n, --num int          container number (default 1)
  -v, --verbose          verbose output
```

## Subcommands

* [eris chains cat](/docs/documentation/cli/0.11.0/eris_chains_cat/)	 - Display chain information.
* [eris chains checkout](/docs/documentation/cli/0.11.0/eris_chains_checkout/)	 - Check out a chain.
* [eris chains current](/docs/documentation/cli/0.11.0/eris_chains_current/)	 - The currently checked out chain.
* [eris chains edit](/docs/documentation/cli/0.11.0/eris_chains_edit/)	 - Edit a blockchain.
* [eris chains exec](/docs/documentation/cli/0.11.0/eris_chains_exec/)	 - Run a command or interactive shell
* [eris chains export](/docs/documentation/cli/0.11.0/eris_chains_export/)	 - Export a chain definition file to IPFS.
* [eris chains graduate](/docs/documentation/cli/0.11.0/eris_chains_graduate/)	 - Graduate a chain to a service.
* [eris chains import](/docs/documentation/cli/0.11.0/eris_chains_import/)	 - Import a chain definition file from Github or IPFS.
* [eris chains inspect](/docs/documentation/cli/0.11.0/eris_chains_inspect/)	 - Machine readable chain operation details.
* [eris chains logs](/docs/documentation/cli/0.11.0/eris_chains_logs/)	 - Display the logs of a blockchain.
* [eris chains ls](/docs/documentation/cli/0.11.0/eris_chains_ls/)	 - Lists everything chain related.
* [eris chains make](/docs/documentation/cli/0.11.0/eris_chains_make/)	 - Create keys and a genesis block for your chain.
* [eris chains new](/docs/documentation/cli/0.11.0/eris_chains_new/)	 - Create and start a new blockhain.
* [eris chains ports](/docs/documentation/cli/0.11.0/eris_chains_ports/)	 - Print port mappings.
* [eris chains rename](/docs/documentation/cli/0.11.0/eris_chains_rename/)	 - Rename a blockchain.
* [eris chains rm](/docs/documentation/cli/0.11.0/eris_chains_rm/)	 - Remove an installed chain.
* [eris chains start](/docs/documentation/cli/0.11.0/eris_chains_start/)	 - Start a blockchain.
* [eris chains stop](/docs/documentation/cli/0.11.0/eris_chains_stop/)	 - Stop a running blockchain.
* [eris chains update](/docs/documentation/cli/0.11.0/eris_chains_update/)	 - Update an installed chain.

## See Also

* [eris](/docs/documentation/cli/0.11.0/eris/)	 - The Blockchain Application Platform

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.0/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.0/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.0/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.0/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.0/services_specification/)

