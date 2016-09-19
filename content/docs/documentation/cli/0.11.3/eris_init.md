---

layout: single
title:      "Documentation | eris:cli | eris init"

---

# eris init

Initialize your work space for smart contract glory.

## Synopsis

Create the ~/.eris directory with actions and services subfolders
and clone eris-ltd/eris-actions eris-ltd/eris-services into them, respectively.

```bash
eris init
```

## Options

```
      --pull-images     by default, pulls and/or update latest primary images. use flag to skip pulling/updating of images. (default true)
      --source string   source from which to download definition files for the eris platform. if toadserver fails, use: rawgit (default "rawgit")
      --testing         DO NOT USE (for testing only)
      --yes             over-ride command-line prompts
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris](/docs/documentation/cli/0.11.3/eris/)	 - The Blockchain Application Platform

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.3/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.3/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.3/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.3/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.3/services_specification/)

