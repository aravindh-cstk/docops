---
title: "Get descendants of a term"
description: GET /taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants
url: developers/apis/content-delivery-api/requests/get-descendants-of-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-05-18
---

# Get descendants of a term


**Method:** `GET`  
**Endpoint:** `/taxonomies/{taxonomy_uid}/terms/{term_uid}/descendants`

The Get descendants of a term request retrieves all descendant terms of a given term.

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
    "uid": "electronics",
    "name": "Electronics",
    "parent_uid": null,
    "order": 1,
    "locale": "en-us",
    "descendants": [
      {
        "uid": "laptops",
        "name": "Laptops",
        "parent_uid": "electronics",
        "order": 1,
        "locale": "en-us"
      }
    ]
  }
}
```
