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


**Method:** `GET`  
**Endpoint:** `/taxonomies/{taxonomy_uid}/terms`

The Get all terms request retrieves all published terms in a taxonomy for the specified environment and locale.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| access_token | your_access_token | Enter your environment-specific delivery token. Check [Authentication](/docs/developers/apis/content-delivery-api#authentication). |

| taxonomy_uid | categories | Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. |

| limit | 5 | Number of results to return. |

| skip | 5 | Number of results to skip (for pagination). |

| depth | 2 | Depth of term hierarchy to retrieve. |

**Response (200):**

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
