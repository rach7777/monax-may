---
author: casey
categories:
- tutorials
comments: true
date: 2015-09-06T00:00:00Z
excerpt: Getting a fresh and shiny new blockchain, eris style.
meta: true
published: true
series: getstarted
tags:
- cli
- command-line
- tendermint
- eris chains
- eris chains new
- blockchaini
- eris
title: 'Eris CLI Chains Walkabout: New'
url: /2015/09/06/introing-eris-chains/
---

We, surprisingly, keep getting inbound communcation which queries why we are not "making" permissioned blockchains "any more". This is surprising to me for two reasons, the first is because many folks seemed to utterly detest the *idea* of permissioned blockchains at all. Full Stop. We called this, in the spring, (internally) the great blockchains war. It wasn't really a war to us at all. We do not view permissioned or unpermissioned chains as competitors of one another any more than we view Cassandra and Mongo as competitors of one another. While both exist in the generalized database space, they are very different tools for very different things. Yet, despite the perspective that these are different tools to accomplish different purposes, folks seemed to get very religious about their blockchain designs and feel very passionate about one chain design vis a vis another. At Eris we are not religious about our blockchain designs.

The second reason that this inbound is surprising to me, is that we haven't actually stopped making permissioned blockchains. We have **continued our work** in the permissioned blockchain (really, permissioned smart contract network) space only we are doing so in collaboration with the Tendermint open source project rather than under the Eris namespace. Almost all of the learning and effort which we put into crafting thelonious has been captured, improved, and reworked into the Tendermint project's blockchain design. Indeed, that blockchain is fully permissionable out of the box due to our efforts and what we learned while building thelonious.

Lastly, I'd like to remind folks that the `eris` tool is **optimized for working with permissioned smart contract networks**. It does run public blockchains out of the box, and for those that want to run public blockchains which we do not have a service definition file built for, it is as easy as making sure that the blockchain in question has a Docker image and making a service definition file for it (which is usually only a few lines).

So, how does `eris` work with permissioned smart contract networks? In general it provides some very convenient wrapping around the `eris chain manager` scripts which we make sure to compile into the the `eris/erisdb` Docker image (for more on Docker see the [Eris CLI Walkabout post on Docker](https://eng.erisindustries.com/tutorials/2015/09/05/docker-and-eris/)).

This post will speak to `eris chains new` which is how `eris` supports hashing a new permissioned smart contract network.

When one does `eris chains new test_chain` then what eris will do, if no flags are given, is to read the default chain configuration files from `~/.eris/chains/config/default` and hash a new chain it will call `test_chain`. These default configuration files are written to the host hard drive (in the location noted above) during the `eris init` process.

Once the files have been copied into a data container, then eris is ready to start a service which will hash the blockchain into existence. To do this we use the `eris/erisdb` container with the volumes from the data container mounted. This separates out the data which the process will run against from the actual operation process (computational sequence) itself.

When the chain has been hashed, then it will not be started and the service container will be removed, leaving **only** a container which will likely look something like this: `eris_data_test_chain_1`. If you do `docker ps -a` after running `eris chains new test_chain` this is likely all you will see. We have an issue open to change this default so that after a chain is hashed then the chain starts running, but for now that is not the default behaviour.

So if you do `eris chains ls` after doing `eris chains new test_chain` you will not actually see a chain. This is expected behaviour because what `eris chains ls` will do is to read from docker the existing chain type containers, but there will not be any chain type containers (unless you have other chains) at this point. In order to start running the chain you just created you will type `eris chains start test_chain`. This will create the running service container and use the `test_chain` data container. Once you have started the chain running if you do `eris chains ls` again you will see `test_chain` there.

Now, you will not always want to have the chain be hashed with the default configuration (which we make sure is available only for quick test chains and it should **never** be used for non-test chains). To create a chain which you would want to use for your application, rather than simply for quick testing, you will want to update the config files appropriately. To do this, the easiest way to start is to:

```
cp -r ~/.eris/chains/config/default ~/.eris/chains/config/mychain14
```

This will copy the default configuration files into a new directory. At this point open the default configuration files in your text editor and edit them as necessary for your setup. At the end then you will do:

```
eris chains new mychain14 --dir ~/.eris/chains/config/mychain14
```

When the `--dir` flag is given to chains new, it will read the configuration files from that directory rather than the `~/.eris/chains/config/default` and use those instead of the default configuration files when hashing the new chain. For an even more lightweight solution you can give it a genesis.json and or a set of validator.csv and accounts.csv files to use via different flags. There will be another onboarding post about these files coming soon.

If you have any questions about the chains hashing process please do not hestitate to visit our [forums](https://support.erisindustries.com) or leave a comment below and we will try to answer as quickly as we can.

Happy (permissioned) blockchaining!