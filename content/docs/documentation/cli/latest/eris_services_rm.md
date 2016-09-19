---

layout: single
title:      "Documentation | eris:cli | eris services rm"

---

# eris services rm

Remove an installed service.

## Synopsis

Remove an installed service.

Command will remove the service's container but will not remove
the service definition file.

```bash
eris services rm NAME
```

## Options

```
  -x, --data[=false]: remove data containers as well
  -f, --file[=false]: remove service definition file as well as service container
  -o, --vol[=true]: remove volumes
```

## Options inherited from parent commands

```
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## See Also

* [eris services](/docs/documentation/cli/latest/eris_services/)	 - Start, stop, and manage services required for your application.

## Specifications

* [Actions Specification](/docs/documentation/cli/latest/actions_specification/)
* [Chains Specification](/docs/documentation/cli/latest/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/latest/contracts_specification/)
* [Motivation](/docs/documentation/cli/latest/motivation/)
* [Services Specification](/docs/documentation/cli/latest/services_specification/)

