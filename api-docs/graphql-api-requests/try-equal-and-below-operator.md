---
title: "Try 'Equal and Below' Operator"
description: /stacks/apiKey/explore
url: /try-equal-and-below-operator
product: Contentstack
doc_type: api-request
created_at: 2024-04-17T07:37:50.176Z
updated_at: 2024-04-17T09:42:23.085Z
---

# Try 'Equal and Below' Operator

<h5 id="equal-and-below-operator">Equal and Below Operator</h5>
<p>Get entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term and a specified level.</p>
<p class="note"><strong>Note</strong>: If you don't specify the level, the default behavior is to retrieve terms up to <strong>level 10</strong>.</p>
<p><strong>Example</strong>: In the <strong>Product </strong>content type, if, for instance, you want to get a list of all entries where the term <strong>Maroon </strong>and its descendants up to level 2 from the <strong>Color </strong>taxonomy are applied, your GraphQL query will look as follows:</p><pre>query TermEqualBelow {<br />  all_product(<br />    where: {<br />      taxonomies: {<br />        color: {<br />          term_eq_below: {<br />            uid: "maroon",<br />	 levels: 2<br />          }<br />        }<br />      }<br />    }<br />  ) {<br />    items {<br />      title<br />      taxonomies {<br />        taxonomy_uid<br />        term_uid<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

