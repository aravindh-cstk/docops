---
title: "Try 'Taxonomy Fields'"
description: /stacks/apiKey/explore
url: /try-taxonomy-fields
product: Contentstack
doc_type: api-request
created_at: 2024-04-16T18:09:26.409Z
updated_at: 2024-04-17T07:41:39.163Z
---

# Try 'Taxonomy Fields'

<h5 id="taxonomy-fields">Taxonomy Fields</h5><p>Get the taxonomy UID and term UID from the entries of a specific content type.</p><p><strong>Example</strong>: In the <strong>Product</strong> content type, you have a taxonomy field. If, for instance, you want to get a list of all entries where terms are applied, your GraphQL query will look as follows:</p><pre>query {<br />  taxonomies {<br />    all_product {<br />      items {<br />        title<br />        taxonomies {<br />          taxonomy_uid <br />          term_uid<br />        }<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

