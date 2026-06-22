---
title: "Update a taxonomy"
description: PUT /taxonomies/{taxonomy_uid}
url: developers/apis/content-management-api/requests/update-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-11-13
---

# Update a taxonomy


**Method:** `PUT`  
**Endpoint:** `/taxonomies/{taxonomy_uid}`

The Update a taxonomy request is used to update the details of an existing taxonomy available in a particular stack.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

| taxonomy_uid | sample_one | Enter the unique ID of the taxonomy you want to update. The UID of a taxonomy is unique across a stack. Execute the '[Get all taxonomies](#get-all-taxonomies)'  |

| locale | es-es | Locale in which to update the taxonomy. If not specified, the master locale is used. |

**Request Body:**

```json
{
  "taxonomy": {
    "name": "Updated Sample One",
    "description": "Updated description for the sample one taxonomy."
  }
}
```

**Response (200):**

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Updated Sample One",
        "description": "Updated description for the sample one taxonomy.",
      "locale": "es-es",
        "created_at": "2023-10-15T05:30:20.509Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-15T07:54:42.373Z",
        "updated_by": "b****************44"
    }
}
```
