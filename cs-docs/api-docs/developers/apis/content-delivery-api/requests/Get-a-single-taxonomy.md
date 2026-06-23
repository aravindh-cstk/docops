---
title: "Get a single taxonomy"
description: GET /taxonomies/{taxonomy_uid}
url: developers/apis/content-delivery-api/requests/get-a-single-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-05-18
---

# Get a single taxonomy

**GET** `/taxonomies/{taxonomy_uid}`

The Get a single taxonomy request retrieves details of a single published taxonomy.

## URL Parameters

- **taxonomy_uid** (optional)
  Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack.
  Default: `categories`

## Query Parameters

- **limit** (optional)
  Number of results to return.
  Default: `5`
- **skip** (optional)
  Number of results to skip (for pagination).
  Default: `5`

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
  "taxonomy": {
    "uid": "categories",
    "name": "Categories",
    "description": "All categories for products.",
    "publish_details": {
      "time": "2025-09-01T13:19:28.365Z",
      "user": "blt368bfe4e50023d0e",
      "environment": "bltd7f8cacaf649b485",
      "locale": "en-us"
    }
  }
}
```

