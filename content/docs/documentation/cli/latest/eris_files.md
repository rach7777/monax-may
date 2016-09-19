---

layout: single
title:      "Documentation | eris:cli | eris files"

---

# eris files

Manage files needed for your application using IPFS.

## Synopsis

The files subcommand is used to import, and export
files to and from IPFS for use on the host machine.

These commands are provided in addition to the various
functionality which is included throughout the tool, such as
services import or services export which operate more
precisely. The eris files command is used as a general wrapper
around an IPFS gateway which would be running as eris services ipfs.

At times, due to the manner in which IPFS boots files commands
will fail. If you get errors when running eris files commands
then please run [eris services start ipfs] give that a second
or two to boot and then retry the eris files command which failed.

```bash
eris files
```

## Options inherited from parent commands

```
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## Subcommands

* [eris files cache](/docs/documentation/cli/latest/eris_files_cache/)	 - Cache files to IPFS.
* [eris files cached](/docs/documentation/cli/latest/eris_files_cached/)	 - List files cached locally.
* [eris files cat](/docs/documentation/cli/latest/eris_files_cat/)	 - Cat the contents of a file from IPFS.
* [eris files get](/docs/documentation/cli/latest/eris_files_get/)	 - Pull files from IPFS via a hash and save them locally.
* [eris files ls](/docs/documentation/cli/latest/eris_files_ls/)	 - List links from an IPFS object.
* [eris files put](/docs/documentation/cli/latest/eris_files_put/)	 - Post files to IPFS.

## See Also

* [eris](/docs/documentation/cli/latest/eris/)	 - The Blockchain Application Platform

## Specifications

* [Actions Specification](/docs/documentation/cli/latest/actions_specification/)
* [Chains Specification](/docs/documentation/cli/latest/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/latest/contracts_specification/)
* [Motivation](/docs/documentation/cli/latest/motivation/)
* [Services Specification](/docs/documentation/cli/latest/services_specification/)

