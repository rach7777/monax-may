---

layout: single
title:      "Documentation | eris:cli | eris services"

---

# eris services

Start, stop, and manage services required for your application

## Synopsis

Start, stop, and manage services required for your application.

Eris services are "things that you turn on or off". They are meant to be long
running microservices on which your application relies. They can be public
blockchains, services your application needs, workers, bridges to other data
or process management systems, or pretty much any process that has a docker
image.

```bash
eris services
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## Subcommands

* [eris services cat](/docs/documentation/cli/0.11.3/eris_services_cat/)	 - Display the service definition file.
* [eris services edit](/docs/documentation/cli/0.11.3/eris_services_edit/)	 - Edit a service.
* [eris services exec](/docs/documentation/cli/0.11.3/eris_services_exec/)	 - Run a command or interactive shell
* [eris services export](/docs/documentation/cli/0.11.3/eris_services_export/)	 - Export a service definition file to IPFS.
* [eris services import](/docs/documentation/cli/0.11.3/eris_services_import/)	 - Import a service definition file from IPFS.
* [eris services inspect](/docs/documentation/cli/0.11.3/eris_services_inspect/)	 - Machine readable service operation details.
* [eris services logs](/docs/documentation/cli/0.11.3/eris_services_logs/)	 - Display the logs of a running service.
* [eris services ls](/docs/documentation/cli/0.11.3/eris_services_ls/)	 - Lists everything service related.
* [eris services new](/docs/documentation/cli/0.11.3/eris_services_new/)	 - Create a new service.
* [eris services ports](/docs/documentation/cli/0.11.3/eris_services_ports/)	 - Print port mappings
* [eris services rename](/docs/documentation/cli/0.11.3/eris_services_rename/)	 - Rename an installed service.
* [eris services rm](/docs/documentation/cli/0.11.3/eris_services_rm/)	 - Remove an installed service.
* [eris services start](/docs/documentation/cli/0.11.3/eris_services_start/)	 - Start a service.
* [eris services stop](/docs/documentation/cli/0.11.3/eris_services_stop/)	 - Stop a running service.
* [eris services update](/docs/documentation/cli/0.11.3/eris_services_update/)	 - Update an installed service.

## See Also

* [eris](/docs/documentation/cli/0.11.3/eris/)	 - The Blockchain Application Platform

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.3/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.3/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.3/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.3/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.3/services_specification/)

