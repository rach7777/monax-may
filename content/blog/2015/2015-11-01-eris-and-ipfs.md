---

author: brian
categories:
- distributed business
comments: true
date: 2015-11-01T00:00:00Z
excerpt: IPFS is a revolutionary new file system that aims to decentralize the web.
  It also has characteristics that make it a great fit with smart contracts, which
  is why we have integrated it into Eris.
meta: true
published: true
tags:
- IPFS
- smart contracts
thumbnail: null
title: Eris + IPFS
url: /2015/11/01/eris-and-ipfs/

---

By changing the way different parties cooperate, smart contracts radically improve how complex processes are run. This new paradigm will have wide-reaching effects in many areas.

When we envision the smart contract stack of the future, some of the components involve radically new paradigms in their own right. The best example of this is the peer-to-peer distributed InterPlanetary File System (IPFS). At once a simple protocol for how to name, host and transfer files in a distributed manner, it also offers an audacious vision of what the fabric of the internet should look like in the future.

<h1>What is IPFS?</h1>
IPFS took some of the most successful ideas of existing systems and formed them into a single, cohesive system. These precursors to IPFS include distributed hash tables (DHT), BitTorrent, the version control system Git, and the Self-Certified Filesystem (SFS).

The fundamental concept of IPFS is that instead of looking for locations, as with HTTP, you look for the content of a file. As an example, let's say I link to a picture of a baby marmot on Flickr. Now, what your computer does now is call the IP address of Flickr's server and ask for the file hosted at that path. Flickr then hopefully responds with [a picture of baby marmots](https://www.flickr.com/photos/53541558@N00/521987371).

There are two big downsides to this. First, if at some point Flickr stops hosting that picture because of a sudden surge of anti-marmot sentiment, the image will be gone and requests to the path will simply fail. Second, this way of requesting files actually provides very little security. We have no way of making sure that the image that Flickr ends up delivering to you is actually the same as the one that I saw when I originally linked to it.

IPFS uses the idea of content-addressing to turn this upside down. Content-addressing means that you look for a file by its content and where it’s located. Who delivers it to you is irrelevant. This is accomplished using the hash of a file as the file name. On IPFS each file has a unique name, and if multiple parties were to host the same file, it would also have the same name. Each IPFS node maintains a distributed hash table (DHT) that contains all the hashes of files and all the IP addresses of the nodes that host those files. So by pinging IPFS for a file, it is not only able to located it, but it can simultaneously make sure that the file the node delivers is the correct file by checking its hash.

<h1>The IPFS Vision</h1>
Ultimately, IPFS aims to change the fabric of the internet and replace HTTP. No problem, right? There are several reasons why replacing HTTP could be a good thing, and IPFS has illustrated the benefits through the vision of a Permanent Web. With HTTP the burden of hosting content generally falls on the person who published it. If someone were to create a popular site about comics (see the [great Neocities post about IPFS](https://ipfs.io/ipfs/QmNhFJjGcMPqpuYfxL62VVB9528NXqDNMFXiqN5bgFYiZ1/its-time-for-the-permanent-web.html)), then that content would only continue to be available at the original location if the publisher continued to host it. But over time, interests change, companies go bankrupt, servers fail and content ends up disappearing. The result tends to be that old sites start to look like graveyards, linking to places that have long gone.

With IPFS, on the other hand, anyone can host content. If you want to make sure a website continues to persist, you can simply host it yourself. No need to ask anyone for permission, and for someone browsing the site no difference would be noticeable. So, if a blogger can host all the pages to which his site links, even years later when some of these other sites have started disintegrating, readers can still access content he references without noticing any change.

The other reason why HTTP is no longer up to the task is that it simply can’t handle today’s traffic loads and patterns well. With 'lots of data, accessible everywhere', efficient ways of moving data are needed. Comparing HTTP to BitTorrent makes it easy to see its shortcomings. The more popular a file is on BitTorrent, the more peers host it and the faster the download speed becomes. With HTTP, an increase in popularity results in an increasing number of machines hitting the same server. If this can’t be managed with a costly increase of bandwidth or server capacity, the user is left with slow speed and a disintegration of quality. With IPFS, as with BitTorrent, more popularity means more peers hosting the file and more sources from which different parts of the file can be downloaded simultaneously. This dramatically cuts down redundancy in terms of how often data is moved around the web. It also means less time wasted waiting for downloads. Popular files can also be downloaded from peers near you, ideally on the same network, instead of being sent again and again from a large data center to various users on the same network.

On a larger scale, IPFS is also about creating a more decentralized internet. This means reducing our reliance on the massive companies that have the economies of scale to move lots of data efficiently under the HTTP paradigm. Agile startups will be able to compete better with cloud computing giants, and government censorship and [unlawful mass surveillance](https://blog.erisindustries.com/2015/11/02/IPBill/) will become much harder.

<h1>Smart Contracts and IPFS</h1>
Where do smart contracts and Eris come in? While blockchains are great at providing verifiability and transparent processes, they are unsuited to hosting large amounts of data. When contracts depend on lots of data, that data needs to be referenced from within the contracts. Such data could range from scans of real-world documents, to images, media files or data sets.

IPFS is ideally suited for this. The integrity of files that smart contracts reference is often critical. With IPFS' content-addressing, the process of automatically verifying files comes out of the box. With a traditional file system, each contract needs to additionally verify the hash of a file that was delivered. IPFS circumnavigates this requirement,  which gets rid of possible attacks. Since anyone can host a file, any party that has an economic interest in the contract can simply choose to host all file dependencies. Using HTTP, you have to either trust the service hosting the file or program complicated fall-back procedures in case a file isn't hosted anymore by the default host or in case the default host delivers the wrong file.

In the enterprise context, enabling any party to host files is often the best option. In addition, third party companies could potentially provide hosting specifically for smart-contract related files and provide guarantees through SLAs.

In the future, Protocol Labs, the company behind IPFS, plans to add an incentive layer to the protocol called Filecoin. With Filecoin, nodes hosting content will be compensated for their work. Thus smart contracts will hold Filecoin balances and pay the network for hosting their dependencies. This is particularly interesting for permissionless chains like Ethereum and when censorship resistance is a high priority.

<h1>Conclusion</h1>
IPFS is an exciting prospect for the future of the internet, and it’s an amazing fit for smart contracts. That’s why we have integrated IPFS as an Eris service and why it is the file system of choice for Eris smart contract applications. We look forward to seeing many interesting applications combining the two paradigms in the future. If you want to start playing around with IPFS and Eris, you can get started with [Zach's IPFS walkabout](https://eng.erisindustries.com/tutorials/2015/08/05/ipfs-as-a-service/).
<h1>Resources</h1>
- [IPFS](https://ipfs.io/)
- [IPFS Whitepaper](http://bit.ly/1N7UdAr)
- [Filecoin](http://filecoin.io/)
- [Filecoin Whitepaper PDF](http://bit.ly/1LfB2lq)
- [Epicenter Bitcoin Episode with Juan Benet about IPFS](https://letstalkbitcoin.com/blog/post/epicenter-bitcoin-100-juan-benet-decentralizing-the-web-with-the-inter-planetary-file-system-ipfs)
