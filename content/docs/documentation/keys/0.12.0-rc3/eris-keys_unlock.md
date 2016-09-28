---

layout: single
type: docs
title: "Documentation | Development Signing Daemon Tooling | eris-keys unlock"

---

# eris-keys unlock

Unlock A Key

## Usage

```bash
eris-keys unlock
```

## Synopsis

unlock an unlocked key by supplying the password


## Options

```bash
  -t, --time int   number of minutes to unlock key for. defaults to 10, 0 for forever (default 10)
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



