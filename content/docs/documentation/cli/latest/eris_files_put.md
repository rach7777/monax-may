---

layout: single
title:      "Documentation | eris:cli | eris files put"

---

# eris files put

Post files to IPFS.

## Synopsis

Post files to IPFS.

Optionally post all contents of a directory with: put --dir=DIRNAME

```bash
eris files put FILE
```

## Options

```
      --dir[=false]: add all files from a directory (note: this will not create an ipfs object). returns a log file (ipfs_hashes.csv) to pass into `eris files get`
      --gateway="": specify a hosted gateway. default is IPFS' gateway; type "eris" for our gateway, or use your own with "http://yourhost"
```

## Options inherited from parent commands

```
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## See Also

* [eris files](/docs/documentation/cli/latest/eris_files/)	 - Manage files needed for your application using IPFS.

## Specifications

* [Actions Specification](/docs/documentation/cli/latest/actions_specification/)
* [Chains Specification](/docs/documentation/cli/latest/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/latest/contracts_specification/)
* [Motivation](/docs/documentation/cli/latest/motivation/)
* [Services Specification](/docs/documentation/cli/latest/services_specification/)

