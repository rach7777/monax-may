---
author: preston
categories:
- distributed business
comments: true
date: 2015-04-28T00:00:00Z
excerpt: Crypto-tokens are so, like, totally last week. You don't need 'em - and indeed
  don't want 'em - in commercial applications.
meta: true
published: true
tags:
- eris
- thelonious
- decerver
thumbnail: scallthethings.jpg
title: 'Smart securitisation, or: why it''s time to stop talking tokens and start
  talking smart contracts'
url: /2015/04/28/smart-securitisation/
---

{{ printf "/images/blog/%s/%s" .Page.Now.Year "scallthethings.jpg" }}

# We need to have a chat about cryptocurrency tokens.

## 1. You're doing it wrong (but don't worry - chalk it up as a learning experience)

To date, most of the folks in Bitcoin/Crypto have made the rather critical mistake of assuming that asset ownership and/or replacing a bank is as simple as

* tokenising ALL THE THINGS (a token being also known as a "coin", e.g. a bitcoin) and then
* trading them around on a "trustless" decentralised network.

I don't think so.

There are a couple of serious problems with this approach:

**First,** the fully-decentralised networks such as Bitcoin - being completely open - don't actually provide you with a facility to verify that the thing someone is trading is *actually that thing.* A token could represent a car or a house, sure, but unless you can link that token to a certified copy of a title deed - and then ascertain that no other prior interests took priority to yours - when you purchase that token with (e.g.) Bitcoin in a crypto-escrow-thingy you might be taking an encumbered asset. Or the asset may not actually exist. "On-chain" assets which are secured by, for example, the reputation of anonymous issuers are simply [not commercially viable propositions.](http://www.theguardian.com/technology/2015/mar/18/bitcoin-deep-web-evolution-exit-scam-12-million-dollars)

**Second,** blockchains are not super-computers or AI machines - neither Freenet nor Skynet - they're databases, and they are reactive databases at that (i.e., they respond to instructions). They lack the ability to step out into the real world and enforce (that is a people-job for the time being). Where decentralised e.g. Bitcoin or Ethereum, they are fully opt-in and rely on a standalone economy with no real-world nexus in order to function - a high bar which assumes much about the usefulness of decentralised networks and ignores much about how real-world commerce is conducted.

"Decentralised" systems as we've known them to date are designed to frustrate accountability and intervention. But where a decentralisation advocate might say "trust the math," I would counter that for most people that statement actually means "be held hostage to the math."

**Third,** in the real world, discretion is allowed. Hell, it's absolutely necessary. This "trustless" stuff is a bunch of bunk - what it means in practice is that you're trusting a bunch of anonymous "miners" whose interests may be very different from your own - so trust-limitation or trust-allocation or trust-minimisation is what you want to acheive (in other words: someone's in charge, so rather than trying to circumvent legal control you're trying to use the blockchain to reduce friction - i.e., automate business process).

In decentralisation-land, this is not what you get. If the network fails from lack of use or external attack, the representations of those assets are suddenly beyond your control. If a "smart will" locks up some Bitcoin in escrow as part of a decedent's estate and the key is lost, no court on Earth will be able to retrieve it. If a "coin" or "token" representing a right to a thing is transferred on the basis of a misrepresentation, the remedy of rescission is impossible.

...put differently, blockchains structured like Bitcoin are a really bad deal for practically anyone who uses them. The existence of someone you can sue is, actually, extremely handy. Which is why we're betting that blockchains with identifiable, responsible operators - **permissioned blockchains** - are the way forward.

**Last but not least,** and what the rest of this post will focus on, "crypto-tokens" are actually really inadequate ways of expressing real-world financial obligations - even simple ones like a bond instrument. And tokens are, futhermore, completely unnecessary to transfer real-world value on a blockchain.

Which means maybe we should think about not using them!

## 2. The limited usefulness of the token

If we take the case of, e.g., a bond instrument, the token-driven model falls down immediately on practical points. This is because tokens don't solve a problem that anyone actually has.

Tokens are just data. Ones and zeroes. However, things like financial instruments are actually pretty complex, event-driven bundles of rights and obligations. Our blockchain design, [ErisDB](https://monax.io/platform/db, is a cryptographically-secure event database designed to process these events. We're by no means limiting ourselves to finance but this is where we're starting, as that's where the clients are.

That's not to say you can't "hack" a decentralised network to get tokens performing more complex value functions - you can, and provided that you can get the legal nexus to ensure that these representations are, in fact, legally binding manifestations of an asset, tokenisation could work - see, e.g., Taariq Lewis' DigitalTangible or stuff like Ripple/Stellar gateways.

It is feasible that such networks could also, at some future date, also operate in a limited IoT capacity, such as smart property, in P2P consumer applications (see, e.g., IoT stuff such as Nick Szabo's example of transferring ownership to a car through a cryptographic escrow contract linking a car's immobiliser/ignition to a write permission of a particular key pair).

We're not too keen on that at the moment. For two main reasons:

* the market infrastructure simply isn't there, and
* payments/consumer stuff is pretty dull. At least, it is when compared with structured finance.

Even if we assume that the model works from a legal-technical perspective (which requires structuring around the gate-points which grant access to and from the chain), for the stuff we think blockchains are best at, tokenisation is not the name of the game.

## 3. Smart contractify the things, and actually solve a problem

Am I going to outline a smart securitisation in this blogpost, end-to-end? No, because I have a couple of things I'd like to do other than write in the next two months (in case you're wondering though, we have thought through these matters and the smart contracts needed to implement them [in some detail](https://monax.io/docs/tutorials/solidity/) while we were in Stealth Mode in 2014).

What I will do, however, is provide a very high-level, 30,000 foot view of why this most fundamental mainstream financial transaction won't work on a token-driven blockchain - but will work on a purely smart contract-driven one such as ErisDB.

Here's a link to a [prospectus/offering circular of a RMBS deal](http://www.ulsterbank.com/content/group/debt_investors/downloads/CELTIC_RESIDENTIAL_IRISH%20MORTGAGE_SECURITISATION_No_12_Limited.pdf) I worked on as a young lawyer (**Celtic 12**) which I think is instructive as to why a token doesn't (and won't ever) cut the mustard for what the banks want to do.

Assume

* entitlements to each class of the Celtic 12 Notes (A1, A2, A3, B, and C) are each proportionally held in the form of 100 tokens, and
* the ICSD (let's say Clearstream, Luxembourg) decides it's going to deal with these tokens on a Bitcoin metaprotocol e.g. Counterparty or a hosted solution like Ripple/Stellar (before anyone freaks out, I know Stellar has just proposed a new PoS algo, but I haven't had time to read up on it just yet).

Then ask yourself:

### a) Does tokenisation solve a problem anyone has?

No.

The custodian of the Notes (in this case a "Common Safekeeper") will have custody of the notes and will deposit them with Clearstream, who will have a ledger which records that the Common Safekeeper owns the entirety of the issuance. Securities deposited with ICSDs are customarily insolvency-remote vis a vis the ICSD so there's no counterparty risk at this level of the transaction.

Using a SQL database with digital signatures for this purpose is probably easier/faster than using Bitcoin or a blockchain. You *could* use a blockchain if you wanted to, for instance, protect yourself against something like a [SQL injection attack](http://www.reddit.com/r/erisindustries/comments/31uuru/blockchain_usecase_1_user_1_instantiation/) and verify the contents of the database - in which case all the "blockchainy" things you need are merkleisation and the use of private key write permissions to control access.

But even if you did that, you still wouldn't need value-tokens. The presence of [database operators/admins](https://monax.io/docs/tutorials) in a commercial blockchain deployment (as surely there will be) means that the only need tokens satisfy - automatic monetary rewards to incentivise security - no longer exists.

So where we're left is that the "counterparty risk" problems Bitcoin and its ilk solve really aren't that big an issue with securities or other kinds of financial transactions. Even in a trading context (in which case you're looking at settlement risk), inert tokens are totally inferior to assets constituted as dynamic scripts (smart contracts).

See ya later, tokens.

### b) If there are no tokens, why are we here? Shouldn't we just pack up and go home?

Nope, because these obligations are highly amenable to smart contractification.**

As far as value transmission is concerned, smart contract-powered blockchains solve a coordination problem, not an ownership problem. And really, co-ordination - not value storage - is what a blockchain is best at doing:

* Blockchain databases have value because their users ascribe value to that data.
* This value (in the case of the cryptocurrencies) is because the users of the cryptocurrencies think they're worth something through what is called a "network effect."
* In the case of high finance (in the case of permissioned blockchains), they'll have value because the rights/obligations a particular blockchain's data represent will be a record of enforceable obligations against the person operating the blockchain.
* What do Bitcoin and a permissioned blockchain have in common? Easy: they allow users to move data representing value around **reliably, automatically, on certain terms, in a Byzantine fault-tolerant manner.** (Co-ordination.)
* The main difference is that permissioned blockchains record value just like regular databases do today. No "network effect" necessary.

[Simples!](https://www.youtube.com/watch?v=M0mXUC0cUPg)

In this kind of a transaction, the complexity isn't in *who owns what*: it's in getting the payments from the underlying assets (in this case, mortgage loans) where they're meant to go in the way they're meant to get there. Broadly speaking payment flows on a transaction such as Celtic 12 will look something like this (very basically):

Mortgage borrowers --> Servicer --> Account Bank --> Principal Paying Agent --> out through Payments Waterfall to transaction parties

Managing these payment flows involves more than just knowing where the bondholders are and paying them. See terms and conditions starting on p. 85, and in particular Condition 6 (generally) and particularly Condition 6(1)(b) (page 94) (payment prioritisation) of the Celtic 12 OC. Not only are non-bondholders getting paid, but they get paid depending on

* the type of receipt they are, and
* in a different order depending on whether an Event of Default, Pro-Rata Trigger Event, or Enforcement of Security has occurred (see Cashflows on page 34 et seq.)

Multiple parties (First Active (the Originator) is also the Servicer, Deutsche is in the Trustee/Corp Services roles, and RBS is in most other roles)  are all using separate software stacks and messaging systems to transfer information around as to what should come out of the payments waterfall before the bondholders get paid. Things can get screwed up, misrecorded, miscalculated or lost.

And when you have to coordinate so many cooks, there's a lot of room for error (one deal I worked on a year ago blew through £100,000 trying to sort out a payment prioritisation interpretation error).

Each of these parties charges tens of thousands of pounds per role, per deal, per annum to manage this stuff. They have to maintain a huge legacy infrastructure (human and machine) because there's no good way to co-ordinate these various triggers

* on an open standard
* in a verifiable and automatic way
* with a really straightforward security apparatus
* without exposing themselves to any individual bank's stack.

Three guesses as to what technology can do that really, really well while ensuring really high uptime.

Blockchain! Correct. How did you guess?

### c) Right, so you're automating payment triggers by creating a system that's maintained (and observed) by all participants. Why do you need that whole "you can modify the system on command" thing?

Controllable blockchains aren't just a "nice-to-have" in applications such as high finance. They're an absolute necessity.

This is because terms of transactions change, often arbitrarily. See Condition 11 (Modification & waiver) generally and Condition 11.8 (unilateral amendment by Trustee in the event of manifest or proven error) of the Celtic 12 OC. Additionally the Trustee calls things like Events of Default and enforcement of security which can change how the payment triggers work, automatically, once called.

Implementing these changes is a complete pain in the ass and involves a lot of wringing of hands, paperwork, phone calls and lawyers. I should know. I was there.

## 4. So what you're saying is, it's totally inadequate to use a crypto-token to describe virtually any mainstream financial obligation. And everyone has called this one wrong.

Pretty much - at least if you want to build something that addresses a problem mainstream financial institutions actually have. Sorry, California.

This isn't the only co-ordination problem in finance a blockchain could fix - there are many. But it's the best example I can think to illustrate in a blog post!

Hence: we at Monax Industries see a world with millions of blockchains, each designed for a particular purpose, co-ordinating a particular set of relationships in a reliable and verifiable way.

Guess which company in the world is the only one that makes free, open-source tools that you can use - today - to solve problems just like this one.

And no, it isn't [Marmot Corp](http://www.marmcorp.com).




*Notes.*
**per Google, this post will be the first to use the term "smart contractification." Woohoo!
