---

layout:     documentation
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

* [eris chains](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/eris_chains/)	 - Start, stop, and manage blockchains.

## Specifications

* [Actions Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/actions_specification/)
* [Chains Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/chains_specification/)
* [Contracts Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/contracts_specification/)
* [Motivation](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/motivation/)
* [Services Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.4/services_specification/)

