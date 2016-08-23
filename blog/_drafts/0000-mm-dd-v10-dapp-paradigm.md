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

Ok so there currently isn't a such thing as a lite node, as in a lite client for bitcoin? "the mint-client tooling is meant to give CLI functionality around particular administrative tasks." You mentioned that it formulates transactions. But does it write them? I'm sure it's me, but I still can't discern how users will interact with a chain once I've Permissioned and deployed it. Do I need to create a ui? Or does each counterparty need an administrative client such as mint-client?


{{ page.date | date: "%Y" | append:'/ethereum-talk-slides-7.png' | img }}

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
