---
title: "Try 'In' Operator"
description: /stacks/apiKey/explore
url: /in-operator
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.407Z
updated_at: 2023-03-28T13:21:01.370Z
---

# Try 'In' Operator

<p>Get entries in which the value of a field matches any of the given values. This parameter will compare field values of entries to that of the values provided in the condition.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, you have a field named <strong>Size</strong>. If, for instance, you need to retrieve all the entries where the value of this field is one among the given set of values, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      size_in: [8, 16, 32]
    }) {
    items {
      title
      color
      size
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query and will include details of just the 'Title,' 'Size,' and ‘Color’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

