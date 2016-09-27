---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris chains rm"

---

# eris chains rm

Remove An Installed Chain

## Usage

```bash
eris chains rm NAME
```

## Synopsis

remove an installed chain

Command will remove the chain's container but will not
remove the chain definition file.


## Options

```bash
  -x, --data    remove data containers after stopping
      --dir     remove the chain directory in ~/.eris/chains
  -f, --force   kill the container instantly without waiting to exit
  -o, --vol     remove volumes (default true)
```

## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris chains](/docs/documentation/cli/0.12.0-rc3/eris_chains/) - start, stop, and manage blockchains




# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

