---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris ls"

---

# eris ls

List All The Things Eris Knows About

## Usage

```bash
eris ls
```

## Synopsis

list all Eris service, chain, and data containers

The default output shows containers in three sections. The -a flag
adds a few additional informational columns for each container.

The -r flag limits the output to running services or chains only.

The --json flag dumps the container information in the JSON format.

The -f flag specifies an alternative format for the list, using the syntax
of Go text templates. If the fields to be displayed are separated by the 
'\t' tab character, the output will be columnized.

The struct being passed to the template is:

  type Details struct {
    Type      string          // container type
    ShortName string          // chain, service, or data name
    FullName  string          // container name

    Labels map[string]string  // container labels
    Info   *docker.Container  // Docker client library Container info 
  }

The full list of available fields can be observed by issuing
the [eris ls --json] command.

The default [eris ls] output is equivalent to this custom format:

  {{.ShortName}}\t{{asterisk .Info.State.Running}}\t
  {{short .Info.ID}}\t{{short (dependent .ShortName)}}

The are a few helper functions available to prefix the fields with:

  quote       quote the value
  toupper     make the value upper case
  ports       prettify exposed container ports (used as {{ports .Info}})
  short       shorten the container ID (or any other value) to 10 symbols
  asterisk    show the '*' symbol if the value is true, '-' otherwise
  dependent   find a dependent data container for the given service or chain



## Options

```bash
  -a, --all             show extended output
  -f, --format string   alternate format for columnized output
      --json            machine readable output
  -r, --running         show only running containers
```

## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris](/docs/documentation/cli/0.12.0-rc3/eris/) - The Ecosystem Application Platform


# Quick Tips

```bash
$ eris ls -rf '{{.ShortName}}, {{.Type}}, {{ports .Info}}'
$ eris ls  -f '{{.ShortName}}\t{{.Type}}\t{{.Info.NetworkSettings.IPAddress}}'
$ eris ls  -f '{{.ShortName}}\t{{.Info.Config.Env}}'
```

# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

