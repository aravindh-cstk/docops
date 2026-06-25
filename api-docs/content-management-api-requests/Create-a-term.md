---
title: "Create a term"
description: POST /taxonomies/{taxonomy_uid}/terms
url: developer-apis/content-management-api-requests/create-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-12-05
---

# Create a term

**POST** `/taxonomies/{taxonomy_uid}/terms`

The Create a term request creates a term in a particular taxonomy within your stack.

Since terms are organized hierarchically in a taxonomy, it's important to define the order when creating new terms. For instance, when creating a term at the parent level, set the parent_uid as null and specify the level within the order parameter. To create a child term, provide the parent_uid of the parent term where you want to add the new child term, and indicate the desired level within the order parameter.

When creating terms at the parent level, the request body should look like this:

```
{
   "term":{
      "uid":"term_2",
      "name":"Term 2",
      "parent_uid":null,
      "order":2
   }
}
```

When creating terms at the child level, the request body should look like this:

```
{
   "term":{
      "uid":"sub_term_t",
      "name":"Sub Term 5",
      "parent_uid":"term_1",
      "order":5
   }
}
```

**Note:** The order key signifies the term's position relative to other terms at the same level. The order of terms starts from 1, so to place a term in the first position at that level, set the order as 1.

##### Update a term

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`

## Query Parameters

- **include_children_count** (optional)
  Set this parameter to 'true' to include in response the total count of child terms available in the parent term.
  Default: `true`
- **include_referenced_entries_count** (optional)
  Set this parameter to 'true' to include in response the total count of entries in which the term is added.
  Default: `true`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token	`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

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

## Sample Response

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

