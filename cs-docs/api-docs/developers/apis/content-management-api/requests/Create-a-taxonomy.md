---
title: "Create a taxonomy"
description: POST /taxonomies/
url: developers/apis/content-management-api/requests/create-a-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-10-09
---

# Create a taxonomy


**Method:** `POST`  
**Endpoint:** `/taxonomies/`

The Create a taxonomy request creates a taxonomy in a particular stack of your organization.

**Note**: Refer to the [Restricted Keywords for UIDs](/docs/developers/create-content-types/restricted-keywords-for-uids) to avoid using reserved keywords.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

**Request Body:**

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Sample One",
        "description": "Description for the sample one taxonomy."
    }
}
```

**Response (201):**

```json
{
    "taxonomy": {
        "uid": "sample_one",
        "name": "Sample One",
        "description": "Description for the sample one taxonomy.",
        "created_at": "2023-10-15T05:30:20.509Z",
        "created_by": "b****************44",
        "updated_at": "2023-10-15T05:30:20.509Z",
        "updated_by": "b****************44"
    }
}
```
