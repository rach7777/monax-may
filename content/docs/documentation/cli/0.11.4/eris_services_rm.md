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
  -x, --data    remove data containers after stopping
      --file    remove service definition file as well as service container
  -f, --force   kill the container instantly without waiting to exit
      --image   remove the services' docker image
  -o, --vol     remove volumes (default true)
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris services](/docs/documentation/cli/0.11.4/eris_services/)	 - Start, stop, and manage services required for your application

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.4/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.4/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.4/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.4/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.4/services_specification/)

