---
title: "Get all taxonomies"
description: GET /taxonomies
url: developers/apis/content-delivery-api/requests/get-all-taxonomies
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-05-18
---

# Get all taxonomies

**GET** `/taxonomies`

The Get all taxonomies request retrieves all published taxonomies for the given environment.

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
  Enter your environment-specific delivery token. Check [Authentication](/docs/developers/apis/content-delivery-api#authentication).
  Default: `your_access_token`

## Sample Response

```json
{
  "taxonomies": [
    {
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
  ],
  "count": 1
}
```

