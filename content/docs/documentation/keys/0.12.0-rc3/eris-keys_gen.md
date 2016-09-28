---

layout: single
type: docs
title: "Documentation | Development Signing Daemon Tooling | eris-keys gen"

---

# eris-keys gen

Generate A Key

## Usage

```bash
eris-keys gen
```

## Synopsis

Generates a key using (insert crypto pkgs used)


## Options

```bash
  --no-pass       don't use a password for this key
  -t, --type string   specify the type of key to create. Supports 'secp256k1,sha3' (ethereum),  'secp256k1,ripemd160sha2' (bitcoin), 'ed25519,ripemd160' (tendermint) (default "ed25519,ripemd160")
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

* [Exporting Your Keys](/docs/documentation/keys/0.12.0-rc3/examples/exporting_your_keys/)



