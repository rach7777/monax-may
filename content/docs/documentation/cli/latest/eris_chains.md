---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris chains"

---

# eris chains

Start, Stop, And Manage Blockchains

## Usage

```bash
eris chains
```

## Synopsis

start, stop, and manage blockchains

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

Your own blockchain/smart contract machine is just an [eris chains start]
away!




## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

# Subcommands

* [eris chains make](/docs/documentation/cli/0.12.0-rc3/eris_chains_make/) - create necessary files for your chain
* [eris chains new](/docs/documentation/cli/0.12.0-rc3/eris_chains_new/) - initialize a new chain
* [eris chains ls](/docs/documentation/cli/0.12.0-rc3/eris_chains_ls/) - lists everything chain related
* [eris chains checkout](/docs/documentation/cli/0.12.0-rc3/eris_chains_checkout/) - check out a chain
* [eris chains current](/docs/documentation/cli/0.12.0-rc3/eris_chains_current/) - the currently checked out chain
* [eris chains ports](/docs/documentation/cli/0.12.0-rc3/eris_chains_ports/) - print port mappings
* [eris chains start](/docs/documentation/cli/0.12.0-rc3/eris_chains_start/) - start an existing chain or initialize a new one
* [eris chains logs](/docs/documentation/cli/0.12.0-rc3/eris_chains_logs/) - display the logs of a blockchain
* [eris chains inspect](/docs/documentation/cli/0.12.0-rc3/eris_chains_inspect/) - machine readable chain operation details
* [eris chains ip](/docs/documentation/cli/0.12.0-rc3/eris_chains_ip/) - display chain IP
* [eris chains stop](/docs/documentation/cli/0.12.0-rc3/eris_chains_stop/) - stop a running blockchain
* [eris chains exec](/docs/documentation/cli/0.12.0-rc3/eris_chains_exec/) - run a command or interactive shell
* [eris chains cat](/docs/documentation/cli/0.12.0-rc3/eris_chains_cat/) - display chain information
* [eris chains restart](/docs/documentation/cli/0.12.0-rc3/eris_chains_restart/) - restart chain
* [eris chains rm](/docs/documentation/cli/0.12.0-rc3/eris_chains_rm/) - remove an installed chain


## See Also

* [eris](/docs/documentation/cli/0.12.0-rc3/eris/) - The Ecosystem Application Platform




# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

