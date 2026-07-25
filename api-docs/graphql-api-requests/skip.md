---
title: "Try 'Skip' Operator"
description: /stacks/apiKey/explore
url: /skip
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:26.415Z
updated_at: 2023-03-28T13:12:52.033Z
---

# Try 'Skip' Operator

<p>The skip parameter will skip a specific number of entries in the output. So, for example, if the content type contains around <strong>12 entries</strong> and you want to skip the <strong>first 5</strong> entries to get only the last 7 in the response body, you need to specify ‘5’ here. Your query will look as follows:</p>
<pre>query {
  all_product(
    skip: 5
  ) {
    items {
      title
      color
    }
  }
}</pre>
<p>The response body of this query will skip the first five entries and only include the last seven entries of the <strong>Product</strong> content type that satisfy the query, displaying details of just the ‘Title’ and ‘Color’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

