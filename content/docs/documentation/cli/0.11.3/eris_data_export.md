---

layout: single
title:      "Documentation | eris:cli | eris data export"

---

# eris data export

Export a named data container's directory to a host directory

## Synopsis

Export a named data container's directory to a host directory.
Requires src and dest for each container and host, respectively.
Container path enters at /home/eris/.eris
Destination (host) path can be relative.

```bash
eris data export NAME SRC DEST
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris data](/docs/documentation/cli/0.11.3/eris_data/)	 - Manage data containers for your application.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.3/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.3/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.3/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.3/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.3/services_specification/)

