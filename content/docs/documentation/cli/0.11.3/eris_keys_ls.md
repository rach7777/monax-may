---

layout: single
title:      "Documentation | eris:cli | eris keys ls"

---

# eris keys ls

List keys on host and in running keys container

## Synopsis

List keys on host and in running keys container

Specify location with flags --host or ---container.

Latter flag is equivalent to:
the [eris actions do keys list] command, which itself wraps
the [eris services exec keys "ls /home/eris/.eris/keys/data"] command.

```bash
eris keys ls
```

## Options

```
      --container   list keys in container: looks in /home/eris/.eris/keys/data
      --host        list keys on host: looks in $HOME/.eris/keys/data
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris keys](/docs/documentation/cli/0.11.3/eris_keys/)	 - Do specific tasks with keys *for dev only*.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.3/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.3/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.3/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.3/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.3/services_specification/)

