---
title: "Get all items in a Release"
description: GET /releases/{release_uid}/items
url: developers/apis/content-management-api/requests/get-all-items-in-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-01-06
---

# Get all items in a Release


**Method:** `GET`  
**Endpoint:** `/releases/{release_uid}/items`

The Get all items in a Release request retrieves a list of all items (entries and assets) that are part of a specific Release.

When executing the API request, you need to provide the Release UID.

To configure the permissions for your application via OAuth, please include the cm.release:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| release_version | 2.0 | Enter the release version. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| branch | main | Enter your branch unique ID. |

| release_uid | blt719af000dcde0000 | Enter the unique ID of the release of which you want to retrieve the items. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
    "items": [
        {
            "action": "publish",
            "title": "Group",
            "uid": "blt63177c0f00f20b61",
            "locale": "en-us",
            "version": 2,
            "content_type_uid": "test_fields"
        },
        {
            "action": "publish",
            "title": "Modular Blocks",
            "uid": "bltcad3ea0479ffb274",
            "locale": "en-us",
            "version": 1,
            "content_type_uid": "test_fields"
        },
        {
            "action": "publish",
            "title": "File",
            "uid": "blt47a6d5202496b1da",
            "locale": "en-us",
            "version": 2,
            "content_type_uid": "test_fields"
        }
    ]
}
```
