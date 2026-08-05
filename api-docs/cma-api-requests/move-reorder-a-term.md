---
title: "Move/Reorder a term"
description: /taxonomies/{taxonomy_uid}/terms/{term_uid}/move
url: /move-reorder-a-term
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T11:55:28.131Z
updated_at: 2025-11-13T18:16:42.039Z
---

# Move/Reorder a term

<p>The <span data-type='inlineCode'>Reorder a term</span> request is used to reposition an existing term available in a particular taxonomy.</p>
<p>The <span data-type='inlineCode'>order</span> key signifies the term's position relative to other terms at the same level. The order of terms starts from 1, so to place a term in the first position at that level, set the order as 1.</p>
<p class="note"><strong>Note:</strong> By default, the <span data-type='inlineCode'>force</span> query parameter is set to <span data-type='inlineCode'>false</span>, which results in an error if an attempt is made to move a term with child terms. When set to <span data-type='inlineCode'>true</span>, it will forcefully move the term, impacting the hierarchy of all its child terms and ancestors.</p>
<p>When reordering terms at the parent level, the request body should look like this:</p><pre>{<br />  "term": {<br />    "parent_uid": null,<br />    "order": 2<br />  }<br />}</pre>
<p>When rearranging terms under an existing term on a different level, the request body should look like this:</p><pre>{<br />  "term": {<br />    "parent_uid": "term_1",<br />    "order": 5<br />  }<br />}</pre>
<p>When reordering terms under an existing term on the same level (reorder term), the request body should be structured as follows:</p><pre>{<br />  "term": {<br />    "parent_uid": "term_3",<br />    "order": 1<br />  }<br />}</pre>
<h5>Delete a term</h5>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms/{term_uid}/move`

**Method**: `PUT`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy of which you want to move or reorder the terms. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>
- **term_uid** (required)
  <p>Enter the unique ID of the term you want to move or reorder. The UID of a term is unique across a stack. Execute the '<a href="#get-all-terms-of-a-taxonomy" target="_self">Get all terms</a>' request to retrieve the UID of a term.</p>

## Query Parameters

- **force** (optional)
  <p>Enter 'true' to force a term to be reordered.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type ** (required)
  <p>Enter "application/json" to pass a request body. </p>

## Request Body

```json
{
  "term": {
    "parent_uid": "test",
    "order": 1
  }
}
```

## Response

```json
{
    "term": {
        "uid": "term_a",
        "name": "Updated Term A",
        "locale": "en-us",
        "parent_uid": "test",
        "depth": 2,
        "created_at": "2023-10-15T05:59:54.988Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-25T10:34:34.267Z",
        "updated_by": "b****************44",
        "order": 1
    }
}
```

