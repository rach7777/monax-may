---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris files"

---

# eris files

Manage Files Needed For Your Application Using IPFS

## Usage

```bash
eris files
```

## Synopsis

the files subcommand is used to import, and export
files to and from IPFS for use on the host machine

These commands are provided in addition to the various
functionality which is included throughout the tool, such as
services import or services export which operate more
precisely. The eris files command is used as a general wrapper
around an IPFS gateway which would be running as eris services ipfs.

At times, due to the manner in which IPFS boots files commands
will fail. If you get errors when running eris files commands
then please run [eris services start ipfs] give that a second
or two to boot and then retry the eris files command which failed.




## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

# Subcommands

* [eris files get](/docs/documentation/cli/0.12.0-rc3/eris_files_get/) - pull files/objects from IPFS via a hash and save them locally, requires the [--output] flag
* [eris files put](/docs/documentation/cli/0.12.0-rc3/eris_files_put/) - post files or whole directories to IPFS
* [eris files cache](/docs/documentation/cli/0.12.0-rc3/eris_files_cache/) - cache files to IPFS
* [eris files cat](/docs/documentation/cli/0.12.0-rc3/eris_files_cat/) - cat the contents of a file from IPFS
* [eris files ls](/docs/documentation/cli/0.12.0-rc3/eris_files_ls/) - list links from an IPFS object
* [eris files cached](/docs/documentation/cli/0.12.0-rc3/eris_files_cached/) - list files cached locally


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

