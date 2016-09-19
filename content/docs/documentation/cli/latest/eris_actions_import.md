---

layout: single
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
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## See Also

* [eris actions](/docs/documentation/cli/latest/eris_actions/)	 - Manage and perform structured actions.

## Specifications

* [Actions Specification](/docs/documentation/cli/latest/actions_specification/)
* [Chains Specification](/docs/documentation/cli/latest/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/latest/contracts_specification/)
* [Motivation](/docs/documentation/cli/latest/motivation/)
* [Services Specification](/docs/documentation/cli/latest/services_specification/)

