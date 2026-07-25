---
title: "Try 'IN' Operator [Terms]"
description: /stacks/apiKey/explore
url: /try-in-operator-terms
product: Contentstack
doc_type: api-request
created_at: 2024-04-16T18:32:04.513Z
updated_at: 2024-04-17T07:47:28.848Z
---

# Try 'IN' Operator [Terms]

<h5 id="in-operator-terms">IN Operator [Terms]</h5><p>Get entries of a content type where terms from a specific taxonomy exist.</p><p><strong>Example</strong>: In the <strong>Product </strong>content type, if, for instance, you want to get a list of all entries where the terms <strong>Red</strong> and <strong>Maroon </strong>from the <strong>Color</strong> taxonomy are applied, your GraphQL query will look as follows:</p><pre>query {<br />  taxonomies {<br />    all_product(<br />      where: {<br />        taxonomies: {<br />          color: {<br />            term_in: ["red", "maroon"]<br />          }<br />        }<br />      }<br />    ) {<br />      items {<br />        title<br />        taxonomies {<br />          term_uid<br />          taxonomy_uid<br />        }<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

