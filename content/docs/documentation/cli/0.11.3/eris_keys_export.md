---

layout: single
title:      "Documentation | eris:cli | eris keys export"

---

# eris keys export

Export a key from container to host.

## Synopsis

Export a key from container to host.

Takes a key from /home/eris/.eris/keys/data/ADDR/ADDR in the keys container
and copies it to $HOME/user/.eris/keys/data/ADDR/ADDR on the host.

Optionally specify host destination with --dest.

```bash
eris keys export ADDR
```

## Options

```
      --addr string   address of key to export
      --dest string   destination for export on host (default "/home/ubuntu/.eris/keys/data")
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

