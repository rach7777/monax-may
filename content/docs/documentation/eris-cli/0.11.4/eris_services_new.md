---

layout:     documentation
title:      "Documentation | eris:cli | eris services new"

---

# eris services new

Create a new service.

## Synopsis

Create a new service.

Command must be given a NAME and a container IMAGE using the standard
docker format of [repository/organization/image].

```bash
eris services new NAME IMAGE
```

## Examples

```bash
$ eris services new eth eris/eth
$ eris services new mint tutum.co/tendermint/tendermint
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris services](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/eris_services/)	 - Start, stop, and manage services required for your application

## Specifications

* [Actions Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/actions_specification/)
* [Chains Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/chains_specification/)
* [Contracts Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/contracts_specification/)
* [Motivation](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/motivation/)
* [Services Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/services_specification/)

