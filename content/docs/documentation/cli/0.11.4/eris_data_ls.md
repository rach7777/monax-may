---

layout: single
title:      "Documentation | eris:cli | eris data ls"

---

# eris data ls

List the data containers eris manages for you

## Synopsis

List data containers.

The --json flag dumps the container or known files information
in the JSON format.

The -f flag specifies an alternate format for the list, using the syntax
of Go text templates. See the more detailed description in the help
output for the [eris ls] command.

```bash
eris data ls
```

## Examples

```bash
$ eris data ls -f '{{.ShortName}}\t{{.Info.Config.Image}}\t{{index .Labels "eris:SERVICE"}}' -- show data container image and owner service name
$ eris data ls -f '{{.ShortName}}\t{{.Info.Config.Volumes}}\t{{.Info.Config.Mounts}}' -- show data container volumes and mounts
$ eris data ls -f '{{.ShortName}}\t{{.Info.Config.Env}}' -- container environment
```

## Options

```
  -a, --all             dummy flag for symmetry with [services ls -a] and [chains ls -a]
  -f, --format string   alternate format for columnized output
      --json            machine readable output
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

