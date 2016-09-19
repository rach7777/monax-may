---

layout: single
title:      "Documentation | eris:cli | eris keys"

---

# eris keys

Do specific tasks with keys *for dev only*.

## Synopsis

The keys subcommand is an opiniated wrapper around
eris-keys and requires a keys container to be running.

It is for development only.
Advanced functionality is available via: [eris services exec keys "eris-keys CMD"]

see https://docs.erisindustries.com/documentation/eris-keys/ for more info

```bash
eris keys
```

## Options inherited from parent commands

```
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## Subcommands

* [eris keys convert](/docs/documentation/cli/latest/eris_keys_convert/)	 - Convert and eris-keys key to tendermint key
* [eris keys export](/docs/documentation/cli/latest/eris_keys_export/)	 - Export a key from container to host.
* [eris keys gen](/docs/documentation/cli/latest/eris_keys_gen/)	 - Generates an unsafe key using the keys container.
* [eris keys import](/docs/documentation/cli/latest/eris_keys_import/)	 - Import a key to container from host.
* [eris keys pub](/docs/documentation/cli/latest/eris_keys_pub/)	 - Returns a machine readable pubkey given an address.

## See Also

* [eris](/docs/documentation/cli/latest/eris/)	 - The Blockchain Application Platform

## Specifications

* [Actions Specification](/docs/documentation/cli/latest/actions_specification/)
* [Chains Specification](/docs/documentation/cli/latest/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/latest/contracts_specification/)
* [Motivation](/docs/documentation/cli/latest/motivation/)
* [Services Specification](/docs/documentation/cli/latest/services_specification/)

