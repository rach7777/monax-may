---

layout: single
title:      "Documentation | eris:cli | eris keys"

---

# eris keys

Do specific tasks with keys *for dev only*.

## Synopsis

The keys subcommand is an opiniated wrapper around
eris-keys and requires a keys container to be running.

It is for development only. Advanced functionality is available via
the [eris services exec keys "eris-keys CMD"] command.

See https://docs.erisindustries.com/documentation/eris-keys/ for more info.

```bash
eris keys
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## Subcommands

* [eris keys convert](/docs/documentation/cli/0.11.4/eris_keys_convert/)	 - Convert and eris-keys key to tendermint key
* [eris keys export](/docs/documentation/cli/0.11.4/eris_keys_export/)	 - Export a key from container to host.
* [eris keys gen](/docs/documentation/cli/0.11.4/eris_keys_gen/)	 - Generates an unsafe key using the keys container.
* [eris keys import](/docs/documentation/cli/0.11.4/eris_keys_import/)	 - Import a key to container from host.
* [eris keys ls](/docs/documentation/cli/0.11.4/eris_keys_ls/)	 - List keys on host and in running keys container
* [eris keys pub](/docs/documentation/cli/0.11.4/eris_keys_pub/)	 - Returns a machine readable pubkey given an address.

## See Also

* [eris](/docs/documentation/cli/0.11.4/eris/)	 - The Blockchain Application Platform

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.4/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.4/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.4/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.4/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.4/services_specification/)

