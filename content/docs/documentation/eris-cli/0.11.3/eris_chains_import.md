---

layout:     documentation
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
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris chains](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/eris_chains/)	 - Start, stop, and manage blockchains.

## Specifications

* [Actions Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/actions_specification/)
* [Chains Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/chains_specification/)
* [Contracts Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/contracts_specification/)
* [Motivation](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/motivation/)
* [Services Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/services_specification/)

