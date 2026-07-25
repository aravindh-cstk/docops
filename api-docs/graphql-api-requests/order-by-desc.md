---
title: "Try 'Order by Desc' Operator"
description: /stacks/apiKey/explore
url: /order-by-desc
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.792Z
updated_at: 2025-02-17T05:56:35.249Z
---

# Try 'Order by Desc' Operator

<p>When fetching entries, you can sort them in the descending order with respect to the value of the following system-defined fields in the response body:</p><ul><li>Created at (<span class="code">created_at_DESC</span>)</li><li>Updated at (<span class="code">updated_at_DESC</span>)</li><li>Published at (<span class="code">sys_published_at_DESC</span>)</li></ul><div class="note"><strong>Note</strong>:<ul><li>The order by DESC operator can only be used on the ‘Created at’, ‘Updated at’, and 'Published at' system-defined fields. It is not applicable to any other fields.</li><li>Reach out to our <a href="mailto:support@contentstack.com" target="_blank">support</a> team to enable the 'Published at' feature for your organization.</li></ul></div><p><strong>Example</strong>: In the <strong>Product</strong> content type, if you wish to sort the entries with respect to the&nbsp;date specified in the ‘Updated at’ field, your query will look as follows:</p><pre>query {<br />  all_product(<br />    order_by: [<br />      updated_at_DESC<br />    ]<br />  ) {<br />    items {<br />      title<br />      price_in_usd<br />    }<br />  }<br />}</pre><p>The response body of this query will display all the entries of the <strong>Product</strong> content type that satisfy the query in a descending order, including details of just the ‘Title’ and ‘Price in USD’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

