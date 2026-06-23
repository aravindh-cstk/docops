---
title: "Move/Reorder a term"
description: PUT /taxonomies/{taxonomy_uid}/terms/{term_uid}/move
url: developers/apis/content-management-api/requests/move-reorder-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Move/Reorder a term

**PUT** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/move`

The Reorder a term request is used to reposition an existing term available in a particular taxonomy.

The order key signifies the term's position relative to other terms at the same level. The order of terms starts from 1, so to place a term in the first position at that level, set the order as 1.

**Note:** By default, the force query parameter is set to false, which results in an error if an attempt is made to move a term with child terms. When set to true, it will forcefully move the term, impacting the hierarchy of all its child terms and ancestors.

When reordering terms at the parent level, the request body should look like this:

```
{
  "term": {
    "parent_uid": null,
    "order": 2
  }
}
```

When rearranging terms under an existing term on a different level, the request body should look like this:

```
{
  "term": {
    "parent_uid": "term_1",
    "order": 5
  }
}
```

When reordering terms under an existing term on the same level (reorder term), the request body should be structured as follows:

```
{
  "term": {
    "parent_uid": "term_3",
    "order": 1
  }
}
```

##### Delete a term

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy of which you want to move or reorder the terms. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term you want to move or reorder. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

## Query Parameters

- **force** (optional)
  Enter 'true' to force a term to be reordered.
  Default: `false`

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
- **Content-Type ** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
  "term": {
    "parent_uid": "test",
    "order": 1
  }
}
```

## Sample Response

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

