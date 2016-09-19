---

layout: single
title:      "Documentation | eris:cli | eris services inspect"

---

# eris services inspect

Machine readable service operation details.

## Synopsis

Display machine readable details about running containers.

Information available to the inspect command is provided by the Docker API.
For more information about return values, see:
https://github.com/fsouza/go-dockerclient/blob/master/container.go#L235

```bash
eris services inspect NAME [KEY]
```

## Examples

```bash
$ eris services inspect ipfs -- will display the entire information about ipfs containers
$ eris services inspect ipfs name -- will display the name in machine readable format
$ eris services inspect ipfs host_config.binds -- will display only that value
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

