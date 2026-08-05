---
title: "Try 'Limit' Operator"
description: /stacks/apiKey/explore
url: /limit
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.481Z
updated_at: 2023-03-28T13:17:41.903Z
---

# Try 'Limit' Operator

<p>The limit parameter will return a specific number of entries in the output. So for example, if the content type contains <strong>more than 100</strong> entries and you wish to fetch only the <strong>first 2</strong> entries, you need to specify '2' as the value in this parameter. Your query will look as follows:</p>
<pre>query {
  all_product(
    limit: 2
  ) {
    items {
      title
      description
    }
  }
}</pre>
<p>The response body of this query will include only the first two entries of the <strong>Product</strong> content type that satisfy the query, and will include details of just the ‘Title’ and ‘Description’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

