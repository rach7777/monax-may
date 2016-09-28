---

layout: single
type: docs
title: "Documentation | Compilers Tooling | eris-compilers compile"

---

# eris-compilers compile

Compile Your Contracts Either Remotely Or Locally

## Usage

```bash
eris-compilers compile
```



## Options

```bash
  -D, --dir string    directory location to search for on the remote server (default "/")
  -L, --libs string   libraries string (libName:Address[, or whitespace]...)
  -l, --local         use local compilers to compile message (good for debugging or if server goes down)
  -o, --optimize      optimize code (solidity only)
  -p, --port string   call listening port (default "10120")
  -s, --ssl           call https
  -u, --url string    set the url for where to compile your contracts (no http(s) or port, please) (default "compilers.eris.industries")
```

## Options inherited from parent commands

```bash
  -d, --debug     debug level output
  -v, --verbose   verbose output
```



## See Also

* [eris-compilers](/docs/documentation/compilers/0.12.0-rc3/eris-compilers/) - A client/server set up for automatic compilation of smart contracts







