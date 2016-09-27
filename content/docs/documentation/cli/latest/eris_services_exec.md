---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris services exec"

---

# eris services exec

Run A Command Or Interactive Shell

## Usage

```bash
eris services exec NAME
```

## Synopsis

run a command or interactive shell in a container with volumes-from the data container


## Options

```bash
  -e, --env value       multiple env vars can be passed using the KEY1=val1,KEY2=val2 syntax (default [])
  -i, --interactive     interactive shell
  -l, --links value     multiple containers can be linked can be passed using the KEY1:val1,KEY2:val2 syntax (default [])
      --ports string    reassign ports
  -p, --publish         publish random ports
      --volume string   mount a DIR or a VOLUME to a ~/.eris/DIR inside a container
```

## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris services](/docs/documentation/cli/0.12.0-rc3/eris_services/) - start, stop, and manage services required for your application




# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

