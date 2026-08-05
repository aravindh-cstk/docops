---
title: "Try 'AND' Operator within Group"
description: /stacks/apiKey/explore
url: /and-operator-within-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:26.331Z
updated_at: 2023-03-28T13:16:09.054Z
---

# Try 'AND' Operator within Group

<h4 id="and-operator-within-group">AND Operator within Group</h4>

<p>Get entries that satisfy all the conditions provided in the AND query. This query is specifically for fields that are part of the Group field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Group field named <strong>Bank Offers</strong>. And, within this Group field, we have fields named <strong>Card Type</strong> and <strong>Discount in Percentage</strong>. If, for instance, you want to retrieve the entries wherein the value for Card Type is ‘Credit Card’ and ‘Discount in Percentage’ is '12', your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      AND: [
        {
          bank_offers: {
            card_type: "Credit Card"
          }
        },
        {
          bank_offers: {
            discount_in_percentage: 12
          }
        }
      ]
    }) {
    items {
      title
      price_in_usd
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong>&nbsp;content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

