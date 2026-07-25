---
title: "Try 'OR' Operator"
description: /stacks/apiKey/explore
url: /or-operator
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:26.350Z
updated_at: 2023-03-28T13:15:00.974Z
---

# Try 'OR' Operator

<p>Get all entries that satisfy at least one of the given conditions provided in the 'OR' query.</p>
<p><strong>Example</strong>: Let’s say you want to retrieve entries in which either the value for the <strong>Color</strong> field is 'Gold' or 'Black', your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      OR: [
        {
          color: "Black"
        },
        {
          color: "Gold"
        }
      ]
    }) {
    items {
      title
      price_in_usd
      color
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query, and will include details of just the ‘Title’, ‘Color’, and ‘Price in USD’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

