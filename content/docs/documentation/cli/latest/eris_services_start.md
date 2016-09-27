---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris services start"

---

# eris services start

Start A Service

## Usage

```bash
eris services start NAME
```

## Synopsis

start a service according to the service definition file which
eris stores in the ~/.eris/servicesdirectory

The [eris services start NAME] command by default will put the
service into the background so its logs will not be viewable
from the command line.

To stop the service use:      [eris services stop NAME].
To view a service's logs use: [eris services logs NAME].

You can redefine service ports accessible over the network with
the --ports flag.



## Options

```bash
  -c, --chain string   specify a chain the service depends on
  -e, --env value      multiple env vars can be passed using the KEY1=val1,KEY2=val2 syntax (default [])
  -l, --links value    multiple containers can be linked can be passed using the KEY1:val1,KEY2:val2 syntax (default [])
      --ports string   reassign ports
  -p, --publish        publish random ports
```

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
$ eris services start ipfs --ports 17000 -- map the first port from the definition file to the host port 17000
$ eris services start ipfs --ports 17000,18000- -- redefine the first and the second port mappings and autoincrement the rest
$ eris services start ipfs --ports 50000:5001 -- redefine the specific port mapping (published host port:exposed container port)
```

# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

