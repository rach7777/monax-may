---

layout: single
title:      "Documentation | eris:cli | eris config"

---

# eris config

Manage configuration settings.

## Synopsis

Display and manage configuration settings for various components of the
Eris platform and for the platform itself.

The [eris config] command is only for configuring the Eris platform:
it will not work to configure any of the blockchains, services
or projects which are managed by the Eris platform. To configure
blockchains use [eris chains config]; to configure services use [eris services config];
to configure projects use [eris projects config] command.

```bash
eris config
```

## Options inherited from parent commands

```
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## Subcommands

* [eris config edit](/docs/documentation/cli/latest/eris_config_edit/)	 - Edit a config for in an editor.
* [eris config set](/docs/documentation/cli/latest/eris_config_set/)	 - Set a config value.
* [eris config show](/docs/documentation/cli/latest/eris_config_show/)	 - Display the config.

## See Also

* [eris](/docs/documentation/cli/latest/eris/)	 - The Blockchain Application Platform

## Specifications

* [Actions Specification](/docs/documentation/cli/latest/actions_specification/)
* [Chains Specification](/docs/documentation/cli/latest/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/latest/contracts_specification/)
* [Motivation](/docs/documentation/cli/latest/motivation/)
* [Services Specification](/docs/documentation/cli/latest/services_specification/)

