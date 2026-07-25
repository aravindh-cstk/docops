---
title: "Try 'Exists' Operator [Taxonomy]"
description: /stacks/apiKey/explore
url: /try-exists-operator-taxonomy
product: Contentstack
doc_type: api-request
created_at: 2024-04-16T18:22:35.946Z
updated_at: 2024-04-17T07:45:12.511Z
---

# Try 'Exists' Operator [Taxonomy]

<h5 id="exists-operator-taxonomy">Exists Operator [Taxonomy]</h5><p>Get entries of a particular content type where a taxonomy field exists.</p><p><strong>Example</strong>: In the <strong>Product </strong>content type, if, for instance, you want to get a list of all entries where the taxonomy field is applied, your GraphQL query will look as follows:</p><pre>query {<br />  taxonomies {<br />    all_product(<br />      where: {<br />        taxonomies_exists: true<br />      }<br />    ) {<br />      items {<br />        title<br />        taxonomies {<br />          term_uid<br />          taxonomy_uid<br />        }<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

