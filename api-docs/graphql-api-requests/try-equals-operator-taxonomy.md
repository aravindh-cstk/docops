---
title: "Try 'Equals' Operator [Taxonomy]"
description: /stacks/apiKey/explore
url: /try-equals-operator-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2024-04-16T18:17:09.794Z
updated_at: 2024-04-17T07:42:13.429Z
---

# Try 'Equals' Operator [Taxonomy]

<h5 id="equals-operator-taxonomy">Equals Operator [Taxonomy]</h5>
<p>Get entries containing a specific taxonomy.</p>
<p><strong>Example</strong>: In the <strong>Product</strong> content type, you have a taxonomy field. If, for instance, you want to get a list of all entries where the taxonomy <strong>Color</strong> is applied, your GraphQL query will look as follows:</p><pre>query {<br />  taxonomies {<br />    all_product(<br />      where: {<br />        taxonomies: {<br />          uid: "color"<br />        }<br />      }<br />    ) {<br />      items {<br />        title<br />        taxonomies {<br />          term_uid<br />          taxonomy_uid<br />        }<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

