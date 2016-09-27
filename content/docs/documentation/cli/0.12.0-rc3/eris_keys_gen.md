---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris keys gen"

---

# eris keys gen

Generates An Unsafe Key In The Keys Container

## Usage

```bash
eris keys gen
```

## Synopsis

generates an unsafe key in the keys container

Key is created in keys data container and can be exported to host
by using the [--save] flag or by running [eris keys export ADDR].


## Options

```bash
  --save   export the key to host following creation
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

