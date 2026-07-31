---
title: "Try 'IN' Operator"
description: /stacks/apiKey/explore
url: /try-in-operator
product: Contentstack
doc_type: api-request
created_at: 2024-04-16T18:19:21.752Z
updated_at: 2024-04-17T07:44:08.274Z
---

# Try 'IN' Operator

<h5 id="in-operator">IN Operator</h5><p>Get entries where any one or more taxonomies exist.</p><p><strong>Example</strong>: In the <strong>Product </strong>content type, you have multiple taxonomy fields. If, for instance, you want to get a list of all entries where the taxonomy <strong>Color </strong>and <strong>Category </strong>is applied, your GraphQL query will look as follows:</p><pre>query {<br />  taxonomies {<br />    all_product(<br />      where: {<br />        taxonomies: {<br />          uid_in: ["color", "category"]<br />        }<br />      }<br />    ) {<br />      items {<br />        title<br />        taxonomies {<br />          term_uid<br />          taxonomy_uid<br />        }<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

