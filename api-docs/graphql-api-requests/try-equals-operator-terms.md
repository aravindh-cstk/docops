---
title: "Try 'Equals' Operator [Terms]"
description: /stacks/apiKey/explore
url: /try-equals-operator-terms
product: Contentstack
doc_type: api-request
created_at: 2024-04-16T18:27:21.259Z
updated_at: 2024-04-17T07:46:41.471Z
---

# Try 'Equals' Operator [Terms]

<h5 id="equals-operator-terms">Equals Operator [Terms]</h5><p>Get entries of a specific content type where a term from a particular taxonomy is present.</p><p><strong>Example</strong>: In the <strong>Product </strong>content type, if, for instance, you want to get a list of all entries where the term <strong>Red </strong>from the <strong>Color </strong>taxonomy is applied, your GraphQL query will look as follows:</p><pre>query {<br />  taxonomies {<br />    all_product(<br />      where: {<br />        taxonomies: {<br />          color: {<br />            term: "red"<br />          }<br />        }<br />      }<br />    ) {<br />      items {<br />        title<br />        taxonomies {<br />          term_uid<br />          taxonomy_uid<br />        }<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

