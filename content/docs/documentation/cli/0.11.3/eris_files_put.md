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
      --dir eris files get   add all files from a directory (note: this will not create an ipfs object). returns a log file (ipfs_hashes.csv) to pass into eris files get
      --gateway string       specify a hosted gateway. default is IPFS' gateway; type "eris" for our gateway, or use your own with "http://yourhost"
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris files](/docs/documentation/cli/0.11.3/eris_files/)	 - Manage files needed for your application using IPFS.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.3/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.3/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.3/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.3/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.3/services_specification/)

