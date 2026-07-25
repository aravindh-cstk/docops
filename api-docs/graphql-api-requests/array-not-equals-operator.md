---
title: "Try 'Not In' Operator"
description: /stacks/apiKey/explore
url: /array-not-equals-operator
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:27.384Z
updated_at: 2023-03-28T13:07:23.160Z
---

# Try 'Not In' Operator

<p>Get all entries in which the value of a field does not match any of the given values. This parameter will compare field values of entries to that of the values provided in the condition, and the query will retrieve entries that have field values that do not match any of the values provided.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, you have a field named <strong>Title</strong>. If, for instance, you need to retrieve the entries where the field value does not fall in the given set, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      title_nin: ["Redmi 3S", "Galaxy Note", "Redmi Note Prime"]
    }) {
    items {
      title
      price_in_usd
      size
      color
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query, and will include details of just the 'Title', ‘Price in USD’, Size, and ‘Color’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

