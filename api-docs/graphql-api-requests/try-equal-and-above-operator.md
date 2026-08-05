---
title: "Try 'Equal and Above' Operator"
description: /stacks/apiKey/explore
url: /try-equal-and-above-operator
product: Contentstack
doc_type: api-request
created_at: 2024-04-17T07:40:21.720Z
updated_at: 2024-04-17T09:42:57.659Z
---

# Try 'Equal and Above' Operator

<h5 id="equal-and-above-operator">Equal and Above Operator</h5>
<p>Get all entries for a specific taxonomy that match a specific term and all its ancestor terms, requiring only the target term and a specified level.</p>
<p class="note"><strong>Note</strong>: If you don't specify the level, the default behavior is to retrieve terms up to <strong>level 10</strong>.</p>
<p><strong>Example</strong>: In the <strong>Product </strong>content type, if, for instance, you want to get a list of all entries where the term <strong>Maroon </strong>and its ancestors up to level 6 from the <strong>Color </strong>taxonomy are applied, your GraphQL query will look as follows:</p><pre>query TermEqualAbove {<br />  all_product(<br />    where: {<br />      taxonomies: {<br />        color: {<br />          term_eq_above: {<br />            uid: "maroon",<br />	 levels: 6<br />          }<br />        }<br />      }<br />    }<br />  ) {<br />    items {<br />      title<br />      taxonomies {<br />        taxonomy_uid<br />        term_uid<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

