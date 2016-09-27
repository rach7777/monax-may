---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris data ls"

---

# eris data ls

List The Data Containers Eris Manages For You

## Usage

```bash
eris data ls
```

## Synopsis

list data containers.

The --json flag dumps the container or known files information
in the JSON format.

The -f flag specifies an alternate format for the list, using the syntax
of Go text templates. See the more detailed description in the help
output for the [eris ls] command.


## Options

```bash
  -a, --all             dummy flag for symmetry with [services ls -a] and [chains ls -a]
  -f, --format string   alternate format for columnized output
      --json            machine readable output
```

## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris data](/docs/documentation/cli/0.12.0-rc3/eris_data/) - manage data containers for your application


# Quick Tips

```bash
$ eris data ls -f '{{.ShortName}}\t{{.Info.Config.Image}}\t{{index .Labels "eris:SERVICE"}}' -- show data container image and owner service name
$ eris data ls -f '{{.ShortName}}\t{{.Info.Config.Volumes}}\t{{.Info.Config.Mounts}}' -- show data container volumes and mounts
$ eris data ls -f '{{.ShortName}}\t{{.Info.Config.Env}}' -- container environment
```

# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

