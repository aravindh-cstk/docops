---
title: "Update a term"
description: PUT /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: developer-apis/content-management-api-requests/update-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Update a term

**PUT** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Update a term request is used to update the details of an existing term available in a particular taxonomy.

##### Localize a term

## URL Parameters

- **taxonomy_uid** (required)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)' request to retrieve the UID of a taxonomy.
  Default: `sample_one`
- **term_uid** (required)
  Enter the unique ID of the term you want to update. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' request to retrieve the UID of a term.
  Default: `term_a`

## Query Parameters

- **locale** (optional)
  Locale in which to update the taxonomy term. If not specified, the master locale is used.
  Default: `es`

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
    "name": "Updated Term A"
  }
}
```

## Sample Response

```json
{
    "term": {
        "uid": "term_a",
        "name": "Updated Term A",
        "locale": "es",
        "parent_uid": null,
        "depth": 1,
        "created_at": "2023-10-15T05:59:54.988Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-18T03:59:01.121Z",
        "updated_by": "b****************44"
    }
}
```

