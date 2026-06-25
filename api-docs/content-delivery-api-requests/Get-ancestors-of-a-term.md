---
title: "Get ancestors of a term"
description: GET /taxonomies/{taxonomy_uid}/terms/{term_uid}/ancestors
url: developer-apis/content-delivery-api-requests/get-ancestors-of-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-05-18
---

# Get ancestors of a term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/ancestors`

The Get ancestors of a term request retrieves all ancestor terms of a given term up to the root.

## URL Parameters

- **taxonomy_uid** (optional)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.
  Default: `categories`
- **term_uid** (optional)
  Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack.
  Default: `gaming_laptops`

## Query Parameters

- **limit** (optional)
  Number of results to return.
  Default: `5`
- **skip** (optional)
  Number of results to skip (for pagination).
  Default: `5`
- **depth** (optional)
  Depth of term hierarchy to retrieve.
  Default: `2`

## Headers

- **api_key** (optional)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **access_token** (optional)
  Enter your environment-specific delivery token. Check [Authentication](../../../../api-detail/content-delivery-api.md#authentication).
  Default: `your_access_token`

## Sample Response

```json
{
  "term": {
    "uid": "gaming_laptops",
    "name": "Gaming Laptops",
    "parent_uid": "laptops",
    "order": 1,
    "locale": "en-us",
    "ancestors": [
      {
        "uid": "laptops",
        "name": "Laptops",
        "parent_uid": "electronics",
        "order": 1,
        "locale": "en-us"
      },
      {
        "uid":"electronics",
        "name": "Electronics",
        "parent_uid": null,
        "order": 1,
        "locale": "en-us"
      }
    ]
  }
}
```

