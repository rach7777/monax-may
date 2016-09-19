---

layout: single
title:      "Documentation | eris:cli | eris chains ls"

---

# eris chains ls

Lists everything chain related.

## Synopsis

Lists all: chain definition files (--known), current existing
containers for each chain (--existing), current running containers for each
chain (--running).

If no known chains exist yet, create a new blockchain with: [eris chains new NAME]
command.

To install and fetch a blockchain from a chain definition file,
use [eris chains install NAME] command.

Services are handled using the [eris services] command.

```bash
eris chains ls
```

## Options

```
  -e, --existing[=false]: list all the all current containers which exist for a chain
  -k, --known[=false]: list all the chain definition files that exist
  -q, --quiet[=false]: machine parsable output
  -r, --running[=false]: list all the current containers which are running for a chain
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

