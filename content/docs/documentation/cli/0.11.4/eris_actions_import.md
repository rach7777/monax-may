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
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris actions](/docs/documentation/cli/0.11.4/eris_actions/)	 - Manage and perform structured actions.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.4/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.4/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.4/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.4/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.4/services_specification/)
