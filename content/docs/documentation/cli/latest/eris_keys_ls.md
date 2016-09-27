---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris keys ls"

---

# eris keys ls

List Keys On Host And In Running Keys Container

## Usage

```bash
eris keys ls
```

## Synopsis

list keys on host and in running keys container

Specify location with flags --host or ---container.

Latter flag is equivalent to: [eris services exec keys "ls /home/eris/.eris/keys/data"]


## Options

```bash
  --container   list keys in container in /home/eris/.eris/keys/data
      --host        list keys on host in ~/.eris/keys/data
```

## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris keys](/docs/documentation/cli/0.12.0-rc3/eris_keys/) - do specific tasks with keys




# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

