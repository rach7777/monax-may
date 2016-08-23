---

# fill in
title:     TIT
author:
excerpt:   "EXC."
thumbnail:
category:  CAT
tags:      [TAG1, TAG2]

# use if needed
layout:    post
published: true
comments:  true
meta:      true
#thumbnail_raw:

---


I'm here.

[{{ page.date | date: "%Y" | append:'/licensing.jpg' | img }}](https://flic.kr/p/5A9EER)


```javascript
$(->
  $("form[data-remote]")
    .bind('ajax:before', toggleSpinner)
    .bind('ajax:complete', toggleSpinner)
    .bind('ajax:success', (event, data, status, xhr) ->
      $("#response").html("Saved!").show().fadeOut("slow")
    )
    .bind('ajax:error', (xhr, status, error) -> )
)
```

[(Photo credit: CC-BY-SA: Alexandre Dulaunoy @ Flickr )](https://www.flickr.com/photos/adulau/)
