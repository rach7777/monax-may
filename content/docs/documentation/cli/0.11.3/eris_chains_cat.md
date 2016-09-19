---

layout: single
title:      "Documentation | eris:cli | eris chains cat"

---

# eris chains cat

Display chain information.

## Synopsis

Display chain information.

```bash
eris chains cat NAME [config|genesis]
```

## Examples

```bash
$ eris chains cat simplechain -- will display the chain definition file
$ eris chains cat simplechain config -- will display the config.toml file from inside the container
$ eris chains cat simplechain genesis -- will display the genesis.json file from the container
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris chains](/docs/documentation/cli/0.11.3/eris_chains/)	 - Start, stop, and manage blockchains.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.3/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.3/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.3/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.3/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.3/services_specification/)

