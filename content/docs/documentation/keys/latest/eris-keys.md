---

layout: single
title:      "Documentation | eris:keys | eris-keys"

---

# eris-keys

Generate and manage keys for producing signatures

## Synopsis

A tool for doing a bunch of cool stuff with keys.

```bash
eris-keys
```

## Options

```
      --addr="": address of key to use
      --dir="/home/ubuntu/.eris/keys": specify the location of the directory containing key files
  -h, --help[=false]: help for eris-keys
      --host="localhost": set the host for talking to the key daemon
  -l, --log=0: specify the location of the directory containing key files
      --name="": name of key to use
      --port="4767": set the port for key daemon to listen on
```

## Subcommands

* [eris-keys convert](/docs/documentation/keys/latest/eris-keys_convert/)	 - eris-keys convert --addr <address>
* [eris-keys gen](/docs/documentation/keys/latest/eris-keys_gen/)	 - Generate a key
* [eris-keys hash](/docs/documentation/keys/latest/eris-keys_hash/)	 - eris-keys hash <some data>
* [eris-keys import](/docs/documentation/keys/latest/eris-keys_import/)	 - eris-keys import <priv key> | /path/to/keyfile | <key json>
* [eris-keys lock](/docs/documentation/keys/latest/eris-keys_lock/)	 - lock a key
* [eris-keys name](/docs/documentation/keys/latest/eris-keys_name/)	 - Manage key names. `eris-keys name <name> <address>`
* [eris-keys pub](/docs/documentation/keys/latest/eris-keys_pub/)	 - eris-keys pub --addr <addr>
* [eris-keys server](/docs/documentation/keys/latest/eris-keys_server/)	 - eris-keys server
* [eris-keys sign](/docs/documentation/keys/latest/eris-keys_sign/)	 - eris-keys sign --addr <address> <hash>
* [eris-keys unlock](/docs/documentation/keys/latest/eris-keys_unlock/)	 - unlock a key
* [eris-keys verify](/docs/documentation/keys/latest/eris-keys_verify/)	 - eris-keys verify --addr <addr> <hash> <sig>

## Specifications


