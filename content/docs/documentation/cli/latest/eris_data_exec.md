---

layout: single
type: docs
title: "Documentation | Command Line Interface | eris data exec"

---

# eris data exec

Run A Command Or Interactive Shell In A Data Container

## Usage

```bash
eris data exec
```

## Synopsis

run a command or interactive shell in a container with
volumes-from the data container

Exec can be used to run a single one off command to interact
with the data. Use it for things like ls.

If you want to pass flags into the command that is run in the
data container, please surround the command you want to pass
in with double quotes. Use it like this: "ls -la".

Exec instances run as the Eris user.

Exec can also be used as an interactive shell. When put in
this mode, you can "get inside of" your containers. You will
have root access to a throwaway container which has the volumes
of the data container mounted to it.


## Options

```bash
  -i, --interactive   interactive shell
```

## Options inherited from parent commands

```bash
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```



## See Also

* [eris data](/docs/documentation/cli/0.12.0-rc3/eris_data/) - manage data containers for your application


# Quick Tips

```bash
$ eris data exec name ls /home/eris/.eris -- will list the eris dir
$ eris data exec name "ls -la /home/eris/.eris" -- will pass flags to the ls command
$ eris data exec --interactive name -- will start interactive console
```

# Examples

* [Getting Started With Cloud Instances](/docs/documentation/cli/0.12.0-rc3/examples/getting_started_with_cloud_instances/)
* [How To Make A Service](/docs/documentation/cli/0.12.0-rc3/examples/how_to_make_a_service/)
* [Using Docker Machine With Eris](/docs/documentation/cli/0.12.0-rc3/examples/using_docker_machine_with_eris/)


# Specifications

* [Chains Specification](/docs/documentation/cli/0.12.0-rc3/specifications/chains_specification/)
* [Motivation](/docs/documentation/cli/0.12.0-rc3/specifications/motivation/)
* [Services Specification](/docs/documentation/cli/0.12.0-rc3/specifications/services_specification/)

