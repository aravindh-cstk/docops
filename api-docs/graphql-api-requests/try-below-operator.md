---
title: "Try 'Below' Operator"
description: /stacks/apiKey/explore
url: /try-below-operator
product: Contentstack
doc_type: api-request
created_at: 2024-04-17T07:34:31.288Z
updated_at: 2024-04-17T10:13:10.091Z
---

# Try 'Below' Operator

<h5 id="below-operator">Below Operator</h5><p>Get entries for a specific taxonomy that match all of their descendant terms by specifying only the target term and a specific level.</p><p class="note"><strong>Note</strong>: If you don't specify the level, the default behavior is to retrieve terms up to <strong>level 10</strong>.</p><p><strong>Example</strong>: In the <strong>Product </strong>content type, if, for instance, you want to get a list of all entries where the terms up to level 5 nested under the <strong>Red </strong>term from the <strong>Color </strong>taxonomy are applied, your GraphQL query will look as follows:</p><pre>query TermBelow {<br />  all_product(<br />    where: {<br />      taxonomies: {<br />        color: {<br />          term_below: {<br />            uid: "red",<br />	 levels: 5<br />          }<br />        }<br />      }<br />    }<br />  ) {<br />    items {<br />      title<br />      taxonomies {<br />        taxonomy_uid<br />        term_uid<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

