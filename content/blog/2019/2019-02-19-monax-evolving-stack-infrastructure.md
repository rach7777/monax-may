---

# Pretty normal stuff
date:      2019-02-19T00:00:00Z
title:     "Evolving Infrastructure - the Monax stack"
author:    "Greg Hill, Site Reliability Engineer"

# excerpt is used for the text below the title when we share and also is the summary of the post on https://monax.io/blog
excerpt:   "We’ve undergone a lot of infrastructure changes over the last few years at Monax - here's an overview."

# this image should be stored in /content/blog/images/YEAR/. It will appear as a thumbnail on any listings,
# as well as at the top of the post itself
thumbnail: compass-blog.png

# check the categories on the existing blog. should only have ONE
categories:
  - monax platform

# tags should be meaningful for your blog. if you want this article to show on a 'use case' page, you can use
# the following TAGS -  'fleetleasing' 'contentcreators' 'lawyers' or 'corporate'
tags:
  - legal products
  - agreements network
  - monax
  - monax platform

# if this post is part of a series, uncomment the information below. The 'article series' box
# will only display if there is more than one article in the series. 'id', 'number' and 'about' all must be present.
# 'id' is used to identify the series. It's not displayed to the user.
# series:
#   id: active-agreement-samples
#   number: 1
#   about: "This is a series of posts where the marmots will be outlining how the Monax Platform and the Agreements Network can be used in harmony to create the legal products of the future."

# set draft to 'false' when you're ready to publish
draft: false

# used when using the shortcode utm_link in a blog post to another
# the campaign generally should match the category above
utm:
  source: "website"
  medium: "blog"
  campaign: "monax platform"

---

<!-- In general the filename below should match thumbnail category above -->
{{< image_blog "example-image.jpg" >}}

<!-- if this article is part of a series, related articles will automatically appear here -->
{{< blog_series >}}

<!-- Content markdown here - first title on page is auto generated from title in frontmatter -->
We’ve undergone a lot of infrastructure changes over the last few years at Monax. We actually submitted the very first [DLT framework](https://github.com/helm/charts/tree/master/stable/burrow) into Helm’s [stable charts](https://github.com/helm/charts) over a year ago. This allows anyone with a Kubernetes cluster to deploy a custom blockchain courtesy of [Burrow](https://github.com/hyperledger/burrow) (our contribution to the [Hyperledger Greenhouse](https://www.hyperledger.org/wp-content/uploads/2018/11/Hyperledger_DataSheet_11.18_Digital.pdf) ). We’re a great believer in cloud first and open source technologies so not only is Kubernetes a great fit for what we do, but Helm extraordinarily simplifies the whole deployment process through [Go templating](https://golang.org/pkg/text/template/).

Last year, as we began extending the size of our stack we realized a problem. Many of our charts had explicit dependencies on one another which forced us to overload our [CI/CD](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment) systems with synchronous bash scripts. With each new addition, our deployment setup was starting to become slower and increasingly unmaintainable. Enter [Terraform](https://www.terraform.io).

> Terraform enables you to safely and predictably create, change, and improve infrastructure.

Terraform is a fantastic toolkit with the right amount of configurability to state management. It enables the definition of a global blueprint which can be managed by separate workspaces and modularized resources. When we first started experimenting with new configurations we discovered an [official Terraform Helm provider](https://github.com/terraform-providers/terraform-provider-helm) which enabled us to reuse our existing charts and inject operational specific knowledge into each chart at deploy time. We could then quickly spin up new stacks in [GKE](https://cloud.google.com/kubernetes-engine/) with implicit dependencies between individual resources and closer reliance on upstream changes — all through better code reuse. This new deployment setup worked great at first but we soon discovered a problem.

**King of State**

Helm uses a thing called Tiller to manage what is deployed in your cluster.

> Tiller is the in-cluster component of Helm. It interacts directly with the Kubernetes API server to install, upgrade, query, and remove Kubernetes resources. It also stores the objects that represent releases.

Note the final point in that description. Every time we communicate a change to Tiller, it consults its release store to form an opinion of the difference between the current state and the desired state. It will then instruct the Kubernetes API server to alter, delete or create new objects. With Terraform’s own [state management](https://www.terraform.io/docs/state/), this meant storing two distinctly separate views of each deployment. Unfortunately, the Helm provider never actually compares its view of the stack to Tiller directly which means that it is never called until a drift has been detected in Terraform’s current configuration versus its previous state. This is great in a number of less stateful settings, but actually introduced more problems in this case than it solved.
Additionally, in its typical stance on lifecycle management, we also found that Terraform would non-deterministically delete resources before re-installation, instead of upgrading. This is less than ideal, especially when we’ve taken the effort to define rolling upgrade strategies in our Helm templates to ensure minimal downtime. It’s possible to plan these executions in advance but this requires significant overhead from operators and is simply not doable in automated CD setups.

**New Direction**

We essentially required a simple pipelining tool for Helm where we could define an agnostic but configurable buildflow for multiple environments. The lightbulb moment came a few weeks ago after playing around with a tool called bashful which provides a way to stitch together shell commands by way of a readable YAML specification:

{{< image_blog "compass-blog-2.png" >}}

Much like Terraform, we could define separable tasks and resources with room for parallelization. However this alone would have reintroduced significant overhead for multi-environment installations, especially as we run around ten broadly similar stacks in our cloud infrastructure. A typical distinction for many could be staging vs production, where each setup may track different release streams.

{{< image_blog "compass-blog.png" >}}

[Compass](https://github.com/gregdhill/compass) allows a Helm based infrastructure deployment to be modularized by different charts with an extra layer of templating on top. Each set of templated values are initially rendered based on a selection of environment specific variables then used in the typical sense by Helm to define application specific logic which form the Kubernetes release objects. Go routines enable concurrent deployments based on listed dependencies, optional charts can be triggered based on the environment specific inputs and each definition allows pre and post-deployment shell jobs.
Using Go templates also enables us to do other interesting things. When a CI pipeline is triggered for a specific git branch tag, namely develop or master, it’s far easier for the CD to identify docker images based on the branch tag. Unfortunately, upstream tagged images can easily go stale in many docker based environments due to caching. This can lead to many painful hours debugging live containers, only to discover that the image is outdated. With a custom go templating function however, we can strongly version each tag based on the latest digest as given by the targeted API.

So, if you’re devOpsing for Helm or Kubernetes and have similarly complex deployment requirements, please check out [Compass](https://github.com/gregdhill/compass)!

[Greg Hill](https://www.linkedin.com/in/gregorydhill95/)

<!-- IF NEEDED use the below. Unsplash is recommended for images that have the right licensing. This should be at the end of the post -->
[Photo](https://unsplash.com/photos/uCMKx2H1Y38) by ABSOLUT VISION on [Unsplash](https://unsplash.com).
