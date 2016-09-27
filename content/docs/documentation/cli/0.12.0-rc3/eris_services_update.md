---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris services update"

---

# eris services update

Update An Installed Service

## Usage

```bash
eris services update NAME
```

## Synopsis

update an installed service, or install it if it has not been installed

Functionally this command will perform the following sequence of steps:

1. Stop the service (if it is running).
2. Remove the container which ran the service.
3. Pull the image the container uses from a hub.
4. Rebuild the container from the updated image.
5. Restart the service (if it was previously running).


## Options

```bash
  -e, --env value      multiple env vars can be passed using the KEY1=val1,KEY2=val2 syntax (default [])
  -l, --links value    multiple containers can be linked can be passed using the KEY1:val1,KEY2:val2 syntax (default [])
  -p, --pull           pull an updated version of the service's base service image from docker hub
  -t, --timeout uint   manually set the timeout; overridden by --force (default 10)
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

