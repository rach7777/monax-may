---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris chains ls"

---

# eris chains ls

Lists Everything Chain Related

## Usage

```bash
eris chains ls
```

## Synopsis

list chains or known chain definition files

The -r flag limits the output to running chains only.

The --json flag dumps the container or known files information
in the JSON format.

The -q flag is equivalent to the '{{.ShortName}}' format.

The -f flag specifies an alternate format for the list, using the syntax
of Go text templates. See the more detailed description in the help
output for the [eris ls] command.


## Options

```bash
  -a, --all             show extended output
  -f, --format string   alternate format for columnized output
      --json            machine readable output
  -q, --quiet           show a list of chain names
  -r, --running         show running containers
```

## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris chains](/docs/documentation/cli/0.12.0-rc3/eris_chains/) - start, stop, and manage blockchains


# Quick Tips

```bash
$ eris chains ls -f '{{.ShortName}} {{.Info.Config.Image}} {{ports .Info}}'
$ eris chains ls -f '{{.ShortName}}\t{{.Info.State}}'
```

# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

