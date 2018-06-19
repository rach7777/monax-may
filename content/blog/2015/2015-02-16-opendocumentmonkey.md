---
author: preston
categories:
- products
comments: true
date: 2015-02-16T00:00:00Z
excerpt: Legal process and document management is expensive, time-consuming, and soul-destroying.
  Could blockchains offer a better way to go about the practice of transactional law?
meta: true
published: true
tags:
- monax
thumbnail: doug.png
title: 'Open Document Monkey: A sketch and proposal'
url: /2015/02/16/opendocumentmonkey/
---

## Open Document Monkey: a proposal for a utility blockchain application.
___


#1. Lawyers. Lawyers everywhere.

##A. Monax Industries' legal bones.

Two of Monax Industries' three founders - Casey and myself - are lawyers. But as far as lawyers go, we could hardly be less alike, which - way back in May of last year - presented some pretty unique challenges in the context of the (notoriously hazardous) exercise of building a startup. As of the day we incorporated, Casey and I had met in person only *twice*, and there was rather a lot on which we disagreed. We had to arrive at a commercial consensus - and fast - if the company were to succeed.

To address this divergence, we started a practice we jokingly referred to as "fighting in front of the kids". Every week or so, Casey would fly to London, we'd go out to the same Bangladeshi restaurant for dinner, and we'd argue - entirely deliberately, no-holds-barred.

Usually, about 24 hours of grumping would follow before one of us or the other would concede. The following week, we'd do it again, and did so week after week, again and again, for three months straight.

### B. To Word, or not to Word. That is the question.

Nine months in, and it's abundantly clear that deliberate argumentation was a great idea. Apart from getting us comfortable with communicating openly and directly, this process has fostered a company culture which - as put by Jeffrey Friedman - emphasises "the importance of subverting one’s own natural intellectual complacency with the constant reminder that one might be wrong."

One of our discussions last summer hinged on whether we should use [Legal Markdown](/platform) to negotiate the transaction documents with our [Seed Stage investor](http://anthemis.com) as well as our first possible clients. Casey argued that we should, in order to demonstrate the utility of the technology; I pointed out that this approach probably wouldn't go down particularly well, seeing as both our lawyers, the other side's lawyers, and the other side themselves would all use MS Word. Thus, so should we. Casey relented; Word was used.

Since then, we've been using GitHub for most of our internal documents - legal or otherwise - and I have arrived at the point Casey was at several years ago: namely, I don't like using Word any more. It's an inefficient, bulky, and overly prescriptive piece of software; every bank and law firm using it has a different set of custom templates, none of which are compatible with each other. I now even find myself using SublimeText to draft medium-size e-mails - and even this blog post - just because it's easier to work with.

With the above in mind, I think the time is right for me to concede that - although Word will remain *de rigeur* for most commercial negotiations in the near-term (**I'm still right**) - Casey did sort of maybe perhaps have a point, ...ish (**I was wrong**).

##C. Text documents are data, just like anything else.

**Here at Monax Industries we're all about structuring data in useful ways to save costs, time, and effort.** Combined with a self-managing blockchain, text documents can - and should - be structured to streamline legal process and reduce oversight costs. It's thus my pleasure to introduce the first sketch of an application that is designed to do that - an open-source standard for document management that makes the more miserable aspects of transaction management a little less miserable.

I call this proposed open standard/blockchain application **Open Document Monkey.**

## 2. What are you proposing?

I'm not talking about the [replacement of lawyers](http://prismlegal.com/meet-new-lawyer-ibm-watson/).

I am talking about identifying inefficient business processes that result from a system where multiple actors, using multiple silos, can actually do something much more efficiently if they all use an agreed set of rules, by removing points of articulation - i.e., human labour - which are currently responsible for administering that process.

I set out a conceptual framework for the transaction management process below.

## 3. Introducing the problem set for Open Document Monkey

### A. Not your typical overcomplicated blockchain problem

Let us take, by way of example, a typical structured finance transaction. Suppose that a small British commercial bank, FuzziBank, has a pool of loans it wants to move off its balance sheet - a series of SME loans secured by the receivables from [marmot farms](http://www.celotajs.lv/en/e/murksku_audzetava) in the south of England. It wants to do so by selling the loans into a SPV which will then issue variable funding notes (VFNs) to investors.

Before we get ahead of ourselves, this blogpost doesn't propose automating the securitisation. Given the present state of blockchain technology that would be hugely over-ambitious in scope, a nightmare to code and integrate and, I suspect, isn't going to be seen in a near-term commercial application (i.e. commercially viable implementation within the next 36 months).

So I'm going to propose that we look at the transaction from the perspective of automating a much simpler problem, at least from a legal structuring perspective: how to automate the process of **negotiating** the deal.

This is something which could probably be built in the near-term future.

### B. Dramatis Personae

What we're building, then, is a communications tool - a web application - rather than a financial instrument. Why a blockchain? Well, because with a blockchain database - even if its administration is centralised - we still benefit from:

* certainty of access permissions,
* certainty of current state, and
* certainty of history,

without anyone needing to rely on the cloud or exclusively on third-party servers to manage the process.

On the kind of transaction we've described, there will usually only be a couple of banks, each of which will act in multiple capacities. In this case, FuzziBank's group - since it originated the loans which are to be securitised - might play a couple of roles including

* **Originator**		- Fuzzibank Cuddly Critter Funding Limited
* **Servicer**			- Fuzzibank plc
* **Account Bank** 	- Fuzzibank plc
* **Cash Manager**	- Fuzzibank plc
* **VFN Registrar**	- Fuzzibank plc

and would probably assume a forward role in setting up the special-purpose vehicles for the transaction. For simplicity let's say this isn't a listed deal (keep those pesky prospectuses out of the equation):

* **Issuer**			  - Cuddly Critter Finance 1 Limited
* **Holdco**				- Cuddly Critter Holdco 1 Limited

In the meantime another, larger bank might be appointed the trustee - the bank which holds the VFN holders' rights on trust and enforces them in accordance with the terms of the deal. We'll appoint one bank to do both:

* **Note Trustee**	   - GothamBank Corporate Trust
* **Security Trustee** - GothamBank Corporate Trust

Certain banks would be appointed arrangers of the deal, responsible for underwriting it so that the deal actually has enough funding to complete. Let's say we've got two of those on this deal:

* **Arrangers** 				- WagnerBank AG; GothamBank plc

And let's say we've also got a swap in there because some of the SME marmot farming loans were originated on a fixed rate of interest:

* **Swap provider** 		- GothamBank plc

And then we'd have the corporate services provider, who runs the Issuer, Holdco and the share trust that tops out Holdco:

* **CSP** 	              - Billington Corporate Services (UK) Ltd
* **Share Trustee (Holdco)** - Billington Trust (UK) Ltd

As you can see, there are quite a few transaction parties involved (in this abbreviated example, twelve) but generally these are limited to two or three corporate groups. This means the number of law firms involved can be kept down to a couple. In this example, let's say there are two:

1. [Dewey, Cheatem and Howe](http://en.wikipedia.org/wiki/Dewey,_Cheatem_%26_Howe) (DCH) (For FuzziBank, Issuer and Holdco).
2. [Harvey Birdman Associates](http://en.wikipedia.org/wiki/Harvey_Birdman,_Attorney_at_Law) ("Harvey Birdman") (for GothamBank plc as the Note/Security Trustee).
3. Harvey Birdman (for the Swap Provider).
4. Harvey Birdman (for the Arrangers).

Two law firms, a couple of really commercially astute clients. **Simple, right?**

### C. No. This is actually an enormous pain in the ass

As anyone who has worked on one of these deals will know, negotiating one is a labour-intensive exercise - one which will cost hundreds of thousands of pounds in professional services fees.

The reasons for this will be easily grokable for those who have spent a significant amount of time doing this work in the trenches; the best way to describe it to those who have not yet sailed the high seas of securitisation, however, is to point out that:

* each party to the deal has its obligations set out in a separate agreement (Services Agreement, Note Trust Deed, Security Trust Deed, Account Bank Agreement, etc. etc.);

* each agreement in the deal uses a common set of definitions (usually contained in something known as a "master definitions schedule" or similar), although sometimes these definitions may be inconsistent across agreements, or may change;

* each law firm working on the deal will have separate teams working on different aspects of the transaction (e.g., for FuzziBank, one team will work on bond-level documentation while another might work on loan-level documentation, another team will work on the tax provisions, and still another will work on the swaps);

* usually, each team within each law firm will be amending separate soft-copies of a MS Word .DOC file which they will then submit to a single person to incorporate manually;

* for each law firm, a few people (generally an associate or two on each of the teams working on the transaction) are responsible for collating and implementing these changes manually, ensuring definitions are consistently used, creating "redlines" (i.e. diffs) manually, and tracking which versions of which documents have been sent to whom and when.

In other words, **Document Monkeys** are appointed. In all areas of private practice.

This process (essentially human version control) is incredibly expensive; even junior lawyers doing organisational work costs a client several hundred pounds per hour. This model is responsible for a slew of departures from the profession at the junior end.

Costs can be saved, business won, and talented people retained by automating this particularly miserable aspect of professional practice.

## 4. Document Tennis: understanding the process

I refer to the negotiation process as "**document tennis**." Docs are written by one set of lawyers, sent to the other side, and then returned by the other side with comments. So the process goes, on and on, until eventually a commercial agreement is reached and the final documents are produced.

The way this is currently done is, frankly, haphazard. Different firms and different banks, or even different individuals within those institutions, may all be using different versions of MS Word; separate, standalone soft-copies of Word documents are amended on their own, and then passed to a central point (usually a junior) who spends the majority of his or her time tracking these changes and manually inputting them into a master document which they manage.

This is inefficient. A consistent architecture is called for; much in the same way that software development is conducted over GitHub in a distributed fashion, there is absolutely no reason whatsoever that negotiating legal documents could not be done in a similar way: where, once everyone's comments had been submitted to a master document, the core deal team could incorporate them straightforwardly with little more than a single click and ping them across to the other side with a second click.

Where a blockchain comes in is that

* the process would be **highly resilient against unauthorised amendments** (and transparent/easy to see if and how they were made);
* a highly **verifiable, self-managing record of the entire negotiation would be automatically produced** which would show who introduced what terms, when, and why. Which could be really useful in, e.g., subsequent litigation; and
* this process would be managed automatically **without any manual inputs** from a traditional, flesh-and-blood document monkey.

So let's see how this system might work.

###A) Federer v Murray

Assume this is all going to be very prettily displayed in JavaScript, rather in the same way that a virtual data room looks today.

For the purposes of doling out permissions to amend the documents, we have:

* **Drafting Counsel** (DC). (Writes the first draft of a document and runs it over the life of the deal.)
* **Drafting Counsel - Other** (e.g. tax teams, etc.) (DCO)
* **Drafting Counsel - Client** (DCC).

and

* **Reviewing Counsel** (RC). (Proposes changes but not holding the pen.)
* **Reviewing Counsel - Other** (RCO)
* **Reviewing Counsel - Client** (RCC).

###B) Painting the lines

This will take a lot of work up-front. Once done, however, it could save everyone rather a lot of time. The key is to set up a programmatic architecture in advance which (a) displays in JavaScript (so people can understand it and amend it through a text editor) but (b) also employs scripting architecture which flags inconsistencies automatically when they arise.

Monax's Legal Markdown could do this pretty well. You'd need to define a couple of things in advance:

i) Party names and details:

{{< highlight yaml >}}
---
party1_address:    "9001 Churchill Place, Canary Wharf, London, M4R M0T, United Kingdom"
party1_full:       "FuzziBank plc"
party1_jur:        England and Wales
party1_reg:        0901335
party1_short:      "(\"FuzziBank\")"
party1_def:		   "(\"Originator\")"
party1_type:       public limited company
party1_block:      FUZZIBANK PLC
party1_lawyer:     lawyer1
---
{{< / highlight >}}

ii) And their counsel:

{{< highlight yaml >}}
lawyer1_ID:			Dewey_Cheatem_Howe
lawyer1_short:  "(\"DCH\")"

{{< / highlight >}}

iii)  Once you've done that, populating a document with party names and addresses - and signature blocks - is an automatic process, a "tick-box" exercise:

{{< highlight yaml >}}
doc1_name:    	   "Note_Trust_Deed"
doc1_short:        Note Trust Deed
doc1_parties:      party1, party2, party3, party4, etc. etc.
doc1_govlaw:       England_Rome_II_maintained_precedent
doc1_[boilerplate] [etc.]
doc1_DC: 	         lawyer1
doc1_RC:		       lawyer2
doc1_defs:         doc2, [or: def1, def2, def44, etc.]
doc1_block:        deed
{{< / highlight >}}
Just make sure that in the doc1_parties field that everyone you want is listed and you can now render the

* Parties clauses,
* cover page and
* signature blocks

...automatically. To the extent other provisions are capable of being parameterised and dropped in (imagine if all of the boilerplate in a firm's templates automatically updated by reference once the knowledge team made a correction?) you would just add a new field pointing to the relevant maintained precedent and presto - tick the box and your precedent on this deal is wholly up-to-date.

Additionally, if you want to list the definitions separately it is simply an exercise of dragging-and-dropping from the master definitions schedule - with automatic cross-referencing where required.

Why documents identify the drafting counsel and reviewing counsel in their parameters, we'll get to in just a minute - so bear with me.

iv) **Definitions in the master definitions agreement**, the bane of any junior lawyer, will need to be defined so, for example, if one of the lawyers proposes a change in one document which is inconsistent with the main definition, this change will be automatically flagged across all of the documents to which that definition applies.

In the alternative, definitions which need to be used in different documents could be referred in by simply expanding the scope of the definition in question - which would then automatically update the prosaic language of the subsidiary document to whatever definition was current in the MDS. This is a *huge* time saver (I remember one senior associate on an enormously complex deal I worked on as a newly-qualified lawyer who spent the better part of a year conforming definitions).

That might look something like this:

{{< highlight yaml >}}
def35_full:        "ICSD means Euroclear and/or Clearstream, Luxembourg"
def35_short:      "(\"ICSD\")"
def35_scope:       doc1, doc2, etc. etc.
{{< / highlight >}}

v) **Cross-referencing** is already done today, but never works correctly since different law firms wind up using different software stacks. The idea behind Open Document Monkey is that a consistent, uniform open standard for cross-references could save law firms the time (and their clients, the cost) to which cross-system incompatibility currently gives rise.

###C) Service and return

Next, we have to define who can do what in relation to a given document. In line with the tennis analogy, I'd propose two phases:

* **Phase 1**: Document with Drafting Counsel. Reviewing Counsel cannot amend until Drafting Counsel broadcasts the `serve` command.

* **Phase 2**: Document with Reviewing Counsel. Drafting counsel cannot amend until Reviewing Counsel broadcasts the `return` command.

In each case, who is "Drafting Counsel" and who is "Reviewing Counsel" will depend on who is holding the pen for a particular deal or a particular document. It is possible that, e.g., Issuer's counsel will be drafting counsel for the majority of the documentation but if a state-backed guarantee is involved, the guarantor's counsel would hold the pen on that document alone.

Picking who does what is important in terms of the process automation.

###D) Rally

Once a document is drafted, a common copy of it - let's call it the Master Document - is uploaded to the system, and Document Tennis can properly commence. While anyone can store copies of a given document locally and work on amendments offline, one set of documents is shared in common - stored on a blockchain - and it is this copy which is the active copy for the purposes of ongoing negotiations.

If a document is in Phase 1, Drafting Counsel has the ball. Individual users of the system will be given permissions of DC, DCO, and DCC.

**i) Fork, hack, pull request**

Anyone on Drafting Counsel's side can propose amendments to the docs in Phase 1. DC, DCO and DCC can:

`Propose`: 	Propose a change to a document - roughly the same as forking master and submitting a pull request. These changes are not incorporated into the master document until the `accept` command is issued.

`Assent`: 	Communicate to DC-level users that a proposed change from Reviewing Counsel is acceptable.

It may be that these changes should occur locally on a certain sub-set of users' computers so the changes cannot be seen by the other side until they are approved and released.

**ii) Merge to master**

The ability to amend the live document shared with the other side rests with 'DC'-level users (i.e. the core deal team on a given document or documents) alone.

DC users are identified as 'Owner' and 'Monkey'. Partners get 'Owner' moniker and associates and trainees... well, you get the idea. In addition to 'propose' and 'assent,' these user permissions can:

`Accept`: 	Accept changes made by Reviewing Counsel in most recent Phase 2.

`Write`: 	Accept proposed changes into the master document.

`Serve`:  	Release new changes to the other side/put the ball in the other side's court.

`Override`: Monkey made a mistake when serving and will be severely punished.

`Unlock`:   Allows Reviewing Counsel to amend the master document out of turn ("serves the ball" without actually dropping in any new amendments).

Once a document is `Served`, Drafting Counsel will be locked out of the master file until Reviewing Counsel thwacks it back. It's in Reviewing Counsel's court, after all.

Speaking of Reviewing Counsel, here's all the cool stuff they can do:

**i) Fork, hack, pull request**

* As above changing Drafting Counsel to Reviewing Counsel, *mutatis mutandis*;

**ii) Merge to master**

* As above etc. etc. save that instead of `Serve`, the command is named `Return`.

## 5. Getting to agreed form - faster, and cheaper

Once all of the changes to the document are agreed/final, both sides click a button that says "agreed form" and - presto! The document (or indeed all of the documents) render in PDF, ready-to-print, and a blockchain data store holds not only the transaction bible but also precise details of every amendment that was made, who made it, and when.

Just script the functionality that a trainee currently carries out, and you've spared a junior lawyer's Friday night.

A system such as this, I think, could be very useful indeed. And with the Monax Industries stack, it can be built.
