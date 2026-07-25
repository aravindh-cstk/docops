---
title: "Try 'Not Equals' Operator"
description: /stacks/apiKey/explore
url: /not-equals-operator
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.480Z
updated_at: 2023-03-28T13:25:24.430Z
---

# Try 'Not Equals' Operator

<p>Get all the entries in which the value of a field does not match the value provided in the condition.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, you have a field named <strong>Price in USD</strong>. If, for instance, you need to retrieve all entries where the value of this field is not equal to '200', your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      price_in_usd_ne: 200
    }) {
    items {
      title
      size
      color
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query, and will include details of just the ‘Title,’ ‘Size,’ and ‘Color’ fields.</p>
<p></p>

**API Endpoint**: `/stacks/apiKey/explore`

