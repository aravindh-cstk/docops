---
title: "Unlink content types"
description: PUT /variant_groups/{variant_group_uid}/variants
url: developers/apis/content-management-api/requests/unlink-content-types
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-09-24
---

# Unlink content types


**Method:** `PUT`  
**Endpoint:** `/variant_groups/{variant_group_uid}/variants`

The Unlink content types request allows you to unlink content types to your variant group.

In the “Body” section, enter the content type UID(s) in the following format:

```
{
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
```

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Pass application/json value. |

| variant_group_uid | your_variant_group_uid | Enter the unique ID for your variant group. |

**Request Body:**

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
    ],
    "uid": "csd**************03",
    "branches": [
        "main"
    ]
}
```

**Response (200):**

```json
{
    "content_types": [
        {
            "uid": "content_type_uid_1",
            "status": "unlinked"
        },
        {
            "uid": "content_type_uid_2",
            "status": "unlinked"
        }
    ],
    "name": "Variant-Group-Name",
    "personalize_metadata": {
        "project_uid": "660bc**************31ac",
        "experience_uid": "660bd**************31ba",
        "experience_short_uid": "0",
        "status": "linked"
    },
    "created_by": "blt**************9e",
    "updated_by": "blt**************1a",
    "uid": "csd**************03",
    "created_at": "2024-05-22T05:56:15.393Z",
    "updated_at": "2024-09-06T09:04:19.758Z",
    "message": "Variant Group and Variants updated successfully",
    "variants": []
}
```
