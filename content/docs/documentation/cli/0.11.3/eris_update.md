---

layout: single
title:      "Documentation | eris:cli | eris update"

---

# eris update

Update the eris tool.

## Synopsis

Fetch the latest version (master branch by default)
and re-install eris. Once eris is reinstalled, then the
eris init function will be called automatically for you
in order to update your definition files and images.

If you have made modifications to the default definition files
then you will want to make backups of those **before** upgrading
your eris installation.

```bash
eris update
```

## Options

```
  -b, --branch string   specify a branch to update from (default "master")
      --pull-images     by default, pulls and/or update latest primary images. use flag to skip pulling/updating of images. (default true)
      --source string   source from which to download definition files for the eris platform. if toadserver fails, use: rawgit (default "rawgit")
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

