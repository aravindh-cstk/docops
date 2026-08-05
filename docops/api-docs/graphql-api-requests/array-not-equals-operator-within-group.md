---
title: "Try 'Not In' Operator within Group"
description: /stacks/apiKey/explore
url: /array-not-equals-operator-within-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:28.294Z
updated_at: 2023-03-28T12:58:46.418Z
---

# Try 'Not In' Operator within Group

<h4 id="array-not-equals-operator-within-group">Not In Operator within Group</h4>

<p>Get entries in which the value of a field does not match any of the values provided in the condition. This query is specifically for fields that are part of the Group field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Group field named <strong>Bank Offers</strong>. And, within this Group field, we have a subfield named <strong>Discount In Percentage</strong>. If, for instance, you want to retrieve the entries in which the values for the Discount In Percentage&nbsp;field are NOT ‘8’, '25', and '30', your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_nin: [8, 30, 25]
      }
    })      
    {
      items {
      title
      color
    }
  }
}</pre>
<p>The response body of this query will include all entries of the <strong>Product</strong> content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

