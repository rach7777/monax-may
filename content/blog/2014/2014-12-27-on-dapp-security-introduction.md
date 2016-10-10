---
author: andreas
categories:
- DApps
comments: true
date: 2014-12-27T00:00:00Z
excerpt: How are DApps secured? How does the Decerver and Thelonious handle DApp security?
  These questions are addressed in this post.
meta: true
published: true
tags:
- dapps
- security
thumbnail: 23390123_b6caaefc16_z.jpg
title: An Introduction to Distributed Application Security
url: /2014/12/27/on-dapp-security-introduction/
---

**Note: since this blog post was written, we have changed our name to Monax Industries and will be changing the name of our product to "Monax" in early 2017. We have left these posts unedited for the purposes of historical record, as the software was named Eris at the time.**

[{{< image_blog "23390123_b6caaefc16_z.jpg" >}}](https://www.flickr.com/photos/kk/23390123/in/photolist-4uJ6aT-ag4zkN-asBLGG-d848qw-6JDfD8-34T4Z-eCaWn2-98sYER-7Hx7ig-ejcw3L-dYj3cw-8vR8W5-ehPXNM-29GeC-7oEdaD-dAFKPa-2vj3k2-dCz8na-6UKyJq-hjsKL-cJLzGh-drbr3g-5ru4oK-dU3PK3-8qi3MQ-bikriH-edjQhq-d7exeW-62J5N-brKi7f-4uwyQL-ccX3-imHm5z-92Cgam-dA29Tj-87az7W-98P4W5-n7qDvJ-evqszn-ayZi8V-73xSvY-cdBJCm-9XE9R5-cXXqXy-cv6bco-buwS46-9nKh7L-gtAxPC-9gGswk-6u3Npt)

If anyone is curious about how DApps are made secure, and what the dangers of them not being secure are, here is the big issue:

> If there is no way for users to authorize DApps, by which I mean authorizing *any* code to run, then DApp makers can put whatever code they like in their backend script.

Decerver modules exposes an API for each of its modules, so without control the code can do things like clean out your bitcoin wallets, sign legal contracts with your private keys, and publish copyrighted or otherwise illegal files in your name (or, to be more exact, "using your key").

Right now we are in alpha. There is no assumption that DApps are being run in a secure manner at this point, but work is already well on its way.

The first security mechanism we're adding is to get the hashes of some important files, and check those against previously [confirmed hashes](http://en.wikipedia.org/wiki/File_verification). This will be a standard security measure for the foreseeable future. While it is not 100% perfect, using the hashes of important files allows us to quickly and easily see if something within one of the files has changed or not. If these files have not changed from the last time the user authorized the DApp then Decerver will run the files as before. If the DApp did not previously exist as far as the Decerver was aware (e.g., it is a new DApp being installed by the user), or if it previously existed but the hash for these important files does not match a previously approved hash for that DApp, then it will have to be confirmed by the user before Decerver will run the DApp. If the user does not affirmatively authorize the DApp, then the DApp is blocked and Decerver will **not run** the DApp.

This security feature is already implemented, but we have purposefully crippled it for the time being as we do not yet have a user friendly way to ensure that the authorization protocol works well both in Decerver Client and when Decerver is running headless (and the user is interfacing with the DApp from a browser). As the current alpha of Decerver is focused on on-boarding developers, this was not necessary to finalize just yet.

The power to enable and disable DApps is pretty worthless on its own, however. Users still need to be able to make an informed decision (or have a trusted third party do it for you) as to the overall security of the DApp. Of course, this will require some person(s) who understand code to read through the DApp's source code. This info could be gotten through some sort of public site (or DApp) that keeps track of common DApps, where people can review DApps, rate them and report scams and such. Think a (D)App store with reputation of DApps and reviewers all integrated. Of course, there could be many DApp stores -- which is the nature of distributed systems (which we full embrance).

There could also be some places where people analyze code to make sure it's well made and secure, and then issues certificates for DApps that passes their tests. This could operate similar to how labeling in other industries (fair trade, etc.) works.

Something important to keep in mind is this -- a DApp is not necessarily secure just because the code you download is. Even if the backend javascript and everything is perfectly clean, that is not enough. The overall security of the DApp will also depend on what's stored on the chain. Certificates given by security experts, or any other forms of approval, need to take that into account as well.

Fortunately, in standard eris:db usage, a blockchain is only loaded when it's corresponding DApp is, ie there is no way of loading a eris:db chain except through a DApp, and Decerver will not load a DApp unless it's certified -- at least that's what we're working on implementing.

Also, there is another issue on top of the DApp loading one. A DApp that is secure and fine is still not safe if other people are allowed to access it. This is something we've pointed out when it comes to hosted services, and it's very important to remember.

Let's say you keep a Decerver instance running somewhere and access it remotely. If there is no external authentication service running (meaning between the Decerver instance and any user of the internet), then the Decerver instance will be, as we say, *exposed*. At this point there is a problem again. This is the reason why "localhost only" is the only setting, until we begin supporting these type of setup -- we don't want to base Decerver security on the assumption that the user runs an external authentication service.

We are addressing these type of issues as well. There will be more systems and alternatives in place later. We will continue to work on this during the alpha. We'll post more info.