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
      --csv="": specify a .csv with entries of format: HASH,FILE
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

