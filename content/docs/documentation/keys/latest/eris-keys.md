---

layout: single
type: docs
title: "Documentation | Development Signing Daemon Tooling | eris-keys"

---

# eris-keys

Generate And Manage Keys For Producing Signatures

## Usage

```bash
eris-keys
```

## Synopsis

A tool for doing a bunch of cool stuff with keys.


## Options

```bash
  --addr string   address of key to use
  -d, --debug         debug mode
      --dir string    specify the location of the directory containing key files (default "/home/coda/.eris/keys")
      --host string   set the host for talking to the key daemon (default "localhost")
  -l, --log int       specify the location of the directory containing key files
      --name string   name of key to use
      --port string   set the port for key daemon to listen on (default "4767")
  -v, --verbose       verbose mode
```



# Subcommands

* [eris-keys convert](/docs/documentation/keys/0.12.0-rc3/eris-keys_convert/) - eris-keys convert --addr <address>
* [eris-keys gen](/docs/documentation/keys/0.12.0-rc3/eris-keys_gen/) - Generate a key
* [eris-keys hash](/docs/documentation/keys/0.12.0-rc3/eris-keys_hash/) - eris-keys hash <some data>
* [eris-keys import](/docs/documentation/keys/0.12.0-rc3/eris-keys_import/) - eris-keys import <priv key> | /path/to/keyfile | <key json>
* [eris-keys lock](/docs/documentation/keys/0.12.0-rc3/eris-keys_lock/) - lock a key
* [eris-keys name](/docs/documentation/keys/0.12.0-rc3/eris-keys_name/) - Manage key names. `eris-keys name <name> <address>`
* [eris-keys pub](/docs/documentation/keys/0.12.0-rc3/eris-keys_pub/) - eris-keys pub --addr <addr>
* [eris-keys server](/docs/documentation/keys/0.12.0-rc3/eris-keys_server/) - eris-keys server
* [eris-keys sign](/docs/documentation/keys/0.12.0-rc3/eris-keys_sign/) - eris-keys sign --addr <address> <hash>
* [eris-keys unlock](/docs/documentation/keys/0.12.0-rc3/eris-keys_unlock/) - unlock a key
* [eris-keys verify](/docs/documentation/keys/0.12.0-rc3/eris-keys_verify/) - eris-keys verify --addr <addr> <hash> <sig>






# Examples

* [Exporting Your Keys](/docs/documentation/keys/0.12.0-rc3/examples/exporting_your_keys/)



