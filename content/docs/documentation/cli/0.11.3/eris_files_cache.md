---

layout: single
title:      "Documentation | eris:cli | eris files cache"

---

# eris files cache

Cache files to IPFS.

## Synopsis

Cache files to IPFS' local daemon.

It caches files locally via IPFS pin, by hash.
Optionally pass in a CSV with: cache --csv=[FILE].

NOTE: "put" will "cache" recursively by default.

```bash
eris files cache HASH
```

## Options

```
      --csv string   specify a .csv with entries of format: hash,fileName
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

