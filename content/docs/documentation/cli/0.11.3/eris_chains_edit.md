---

layout: single
title:      "Documentation | eris:cli | eris chains edit"

---

# eris chains edit

Edit a blockchain.

## Synopsis

Edit a blockchain definition file.

Edit will utilize the default editor set for your current shell
or if none is set, it will use *vim*. Sorry for the bias Emacs
users, but we had to pick one and more marmots are known vim
users. Emacs users can set their EDITOR variable and eris
will default to that if you wise.

```bash
eris chains edit NAME
```

## Options inherited from parent commands

```
  -d, --debug            debug level output
  -m, --machine string   machine name for docker-machine that is running VM (default "eris")
  -v, --verbose          verbose output
```

## See Also

* [eris chains](/docs/documentation/cli/0.11.3/eris_chains/)	 - Start, stop, and manage blockchains.

## Specifications

* [Actions Specification](/docs/documentation/cli/0.11.3/actions_specification/)
* [Chains Specification](/docs/documentation/cli/0.11.3/chains_specification/)
* [Contracts Specification](/docs/documentation/cli/0.11.3/contracts_specification/)
* [Motivation](/docs/documentation/cli/0.11.3/motivation/)
* [Services Specification](/docs/documentation/cli/0.11.3/services_specification/)

