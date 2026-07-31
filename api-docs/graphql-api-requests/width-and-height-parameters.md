---
title: "Try 'Width' and 'Height' Parameters"
description: /stacks/apiKey/explore
url: /width-and-height-parameters
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.743Z
updated_at: 2023-03-30T10:08:03.145Z
---

# Try 'Width' and 'Height' Parameters

<p>Let’s look at a few sample GraphQL queries that make use of multiple parameters.</p>
<h5>Changing the Width and Height</h5>
<p>To dynamically resize the width and height of your output image, use the <span data-type="inlineCode">width</span> and <span data-type="inlineCode">height</span> parameters. For example, we have set the values of the <span data-type="inlineCode">width</span> and <span data-type="inlineCode">height</span> parameters to ‘650’ and ‘400’, respectively, in the following image transformation query.</p>
<pre>query {
  all_assets(limit: 25) {
    total
    items {
        title
      url(transform: {width: "650", height: "400", disable: UPSCALE})
    }
  }
}</pre>
<p>This query will render an output image with width and height values of 650 and 400 pixels, respectively.</p>
<p class="note"><strong>Note</strong>: We have also set the <span data-type="inlineCode">disable</span> parameter to <span data-type="inlineCode">UPSCALE</span> to disable the upscale image feature for the output image in the above image transformation query.</p>

**API Endpoint**: `/stacks/apiKey/explore`

