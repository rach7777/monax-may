---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris chains start"

---

# eris chains start

Start An Existing Chain Or Initialize A New One

## Usage

```bash
eris chains start NAME
```

## Synopsis

start an existing chain or initialize a new one

[eris chains start NAME] by default will put an existing chain into
the background. Its logs will not be viewable from the command line.

To initialize (create) a new chain, the [eris chains make NAME] command
must first be run. This will (by default) create a simple chain with
relevant files in ~/.eris/chains/NAME. The path to this directory is then passed into the [--init-dir] flag like so:

  [eris chains start NAME --init-dir ~/.eris/chains/NAME]

Note that it is also possible to use only the name of the relevant
directory like so (e.g., for complex chains):

  [eris chains start NAME --init-dir name_full_000]

To stop the chain use: [eris chains stop NAME]. To view a chain's logs use: 
[eris chains logs NAME].

You can redefine the chain ports accessible over the network with the --ports flag.


## Options

```bash
  -e, --env value         multiple env vars can be passed using the KEY1=val1,KEY2=val2 syntax (default [])
      --init-dir string   a directory whose contents should be copied into the chain's main dir
  -l, --links value       multiple containers can be linked can be passed using the KEY1:val1,KEY2:val2 syntax (default [])
  -z, --logrotate         turn on logrotate as a dependency to handle long output
      --ports string      reassign ports
  -p, --publish           publish random ports
```

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
$ eris chains start simplechain --ports 4000 -- map the first port from the config file to the host port 40000
$ eris chains start simplechain --ports 40000,50000- -- redefine the first and the second port mapping and autoincrement the rest
$ eris chains start simplechain --ports 46656:50000 -- redefine the specific port mapping (published host port:exposed container port)
```

# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

