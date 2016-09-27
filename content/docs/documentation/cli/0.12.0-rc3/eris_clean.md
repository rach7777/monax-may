---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris clean"

---

# eris clean

Clean Up Your Eris Working Environment

## Usage

```bash
eris clean
```

## Synopsis

by default, this command will stop and force remove all Eris containers
(chains, services, data, etc.) and clean the scratch path, as well as latent directories
and files in the ~/.eris/chains directory. Addtional flags can be used to remove 
the Eris home directory and Eris images. Useful for rapid development 
with Docker containers


## Options

```bash
  -a, --all          removes everything, stopping short of uninstalling eris
      --chains       remove latent chain data in ~/.eris/chains (default true)
  -c, --containers   remove all eris containers (default true)
      --dir          remove the eris home directory in ~/.eris
  -i, --images       remove all eris docker images
  -s, --scratch      remove contents of ~/.eris/scratch (default true)
  -y, --yes          overrides prompts prior to removing things
```

## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



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

