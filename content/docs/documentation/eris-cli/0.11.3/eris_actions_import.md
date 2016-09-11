---

layout:     documentation
title:      "Documentation | eris:cli | eris actions import"

---

# eris actions import

Import an action definition file from Github or IPFS.

## Synopsis

Import an action definition for your platform.

By default, Eris will import from ipfs.

```bash
eris actions import NAME LOCATION
```

## Examples

```bash
$ eris actions import "do not use" QmNUhPtuD9VtntybNqLgTTevUmgqs13eMvo2fkCwLLx5MX
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris actions](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/eris_actions/)	 - Manage and perform structured actions.

## Specifications

* [Actions Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/actions_specification/)
* [Chains Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/chains_specification/)
* [Contracts Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/contracts_specification/)
* [Motivation](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/motivation/)
* [Services Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/services_specification/)

