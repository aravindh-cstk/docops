---
title: "Try "Pagination""
description: /stacks/apiKey/explore
url: /pagination
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:27.345Z
updated_at: 2023-03-28T13:08:17.251Z
---

# Try "Pagination"

<p>When fetching all the entries of a particular content type, the GraphQL API allows you to provide arguments that paginate the response body.</p>
<p>If you have more than 100 items in your response, you can get the rest of the items in batches using the <strong>skip</strong> parameter in subsequent requests. The skip parameter helps&nbsp;paginate the output of the request.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a field named <strong>Price in USD</strong>. Now, you want to retrieve all the entries in the content type in which the field exists.</p>
<p>If you get more than 100 items, you can get the rest of the items in batches using the <strong>skip: 2</strong> parameter in subsequent requests. You can also use the&nbsp;<strong>limit: 7</strong>&nbsp;parameter to&nbsp;get 7 items per page&nbsp;instead of getting all the 100 items at once.</p>
<p>The pagination query will look as follows:</p>
<pre>query {
  all_product(
    limit: 7,
    skip: 2
  ) {
    total
    items {
      title
      price_in_usd
    }
  }
}</pre>
<p>The <strong>total</strong> field will display the number of entries where the ‘Price in USD’ field exists for a product within the response body, including details of just the ‘Title’, ‘Brand’, and ‘Price in USD’ fields. However, through the use of the skip and limit parameters, the response body will now only show the first seven matching entries initially.</p>

**API Endpoint**: `/stacks/apiKey/explore`

