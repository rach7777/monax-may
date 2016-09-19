---

layout: single
title:      "Documentation | eris:cli | eris clean"

---

# eris clean

Cleans up your eris working environment

## Synopsis

Stops and force removes all eris containers
	(chains, services, datas, etc) by default. Useful
	for development.

```bash
eris clean
```

## Options

```
      --all[=false]: removes everything, stopping short of uninstalling eris
      --dir[=false]: remove the eris home directory ~/.eris
      --images[=false]: remove all eris docker images
  -y, --yes[=false]: overrides prompts prior to removing things
```

## Options inherited from parent commands

```
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## See Also

* [eris](/docs/documentation/cli/latest/eris/)	 - The Blockchain Application Platform

## Specifications

* [Actions Specification](/docs/documentation/cli/latest/actions_specification/)
* [Chains Specification](/docs/documentation/cli/latest/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/latest/contracts_specification/)
* [Motivation](/docs/documentation/cli/latest/motivation/)
* [Services Specification](/docs/documentation/cli/latest/services_specification/)

