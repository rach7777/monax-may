---

layout: single
title:      "Documentation | eris:cli | eris chains make-genesis"

---

# eris chains make-genesis

Generates a genesis file.

## Synopsis

Generates a genesis file with chainNAME and a single pubkey.

Command is equivalent to: [eris chains exec someChain "mintgen known NAME KEY"]

but does not require a pre-existing chain to execute.

see https://github.com/eris-ltd/mint-client for more info

```bash
eris chains make-genesis NAME KEY
```

## Options inherited from parent commands

```
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## See Also

* [eris chains](/docs/documentation/cli/0.11.0/eris_chains/)	 - Start, stop, and manage blockchains.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.0/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.0/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.0/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.0/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.0/services_specification/)

