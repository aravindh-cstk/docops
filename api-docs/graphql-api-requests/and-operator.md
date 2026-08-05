---
title: "Try 'AND' Operator"
description: /stacks/apiKey/explore
url: /and-operator
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:26.326Z
updated_at: 2023-03-28T13:16:51.801Z
---

# Try 'AND' Operator

<p>Get entries that satisfy all the conditions provided in the 'AND' query.</p>
<p><strong>Example</strong>: Let’s say you want to retrieve entries in which the <strong>Title</strong> field is set to 'Redmi Note 3' and the <strong>Color</strong> field is 'Gold'. Your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      AND: [
        {
          title: "Redmi Note 3"
        },
        {
          color: "Gold"
        }
      ]
    }) {
    items {
      title
      price_in_usd
      size
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query, and will include details of just the ‘Title’, ‘Size’, and ‘Price in USD’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

