---

layout: single
title:      "Documentation | eris:cli | eris services stop"

---

# eris services stop

Stop a running service.

## Synopsis

Stop a service which is currently running.

```bash
eris services stop NAME
```

## Options

```
  -a, --all[=false]: stop the primary service and its dependent services
  -c, --chain="": specify a chain the service should also stop
  -x, --data[=false]: remove data containers after stopping
  -f, --force[=false]: kill the container instantly without waiting to exit
  -r, --rm[=false]: remove containers after stopping
  -t, --timeout=10: manually set the timeout; overridden by --force
  -o, --vol[=false]: remove volumes
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

