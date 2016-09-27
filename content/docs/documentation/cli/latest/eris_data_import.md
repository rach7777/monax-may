---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris data import"

---

# eris data import

Import From A Host Folder To A Named Data Container'S Directory

## Usage

```bash
eris data import NAME SRC DEST
```

## Synopsis

import from a host folder to a named data container's directory
Requires src and dest for each host and container, respectively.
Container path enters at /home/eris/.eris and destination directory
will be created in container if it does not exist.

Command will also create a new data container if data container
NAME does not exist




## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris data](/docs/documentation/cli/0.12.0-rc3/eris_data/) - manage data containers for your application




# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

