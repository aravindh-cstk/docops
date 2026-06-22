---
title: "Localize a term"
description: POST /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: developers/apis/content-management-api/requests/localize-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Localize a term


**Method:** `POST`  
**Endpoint:** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Localize a term request is used to add translated taxonomy terms to specific locales available within a stack.

##### Unlocalize a term

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token	 | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| taxonomy_uid | global_content_topics | Enter the unique ID of the taxonomy you want to localize. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies) |

| term_uid | artificial_intelligence | Enter the unique ID of the term you want to localize. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' re |

| locale | es-es | The locale in which you want to localize the taxonomy term. |

**Request Body:**

```json
{
  "term": {
    "uid": "artificial_intelligence",
    "name": "Inteligencia Artificial",
    "parent_uid": null,
    "order": 1
  }
}
```

**Response (201):**

```json
{
    "term": {
        "uid": "artificial_intelligence",
        "name": "Inteligencia Artificial",
        "locale": "es-es",
        "parent_uid": null,
        "depth": 1,
        "created_at": "2025-11-13T12:03:27.032Z",
        "created_by": "blte21349758c55fa45",
        "updated_at": "2025-11-13T12:03:27.032Z",
        "updated_by": "blte21349758c55fa45"
    }
}
```
