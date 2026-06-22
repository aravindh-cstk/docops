---
title: "Update a term"
description: PUT /taxonomies/{taxonomy_uid}/terms/{term_uid}
url: developers/apis/content-management-api/requests/update-a-term
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Update a term


**Method:** `PUT`  
**Endpoint:** `/taxonomies/{taxonomy_uid}/terms/{term_uid}`

The Update a term request is used to update the details of an existing term available in a particular taxonomy.

##### Localize a term

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token	 | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| taxonomy_uid | sample_one | Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)'  |

| term_uid | term_a | Enter the unique ID of the term you want to update. The UID of a term is unique across a stack. Execute the '[Get all terms](#get-all-terms-of-a-taxonomy)' requ |

| locale | es | Locale in which to update the taxonomy term. If not specified, the master locale is used. |

**Request Body:**

```json
{
  "term": {
    "name": "Updated Term A"
  }
}
```

**Response (201):**

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
