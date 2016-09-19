---

layout: single
title:      "Documentation | eris:cli | eris chains rm"

---

# eris chains rm

Remove an installed chain.

## Synopsis

Remove an installed chain.

Command will remove the chain's container but will not
remove the chain definition file.

```bash
eris chains rm NAME
```

## Options

```
  -x, --data    remove data containers after stopping
      --file    remove chain definition file as well as chain container
  -f, --force   kill the container instantly without waiting to exit
  -o, --vol     remove volumes (default true)
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris chains](/docs/documentation/cli/0.11.4/eris_chains/)	 - Start, stop, and manage blockchains.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.4/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.4/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.4/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.4/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.4/services_specification/)

