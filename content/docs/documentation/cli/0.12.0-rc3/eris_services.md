---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris services"

---

# eris services

Start, Stop, And Manage Services Required For Your Application

## Usage

```bash
eris services
```

## Synopsis

start, stop, and manage services required for your application

Eris services are "things that you turn on or off". They are meant to be long
running microservices on which your application relies. They can be public
blockchains, services your application needs, workers, bridges to other data
or process management systems, or pretty much any process that has a docker
image.




## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

# Subcommands

* [eris services make](/docs/documentation/cli/0.12.0-rc3/eris_services_make/) - create a new service
* [eris services ls](/docs/documentation/cli/0.12.0-rc3/eris_services_ls/) - lists everything service related
* [eris services edit](/docs/documentation/cli/0.12.0-rc3/eris_services_edit/) - edit a service
* [eris services start](/docs/documentation/cli/0.12.0-rc3/eris_services_start/) - start a service
* [eris services logs](/docs/documentation/cli/0.12.0-rc3/eris_services_logs/) - display the logs of a running service
* [eris services inspect](/docs/documentation/cli/0.12.0-rc3/eris_services_inspect/) - machine readable service operation details
* [eris services ip](/docs/documentation/cli/0.12.0-rc3/eris_services_ip/) - display service IP
* [eris services ports](/docs/documentation/cli/0.12.0-rc3/eris_services_ports/) - print port mappings
* [eris services exec](/docs/documentation/cli/0.12.0-rc3/eris_services_exec/) - run a command or interactive shell
* [eris services stop](/docs/documentation/cli/0.12.0-rc3/eris_services_stop/) - stop a running service
* [eris services rename](/docs/documentation/cli/0.12.0-rc3/eris_services_rename/) - rename an installed service
* [eris services update](/docs/documentation/cli/0.12.0-rc3/eris_services_update/) - update an installed service
* [eris services rm](/docs/documentation/cli/0.12.0-rc3/eris_services_rm/) - remove an installed service
* [eris services cat](/docs/documentation/cli/0.12.0-rc3/eris_services_cat/) - display the service definition file


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

