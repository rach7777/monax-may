---

layout: single
title:      "Documentation | eris:cli | eris services import"

---

# eris services import

Import a service definition file from IPFS.

## Synopsis

Import a service for your platform.

```bash
eris services import NAME HASH
```

## Examples

```bash
$ eris services import eth QmQ1LZYPNG4wSb9dojRicWCmM4gFLTPKFUhFnMTR3GKuA2
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
