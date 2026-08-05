---
title: "Try 'OR' Operator within Group"
description: /stacks/apiKey/explore
url: /or-operator-within-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:27.272Z
updated_at: 2023-03-28T13:09:25.399Z
---

# Try 'OR' Operator within Group

<h4 id="or-operator-within-group">OR Operator within Group</h4>

<p>Get all entries that satisfy at least one of the given conditions provided in the OR query. This query is specifically for fields that are part of the Group field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Group field named <strong>Bank Offers</strong>. And, within this Group field, we have a field named <strong>Card Type</strong>. If, for instance, you want to retrieve the entries where either the value for Card Type is ‘Debit Card’ or ‘Credit Card’, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      OR: [
        {
          bank_offers: {
            card_type: "Credit Card"
          }
        },
        {
          bank_offers: {
            card_type: "Debit Card"
          }
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

