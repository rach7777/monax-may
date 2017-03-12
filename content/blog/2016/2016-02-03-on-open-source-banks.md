---
author: casey
categories:
- distributed systems for business
comments: true
date: 2016-02-03T00:00:00Z
excerpt: 'Hint: think about your ecosystem, think like a participant, think like a
  platform.'
meta: true
published: true
tags:
- open source
- banks
thumbnail: open_source.jpg
title: What Bankers Could Learn From the Open Source Community
url: /2016/02/03/on-open-source-banks/
---

[{{< image_blog "open_source.jpg" >}}](https://www.flickr.com/photos/opensourceway/8297629214/)

I learned a lot over the course of 2015. One of the things which has been interesting is my own move from working with nearly **only** free and open source folks to working with many incumbent firms.

In the openData and legalHacker lands in which I spent much of 2013-2014 things are very different than in a modern, multinational corporation. The approaches of these groups of humans to how they build and use software is markedly different. Of course there are many differences, yet in this think piece, I'd like to tease out one of those differences -- how they approach open source software -- that I've observed during my journey. Hopefully with a mind to communicating some of my own thoughts to the discussion.

# But first, what's open source "about", at least in my opinion?

There are a range of arguments seeking to answer the question: *why do big tech firms participate in open source software*? The most obvious argument of course is that the folks who write software for a living would have an ability to share the costs of the development of some of that software with other firms where they did not have a differentiated problem set nor did they have differentiated corporate interests. There are other arguments of course.

> In the union of non-differentiated problem sets and non-diffentiated corporate interests is, in my opinion, the driver towards more corporates using open source software.

There are also a range of arguments seeking to answer the question: *why are goverments completely misguided if they are not participating in open source software*? In the governance regime vendor lock in is slowly, but surely, becoming a bad thing thereby giving an edge to open source software. There has been a ton of thought leadership, groundbreaking collaborations, and other very fascinating work that has come out of the civic hacker and open data worlds. Much of this was enabled by and sought to give back to a range of open source software. The best folks within these movements understand that open source software is a two way street.

> Good to `consume` open source software; even better to `participate` in open source software.

Finally, there are a range of arguments seeking to answer the question: *why is the legal community increasingly participating in open source software*? While in many ways the openLaw, legalHacker, and legalTech movements have somewhat differing pathways, they all rely heavily on open source software. And, they all know that

> By participating in an ecosystem one can catalyze something with a greater reach.

Now to answer the originally posed question, my own opinion about open source software lies at the intersection of those three vectors.

Namely, to me open source is about:

* allocating individualized resources towards a collective effort to solve a common problem
* participating in the community, dialogue, effort for the "things" on which one's own competitive advantage is built
* greatly increased reach of thoughts, opinions, strategy, and... code.

# How can this apply to bankers?

Personally, I'd say there are three big lessons which bankers can learn from the open source community. One last caveat is that in this post I'm not talking to bank IT-ers. They already use a ton of open source software (although maybe management could actually let them send pull requests a bit easier :-) ). This post was written with the folks on the business side in my mind.

## Lesson 1: Think About Your Ecosystem Rather than Only On One Cell's Walls

In the grand scheme of things a company's firewall is less like the great wall of china than it is like the outer walls of our cells. Meaning, they're semi-permeable and move around a lot.

A cell's walls are, well, a pretty important thing. We would not be alive without them. And a company's firewalls (which I'm using generically to mean the company's "safe computing zone") are equally important. The modern world would likely not be where it is without them. Yet if we put too much emphasis on a single cell's walls are we not missing the bigger picture?

What do I mean by this?

A bank, its customers, its products, its platform, its employees, they all shape and formulate "what a bank is". They each know folks who work at other banks and who face very similar problem sets. Indeed there are many problem sets that fall into the category of: everyone in town agrees that X is a common problem and, also, we evoke no competitive advantage in how we individually address that problem. In tech that will often lead to a "let's collaborate here" discussion. And, increasingly, bankers are, at least theoretically, "buying into" this "idea".

The relationships that are gained by the interactions that take place "outside the cell's walls" are vital to modern, functional economies. And banks need to embrace this quickly or they will be replaced quickly with those that do understand this.

As to what the blockers are, it seems to me at least that the blockers are mainly bad processes at the cell's walls. Every bank's IT rules are different, but in general they slow down communication which could be mutually valuable.

I think the best strategies for corporates trying to engage more in open source are to:

* have clear boundaries around what is proprietary work and what is open source work
* do not have a 100:0 ratio between the above (what is proprietary and what is open source)
* communicate those boundaries
* have policies in place for when folks may think "i'm not sure"

The above is purely subjective, by the way.

## Lesson 2: Think Like a Participant, Not a Consumer

This lesson is quite personal to me. And it has been a part of my own journey getting to know bankers and insurance folks and many others who were outside previous orbits I had spun.

In the early days I realized that many bankers have a habit to say: *sell me a solution to a problem I have*. In banking this is no different than what many in government say. Moving to consuming open source software is one thing, but it is only an important first step.

> When one starts `participating` in open source software, one truly sees its benefits.

In actuality one moves from the maker-user relationship being "we ask, you deliver" (or not), to a relationship of "hey we did this cool thing that was helpful for both of us and lots of other folks like it so it is much easier to maintain than if we did it purely internally".

What do I mean by this?

Let's take two otherwise equal skill level developers. Let's say one works at a global bank. And the other one works in a tech company. They are both working with an open source piece of software. They both find a bug in that software. What happens now?

**Developer in Tech Company** -- goes to github.com (since they're statistically most likely to be working from there) and files a bug report, watches the bug as it is responded to by the project and helps to debug the problem along the way if necessary, and when the bug is fixed generally says "thanks folks" and merges it into whatever he was blocked on by the bug.

**Developer in Bank** -- calls someone? their open source solutions provider? emails someone? reports it to internal ticketing system? And then asks how does the bugfix get back into my stuff?

Because, and this is a gross generalization, tech companies have adopted ecosystems thinking a bit faster than banks, tech companies have crafted their policies to include the idea that, yeah, developers may go to github and use their "personal" account, because they have seen and felt the value in thinking beyond only the cell walls of their individual company.

## Lesson 3: The Bank as a Platform Idea is Happening, Get Global Scale

I love watching our analytics. It is wonderful to see folks from all around the world, around the clock, understanding a bit more about the `way of the marmot`. If we "sold" Eris, rather than what we do do, which is selling components of applications that just so happen to run well on Eris, then we would have to build a much bigger sales force than we have. In other words, and blockchain startups I'm gonna let you in on a little secret here:

> The best way to do strategic pre-selling of your product is to be open source by default and closed source only where necessary.

If a banker wants to try Eris today to build their own little tiny blockchain backed application [it should take them about 2 hours with no technical background](/docs/getting-started/). And that banker could be in Hargeisa, Somaliland (where I know it's happened). Or New York (where I know it's happened). Or anywhere (not sure it's happened there). Instantly, tons of bankers can "see" what this stuff "feels" like, how the "engine" runs, etc. in a pretty approachable manner. All without us at Monax Industries having to do any more than we would do even if we weren't open source by default: namely code, test, and document our tooling. In some ways we do *less* because we are an open source by default company because our users help us to debug the challenges they face and refine how we communicate `Eris`.

What do I mean by this?

Let's imagine a future which I'd say is definitely in the range of the possible. Let's imagine that multiple firms jostle for competitive advantage around "plugging fiat" into "chains". And let's also imagine that we are in a land where the plurality of chains folks have been >= 20% correct (in other words we have lots of chains, configured in lots of ways, doing lots of things, for lots of reasons).

For firms to compete here they would need to tackle two distinct challenges. One of which is how to make it so the chains (with or without various business logic layers of abstraction) plug into your service/offering/platform/thing. The other of which is how do you plug your service/offering/platform/thing into a global or regional payments network (which may or may not be cryptocurrency based; a topic to which I'm decidedly agnostic)?

A neat problem to tackle for sure. And the firms that win that game will need to achieve global scale. And to do so, they're likely gonna have to open source some things. Perhaps that is a suite of payment instructions smart contracts with various types and levels of permissions so that the firm can move money around IRL based on what a bunch of different chains are sending. Perhaps it is parsing UTXO's so that the firm can move money around IRL based on what a bunch of different chains are sending. (Most likely it will be both.) Then, if a new startup wanted to use this firm "to move money around for them", whether that was the hot new real estate application, or the wizkids with the machine learning algo and a desire to lower credit risk for smaller companies, all they'd need to do is to import a library of smart contracts and be done with it.

The point of the above is not the details, it was simply an example. That said, I do think we're going to get there faster than many folks realize. The point of the above is to show how a bank that took the "we're a tech company first" or the "we're a platform first" approach to business could be working internally to open doors for their folks to be able to participate in open source (which is much more than "here's our API"). Because:

> Participation in open source is the easiest way to rapidly achieve global scale in an information age economy.

# Conclusion

There are no easy answers here. But I do think that banks would be wise to at a minimum begin to address the fairly clear areas in Lesson 1. Banks are increasingly consumers of open source software and many developers within banks are excited by the idea of being able to work more collaboratively and participatorial-y.

[(Photo credit: CC-BY-SA: OpenSource.com @ Flickr )](https://www.flickr.com/photos/opensourceway/)

<hr />

And now. A few quotes that helped refine my thinking about Eris and our open source by default strategy to software design.

<hr />

> We’re asking the wrong question. Open source is in part a) A license b) A methodology for developing something and c) A community of interested people. Feel free to add more items. But notice… open source is not a business model.

> Open source can help you reduce your expenses. This can be from sharing costs and risks for R&D. There’s other interesting benefits such as faster time to market potentially as well. You may see benefits from marketing if people are trying your software before they buy. If you can really do it well, you can open up a whole new market with open source components and a consortium of complementary partners.

[source](http://42aross.wordpress.com/2012/07/20/just-how-do-you-make-money-with-open-source/)

<hr />

> Speaking at Linux Foundation sponsored events not only helps us with our open source visibility, but provides a great way for us to find potential candidates for our team.

> It used to be that you could be the best coder on the block, and that was enough. In some projects, that might still be the case, but to effectively balance a community's needs with a corporation's wants, you have to be able to code/design well, and also articulate ideas and sell them to others.

[source](http://opensource.com/business/14/10/interview-Guy-Martin-Samsung)

<hr />

> Ideology isn't what has sold the open source model. It started gaining attention when it was obvious that open source was the best method of developing and improving the highest quality technology.

~ Linus Torvalds

<hr />

> The adoption of open source code allows businesses to harness the creativity and labour of both their employees and their customers in a way that is not available to firms employing only proprietary software licenses.

> In addition to the possibility of a shortened development time (e.g., Dahlander, 2007), open source projects commonly report a wider adoption of their code (e.g., West, 2003) and receive more high-quality feedback and bug reports than closed source projects (see Schindler [2007] for a comparison). Open source licensing also enables a faster average time from discovery to solution (Schindler, 2007). Indeed, open source products have been often shown to be superior to their proprietary counterparts (e.g., Wheeler, 2007). Furthermore, companies can see development of their product in directions they did not realize was significant to their users, as well as the development of features that are too far from the firm’s core business to receive in-house funding for development.

[source](http://timreview.ca/article/756)

<hr />

> Technological motivations include the advantages of levering the intelligence of collectives, obtaining code that is not available in proprietary software, and the quality and reliability of OSS.

[source](http://timreview.ca/article/635)
