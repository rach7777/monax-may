---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris chains ports"

---

# eris chains ports

Print Port Mappings

## Usage

```bash
eris chains ports NAME [PORT]...
```

## Synopsis

print port mappings

The [eris chains ports] command is mostly a developer
convenience function. It returns a machine readable
port mapping of a port which is exposed inside the
container to what that port is mapped to on the host.

This is useful when stitching together chain networks which
need to know how to connect into a specific chain (perhaps
with or without a container number) container.




## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris chains](/docs/documentation/cli/0.12.0-rc3/eris_chains/) - start, stop, and manage blockchains


# Quick Tips

```bash
$ eris chains ports myChain 1337 -- will display what port on the host is mapped to the eris:db API port
$ eris chains ports myChain 46656 -- will display what port on the host is mapped to the eris:db peer port
$ eris chains ports myChain 46657 -- will display what port on the host is mapped to the eris:db rpc port
$ eris chains ports myChain -- will display all mappings
```

# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

