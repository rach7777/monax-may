---
author: zach
categories:
- science
comments: true
date: 2016-03-14T00:00:00Z
excerpt: Participatory Research. Citizen Science
meta: true
published: true
tags:
- science
- research
- blockchain
thumbnail: null
title: 'Blockchains For Science: Aligning Research Incentives'
url: /2016/03/14/blockchains-and-science/
---

Author's Note: This post originally appeared as [How Blockchains Can Further Public Science](https://bitcoinmagazine.com/articles/how-blockchains-can-further-public-science-1457972964) in Bitcoin Magazine. It is maintained here for archival purposes. Eventually, it'll all be on IPFS. [Part 2 is now available](/blog/science/2016/03/15/chains-and-science-how-to/)


The thing that had me most excited about Bitcoin back in 2013 was its potential to re-align the incentives in academia and re-define how science and research is conducted. 

At the time, I was spending my days training rats in [Skinner boxes](https://en.wikipedia.org/wiki/Operant_conditioning_chamber) to hunt crickets, listening to every possible Bitcoin explainer I could get my hands on. It took a good two years, and now the problem set is much clearer. This post a think-piece on how academia might be improved with blockchain technology.

In what follows, I'll discuss the problems that perturbed me the most and highlight potential solutions.

Taught in every Research Methods 101 course, the file-drawer problem – more generally referred to as [publication bias](https://en.wikipedia.org/wiki/Publication_bias) – does perhaps the most disservice to the scientific community at large. Allow me to explain.

Alice is a researcher in cell biology. One night she dreams up an idea for a potentially groundbreaking experiment. Alice does the experiment, but does not get the result she expected. Alice tweaks a few parameters and tries again. Again, the result doesn't fit her hypothesis. She eventually abandons this "groundbreaking" idea and moves on to other things.

Bob is also a cell biology researcher. Independently of Alice – but after reading much of the same literature – Bob dreams up a similar "groundbreaking" experiment. After many tries, Bob also fails to get the expected result. Bob moves on.

What's the problem here? Bob duplicated Alice's efforts. Why? Alice's efforts were not accessible to Bob; instead, they were siloed away under "things-that-don't-work" on her hard drive. 

Both Alice and Bob have Internet. From a technical point of view, it should be really easy for Bob to access all the experiments Alice tried. But it isn't easy. Why?

Put simply: incentives. Publishing a "non-result" in a "third-tier" journal won't advance Alice's career the way a "significant" result in, say, [Nature](https://www.nature.com) will. Writing up the article and going through the submission process probably won't happen because [nobody has time for that](https://www.youtube.com/watch?v=8cT_Ulmcrys). Even though science advances mostly when we discover [what doesn't work](https://en.wikipedia.org/wiki/Falsifiability); most of what doesn't work, isn't known. Instead, everything that doesn't work is locked up in that researchers' file drawer.

Alice could very well publish her results informally on her blog, or to a handful of journals (e.g. [Plos ONE](http://journals.plos.org/plosone/s/journal-information/)) that don't use statistical significance as a metric for publication (but still charge hefty publication fees). Although things are changing, this is far from the norm. And, as far as I could tell from 5 years in academia, the scale of duplicate work across labs around the world is both unknowable and likely enormous. It isn't time consuming for these data to be published, but I suspect many academics don't feel it is worth their time, or that the contribution isn't meaningful enough if it isn't in a prestigious journal, or that it won't be archived and indexed properly. Who knows?

What is known is that it's definitely a problem.

The concepts of [pre-registering experiments](https://cos.io/prereg/?utm_source=Open+Science+Framework+General&utm_campaign=9bbf63c095-OFFICIAL_11th_OSF_Message1_5_2016) and [widening the scope of acceptable citations](https://thewinnower.com/) begin to address this issue and will likely reap enormous benefits across academia. (I'll have more to say on this in the future with respect to smart contract factories for experiments). However, the challenge – assuming we want this knowledge free, distributed, and easily accessible (forever) to anyone with an Internet connection – is archiving and indexing all the content such that our assumption is satisfied.

The emergence of the [Sci-Hub](https://en.wikipedia.org/wiki/Sci-Hub) (see the [Robin Hood of Science](http://bigthink.com/neurobonkers/a-pirate-bay-for-science) for the an excellent review) is promising in that it provides free access to vast stores of human knowledge; knowledge otherwise inaccessible if [Elsevier had their way](http://www.iflscience.com/editors-blog/elsevier-acts-against-research-article-pirate-sites-and-claims-irreparable-harm). But this solution is not distributed and, as far as I can tell, offers no permanent archival solution.

Enter the InterPlanetary File System: [IPFS](https://ipfs.io) has emerged as the most likely candidate for long-term knowledge preservation. Using (among other future-proofing features) content-based addressing (a hash) rather than location-based addressing (a URL), reliance on central servers is all but eliminated.

And IPFS definitely plays nice with blockchains. Enter indexing. We need a registry to both track the hashes of all relevant content and update them. Ideally, such a registry would be shared across many educational institutions, which would be validators on a permissioned consortium blockchain. This strikes me as a likely direction for such institutions that are having to re-invent themselves in the digital age. Indeed, they should be the ones retaining the intellectual property of the researcher, not for-profit journals!

This was the underlying motivation behind the [now deprecate toadserver](https://github.com/zramsay/toadserver)). It takes an uploaded file, gets its IPFS hash, registers the file name and hash in the [eris:db](https://github.com/monax/eris-db) name registry and finally, adds the file to n IPFS nodes. It's really just a glorified database, but with write permissions across stakeholders who might not fully trust each other. This is all well and good, though it's not going to revolutionize science overnight.

Another failing of academic research is its inability to effectively incorporate user-generated content. As a student of animal behavior, I watch in awe at the scientifically interesting (and relevant) discussion about [tricking your cat into a circle](https://www.reddit.com/r/aww/comments/2jpal5/trick_your_cat_with_a_circle/) and wonder how to parse this content into useful data that might lead to a scientifically sound conclusion.

As far as I can tell, the public has a thirst to [understand – and participate in – scientific inquiry](https://www.reddit.com/r/science/wiki/scienceamaseries); a thirst left wholly unquenched by mainstream academia. Publishers that charge 40 bucks per article aren't helping either. A big challenge – likely solved by creative incentive/reputation schemes – is compensating researchers for their time. That discussion is probably too early to have.

In the meantime, how can we aggregate useful user-generated content to improve the throughput of scientific research? The current focus of using a blockchain to streamline financial services is fine, but let's talk about automating knowledge discovery.

When first dreaming up chain-based apps, one idea in particular stuck with me. [Population dynamics](https://en.wikipedia.org/wiki/Population_dynamics) – the study of geographical distribution of life on earth i.e., analyzing "where life is" – is both a logistical nightmare and labor intensive. Roughly: 1) get a research grant, 2) hire some graduate students, 3) gather data (field work), and 4) analyze & publish the data. The problem: 1) is time-consuming and ultra-competitive, 2) is fairly easy, 3) is time-consuming, as is 4) since it's rarely outsourced and the raw data is usually siloed away anyway. Five years later, the research team has a conclusion about ant diversity in one small region of Africa. [Science is incremental indeed](https://en.wikipedia.org/wiki/The_Structure_of_Scientific_Revolutions).

Last week, Google [released to the public](http://techcrunch.com/2016/02/18/google-opens-its-cloud-vision-api-to-all-developers/) its [Cloud Vision API](https://cloud.google.com/vision/), a nifty set of tools for analyzing images. For example, if you send it a picture of what is clearly a marmot, the API will return a response with the description "marmot" and a match score (i.e., degree of certainty that the image is, in fact, a marmot). What happens when you combine this functionality with a blockchain?

All of a sudden, the submission of content (well, images) that meet specific parameters (quality is in the eye of the beholder) can be incentivized. That is, the content can be checked for its purported authenticity before being added to a shared database for subsequent analysis. For example, the [Marmot Recovery Foundation's Observer Program](http://marmots.org/observer-program/) could have a mobile app that allows users to submit geo-tagged images of marmots to be used for analysis in exchange for tokens – tokens redeemable for marmot merchandise.

Perhaps the budding school-aged scientist of the future will spend his days traipsing through the woods, taking pictures of ants, classifying them and adding everything to a chain run by a consortium of colleges and universities. The better the classifications he submits, the more tokens he earns – tokens redeemable at any of the participating institutions as tuition, for example. Applications like the [LifeScanner app](http://lifescanner.net/) and [PlantNet](http://m.plantnet-project.org/) get us closer to such a goal.

Enough talk. About a week ago, I put together the [now deprecated Marmot Checker](https://github.com/zramsay/marmot), which is another piece of the puzzle in terms of automating knowledge generation throughput. Briefly, an image is uploaded, processed, and sent to the Google Cloud Vision API to get descriptions of the image; these descriptions are checked against a user-defined list of words, and if there is a match, the image is added to the toadserver. Although the implementation is quite is simple, a few hundred lines more of code and you'd have, say, a smart contract that sends the submitter of matched content some amount of tokens as a function of the match score and/or the users' reputation.

On the whole, this is part a growing set of tools for the scientific community. Already we're seeing more and more startups building tools to streamline the collaboration workflow process between research laboratories.   That won't cut it so long as the data is siloed within research labs/groups, journals are pay-per-view for the public and the average citizen hasn't the means or method to contribute meaningfully to global shared knowledge. After all, shouldn't [citizen science](https://en.wikipedia.org/wiki/Citizen_science) really be called science proper? With blockchains I think it can be.

The fight for open access to knowledge has been an ongoing battle – a battle that ultimately took [Aaron Swartz's life](http://bigthink.com/neurobonkers/the-robin-hood-of-science-the-missing-chapter) while simultaneously stalling the progress of humanity and lining the pockets of shareholders. All this to protect copyright yet in clear violation of the [Universal Declaration of Human Rights Article 27](http://www.un.org/en/universal-declaration-human-rights/) which states that "everyone has the right freely to ... share in scientific advancement and its benefits."

Science is ultimately a public endeavor, and making that dream a reality now appears possible with blockchains.

See [Part 2](/blog/2016/03/15/chains-and-science-how-to/) for slightly more practical solutions.
