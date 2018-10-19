---

# Pretty normal stuff
date:      {{ .Date }}
title:     "Blog Post Title Here"
author:    "Your Name, Title Here"

# excerpt is used for the text below the title when we share and also is the summary of the post on https://monax.io/blog
excerpt:   "When people think about legal they think almost entirely of the provision of bespoke services. Yet the world is changing, and legal needs to keep up."

# this image should be stored in /content/blog/images/YEAR/. It will appear as a thumbnail on any listings,
# as well as at the top of the post itself
thumbnail: example-image.jpg

# check the categories on the existing blog. should only have ONE
categories:
  - legal products

# tags should be meaningful for your blog. if you want this article to show on a 'use case' page, you can use
# the following TAGS -  'fleetleasing' 'creatives' 'lawyers' or 'entrepreneurs'
tags:
  - legal products
  - agreements network

# if this post is part of a series, uncomment the information below. The 'article series' box
# will only display if there is more than one article in the series. 'id', 'number' and 'about' all must be present.
# 'id' is used to identify the series. It's not displayed to the user.
# series:
#   id: active-agreement-samples
#   number: 1
#   about: "This is a series of posts where the marmots will be outlining how the Monax Platform and the Agreements Network can be used in harmony to create the legal products of the future."

# set draft to 'false' when you're ready to publish
draft: true

# used when using the shortcode utm_link in a blog post to another
# the campaign generally should match the category above
utm:
  source: "website"
  medium: "blog"
  campaign: ""

---

<!-- In general the filename below should match thumbnail category above -->
{{< image_blog "example-image.jpg" >}}

<!-- if this article is part of a series, related articles will automatically appear here -->
{{< blog_series >}}

<!-- Content markdown here - first title on page is auto generated from title in frontmatter -->
Lorem tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<!-- IF NEEDED use the below. Unsplash is recommended for images that have the right licensing. This should be at the end of the post -->
[Photo](LINK) by PHOTOGRAPHER on [Unsplash](https://unsplash.com).
