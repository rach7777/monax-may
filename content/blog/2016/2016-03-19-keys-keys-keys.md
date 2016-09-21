---
author: casey
categories:
- platform
comments: true
date: 2016-03-19T00:00:00Z
excerpt: As part of our recently announced partnership with Ledger.co we've got some
  work to do. Here's what we think that means for eris users.
meta: true
published: true
tags:
- platform
- modularity
thumbnail: keys.keys.keys.jpg
title: So Here's the Problem(s) With Keys
url: /2016/03/19/keys-keys-keys/
---

[{{ page.date | date: "%Y" | append:'/keys.keys.keys.jpg' | img }}](https://www.flickr.com/photos/curioussiow/182224885/)

The clarity for Monax as to what to do about the ever present elephant in the room came from [the Viking](https://twitter.com/androlo1980).

> If we touch the keys we're a security company. Full stop.

# Keys. It's Complicated

Let's get real for a second. All this chains and contracts and encryption and verification and all the good stuff that excites us so; it's all predicated on a set of assumptions about keys.

The most important assumption being that "the thing that has the keys can do the thing". Whatever that "thing" is, whether it is encrypting a message with keybase and pasting it in direct message on slack to protect something sensitive, or its signing a transaction [to purchase some shoes on Open Bazaar](https://twitter.com/aliahmadisb/status/711206241402544128) (which looks terrific, BTW!). No matter, it needs a cryptographic public-private key pair.

{{ page.date | date: "%Y" | append:'/keybase_encrypt.png' | img }}

I am able to perform the encryption function pictured above because I have access to keys available to me on the machine which I'm working from. The same thing applies if one is signing the byte code of a solidity contract and deploying it to an eris:db (or geth) chain or even working with IPFS. It all depends on keys.

That's all well and good. *But* it's also incomplete. There are three big(ger) problems that remain:

* users demand device independent experience
* stuff breaks and/or gets lost
* managing individual keys doesn't do anything for the person who has to manage bucket loads of departments and roster changes

The rest of this post will explore these three problems in some more detail. And along the way will touch on many aspects of the Monax approach as well as how we envision working with partners in this area (of which we view our upcoming work with Ledger to be foundational).

# Big Problem 1. Device Independence

The problem is not really that complicated to understand. Modern users of computing expect to move easily between devices. Keys are files, which we generally do not want to be actively syncing between a lot of devices. Mostly because it is impossible to ensure that while it is going over the wire it is safe. If you have access to `scp` into the device or something then you are pretty secure, but it is not necessarily a safe assumption that we have an ability to `scp` into all of our devices (phones, tablets, internet connected devices, come to mind). That's a big challenge to the chains and contracts communities, particularly when it comes to consumers, luckily there are many folks working on these issues from the cryptocurrency community; others are also working on similar challenges for different types of keys.

Our focus at Monax is, however, more focused on the industrial uses of smart contract technology. In this context there is a fairly established paradigm for folks to be able to work with keys via FOB-USB devices that are common in high security enterprise environments. These devices have generally held keychains containing various key types which been used to identify the person holding the FOB.

That background established, in a smart contract-ified enterprise, it is not unreasonable to expect that most users, developers, administrators, and the like [will have something like a FOB available to them](https://www.ledgerwallet.com/products/3-ledger-hw-1), but which has been designed for a smart contract-ified world.

Access to the keys is only half the battle. To really have device independence you need to have a system on that machine which is capable of talking to the keychain(s) on the USB devices.

At Monax we have been moving in this direction for a while now; to be able to support such an enterprise. All of the components which we at Monax build, have been built to utilize a "common signing pipe". Monax as currently configured puts a mocked keysigner on the back of the "common signing pipe" which we call the `eris keys service`. This has never been intended, and never will be a secure key signer. It's a developer tool. **It is not a production tool**. When an enterprise is ready to move to production they will need an industrial key signing solution on the back end of that "common signing pipe".

So what does this mean technically? Technically what will happen is that we will be building the capability to have `eris-keys` simply turn off signing mode and turn on proxy mode which will direct inbound traffic to various key signing APIs (of which Ledger.co's will be our first). This emphasizes, in our view, the utility of eris' modular platform architecture.

In our view the combination of Monax's "common signing pipe" architecture with hardened solutions will allow a variety of industrial solutions to be built and managed. Overall, this will significantly harden applications that have been built on our platform.

# Big Problem 2. Stuff Breaks and/or Gets Lost

I have a [fairly elaborate system](http://coda.caseykuhlman.com//entries/2014/dropbox-as-a-settings-repository.html) for being able to both do a full system upgrade on my daily driver, but also to recover from a hardware failure. But that system does not cover my keys; and I have more than 0 keys to manage: ssl certificates and keys, ssh keys, eris keys, pgp keys, aws keys, etc. For that I have a different system which I use that I'm comfortable with the security of. However, I have not automated backing up the keys I need on my daily driver (mostly because I don't want my keys backup plugged into my laptop unless absolutely necessary). I recently had a hardware failure at a most inopportune moment and did not have a bunch of current keys backed up properly. This included a set of personal pgp keys which for some reason were not backed up.

Luckily I route most all my pgp traffic to Keybase which is doing a tremendous job with respect to a whole variety of user experience challenges around managing keys. Using keybase I was able to successfully replace my "known" pgp key via their `key`:`identity` mapping. They are also working on another dimension of [Big Problem 1](https://keybase.io/blog/keybase-new-key-model), which I think is a very workable solution for some keys folks want to register publicly.

Enterprises which adopt a solution like the one outlined in Problem 1 (namely a FOB like device with local eris keys service in proxy mode) will also go a long way toward solving Problem 2, but it is insufficient alone. Because when the FOB itself breaks or gets lost then we still have the challenge of changing our mapping of `key`:`identity`.

To be clear, this is not an expose on `identity`. I will leave that to others. When I'm saying identity in this section, I mean `this key is Casey's key` type of mapping. However `Casey` (the identity the key is mapped to) is identified to mean is a discussion for another space.

When you need to change a mapping of `key`:`identity` it is generally good practice to move that to a different communication band and or security posture. To change my keybase key I need to login from their quite nice cli and then go through their key replacement process. In an industrial setting it is not necessarily a safe assumption that "resorting to the interwebs and social media" is a valid `key`:`identity` management solution. This is where, in our view, vaults on HSMs is likely the base layer of a usable enterprise grade solution. Whatever the "out of band" solution will be it will likely need to be combined with adminsitrator key management tooling which will need to be [both utterly safe and extensible with respect to the interface](https://www.ledgerwallet.com/products/9-ledger-blue).

# Big Problem 3. The Poor IT Person

Me managing my own keys and making sure those key pairs are available on the proper machines and also properly mapped to my various online identities is one thing. But what about the human who has to manage departments of dozens, hundreds of folks, constantly coming and going, keys getting lost, etc.? What's that human going to do?

If I'm honest, we don't have an answer for how we can support solutions to this Problem yet, but it may [look something like this](http://serverfault.com/questions/304286/centralized-management-system-for-ssh-keys/304322#304322).

# Conclusion

There are lots of problems to solve. Lots of space for many companies with many solutions to succeed within the emerging smart contractified enterprise! Stay tuned for more; if you're building something that fills one of these identified gaps let us know [on Twitter](https://twitter.com/monaxio)!

[(Photo credit: CC-BY-ND: SioW @ Flickr )](https://www.flickr.com/photos/curioussiow/)
