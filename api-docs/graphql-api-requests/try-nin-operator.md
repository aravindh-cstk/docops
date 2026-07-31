---
title: "Try 'NIN' Operator"
description: /stacks/apiKey/explore
url: /try-nin-operator
product: Contentstack
doc_type: api-request
created_at: 2024-04-16T18:21:06.947Z
updated_at: 2024-04-17T07:44:31.710Z
---

# Try 'NIN' Operator

<h5 id="nin-operator">NIN Operator</h5><p>Get entries where none of the specified taxonomies exist.</p><p><strong>Example</strong>: In the <strong>Product </strong>content type, if, for instance, you want to get a list of all entries where the taxonomy <strong>Color </strong>and <strong>Category </strong>are not applied, your GraphQL query will look as follows:</p><pre>query {<br />  taxonomies {<br />    all_product(<br />      where: {<br />        taxonomies: {<br />          uid_nin: ["color", "category"]<br />        }<br />      }<br />    ) {<br />      items {<br />        title<br />        taxonomies {<br />          term_uid<br />          taxonomy_uid<br />        }<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

