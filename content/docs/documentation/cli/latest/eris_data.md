---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris data"

---

# eris data

Manage Data Containers For Your Application

## Usage

```bash
eris data
```

## Synopsis

the data subcommand is used to import, and export
data into containers for use by your application

The [eris data import] and [eris data export] commands should be
thought of from the point of view of the container.

The [eris data import] command sends a directory *as is* from
SRC on the host to an existing DEST inside of the data container.

The [eris data export] command performs this process in the reverse.
It sucks out whatever is in the SRC directory in the data container
and sticks it back into a DEST directory on the host.

Notes:
- container paths enter at /home/eris/.eris
- import host path must be absolute, export host path is indifferent

At Eris, we use this functionality to formulate little JSONs
and configs on the host and then "stick them back into the
containers"




## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

# Subcommands

* [eris data import](/docs/documentation/cli/0.12.0-rc3/eris_data_import/) - import from a host folder to a named data container's directory
* [eris data ls](/docs/documentation/cli/0.12.0-rc3/eris_data_ls/) - list the data containers eris manages for you
* [eris data rename](/docs/documentation/cli/0.12.0-rc3/eris_data_rename/) - rename a data container
* [eris data inspect](/docs/documentation/cli/0.12.0-rc3/eris_data_inspect/) - show machine readable details
* [eris data export](/docs/documentation/cli/0.12.0-rc3/eris_data_export/) - export a named data container's directory to a host directory
* [eris data exec](/docs/documentation/cli/0.12.0-rc3/eris_data_exec/) - run a command or interactive shell in a data container
* [eris data rm](/docs/documentation/cli/0.12.0-rc3/eris_data_rm/) - remove a data container


## See Also

* [eris](/docs/documentation/cli/0.12.0-rc3/eris/) - The Ecosystem Application Platform




# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

