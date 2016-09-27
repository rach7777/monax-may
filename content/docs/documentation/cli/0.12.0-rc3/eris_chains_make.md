---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris chains make"

---

# eris chains make

Create Necessary Files For Your Chain

## Usage

```bash
eris chains make NAME
```

## Synopsis

create necessary files for your chain

Make is an opinionated gateway to the basic types of chains which most Eris users
will make most of the time. Make is also a command line wizard in which 
you will let the marmots know how you would like your genesis created.

Make can also be used with a variety of flags for fast chain making.

When using make with the --known flag the marmots will *not* create keys for you
and will instead assume that the keys exist somewhere. When using make with the
wizard (no flags) or when using with the other flags then keys will be made along
with the genesis.jsons and priv_validator.jsons so that everything is ready to go
for you to [eris chains start].

Optionally chains make provides packages of outputted priv_validator and genesis.json
which you can email or send on your slack to your coworkers. These packages can
be tarballs or zip files, and **they will contain the private keys** so please
be aware of that.

The make process will *not* start a chain for you. You will want to use
the [eris chains start NAME --init-dir ~/.eris/chains/NAME] for that 
which will import all of the files which make creates into containers and 
start your shiny new chain.

If you have any questions on eris chains make, please see the Eris CM (chain manager)
documentation here:
https://docs.erisindustries.com/documentation/eris-cm/latest/eris-cm/


## Options

```bash
  --account-types value   what number of account types should we use? find these in ~/.eris/chains/account-types; incompatible with and overrides chain-type (default [])
      --accounts string       comma separated list of the accounts.csv files you would like to utilize (requires --known flag)
      --chain-type string     which chain type definition should we use? find these in ~/.eris/chains/chain-types
  -x, --data                  remove data containers after stopping (default true)
      --known                 use csv for a set of known keys to assemble genesis.json (requires both --accounts and --validators flags
      --output                should eris-cm provide an output of its job (default true)
      --tar                   instead of making directories in ~/.eris/chains, make tarballs; incompatible with and overrides zip
      --validators string     comma separated list of the validators.csv files you would like to utilize (requires --known flag)
  -w, --wizard                summon the interactive chain making wizard
      --zip                   instead of making directories in ~/.eris/chains, make zip files
```

## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris chains](/docs/documentation/cli/0.12.0-rc3/eris_chains/) - start, stop, and manage blockchains


# Quick Tips

```bash
$ eris chains make myChain --wizard -- will use the interactive chain-making wizard and make your chain named myChain
$ eris chains make myChain -- will use the simplechain definition file to make your chain named myChain (non-interactive); use the [--chain-type] flag to specify chain types
$ eris chains make myChain --account-types=Root:1,Developer:0,Validator:0,Participant:1 -- will use the flag to make your chain named myChain (non-interactive)
$ eris chains make myChain --known --validators /path/to/validators.csv --accounts /path/to/accounts.csv -- will use the csv file to make your chain named myChain (non-interactive) (won't make keys)
$ eris chains make myChain --tar -- will create the chain and save each of the "bundles" as tarballs which can be used by colleagues to start their chains
```

# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

