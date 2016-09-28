---

layout: single
type: docs
title: "Documentation | Development Signing Daemon Tooling | eris-keys import"

---

# eris-keys import

Eris-Keys Import <Priv Key> | /Path/To/Keyfile | <Key Json>

## Usage

```bash
eris-keys import
```

## Synopsis

eris-keys import <priv key> | /path/to/keyfile | <key json>


## Options

```bash
  --no-pass       don't use a password for this key
  -t, --type string   import a key (default "ed25519,ripemd160")
```

## Options inherited from parent commands

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



## See Also

* [eris-keys](/docs/documentation/keys/0.12.0-rc3/eris-keys/) - Generate and manage keys for producing signatures




# Examples

* [Keyexporting](/docs/documentation/keys/0.12.0-rc3/examples/keyexporting/)



