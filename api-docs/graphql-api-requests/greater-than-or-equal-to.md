---
title: "Try 'Greater Than Or Equal To' Operator"
description: /stacks/apiKey/explore
url: /greater-than-or-equal-to
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.476Z
updated_at: 2023-03-28T13:19:08.459Z
---

# Try 'Greater Than Or Equal To' Operator

<p>Get entries in which the value of a field is greater than or equal to the value provided in the condition.</p>
<p><strong>Example</strong>: Let’s say you want to retrieve all the entries that have the value of the <strong>Price in USD</strong> field set to a value that is greater than or equal to <strong>200</strong>. Your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      price_in_usd_gte: 200
    }) {
    items {
      title
      price_in_usd
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

