---
title: "Lock a Release"
description: PUT /releases/{release_uid}
url: developers/apis/content-management-api/requests/lock-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-18
---

# Lock a Release


**Method:** `PUT`  
**Endpoint:** `/releases/{release_uid}`

The Lock a Release request prevents further modifications to the specified release by locking it. In the 'Body' section, set the locked parameter as true to lock the release.

Your request body is as follows:

```
{
  "release": {
    "locked": true
  }
}
```

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter application/json to pass a request body. |

| branch | main | Enter your branch unique ID. |

| release_uid | blt719af000dcde0000 | Enter the unique ID of the release that you want to lock. |

**Request Body:**

```json
{
  "release": {
    "locked": true
  }
}
```

**Response (200):**

```json
{
    "notice": "Release updated successfully.",
    "release": {
        "uid": "blt4**************a",
        "name": "Christmas Releases",
        "description": "",
        "locked": true,
        "sys_locked": false,
        "sys_version": 2,
        "status": [
            {
                "environment": "bltf6**************0",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "445f0669-50fc-4918-8f36-09abb3d573f4",
                "time": "2025-03-04T12:06:27.951Z"
            },
            {
                "environment": "blta**************1",
                "status": "success",
                "user": "bltd**************2",
                "job_id": "44****69-50fc-4918-8f36-09********f4",
                "time": "2025-03-04T12:06:27.974Z"
            }
        ],
        "created_at": "2025-02-13T05:55:46.177Z",
        "updated_at": "2025-06-25T08:24:04.621Z",
        "created_by": "blt3**************4",
        "updated_by": "blte9**************1"
    }
}
```
