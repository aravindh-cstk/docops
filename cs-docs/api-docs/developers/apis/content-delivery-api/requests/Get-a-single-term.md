---
title: "Get a single term"
description: GET /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: developers/apis/content-delivery-api/requests/get-a-single-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-05-18
---

# Get a single term

**GET** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Get a single term request retrieves a specific published term within a taxonomy.

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
  Enter your environment-specific delivery token. Check [Authentication](/docs/developers/apis/content-delivery-api#authentication).
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
    "publish_details": {
      "time": "2025-09-01T13:19:28.365Z",
      "user": "blt368bfe4e50023d0e",
      "environment": "bltd7f8cacaf649b485",
      "locale": "en-us"
    }
  }
}
```

