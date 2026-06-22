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


**Method:** `GET`  
**Endpoint:** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Get a single term request retrieves a specific published term within a taxonomy.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| access_token | your_access_token | Enter your environment-specific delivery token. Check [Authentication](/docs/developers/apis/content-delivery-api#authentication). |

| taxonomy_uid | categories | Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. |

| term_uid | gaming_laptops | Enter the unique ID of the term of which you want to retrieve the details. The UID of a term is unique across a stack. |

| limit | 5 | Number of results to return. |

| skip | 5 | Number of results to skip (for pagination). |

| depth | 2 | Depth of term hierarchy to retrieve. |

**Response (200):**

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
