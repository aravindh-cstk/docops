---
title: "Try 'Order by Asc' Operator"
description: /stacks/apiKey/explore
url: /order-by-asc
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.796Z
updated_at: 2025-02-17T05:57:00.189Z
---

# Try 'Order by Asc' Operator

<p>When fetching entries, you can sort them in the ascending order with respect to the value of the following system-defined fields in the response body:</p><ul><li>Created at (<span class="code">created_at_ASC</span>)</li><li>Updated at (<span class="code">updated_at_ASC</span>)</li><li>Published at (<span class="code">sys_published_at_ASC</span>)</li></ul><div class="note"><strong>Note</strong>:<ul><li>The order by ASC operator can only be used on the ‘Created at’, ‘Updated at’, and 'Published at' system-defined fields. It is not applicable to any other fields.</li><li>Reach out to our <a href="mailto:support@contentstack.com" target="_blank">support</a> team to enable the 'Published at' feature for your organization.</li></ul></div><p><strong>Example</strong>: In the <strong>Product</strong> content type, if you wish to sort the entries with respect to the date specified in the ‘Created at’ field, your query will look as follows:</p><pre>query {<br />  all_product(<br />    order_by: [<br />      created_at_ASC<br />    ]<br />  ) {<br />    items {<br />      title<br />      price_in_usd<br />      color<br />    }<br />  }<br />}<br /></pre><p>The response body of this query will display all the entries of the Product content type that satisfy the query in an ascending order, including details of just the ‘Title’, ‘Color’, and ‘Price in USD’ fields.</p>

**API Endpoint**: `/stacks/apiKey/explore`

