---
title: "Try 'Exists' Operator within Group"
description: /stacks/apiKey/explore
url: /exists-operator-within-group
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:26.416Z
updated_at: 2023-03-28T13:11:32.525Z
---

# Try 'Exists' Operator within Group

<h4 id="-operator-within-group" "-operator-within-modular-blocks"="">Exists Operator within Group</h4>

<p>Get entries if the value of the field mentioned in the condition exists. This query is specifically for fields that are part of the Group field.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, we have a Group field named <strong>Bank Offers</strong>. And, within this Group field, we have a subfield named <strong>Discount in Percentage</strong>. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field exists, your query will look as follows:</p>
<pre>query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_exists: true
      }
    }) {
    items {
      title
      color
      description
    }
  }
}</pre>
<p>The response body of this query will display all the entries of the <strong>Product</strong> content type that satisfy the query, including details of just the ‘Title’, ‘Color’, and ‘Description’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

