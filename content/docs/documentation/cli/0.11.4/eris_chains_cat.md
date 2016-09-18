---

layout:     documentation
title:      "Documentation | eris:cli | eris chains cat"

---

# eris chains cat

Display chain information.

## Synopsis

Display chain information.

```bash
eris chains cat NAME [config|genesis]
```

## Examples

```bash
$ eris chains cat simplechain -- will display the chain definition file
$ eris chains cat simplechain config -- will display the config.toml file from inside the container
$ eris chains cat simplechain genesis -- will display the genesis.json file from the container
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

