---
author: tyler
categories:
- smart contracts
comments: true
date: 2014-12-17T00:00:00Z
deprecated: true
excerpt: An examination of the challenges of writing smart contracts in Ethereum's
  Low Level Language (LLL), and why I built the Eris Standard Library of contracts
  as an overlay of LLL to complement that language and ease complex smart contract
  development.
meta: true
published: true
tags:
- lll
- esl
- smart contracts
title: Smart Contract Writing, LLL and the creation of the Eris Standard Library
url: /2014/12/17/dennys-smart-contracting/
---

**Note: since this blog post was written, we have changed our name to Monax Industries and will be changing the name of our product to "Monax" in early 2017. We have left these posts unedited for the purposes of historical record, as the software was named Eris at the time.**

#### DOUG, C3D, Eris - how it all began

As some of you know, I have been writing smart contracts for Ethereum and Ethereum-like smart contract systems such as our own Thelonious for some time.

Over all of this time, I have been using LLL (or Low Level Lisp-Like Language) or an LLL-derivative which we have made for utilizing Thelonious more effectively. Way back in POC3, I started with a Tic-Tac-Toe game, although few people remember that as much as they do the next contract I worked on, Denny's Lotto - a simple automated lottery what was not controlled by any entity.
After this I moved on to work on what would turn out to be the project that grew out of control. It was supposed to be an un-shutdownable magnet link site. The very basic one had users, admins and would store a small description of the magnet link on chain. It was also the very first of my smart contracts which had an actual UI, thanks to Andreas who I have worked with in the past and is a great guy. It was during this project that a lot of the fundamental pieces of how I have developed dapps and smart contract suites from then on have worked. For one, this was the first time I created **DOUG**.

What is DOUG? For those less familiar with the smart contract writing space, DOUG is the solution I came up with to a problem I was repeatedly encountering: namely, as soon as your smart contract writing moves from one or two contracts to many contracts you face a problem of how to find things. You have a bunch of contracts all with APIs that you know, but you don't know what their addresses are and you certainly can't hardcode them all in before deploying.

This is where DOUG -the Decentralized Organization Upgrade Guy, comes in. The name - a backronym - of this contract reflects its role, which is to track the resources or contracts which exist in your **decentralized application**, or **DApp**. You can think of him as a kernel or maybe phone operator: his main role is to track resources (contracts), global variables, or anything else the DApp might need in order to give context to your individual smart contracts.

At his most basic form, he is just a name registry and a permissions table of who can edit the name registry. When a contract, Contract A needs to send a message to Contract B, Instead of hard coding Contract B's address into A, Contract A calls DOUG and requests for Contract B by name. The name being what Contract B was registered with DOUG under. This allows for Contract A to only know about DOUG and yet still be able to obtain all the information it needs to function.

An added side bonus to these named resources is that if at some point Contract B was found to be defective, a new Contract B - (satisfying the same API) - Contract C - could be registered with DOUG. This is where the upgrade part of DOUG comes in. By making smart contracts flexible and having a core component from which all other smart contracts request information, DOUG makes smart contract suites much simpler.

Another component that was formed in those early days was the UI which, in some abstract way, is the ideological ancestor to the Decerver we have today.

And the last idea was from the the project purpose itself: a magnet Link database. As I was working on it I could help but think... what if we could pull out the magnet links directly and put them into a torrent client? If we could automatically download and display material obtained in this way then we could extend the capabilities of the blockchain by giving it control over other less trusted content.

I shared this idea with Casey and we worked out the contract controlled content dissemination - or [C3D](https://github.com/project-douglas/c3d) - spec over the course of a couple of months. During this time Andreas had continued the work with DOUG in a new direction, creating the infamous [People's Republic of DOUG](https://www.youtube.com/watch?v=hS_N_0bGc_Y&list=UUulC9g1l43PdTThQ_J1CBAA&index=10). It was also around this time that the [Bitcoin Foundation Replacement Bounty](http://www.reddit.com/r/Bitcoin/comments/25sf4f/100000_bounty_for_software_platform_that_can/) came up. Its not well known, but replacing an organization like the Foundation with a distributed autonomous organization - or a **DAO** - was my original goal in getting into smart contracts. So when a bounty came up for it, Casey, Preston and I decided to take what we were already building and build the original [Eris](https://github.com/project-douglas/eris) platform, a serverless Reddit-like DAO complete with automated moderator selection processes and abuse protection.

It could run itself completely automatically. It was also the first application of C3D which, since we were using BitTorrent back then and we did not have the Decerver, was a life saver, giving us fine-grained control over what the DApp downloaded, all encoded into a tree structure. It was important back then to encode the instructions in the tree because the lack of a Decerver meant we could not script control of the data we were handling.

The original Eris was a beast of a smart contract suite. DOUG really shined, and made it at all possible. And the ideas of "Bylaws" - modular rights-granting contracts which could be used in conjunction with DOUG and evolve with the organization - all allowed for something that up till then had neve been built before, and not been repeated since: a platform which not only was completely decentralized but also **decentrally upgradable**. The DApp designer did not need to know everything about how the platform was going to be used beforehand because the platform could upgrade itself if a need was seen later on.

Of course, someone human had to actually write the upgrades. It was not, as some people suspected, Skynet.

**BUT**

Eris was a hulking mess. I was barely able to maintain it, let alone anyone who had not spent a month day and night programming the thing. This wasn't because it was poorly designed. At the time it was the best I could do. It was because...

#### LLL Sucks

I can admit it. I have gotten used to LLL and it comes naturally to me now. But that does not mean it's a good language. Many things are unintuitive about it and it can be down-right impossible to read if you haven't been writing in it for months. When I first started, I had to comment every single line of code just so I could remember what it did. I was also overly concerned about extreme optimization back then, which didn't help. I would even place the if statements in the order I thought would be accessed most frequently just to save a little extra gas. It was impractical to work at that highly of an optimized level.

What I have learned in the past months is that the "Low-Level" moniker should not be taken lightly. It gives a high degree of control over your smart contract. I eventually grew to appreciate that. The reason I never made the switch to Serpent was (aside from the fact I never got it working and was less stable than even LLL) was, after going through the specification, I felt that Serpent was not a true higher level language. Serpent was a low-level language with some of the control removed and most importantly it did not offer new features in exchange for this loss of control. So I remained with LLL dispite its readability issues.

As I worked with LLL I found tricks to improve readability. Standards that I would stick to. For example whenever calling a contract the first 32 bytes of calldata was always the command I wanted to use followed by the data i wanted to supply to that command. In the lll code I had a bunch of segments like

{{< highlight cl >}}
(when (= (Calldataload 0x0) "Command-name")
	{
		Stuff the command does
	}
)
{{< / highlight >}}

When defs were introduced I mapped (def 'cmd () (Calldataload 0x0)) so I could use (cmd) instead of (calldataload 0x0) which improved readability somewhat.

These standards continued to grow in complexity such as the form of linked lists I would use. Where I would store the pointer to the tail of the list etc. The more I worked on these problems the more I realized was implementing some standard chunks over and over. My main difficulty when it came to writing smart contracts was becoming that I ensure that there were no collisions in storage which could result in buggy or insecure operation. In addition as smart contracts were increasingly becoming the bottom of a stack.

I was finding that explaining repeatedly to my co-workers how I chose to store information was increasingly difficult and a waste of time when I was using essentially the same code repeatedly.

#### Meet the Eris Standard Library and DTT

This is where the **Eris Standard Library** (ESL) comes into play, in particular the subset of the ESL which has come to be known internally as "Denny's Type Templates" (DTT if you want to abbreiviate... this space loves its abreiviations!).

As mentioned, The majority of my code at this point was mostly identical implementations of what were essentially higher level variable types. But LLL does not have native support for these much like Assembly does not know an array from a character. Instead I was repeatedly constructing the code to implement them, and quite often I would make some small mistake in the implementation and spend 2 days debugging. My solution to this was much like my early usage of (cmd) to make the code more readable. I took the time to standardize a few of my "types" I had been using, Single Storage, Double Storage, Linked Lists, Arrays and Key Value pairs and I took the time to figure out a mapping from a name of a variable to a contract storage slot which I could be fairly certain would not allow for conflicts. You can read about the specifics of the implementations elsewhere, the result of this standardization was however that I now had fully-fledged, and much easier to use, data types which I could access through a set of definitions defining the type. Which meant:

* no longer would I need to worry about actually implementing the same old code for high level types in every contract I write, It would already be available;

* no longer would I need to spend excessive time debugging the contracts or analyzing whether or not conflicts could cause security issues since all the code was standardized and I had already taken the time to ensure that the storage space of a contract was partitioned to make conflicts impossible; and

* no longer would I need to spend excessive time explaining how I was storing information in a contract. All I needed was to tell them the name of the variable and they could (in theory) figure out the rest since variables store their types in a well defined storage address. In practice it is just easier to tell them that its stored in a linked list or a key value.

Denny's Types also helps with the readability of the smart contract code once you get familiar with them. While the syntax is still Lisp based and so a little awkward, since DTT encapsulates the variable data manipulation in one line "operations", **you can focus on the logic of your DApp and not the nitty gritty details of how to implement your data storage.** Its basically me in a bottle :)

#### The Downsides

Nothing is perfect and DTT is no exception.

First off, it's an extension of LLL (In particular the Eris brand of LLL which has a few minor changes which are documented) so you will need to be able to write LLL code. I have a guide to writing LLL available. Something I have been meaning to do for a long time but simply never found the chance before now.

Secondly, while these types make perfect sense to me, they do encapsulate rather complex interactions and structures. While it's not necessary to read and understand Denny's Type Templates when debugging using EPM, reading the storage addresses are not that easy. Even I, being familiar with how the DTT works, can have trouble parsing it. For this, very soon we will have an EPM addition which will allow for "Pretty Print" of the Denny's Types in EPM. This will parse things like diffs and show what have happened in terms of variables instead of storage slots. We're sorry this will not be immediately available, but rest assured that this is a high priority for me.

Thirdly, using DTT causes some contract bloat. I will be continuously optimizing the DTT, especially over Christmas, to cut down on the amount of code it generates. In addition we have plans to place the DTT on the blockchain itself as an accessible resource to other contracts. This will not change ease of use but it will greatly reduce contract sizes as most type operations related code will be located in just one place. This is another goal for early in the new year.

And finally, it's a rather different framework then the rest of LLL. This is only natural as LLL is Low-Level and so when you want to do something, you just do it. With DTT you have to interact with the types in preset ways. This is not terribly different from most languages people are familiar with. Especially those which do not have dynamic type allocation.

In short, before you can use a variable, you need to init it. this is no different from type declarations or anything else. It just sets aside space for a variable of that type. Every type has an init "function" which is called through (type"Init" "name" ...) for example (llInit "variablename1") would initialize a linked list (ll is short for linked list, kv is short for key value). After you initialize you have to use various "set" routines made available by the type definitions to set the variables and use "get" operations to retrieve the information. The necessity for these is due to the complexity of the encoding of the type into storage. These functions make it so you don't need to learn the details of Denny's Types in order to use them.

#### What about C3D?

I hear you ask. C3D has been implemented as a Type. It is technically in a different "namespace" then the variables. This means you never have to worry about C3D and a variable colliding either. You are more then welcome to use C3D if you prefer the tree framework and indeed in many instances it can simplify multi-contract data structures. Do to the decerver and the wonderful work on ate by Andreas however, Dapps are scriptable allowing for access of smart contract storage in arbitrary manners. You don't have to stick to C3D if you don't want to. In Order to ease the process, Javascript based equivalents for accessing DTT has been written which allow for access of storagage in ate using Denny's Types without having to know how they work.

I am just one smart contract writer, and of course a little biased, but I love Denny's Type Templates and am looking forward to teaching you how to use them to make your DApp writing cleaner and easier to read. Look for my Tutorials on LLL contract writting, both Basic and advanced, and usage of the Eris Standard Library.

I'll have you writing DApps far more complex then the original Eris in no time!

