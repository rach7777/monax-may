---

layout: single
title:      "Documentation | eris:cli | eris files put"

---

# eris files put

Post files or whole directories to IPFS.

## Synopsis

Post files or whole directories to IPFS.
Directories will be added as objects in the MerkleDAG.

```bash
eris files put FILE/DIR
```

## Options

```
      --gateway string   specify a hosted gateway. default is IPFS' gateway; type "eris" for our gateway, or use your own with "http://yourhost"
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris files](/docs/documentation/cli/0.11.4/eris_files/)	 - Manage files needed for your application using IPFS.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.4/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.4/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.4/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.4/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.4/services_specification/)

