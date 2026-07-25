---
title: "Try 'Overlay' and 'Overlay Align' Parameters"
description: /stacks/apiKey/explore
url: /overlay-and-overlay-align-parameters
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.738Z
updated_at: 2023-03-30T10:09:51.218Z
---

# Try 'Overlay' and 'Overlay Align' Parameters

<h5>Using the Overlay and Overlay Align Parameters</h5>
<p>To place one image on top of another, use the <span data-type="inlineCode">overlay</span> parameter. In addition, use the <span data-type="inlineCode">overlay_align</span> parameter to define the position of the overlay image.</p>
<p>For example, we have specified the value of the <span data-type="inlineCode">overlay</span> parameter as the URL of the image to be placed on top. We have also set the value of the <span data-type="inlineCode">overlay_align</span> parameter as ‘LEFT’ in the following image transformation query.</p>
<pre>query {
  all_assets(limit: 25) {
    total
    items {
        title
      url(transform: {overlay: "/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/download", overlay_align: LEFT})
    }
  }
}</pre>
<p>This query will place the image lying at the specified URL on top of the original image. It will also align the overlay image toward the left side of the original image.</p>

**API Endpoint**: `/stacks/apiKey/explore`

