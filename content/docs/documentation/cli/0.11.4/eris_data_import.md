---

layout: single
title:      "Documentation | eris:cli | eris data import"

---

# eris data import

Import from a host folder to a named data container's directory

## Synopsis

Import from a host folder to a named data container's directory.
Requires src and dest for each host and container, respectively.
Container path enters at /home/eris/.eris and destination directory
will be created in container if it does not exist.

Command will also create a new data container if data container
(NAME) does not exist.

```bash
eris data import NAME SRC DEST
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris data](/docs/documentation/cli/0.11.4/eris_data/)	 - Manage data containers for your application.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.4/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.4/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.4/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.4/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.4/services_specification/)

