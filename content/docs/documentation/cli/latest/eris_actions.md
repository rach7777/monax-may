---

layout: single
title:      "Documentation | eris:cli | eris actions"

---

# eris actions

Manage and perform structured actions.

## Synopsis

Display and manage actions for various components of the
Eris platform and for the platform itself.

Actions are bundles of commands which rely upon a project
which is currently in scope or on a global set of actions.
Actions are held in yaml, toml, or json action-definition
files within the action folder in the eris tree (globally
scoped actions) or in a directory pointed to by the
actions field of the currently checked out project
(project scoped actions). Actions are a sequence of
commands which operate in a similar fashion to how a
circle.yml file or a .travis.yml script field may operate.

Actions execute in a series of individual sub-shells ran
on the host. Note actions do not run from inside containers
but can interact with containers either via the installed
eris commands or via the docker cli itself or, indeed, any
other programs installed *on the host*.

```bash
eris actions
```

## Options inherited from parent commands

```
  -d, --debug[=false]: debug level output
  -m, --machine="eris": machine name for docker-machine that is running VM
  -n, --num=1: container number
  -v, --verbose[=false]: verbose output
```

## Subcommands

* [eris actions do](/docs/documentation/cli/0.11.0/eris_actions_do/)	 - Perform an action.
* [eris actions edit](/docs/documentation/cli/0.11.0/eris_actions_edit/)	 - Edit an action definition file.
* [eris actions export](/docs/documentation/cli/0.11.0/eris_actions_export/)	 - Export an action definition file to IPFS.
* [eris actions import](/docs/documentation/cli/0.11.0/eris_actions_import/)	 - Import an action definition file from Github or IPFS.
* [eris actions ls](/docs/documentation/cli/0.11.0/eris_actions_ls/)	 - List all registered action definition files.
* [eris actions new](/docs/documentation/cli/0.11.0/eris_actions_new/)	 - Create a new action definition file.
* [eris actions remove](/docs/documentation/cli/0.11.0/eris_actions_remove/)	 - Remove an action definition file.
* [eris actions rename](/docs/documentation/cli/0.11.0/eris_actions_rename/)	 - Rename an action.

## See Also

* [eris](/docs/documentation/cli/0.11.0/eris/)	 - The Blockchain Application Platform

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.0/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.0/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.0/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.0/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.0/services_specification/)

