---
title: "Try 'Equals' Operator within Group"
description: /stacks/apiKey/explore
url: /equals-operator-within-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.454Z
updated_at: 2023-03-29T07:41:26.613Z
---

# Try 'Equals' Operator within Group

<h4 id="equals-operator-within-group">Equals Operator within Group</h4>
<p>Get entries where the value of a field within a Group field matches the condition in the query. This query is specifically for fields that are part of the Group field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Group field named <strong>Bank Offers</strong> and, within this Group field, we have a subfield named <strong>Card Type</strong>. If, for instance, you want to retrieve the entries in which the value for the Card Type field is <strong>Credit Card</strong>, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      bank_offers: {
        card_type: "Credit Card"
      }
    }) {
    items {
      price_in_usd
      description
    }
  }
}
</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query, and include details of just the ‘Price in USD’ and ‘Description’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

