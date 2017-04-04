---
author: casey
categories:
- legal tech
comments: true
date: 2015-09-15T00:00:00Z
excerpt: Casey summarizes what he finds interesting and impactful about smart contract
  technology and why he is skeptical of the term to begin with.
meta: true
published: true
tags:
- smart contracts
- scripts v. smart contracts
- smart contracts v. paper contracts
thumbnail: contract.jpg
title: WTF Are Smart Contracts Anyway?
url: /2015/09/15/smart-contracts-intro/
---

[{{< image_blog "contract.jpg" >}}](https://www.flickr.com/photos/stevensnodgrass/5480863464/)

Folks are both fascinated and confused by the term "smart contracts". Many across the general peer-to-peer tech space have had their imaginations captured by what is, fundamentally, a super fascinating idea. The idea that we can have processes and procedures, with rules we agree to, running, automatically, on our behalf. This is a powerful idea.

For many the power of the `idea` leads them ...

[{{< image_blog "neverland.gif" >}}](https://33.media.tumblr.com/6c6d7a976bfe30324d656f0465cd7add/tumblr_nk1e8rM4ie1u17yx1o1_500.gif)

As inspiring a fantasy as Peter Pan is, it is still a fantasy. With all deference to the dreamers amongst us, there is enough that is intriguing about this technology for us all to explore it together; the difference being that the doers may focus more on the near term stuff.

On behalf of the doers, here is how I explain smart contract technology to executives and researchers.

This post is a [semi-follow on to my WTF is going on with blockchains post](2015-08-10-how-i-current-explain-blockchains.md).

### Preface

Smart contracts is a loaded term of which I've been a reluctant user.

Coming from a #legalhacker background these "things" are clearly neither `smart` (indeed their logic capabilities have only recently reached turing complete capacity), nor are they `contracts` (they are, afterall, *just scripts*).

As Brian, our Head of BizDev says, they should really just be called `dumb scripts`.

My own issues with pedanticism aside, `smart contracts` is the term which the community has adopted and it is more important to communicate using the same language than it is to be fascist about such matters.

### `smart v. dumb` *or* are they better than just a python script?

This is a question which in the early days of Monax we fielded often. This is a debatable subject. And I think it turns on two axes.

#### Axis 1 => spectrum of verifiability

A python script is *somewhat* verifiable I would say. If a python script is running on somebody else's metal your ability to verify what its doing is usually limited to observing its results. You can always see what the script is doing if, for example it is managing an API. You know that you send that API a request and then you will get a response. But what is happening between the request and the response is very difficult to verify.

Even if you could verify *the code that was being ran* via some fingerprinting mechanism you still wouldn't necessarily be able to verify *the execution environment* of that script. What I mean here is that every file which exists is really just a series of numbers assembled in such a way that a computer can interpret it to be an executable script, the markdown which renders into this blog post, or a marmot photo.

Since every files is, at its most fundamental level, a series of numbers, every file can have a mathmatical formula applied to it which will produce a short sting of letters and numbers called its fingerprint. The same formula can be applied to the same "series of numbers" (meaning, a file) and that will produce the same result if (and only if) the "series of numbers" (again, meaning the file) is the exact same.

The upshot here is that if a script builder wants to make sure that the scripts which folks run on their machines are the scripts the script maker made, then a fingerprinting mechanism is often used as a quick, but verifiable way to ensure that all the numbers in the file(s) are all the same. This procedure is called `checksum` -- meaning, check the sum of the numbers of the file -- and this procedure is routinely used behind the scenes when your computer is installing files.

While it is true that it is a relatively straight-forward problem to verify a script being run *on your machines* is the same script which was produced by Skype, Microsoft, or whomever; it is not necessarily a simple problem to verify that a script being run *on someone else's machine* is the same script produced. To illustrate this problem, if you were using a version of Microsoft Word which was being "hosted" and you were using it in a webbrowser, you may have an ability to check the version number from the Word Help menus. But this only gets at part of the problem of being able to verify code which is running on someone else's metal.

Scripts can read top level environment variables, and run differently on a different version of their language; therefore they can have differing **outcomes** depending on what the environment variables of the Operating System are or what version of the language is "running" (or compiling) the language. What this means is that when a computer script is ran it can be told by the operating system "how" it should run in some instances and in other instances various versions of a language will operate differently. As a result of this script makers have an ability to make their scripts run differently on different versions of the language.

The execution environment in which the script runs is important because the same script can run different ways depending on its environment. This is important to understand because even if you can verify that the script a machine is running is the same script that was produced by a script maker, what you are *really* trying to verify is the predictability of what its **doing** (not only what its numbers, meaning its code, is).

The practical upshot here is that nobody really has a capability to verify code that's running on someone else's metal.

And this is one of the most powerful capabilities which smart contract backed systems offer to their users. Smart contracts completely isolate the logic and data into a "casing" (provided by a blockchain) which is utterly verifiable. Every compute step along the logic sequence is verified by every node on the network.

Those nodes could be other banks within a consortium, internal audit, external audit, the business's accounting department, your grandmother, or whomever is in the network. But all of these nodes will be checking each other's work.

> Simply put, all of the computation is performed (and, checked) by all of the (full) nodes on the network.

Down to `pop-off-the-stack` computes.

Now this is overkill for many, many computing requirements which an enterprise may have (indeed the **vast** majority of an enterprise's computing requirements do not need this level of computation verifiability).

But for instances where one has a **data driven relationship** -- whether that is a compliance relationship with a regulator, a customer relationship, or a peer relationship -- it may be a price which institutions are willing to pay. In some contexts.

But. And this is the key. It is `certainly` very different that a simple python script running on someone else's metal.

#### Axis 2 => spectrum of privacy

While a python script is not highly verifiable, it **is** easy to hide and to keep protected. I've said it over and over again, blockchains are transparency machines, they are not privacy machines. There currently is no blockchain backed smart contract mechanism which can provide the level of verifiability described above **and** that can also provide *any* level of privacy beyond simple obscuration of the data on the blockchain.

It is true that there are **highly theoretical** ideas, such as MIT's Enigma among others, to increase the privacy of blockchain stored data. Maybe some of these will go to market and/or become community adopted in the near term and this problem will be short term. But it certainly is the reality for folks wanting to build smart contracts now.

It may also be possible in the medium term to separate the verifiability spectrum of the data (e.g., what's cool about a blockchain; but also its downside in contexts where privacy is paramount) and the verifiability spectrum of the logic (smart contracts), but at this point they go together. As an example of what I'm talking about, Ethan and I have discussed what it would take to be able to run an EVM as a containerized computation engine that could provide the high level of logic verifiability while not *requiring* the low level of blockchain privacy.

Alas, we have not had time to pursue this idea. Yet! :-)

### `contracts v. scripts` *or* why do I keep telling folks this is legal tech?

One of the ways in which these `scripts` are, kind of, sort of, `contracts` (at least they can be programmed to fulfill many of the legal requirements of real world commercial contracts) is that counter-parties to an agreement have never had an ability to regulate their data driven *relationships* via a mechanism which they did not wholly control.

Great strides have been made in industry around automation of a broad range of business *processes*, but the range of business processes which has been automated for the most part stops at the rotating glass door. And the reason for that is simple (see, above).

In other words, if you're the big player and you can run the computation sequence on your metal then great, but everybody else either has to duplicate the work of formulating the automation and process management components on *their side* of the data driven relationship -- or they have to just trust you.

And, to be clear, both are viable choices for a business depending on its circumstances. I am not really gonna bug Amazon to let me come verify physically all of the AWS resources Monax consumed last month because it is a ridiculous request and it is not important enough to our business. We're happy to trust AWS to report correctly our resource usage, calculate what we owe them, and to pull that amount from the credit card they keep on file.

But, smart contracts offer a third way, a semi-new paradigm, wherein legally binding agreements, backed up by contractually binding real world agreements, can be built to run within a network of computers which no single party can pull the plug on and in which all parties to the agreement **participate** in the management and supervision of the computers which have automated the agreement. Smart contractifying the data driven relationship which Monax and AWS maintain wouldn't mean that I could *necessarily* verify the resources we used (physically), but it would certainly get us much closer than the current state of affairs.

> Simply put, smart contracts provide the backbone for automating business processes which reach *outside* of the rotating glass doors.

In other words, the sweet spot for smart contracts is data driven *relationships* -- or business processes across organizations.

Despite being uneasy with the `contracts` part of `smart contracts` I still do tell people quite regularly that Monax is a legal tech company. And I've believed that all along. Even before this company existed, this technology has always "been" legal tech to me.

The reason this tech has "been" legalTech to me is because I firmly believe smart contracts will be at least one enabler of a movement which was already formulating and bubbling up. A movement of legally capable technologists and technically capable lawyers bringing their skills and talents to a new generation of business process automation tools which focus not on automating intra-enterprise data driven *processes* but rather on inter-enterprise data driven *relationships*.

At Monax we definitely are not the only group at the intersection of law and technology who sees this power. I have noticed, and welcome, a distinct increase in understanding from various law professors I know, have talked to, or follow on twitter which mirror what our friend Houman said:

<center><blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">Why I&#39;m now teaching basics of <a href="https://twitter.com/hashtag/coding?src=hash">#coding</a> and CS concepts in my introductory Contracts course. <a href="http://t.co/6addHYNyAi">http://t.co/6addHYNyAi</a> <a href="http://t.co/a6w47psJ3M">pic.twitter.com/a6w47psJ3M</a></p>&mdash; Houman Shadab (@HoumanShadab) <a href="https://twitter.com/HoumanShadab/status/643541718734868480">September 14, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></center>

I'm a bit skeptical as to whether `dumb scripts` will ever replace human lawyers, but they may very well change how lawyers operate when advising information age enterprises as to how to regulate their data driven relationships with their peers and customers. So the future is definitely bright for the intersection of law (the regulation of our relationships) with technology!

### Postface

The bottom line is that these "things" (no matter what we call them) can be made to regulate agreements just as easily as they can be made to regulate governance just as easily as they can be made to regulate professional relationships. And therein lies their power and their USP.

What we are just at the beginning stages of learning is this. When you put some lawyers and technologists together and give them this technology amazingly impactful things start to happen.

Happy `dumb script`ing!

**Photo Credit** -- [Steve Snodgrass @ Flickr](https://www.flickr.com/photos/stevensnodgrass/5480863464/) (Licensed CC-By)