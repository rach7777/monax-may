---

layout: single
title:      "Documentation | eris:cli | eris keys gen"

---

# eris keys gen

Generates an unsafe key using the keys container.

## Synopsis

Generates a key using the keys container.
WARNING: this command is not safe for production.
For development only.

Key is saved in keys data container and can be
exported to host with: [eris keys export]

Command is equivalent to: [eris services exec keys "eris-keys gen --no-pass"]

```bash
eris keys gen
```

## Options inherited from parent commands

```
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## See Also

* [eris keys](/docs/documentation/cli/latest/eris_keys/)	 - Do specific tasks with keys *for dev only*.

## Specifications

* [Actions Specification](/docs/documentation/cli/latest/actions_specification/)
* [Chains Specification](/docs/documentation/cli/latest/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/latest/contracts_specification/)
* [Motivation](/docs/documentation/cli/latest/motivation/)
* [Services Specification](/docs/documentation/cli/latest/services_specification/)

