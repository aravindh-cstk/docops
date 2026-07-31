---
title: "Try 'Not Equals' Operator within Group"
description: /stacks/apiKey/explore
url: /not-equals-operator-within-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.379Z
updated_at: 2023-03-28T13:14:24.947Z
---

# Try 'Not Equals' Operator within Group

<h4 id="not-equals-operator-within-group">Not-equals Operator within Group</h4>

<p>Get entries where the value of a field does not match the value provided in the condition. This query is specifically for fields that are part of the Group field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Group field named <strong>Bank Offers</strong> and, within this Group field, we have a subfield named <strong>Card Type</strong>. If, for instance, you want to retrieve the entries in which the value for the <strong>Card Type</strong> field is <strong>NOT</strong> 'Debit Card', your query will look as follows:</p>
<p>
</p>
<pre>query {
  all_product(
    where: {
      bank_offers: {
        card_type_ne: "Debit Card"
      }
    }) {
    items {
      title
      color
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

