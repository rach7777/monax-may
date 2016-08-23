---

title:     "Tracking Digits: How to Design Your Smart Contract Tracking System"
layout:    post
published: true
comments:  true
meta:      true
author:    casey
thumbnail: racer.jpg
#thumbnail_raw:
category:  legal tech
tags:      [digitial authenticity, information assurance, smart contract systems]
excerpt:   "Blockchain and smart contract tracking of digital goods and raw information could not be easier when using Eris' Distributed Application Platform. Here's how to do it."

---

[{{ page.date | date: "%Y" | append:'/racer.jpg' | img }}](https://www.flickr.com/photos/tom-margie/1299414993/)

Lots of folks are thinking about interesting ways to track digital goods and information back to some vendor of authenticity using blockchains and distributed file storage systems. A number of folks have been working in this area around the idea of physical goods and information as well.

My background as a lawyer makes me think instantly of a problem legal information systems have, which is authenticity of authorship. In other words, can I rely that the words I'm reading are actually what the judge wrote and published? Traditionally the role of assurer of authenticity of authorship was taken by large publishing houses with lucrative contracts. Lately this role has been taken by signed PDF's. But, what about blockchains?

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">I&#39;m really hyped up on block chain tech right now and its legal info applications. Can&#39;t wait to look more into it. Thanks, <a href="https://twitter.com/hashtag/futurelaw?src=hash">#futurelaw</a></p>&mdash; Sarah Glassmeyer (@sglassmeyer) <a href="https://twitter.com/sglassmeyer/status/594157266091147264">May 1, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

The rest of this post will speak to a subset of that paradigm (a court decision publishing system) but with minor modifications could be adapted for other types of digital files which are by default public (there's no encryption here, this is built for **public** data) and require some fount of authenticity.

## File Sharing

We use a system called [IPFS](http://ipfs.io) which is a significantly improved `git` + `bit torrent` to share the raw content blobs between nodes on a network using a peer-to-peer paradigm rather than a costly server-client paradigm. In other words, a globally unified, content addressable storage system. Behind the scenes, IPFS understands who has what files and how to get files you need to your computer as fast as possible. Files within IPFS are retrievable from the distributed peer network via their hash, which means when getting files from the distributed peer network via the IPFS protocol, any recipient of the file will have assurances of bit for bit consistency of the file itself because the file hash is a cryptographic fingerprint unique to each file.

IPFS can be run nearly everywhere and it makes it super simple to "hook" into a globally distributed file sharing solution. However because it is simply a bunch of hashes (what's called a `data lake`), it needs structure. That's where the data schema shared on a blockchain (to utilize its public key architecture and other verifiability characteristics) comes into play.

## The Data Schema

In a very simple system like this, we need to really track two things: `authenticator` and `contentBlob`. That is really all we need to track for this. In the context of a court reporting mechanism `authenticator` would be the **court** (who would have a given public-private keypair of which the public key was known). Similarly, in the same context the `contentBlob` would be the [checksum hash](http://en.wikipedia.org/wiki/Checksum) of the file containing the **decision**. The file could be available in *any* format. Plain text, markdown, the dreaded word, the feared pdf. It matters not what the file is, because from the blockchain's perspective its all just hashes.

Specifically we would form two `maps` (which are key:value storage systems). One data mapping would track `authenticator` to `contentBlob` mappings and be available based on the `authenticator`'s public key address via a simple `get_blob_by_authenticator` function (or a `get_decision_by_court` function in this context). The other data mapping would do the reverse and be available via a simple `get_blob_autenticator` (or `get_decision_author`) function.

This is a simple minimum viable data schema. Indeed whatever additional information one wanted to add into the data schema would be possible with Eris, because our turing complete smart contract machine housed in `eris:db` can do basically any thing programmers tell it to do.

## The Blockchain

The blockchain you would design here would be a very simple blockchain. The court itself could make a single node blockchain which only it could amend or write to (for more about blockchain design [see this here](https://docs.erisindustries.com/explainers/blockchains/)). Alternatively, a library or consortium of courts could pool their resources together to run a collective blockchain which was amended or written to by any of the known and registered members.

`eris:db` makes all that [super simple](https://eng.erisindustries.com/tutorials/2015/04/25/make-thelonious-chain/). And, by the way, our solution will run on nearly [anything](https://eng.erisindustries.com/blockchains/2015/04/01/peer-server-networks-current-paradigm/) (except Windows outside of Docker).

## The Application Layer

Functionally the application will work nearly the same as our [2gather](https://eng.erisindustries.com/tutorials/2015/04/07/2gather/) video sharing application works. The basic workflow would look something like this:

1. Judge finalizes opinion
2. Judge gives finalized opinion to clerk
3. Clerk goes to web browser and uploads the decision
4. (from here on out the humans do nothing) The application layer adds the file to the distributed file storage system (with its built in authenticity of the *information*).
5. The application layer takes the file's hash and adds it to the smart contracts' held data schema (with its built in authenticity of *identity* -- to a public key address).

That's it. Now anyone who has access to the blockchain and distributed file storage system has assurances of (a) content has not been changed since entering into the distributed file storage system (thus mitigating man in the middle type attacks) and (b) that the the public key address "publishing" the content actually added it to the system (via their private key signature on the transactions which entered the ipfs hashes into the blockchain).

`eris:server` makes it ultra simple to make this application layer and have it usable for non-technical team members from a web browser (with whatever web based interface is needed for the application). Using `eris:server` developers are able to build the backend of the application that would perform all of that functionality in about five lines of javascript.

## Conclusion

At Eris we make it super simple to start building these systems. Today. In three (easy) steps:

1. Install (the tools)
2. Roll (your blockchain)
3. Build (your application)

For more information as to how to get started [see here](https://erisserver.erisindustries.com/tutorials/).

(Photo credit to: [Board Track Racer by Insomnia Cured Here @ flickr](https://www.flickr.com/photos/tom-margie/1299414993/) -- CC-BY-SA to the author.)