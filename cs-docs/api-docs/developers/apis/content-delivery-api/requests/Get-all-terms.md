---
title: "Get all terms"
description: GET /taxonomies/{taxonomy_uid}/terms
url: developers/apis/content-delivery-api/requests/get-all-terms
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-05-18
---

# Get all terms

**GET** `/taxonomies/{taxonomy_uid}/terms`

The Get all terms request retrieves all published terms in a taxonomy for the specified environment and locale.

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
  "terms": [
    {
      "uid": "california",
      "name": "California",
      "parent_uid": "usa",
      "taxonomy_uid": "regions",
      "order": 1,
      "locale": "en-us",
      "created_at": "2024-02-01T10:30:00.000Z",
      "updated_at": "2024-02-01T10:30:00.000Z",
      "created_by": "admin",
      "updated_by": "admin"
    }
  ],
  "count": 1
}
```

