---

layout: single
title:      "Documentation | eris:cli | eris services exec"

---

# eris services exec

Run a command or interactive shell

## Synopsis

Run a command or interactive shell in a container with volumes-from the data container

```bash
eris services exec NAME
```

## Options

```
  -e, --env value       multiple env vars can be passed using the KEY1=val1,KEY2=val2 syntax (default [])
  -i, --interactive     interactive shell
  -l, --links value     multiple containers can be linked can be passed using the KEY1:val1,KEY2:val2 syntax (default [])
      --ports string    reassign ports
  -p, --publish         publish random ports
      --volume string   mount a volume /home/ubuntu/.eris/VOLUME on a host machine to a /home/eris/.eris/VOLUME on a container
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris services](/docs/documentation/cli/0.11.4/eris_services/)	 - Start, stop, and manage services required for your application

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.4/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.4/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.4/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.4/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.4/services_specification/)

