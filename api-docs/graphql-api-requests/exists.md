---
title: "Try 'Exists' Operator"
description: /stacks/apiKey/explore
url: /exists
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:26.431Z
updated_at: 2023-03-28T13:10:47.059Z
---

# Try 'Exists' Operator

<p>Get entries if the value of the field mentioned in the condition exists.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a field named <strong>Price in USD</strong>. If, for instance, you want to retrieve all the entries in the content type in which the field exists, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      price_in_usd_exists: true
    }) {
    items {
      title
      color
    }
  }
}</pre>
<p>The response body of this query will display all the entries of the <strong>Product</strong> content type that satisfy the query, including details of just the ‘Title’ and ‘Color’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

