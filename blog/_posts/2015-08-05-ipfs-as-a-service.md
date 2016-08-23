---
title:     "Eris CLI Services Walkabout: IPFS"
author:	  zach
excerpt:   "IPFS as a (Eris) Service"
category:  tutorials
tags:      [cli, command-line, IPFS, bit torrent, DHT, file sharing, blockchaini, eris, ]

layout:    post
published: true
comments:  true
meta:      true
thumbnail: ipfs-logo-black.png
series:    getstarted
---

{% include series.html %}

Part 1 explains `eris files`; the command for working with IPFS.

Part 2 highlights additional IPFS integrations in the Eris stack.

##Part 1: eris files

Hello [IPFS](https://ipfs.io/)

With IPFS [running as a service](https://eng.erisindustries.com/tutorials/2015/08/05/eris-services/), access IPFS

```bash
eris files
```

Check out the webui at `http://yourhost:5001/webui`

Add a file to IPFS

```bash
eris files put [fileName]
```

It's hash is returned and you can now view its contents through either your nodes' webui or through the gateway.

Download a file from IPFS

```bash
eris files get [fileHash] [fileName]
```

where `[fileName]` is a new file name for the contents, to be saved in your working directory.

Want to keep the file around as an IPFS object? (otherwise it'll garbage collect)

```bash
eris files cache [hash]
```

All that caching you did, what files are hanging around?

```bash
eris files cached
```

Look inside a recusively added directory

```bash
eris files ls [objectHash]
```

There you have it; `eris files` in five commands.

##Other IPFS integrations in the Eris stack

###import/export service definition files from/to IPFS

```bash
eris services import/export
```

This is useful for sharing custom service definition files.

###mintdump

The [mint client](https://github.com/eris-ltd/mint-client) is used for managing [eris:db](https://erisindustries.com/components/erisdb) chains.
Dump the chain state to IPFS

```bash
mintdump dump --ipfs
```

returns an IPFS hash on stdout

Restore a chain

```bash
mintdump restore [new_chain_name] --ipfs="fileHash"
```

where `fileHash` is the output from `dump`.


