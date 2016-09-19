---

layout: single
title:      "Documentation | eris:cli | eris init"

---

# eris init

Initialize the ~/.eris directory with default files or update to latest version

## Synopsis

Create the ~/.eris directory with actions and services subfolders
and clone eris-ltd/eris-actions eris-ltd/eris-services into them, respectively.

```bash
eris init
```

## Options

```
      --actions[=false]: only update the default actions (requires git to be installed)
      --services[=false]: only update the default services (requires git to be installed)
  -p, --skip-pull[=false]: do not clone the default services and actions; use the flag when git is not installed
      --yes[=false]: over-ride command-line prompts (requires git to be installed)
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

