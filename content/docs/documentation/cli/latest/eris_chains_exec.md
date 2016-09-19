---

layout: single
title:      "Documentation | eris:cli | eris chains exec"

---

# eris chains exec

Run a command or interactive shell

## Synopsis

Run a command or interactive shell in a container
with volumes-from the data container

```bash
eris chains exec NAME
```

## Options

```
      --image="": Docker image
  -i, --interactive[=false]: interactive shell
  -p, --publish[=false]: publish random ports
```

## Options inherited from parent commands

```
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## See Also

* [eris chains](/docs/documentation/cli/latest/eris_chains/)	 - Start, stop, and manage blockchains.

## Specifications

* [Actions Specification](/docs/documentation/cli/latest/actions_specification/)
* [Chains Specification](/docs/documentation/cli/latest/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/latest/contracts_specification/)
* [Motivation](/docs/documentation/cli/latest/motivation/)
* [Services Specification](/docs/documentation/cli/latest/services_specification/)

