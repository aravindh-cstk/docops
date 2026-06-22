---
title: "Get a single Release"
description: GET /releases/{release_uid}
url: developers/apis/content-management-api/requests/get-a-single-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-01-06
---

# Get a single Release


**Method:** `GET`  
**Endpoint:** `/releases/{release_uid}`

The Get a single Release request gets the details of a specific Release in a stack.

When executing the API request, provide the Release UID as parameter.

To configure the permissions for your application via OAuth, please include the cm.releases.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| release_version | 2.0 | Enter the release version. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| branch | main | Enter your branch unique ID. |

| release_uid | blt719af000dcde0000 | Enter the unique ID of the release of which you want to retrieve the details. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
    "release": {
        "uid": "bl***************38",
        "name": "Release Name",
        "description": "Fall Collection",
        "locked": false,
        "sys_version": 2,
        "created_at": "2025-04-04T08:41:52.729Z",
        "updated_at": "2025-07-24T10:34:29.852Z",
        "created_by": "bl***************8f",
        "updated_by": "bl***************2d",
        "status": [
            {
                "environment": "bl***************91",
                "status": "success",
                "user": "bl***************2d",
                "job_id": "7a78cb20-77b4-4bc5-93c0-092bcdde6c5a",
                "time": "2025-07-24T10:33:50.811Z"
            }
        ],
        "_deploy_latest": false,
        "items": [
            {
                "uid": "bl***************1a",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 2,
                "title": "Entry name",
                "variant_id": null
            },
            {
                "uid": "bl***************24",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 2,
                "title": "AI Innovation",
                "variant_id": null
            },
            {
                "uid": "bl***************10",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "blog",
                "version": 14,
                "title": "My First Blog",
                "variant_id": null
            },
            {
                "uid": "bl***************79",
                "action": "publish",
                "locale": "en-us",
                "content_type_uid": "sample",
                "version": 8,
                "title": "My first Article",
                "variant_id": null
            }
        ]
    }
}
```
