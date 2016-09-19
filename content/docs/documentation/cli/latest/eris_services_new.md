---

layout: single
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
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## See Also

* [eris services](/docs/documentation/cli/0.11.0/eris_services/)	 - Start, stop, and manage services required for your application.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.0/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.0/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.0/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.0/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.0/services_specification/)
