---

layout:     documentation
title:      "Documentation | eris:cli | eris chains stop"

---

# eris chains stop

Stop a running blockchain.

## Synopsis

Stop a running blockchain.

```bash
eris chains stop NAME
```

## Options

```
  -x, --data           remove data containers after stopping
  -f, --force          kill the container instantly without waiting to exit
  -r, --rm             remove containers after stopping
  -t, --timeout uint   manually set the timeout; overridden by --force (default 10)
  -o, --vol            remove volumes
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris chains](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/eris_chains/)	 - Start, stop, and manage blockchains.

## Specifications

* [Actions Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/actions_specification/)
* [Chains Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/chains_specification/)
* [Contracts Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/contracts_specification/)
* [Motivation](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/motivation/)
* [Services Specification](https://docs.erisindustries.com/documentation/eris-cli/0.11.3/services_specification/)

