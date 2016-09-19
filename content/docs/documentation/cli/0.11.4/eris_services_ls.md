---

layout: single
title:      "Documentation | eris:cli | eris services ls"

---

# eris services ls

Lists everything service related.

## Synopsis

List services or known service definition files.

The -r flag limits the output to running services only.

The --json flag dumps the container or known files information
in the JSON format.

The -q flag is equivalent to the '{{.ShortName}}' format.

The -f flag specifies an alternate format for the list, using the syntax
of Go text templates. See the more detailed description in the help
output for the [eris ls] command. The struct passed to the Go template
for the -k flag is this

  type Definition struct {
    Name       string       // service name
    Definition string       // definition file name
  }

The -k flag displays the known definition files.

```bash
eris services ls
```

## Examples

```bash
$ eris services ls -f '{{.ShortName}}\t{{.Info.Config.Cmd}}\t{{.Info.Config.Entrypoint}}'
$ eris services ls -f '{{.ShortName}}\t{{.Info.Config.Image}}\t{{ports .Info}}'
$ eris services ls -f '{{.ShortName}}\t{{.Info.Config.Volumes}}\t{{.Info.Config.Mounts}}'
$ eris services ls -f '{{.Info.ID}}\t{{.Info.HostConfig.VolumesFrom}}'
```

## Options

```
  -a, --all             show extended output
  -f, --format string   alternate format for columnized output
      --json            machine readable output
  -k, --known           list all the service definition files that exist
  -q, --quiet           show a list of service names
  -r, --running         show running containers only
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris services](/docs/documentation/cli/0.11.4/eris_services/)	 - Start, stop, and manage services required for your application

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.4/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.4/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.4/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.4/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.4/services_specification/)

