---
title: "Try 'Above' Operator"
description: /stacks/apiKey/explore
url: /try-above-operator
product: Contentstack
doc_type: api-request
created_at: 2024-04-17T07:39:01.893Z
updated_at: 2024-04-17T09:42:47.087Z
---

# Try 'Above' Operator

<h5 id="above-operator">Above Operator</h5>
<p>Get all entries for a specific taxonomy that match only the parent term(s) of a specified target term, excluding the target term itself. You can also specify a specific level.</p>
<p class="note"><strong>Note</strong>: If you don't specify the level, the default behavior is to retrieve terms up to <strong>level 10</strong>.</p>
<p><strong>Example</strong>: In the <strong>Product </strong>content type, if, for instance, you want to get a list of all entries where the terms up to level 3 above the <strong>Maroon </strong>term from the <strong>Color </strong>taxonomy are applied, your GraphQL query will look as follows:</p><pre>query TermAbove {<br />  all_product(<br />    where: {<br />      taxonomies: {<br />        color: {<br />          term_above: {<br />            uid: "maroon",<br />	 levels: 3<br />          }<br />        }<br />      }<br />    }<br />  ) {<br />    items {<br />      title<br />      taxonomies {<br />        taxonomy_uid<br />        term_uid<br />      }<br />    }<br />  }<br />}</pre>

**API Endpoint**: `/stacks/apiKey/explore`

