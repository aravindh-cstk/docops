---
title: "Try 'Total' Function"
description: /stacks/apiKey/explore
url: /total
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:27.359Z
updated_at: 2023-03-28T13:04:03.180Z
---

# Try 'Total' Function

<p>The <strong>total</strong> field returns the number of entries for a specified content type.</p>
<p><strong>Example</strong>: If you wish to know the total number of entries in the <strong>Product</strong> content type that contain a value within the <strong>Price in USD</strong> field, you need to run the following query:</p>
<pre>query {
  all_product(
    where: {
      price_in_usd_exists: true
    }) {
    total
    items {
      title
      price_in_usd
    }
  }
}</pre>
<p>The <strong>total</strong> field will display the number of entries where the ‘Price in USD’ field exists for a product within the response body, including details of just the ‘Title’ and ‘Price in USD’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

