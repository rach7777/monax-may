---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris services stop"

---

# eris services stop

Stop A Running Service

## Usage

```bash
eris services stop NAME
```

## Synopsis

stop a service which is currently running


## Options

```bash
  -a, --all            stop the primary service and its dependent services
  -c, --chain string   specify a chain the service should also stop
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

* [eris services](/docs/documentation/cli/0.12.0-rc3/eris_services/) - start, stop, and manage services required for your application




# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)
