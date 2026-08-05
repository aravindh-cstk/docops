---
title: "Try 'Not Equals' Operator [Taxonomy]"
description: /stacks/apiKey/explore
url: /try-not-equals-operator-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2024-04-16T18:15:55.913Z
updated_at: 2024-04-17T07:43:28.774Z
---

# Try 'Not Equals' Operator [Taxonomy]

<h5 id="not-equals-operator-taxonomy">Not Equals Operator [Taxonomy]</h5>
<p>Get entries where a specific taxonomy does not exist.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, you do not have the <strong>Color</strong> taxonomy configured, your GraphQL query will look as follows:</p><pre>query {<br />  taxonomies {<br />    all_product(<br />      where: {<br />        taxonomies: {<br />          uid_ne: "color"<br />        }<br />      }<br />    ) {<br />      items {<br />        title<br />        taxonomies {<br />          term_uid<br />          taxonomy_uid<br />        }<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

