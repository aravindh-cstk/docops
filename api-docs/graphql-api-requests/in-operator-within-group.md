---
title: "Try 'In' Operator within Group"
description: /stacks/apiKey/explore
url: /in-operator-within-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:25.403Z
updated_at: 2023-03-28T13:21:43.774Z
---

# Try 'In' Operator within Group

<h4 id="in-operator-within-group">In Operator within Group</h4>

<p>Get entries where the value of a field, within a Group field, matches any of the given values. This parameter will compare field values of entries to that of the values provided in the condition. This query is specifically for fields that are part of the Group field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Group field named <strong>Bank Offers</strong>. And, within this Group field, we have a subfield named <strong>Card Type</strong>. If, for instance, you want to retrieve the entries in which the values for the Card Type field are ‘Credit Card’ and 'Debit Card', your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      bank_offers: {
        card_type_in: ["Credit Card", "Debit Card"]
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

