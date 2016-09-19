---

layout: single
title:      "Documentation | eris:cli | eris services update"

---

# eris services update

Update an installed service.

## Synopsis

Update an installed service, or install it if it has not been installed.

Functionally this command will perform the following sequence of steps:

1. Stop the service (if it is running).
2. Remove the container which ran the service.
3. Pull the image the container uses from a hub.
4. Rebuild the container from the updated image.
5. Restart the service (if it was previously running).

NOTE: If the service uses data containers, those will not be affected
by the [eris update] command.

```bash
eris services update NAME
```

## Options

```
  -e, --env value      multiple env vars can be passed using the KEY1=val1,KEY2=val2 syntax (default [])
  -l, --links value    multiple containers can be linked can be passed using the KEY1:val1,KEY2:val2 syntax (default [])
  -p, --pull           pull an updated version of the service's base service image from docker hub
  -t, --timeout uint   manually set the timeout; overridden by --force (default 10)
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris services](/docs/documentation/cli/0.11.3/eris_services/)	 - Start, stop, and manage services required for your application

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.3/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.3/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.3/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.3/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.3/services_specification/)

