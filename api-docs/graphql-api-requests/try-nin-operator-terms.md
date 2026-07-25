---
title: "Try 'NIN' Operator [Terms]"
description: /stacks/apiKey/explore
url: /try-nin-operator-terms
product: Contentstack
doc_type: api-request
created_at: 2024-04-16T18:33:37.047Z
updated_at: 2024-04-17T07:47:46.592Z
---

# Try 'NIN' Operator [Terms]

<h5 id="nin-operator-terms">NIN Operator [Terms]</h5><p>Get entries of a content type where terms from a specific taxonomy do not exist.</p><p><strong>Example</strong>: In the <strong>Product </strong>content type, if, for instance, you want to get a list of all entries where the terms <strong>Red </strong>and <strong>Maroon </strong>from the <strong>Color </strong>taxonomy are not applied, your GraphQL query will look as follows:</p><pre>query {<br />  taxonomies {<br />    all_product(<br />      where: {<br />        taxonomies: {<br />          color: {<br />            term_nin: ["red", "maroon"]<br />          }<br />        }<br />      }<br />    ) {<br />      items {<br />        title<br />        taxonomies {<br />          term_uid<br />          taxonomy_uid<br />        }<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

