---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris keys"

---

# eris keys

Do Specific Tasks With Keys

## Usage

```bash
eris keys
```

## Synopsis

the keys subcommand is an opiniated wrapper around
[eris-keys] and requires a keys container to be running

It is for development only. Advanced functionality is available via
the [eris services exec keys "eris-keys CMD"] command.

See https://docs.erisindustries.com/documentation/eris-keys/ for more info.




## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

# Subcommands

* [eris keys gen](/docs/documentation/cli/0.12.0-rc3/eris_keys_gen/) - generates an unsafe key in the keys container
* [eris keys export](/docs/documentation/cli/0.12.0-rc3/eris_keys_export/) - export a key from container to host
* [eris keys import](/docs/documentation/cli/0.12.0-rc3/eris_keys_import/) - import a key to container from host
* [eris keys ls](/docs/documentation/cli/0.12.0-rc3/eris_keys_ls/) - list keys on host and in running keys container


## See Also

* [eris](/docs/documentation/cli/0.12.0-rc3/eris/) - The Ecosystem Application Platform




# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

