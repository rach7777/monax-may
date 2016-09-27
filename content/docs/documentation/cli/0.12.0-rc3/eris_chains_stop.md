---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris chains stop"

---

# eris chains stop

Stop A Running Blockchain

## Usage

```bash
eris chains stop NAME
```

## Synopsis

stop a running blockchain


## Options

```bash
  -x, --data           remove data containers after stopping
  -f, --force          kill the container instantly without waiting to exit
  -r, --rm             remove containers after stopping
  -t, --timeout uint   manually set the timeout; overridden by --force (default 10)
  -o, --vol            remove volumes
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

