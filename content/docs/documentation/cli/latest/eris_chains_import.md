---

layout: single
title:      "Documentation | eris:cli | eris chains import"

---

# eris chains import

Import a chain definition file from Github or IPFS.

## Synopsis

Import a chain definition for your platform.

By default, Eris will import from IPFS.

To list known chains use: [eris chains ls --known].

```bash
eris chains import NAME LOCATION
```

## Examples

```bash
$ eris chains import 2gather QmNUhPtuD9VtntybNqLgTTevUmgqs13eMvo2fkCwLLx5MX
```

## Options inherited from parent commands

```
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## See Also

* [eris chains](/docs/documentation/cli/latest/eris_chains/)	 - Start, stop, and manage blockchains.

## Specifications

* [Actions Specification](/docs/documentation/cli/latest/actions_specification/)
* [Chains Specification](/docs/documentation/cli/latest/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/latest/contracts_specification/)
* [Motivation](/docs/documentation/cli/latest/motivation/)
* [Services Specification](/docs/documentation/cli/latest/services_specification/)

