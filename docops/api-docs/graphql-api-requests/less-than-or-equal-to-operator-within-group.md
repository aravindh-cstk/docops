---
title: "Try 'Less Than Or Equal To' Operator within Group"
description: /stacks/apiKey/explore
url: /less-than-or-equal-to-operator-within-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.536Z
updated_at: 2023-03-28T13:24:42.588Z
---

# Try 'Less Than Or Equal To' Operator within Group

<h4 id="less-than-or-equal-to-operator-within-group">Less Than Or Equal To Operator within Group</h4>

<p>Get entries in which the value of a field is lesser than or equal to the value provided in the condition. This query is specifically for fields that are part of the Group field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Group field named <strong>Bank Offers</strong>. And, within this Group field, we have a subfield named <strong>Discount in Percentage</strong>. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field are less than or equal to ‘30’, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_lte: 30
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

