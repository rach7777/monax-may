---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris services inspect"

---

# eris services inspect

Machine Readable Service Operation Details

## Usage

```bash
eris services inspect NAME [KEY]
```

## Synopsis

display machine readable details about running containers

Information available to the inspect command is provided by the Docker API.
For more information about return values, see:
https://github.com/fsouza/go-dockerclient/blob/master/container.go#L235




## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris services](/docs/documentation/cli/0.12.0-rc3/eris_services/) - start, stop, and manage services required for your application


# Quick Tips

```bash
$ eris services inspect ipfs -- will display the entire information about ipfs containers
$ eris services inspect ipfs name -- will display the name in machine readable format
$ eris services inspect ipfs host_config.binds -- will display only that value
```

# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

