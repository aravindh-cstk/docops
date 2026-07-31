---
title: "Try 'Greater Than Or Equal To' Operator within Group"
description: /stacks/apiKey/explore
url: /greater-than-or-equal-to-operator-within-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.475Z
updated_at: 2023-07-20T10:29:40.061Z
---

# Try 'Greater Than Or Equal To' Operator within Group

<h4 id="greater-than-or-equal-to-operator-within-group">Greater Than Or Equal To Operator within Group</h4>

<p>Get entries in which the value of a field is greater than or equal to the value provided in the condition. This query is specifically for fields that are part of the Group field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Group field named <strong>Bank Offers</strong>. And, within this Group field, we have a subfield named <strong>Discount in Percentage</strong>. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field is greater than or equal to ‘30’, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_gte: 30
      }
    }) {
    items {
      title
      price_in_usd
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

