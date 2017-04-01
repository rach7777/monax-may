---
author: casey
categories:
- legal tech
comments: true
date: 2014-12-17T00:00:00Z
excerpt: The Legal Hacker movement has been interested in applying the process and
  tools which hackers use to make law more efficient, accessible, and precise. The
  set of tools we just released, we hope will be an incredibly interesting tool for
  the part of the movement who wish to make law more precise.
meta: true
published: true
tags:
- decerver
- thelonious
- legal tech
- legalhacking
title: 'Why We Built the Best #Legalhack ing Tool I Know Of'
url: /2014/12/17/the-best-legal-hacking-tool-i-know/
---

<div class="note">
	<em>Note: since this blog post was written, we have changed our name to Monax Industries and will be changing the name of our product to "Monax" in early 2017. We have left these posts unedited for the purposes of historical record, as the software was named Eris at the time.</em>
</div>

Over a year ago, I was working on sketches and outlines for a product I was very interested in working on called RMOC (short for Research-Read-Map-Outline-Compose-Consider) which was meant to be an integrated document environment (IDE) for people who work on developing documents, but mostly for lawyers. The sketches of why I thought this was an important project are available on [RMOC's Github](https://github.com/rmoc).

### Background

One of the key components of RMOC was the ability for individual lawyers to take notes on a particular document and to share either those notes or the document itself in a peer-to-peer manner. The [CaseText](https://casetext.com/) guys are doing a pretty good job at the sharing of notes part of this, albeit in a server design paradigm rather than a peer-to-peer based environment which I was going for with RMOC.

The biggest challenge at that time was that I did not have either the skills or the experience or the tools to really pull off RMOC. Making that distributed application (which it was, even though I didn't know that term at the time I was working on the application) shine required a few things that I did not have at the time.

### Distributed File Systems

The first thing which the application needed was a handy peer-to-peer file system which could enable the distribution of documents between individual lawyers rather than simply downloading the same document a bunch of times from a siloed server -- and then billing your client for that.

The second thing which the application needed was a way to harmonize and manage the data driven interactions. In particular the encrypting of the notes files and sharing those with a predefined group of peer nodes. Sharing in this context is really about key management rather than sharing in the sense of "giving to" because a real distributed file store is able to separate the distribution function from the access function. This is why encryption makes so much sense when dealing with peer-to-peer technology where it is more difficult to regulate the passing of bits around the internet than in a server-based environment.

### Law as Code

At its essence, the [#legalhack](https://twitter.com/hashtag/legalhack) movement is about using the processes and tools which developers (hackers) to develop new tools or processes which assist the practice of law. That is my definition, I'm sure that others have their own definitions. Many within the #legalhackers movement feel that the power, connectivity, and precision which software has provided to other industries should be embraced by the legal industry. There are few things in life which I could agree with more.

But here is where things may go all wonky for some. What if law **became** code? Seriously. Now, I know the counter arguments well; indeed, I've made many of them. Mostly they boil down to something similar to, "humans are complex and you cannot distill the entirety of human experience to code so as to regulate it in a sufficiently flexible manner". In other words, while we like due diligence, we also like mercy, flexibility, and contextual understanding of fact patterns.

Despite whether some lawyers want to deal with it or not, law **will become** code -- to a certain extent. I say this with certainty because I believe it is a certainty. Why? The internet of things will drive rule making frameworks toward code. How else will city counsels tell the self-driving cars not to park on main street between the hours of 8am and 4pm on 01 January because the town is having a New Years parade?  How else will a water district or board be able to communicate to automated irrigation systems that the district is experiencing a drought right now and all non-essential irrigation activities need to be done either in the night or turned off?

One significant advantage in the convergence of code and law largely does away with an entire set of litigation: what I've been calling textual ambiguity within agreements. Now, granted, this is not a significant burden on most court systems that I'm aware of, but still there are greater than zero cases which dispute the language of an agreement. The precision required to build rules as code will largely do away with such cases. Indeed, there are other  advantages in the convergence of code and law for rule making rule dissemination, rule implementation, and rule enforcement processes which I hope to elucidate over the coming months.

There are also some disadvantages, or put more properly, there are real and clear reasons why I do not think that **all** law should be reduced to code. For one, computers will -- for the foreseeable future -- have a difficulty determining whether an event has occurred in a particular manner, or what I call: factual ambiguity. This is the other stream of litigation which flows from contractual disputes (as well as regulatory disputes) and it is unlikely that computers and robots will be very good at the level of reasoning and contextual awareness required to parse out such disputes at any point in the next two to three generations.

### Law as Code is Now Possible

Smart contracts are the first technology I'm aware of which actually makes law as code possible. This is probably the single most exciting thing about smart contract from my perspective.

Escrow agreements as code? Simple. Trusts and SPVs as code? Not simple, but certainly possible. Any type of agreement which can easily be measured and for which enforcement is covered within the four corners of the contract can possibly be reduced to code in the form of smart contracts. Exciting indeed.

Now, any lawyer worth their salt would not (for the foreseeable future) recommend to their client to simply put in place smart contracts because at this particular moment I would guess there are less than five judges in all jurisdictions on earth which would be able and willing to actually enforce a smart contract in the real world.

As some late night shows tend to say, but wait, there's more! There is a paradigm which I've been calling **dual integration** which will allow lawyers to develop agreements which have a real world contract component and a computer world contract component with the documents reciprocally integrating one another. This allows the lawyer's clients to gain the enforcement power which is currently well known and mature (e.g., go to court) along with the lesser known and less mature automation and precision advantages which smart contracts provide.

When I first built legal markdown the idea was to take contracts and to reduce those into templates as a coder would. This process extracts the parameters of the contract into front matter which any programming language can deal with and leaves the template text to render as it normally would after the parameters have been provided. In the original version of legal markdown, which I built in Ruby, these parameters were in the form of YAML front matter. In the completely updated version of legal markdown parameters can be in the form of YAML front matter or passed separately as json or yaml.

At Eris Industries, we have been building systems of smart contracts using a very similar paradigm. We use what we call factories, which are similar to legal markdown templates. These factories are passed a set of parameters and from that they derive an individual smart contract which matches the template and is responsive to the parameters. This process exactly mirrors what legal markdown does.

So when smart contract factories are combined with legal markdown templates, lawyers are able to have the best of all worlds. Legal applications can be developed which accept a single set of parameters and from that set a real world legal contract (in PDF or other form) can be outputted as well as a smart contract can also be deployed. And, oh by the way, the real world contract PDFs can be encrypted and disseminated in a peer-to-peer manner using a distributed file system. Indeed, we have developed the sequencing for dual integration of real world and computer world contracts for our MarketPlace application.

### Putting It Together

Not all of the above has been built at this current time. However, a great portion of the first tools which will make law as code and distributed, encrypted file sharing a possibility are now built. If this is interesting to you, please do read more about our distributed application server and our smart contract systems.

If you are having a legal hackathon or other legal hacking event and you wish help in getting acquainted with smart contract or distributed systems please send us an [email](mailto:contact@monax.io) or let us know on [Twitter](https://twitter.com/monaxHQ).