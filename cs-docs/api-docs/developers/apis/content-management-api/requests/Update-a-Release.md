---
title: "Update a Release"
description: PUT /releases/{release_uid}
url: developers/apis/content-management-api/requests/update-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-14
---

# Update a Release


**Method:** `PUT`  
**Endpoint:** `/releases/{release_uid}`

The Update a Release call allows you to update the details of a Release, i.e., the ‘name’ and ‘description’.

When executing this API request, provide the Release UID as parameter. In the 'Body' section, you need to provide the new name and description of the Release that you want to update.

To configure the permissions for your application via OAuth, please include the cm.releases.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| release_version | 2.0 | Enter the release version. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter application/json to pass a request body. |

| release_uid | blt719af000dcde0000 | Enter the unique ID of the release that you want to update the details of. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

```json
{
    "release": {
        "name": "Release Name",
        "description": "2018-12-22"
    }
}
```

**Response (200):**

```json
{
    "notice": "Release updated successfully.",
    "release": {
        "name": "Release Name",
        "description": "2018-12-22",
        "locked": false,
        "uid": "blt9dc98b5d9d4d1e4a",
        "created_by": "blta068b6e50264acf6",
        "updated_by": "blta068b6e50264acf6",
        "created_at": "2023-02-28T07:11:57.077Z",
        "updated_at": "2023-02-28T07:19:30.886Z",
        "status": [],
        "_deploy_latest": false
    }
}
```
