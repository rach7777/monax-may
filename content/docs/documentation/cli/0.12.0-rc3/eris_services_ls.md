---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris services ls"

---

# eris services ls

Lists Everything Service Related

## Usage

```bash
eris services ls
```

## Synopsis

list services or known service definition files

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


## Options

```bash
  -a, --all             show extended output
  -f, --format string   alternate format for columnized output
      --json            machine readable output
  -k, --known           list all the service definition files that exist
  -q, --quiet           show a list of service names
  -r, --running         show running containers only
```

## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris services](/docs/documentation/cli/0.12.0-rc3/eris_services/) - start, stop, and manage services required for your application


# Quick Tips

```bash
$ eris services ls -f '{{.ShortName}}\t{{.Info.Config.Cmd}}\t{{.Info.Config.Entrypoint}}'
$ eris services ls -f '{{.ShortName}}\t{{.Info.Config.Image}}\t{{ports .Info}}'
$ eris services ls -f '{{.ShortName}}\t{{.Info.Config.Volumes}}\t{{.Info.Config.Mounts}}'
$ eris services ls -f '{{.Info.ID}}\t{{.Info.HostConfig.VolumesFrom}}'
```

# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

