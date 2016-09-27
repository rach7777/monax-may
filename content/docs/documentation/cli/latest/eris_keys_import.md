---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris keys import"

---

# eris keys import

Import A Key To Container From Host

## Usage

```bash
eris keys import ADDR
```

## Synopsis

import a key to container from host

Takes a key from ~/.eris/keys/data/ADDR/ADDR
on the host and copies it to /home/eris/.eris/keys/data/ADDR/ADDR
in the keys container.


## Options

```bash
  --addr string   address of key to import
      --all           import all keys. do not provide any arguments
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

