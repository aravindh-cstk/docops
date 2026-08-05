---
title: "Try 'Equals' Operator"
description: /stacks/apiKey/explore
url: /equals-operator
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.468Z
updated_at: 2023-03-28T13:27:59.870Z
---

# Try 'Equals' Operator

<p>Get data of entries containing the field values matching the specified condition.</p>
<p>Example: In the <strong>Product</strong> content type, you have a field named <strong>Title</strong>. If, for instance, you want to retrieve certain fields of all the entries in which the value for the ‘Title’ field is <strong>Galaxy Note</strong>, your query will be formed as follows:</p>
<pre>query {
  all_product(
    where: {
      title: "Galaxy Note"
    }) {
    items {
      title
      price_in_usd
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query and include details of just the ‘Title’ and ‘Price in USD’ fields.<br></p>

**API Endpoint**: `/stacks/apiKey/explore`

