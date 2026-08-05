---
title: "Create a term"
description: /taxonomies/{taxonomy_uid}/terms
url: /create-a-term
product: Contentstack
doc_type: api-request
created_at: 2023-11-16T11:22:59.161Z
updated_at: 2023-12-05T14:20:04.672Z
---

# Create a term

<p>The <span data-type='inlineCode'>Create a term</span> request creates a term in a particular taxonomy within your stack.</p>
<p>Since terms are organized hierarchically in a taxonomy, it's important to define the order when creating new terms. For instance, when creating a term at the parent level, set the <span data-type='inlineCode'>parent_uid</span> as <span data-type='inlineCode'>null</span> and specify the level within the order parameter. To create a child term, provide the <span data-type='inlineCode'>parent_uid</span> of the parent term where you want to add the new child term, and indicate the desired level within the order parameter.</p>
<p>When creating terms at the parent level, the request body should look like this:</p>
<pre>
{
   "term":{
      "uid":"term_2",
      "name":"Term 2",
      "parent_uid":null,
      "order":2
   }
}
</pre>
<p>When creating terms at the child level, the request body should look like this:</p>
<pre>
{
   "term":{
      "uid":"sub_term_t",
      "name":"Sub Term 5",
      "parent_uid":"term_1",
      "order":5
   }
}
</pre>
<p class="note"><strong>Note:</strong> The order key signifies the term's position relative to other terms at the same level. The order of terms starts from 1, so to place a term in the first position at that level, set the order as 1.</p>
<h5>Update a term</h5>

**API Endpoint**: `/taxonomies/{taxonomy_uid}/terms`

**Method**: `POST`

## URL Parameters

- **taxonomy_uid** (required)
  <p>Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '<a href="#get-all-taxonomies" target="_self">Get all taxonomies</a>' request to retrieve the UID of a taxonomy.</p>

## Query Parameters

- **include_children_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of child terms available in the parent term.</p>
- **include_referenced_entries_count** (optional)
  <p>Set this parameter to 'true' to include in response the total count of entries in which the term is added.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body. </p>

## Request Body

```json
{
  "term": {
    "uid": "term_a2",
    "name": "Term A2",
    "order": "2",
    "parent_uid": "term_a"
  }
}
```

## Response

```json
{
    "term": {
        "uid": "term_a2",
        "name": "Term A2",
        "parent_uid": "term_a",
        "depth": 2,
        "created_at": "2023-10-17T12:58:35.427Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-17T12:58:35.427Z",
        "updated_by": "b****************44"
    }
}
```

