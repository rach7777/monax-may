---

layout: single
type: docs
title: "Documentation | Blockchain Client | eris-db serve"

---

# eris-db serve

Eris-DB Serve Starts An Eris-Db Node With Client API Enabled By Default.

## Usage

```bash
eris-db serve
```

## Synopsis

Eris-DB serve starts an eris-db node with client API enabled by default.
The Eris-DB node is modularly configured for the consensus engine and application
manager.  The client API can be disabled.


## Options

```bash
  -c, --chain-id string   specify the chain id to use for assertion against the genesis file or the existing state. If omitted, and no id is set in $CHAIN_ID, then assert_chain_id is used from the configuration file.
      --data-dir string   specify the data directory.  If omitted and not set in $ERIS_DB_DATADIR, <working_directory>/data is taken.
      --disable-rpc       indicate for the RPC to be disabled. If omitted the RPC is enabled by default, unless (deprecated) $ERISDB_API is set to false.
  -w, --work-dir string   specify the working directory for the chain to run.  If omitted, and no path set in $ERIS_DB_WORKDIR, the current working directory is taken.
```

## Options inherited from parent commands

```bash
  -d, --debug     debug level output; the most output available for eris-db; if it is too chatty use verbose flag; default respects $ERIS_DB_DEBUG
  -v, --verbose   verbose output; more output than no output flags; less output than debug level; default respects $ERIS_DB_VERBOSE
```



## See Also
* [eris-db](