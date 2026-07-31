---
title: "Try 'Greater Than' Operator"
description: /stacks/apiKey/explore
url: /greater-than
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.554Z
updated_at: 2023-03-28T13:22:33.467Z
---

# Try 'Greater Than' Operator

<p>Get entries in which the value for a field is greater than the value provided in the condition.</p>
<p><strong>Example</strong>: Let’s say you want to retrieve all the entries that have the value of the <strong>Price in USD</strong> field set to a value that is greater than <strong>180</strong>. Your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      price_in_usd_gt: 180
    }) {
    items {
      title
      price_in_usd
      color
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query, and will include details of just the ‘Title’, ‘Price in USD’, and ‘Color’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

