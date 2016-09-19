---

layout: single
title:      "Documentation | eris:cli | eris chains ports"

---

# eris chains ports

Print the port mappings.

## Synopsis

Print the port mappings.

eris chains ports is mostly a developer convenience function.
It returns a machine readable port mapping of a port which is
exposed inside the container to what that port is mapped to
on the host.

This is useful when stitching together chain networks which
need to know how to connect into a specific chain (perhaps
with or without a container number) container.

```bash
eris chains ports
```

## Examples

```bash
$ eris chains ports myChain 1337 -- will display what port on the host is mapped to the eris:db API port
$ eris chains ports myChain 46656 -- will display what port on the host is mapped to the eris:db peer port
$ eris chains ports myChain 46657 -- will display what port on the host is mapped to the eris:db rpc port
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

