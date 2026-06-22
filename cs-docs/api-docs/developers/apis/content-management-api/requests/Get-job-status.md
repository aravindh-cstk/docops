---
title: "Get job status"
description: GET /bulk/jobs/{job_id}
url: developers/apis/content-management-api/requests/get-job-status
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-08-29
---

# Get job status


**Method:** `GET`  
**Endpoint:** `/bulk/jobs/{job_id}`

The Get job status request returns comprehensive information of a specific publish/unpublish operation.

**Note**: Pass api_version parameter as **3.2** in the Headers section.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authorization | your_management_token | Enter your management token. |

| api_version | 3.2 | Enter the API version. |

| job_id | eb4c0236-103a-4a04-82a4-0a452b94bfc8 | Enter the UID of the job of which you want to retrieve the details. |

**Response (200):**

```json
{
    "uid": "e******6-1**a-4**4-8**4-0**********7",
    "created_by": "blte*************61",
    "updated_by": "",
    "created_at": "2024-07-01T05:22:32.475Z",
    "updated_at": "2024-07-01T05:22:34.051Z",
    "action": "publish",
    "api_key": "blt**************0d",
    "status": "complete",
    "body": {
        "branch": "main",
        "locales": [
            "en-us"
        ],
        "environments": [
            "blt6************ce"
        ],
        "published_at": "2024-07-01T05:22:34.051Z",
        "scheduled_at": ""
    },
  "summary": {
        "approvals": 0,
        "skip": 2,
        "state": "completed",
        "success": 25,
        "total_processed": 29,
        "unsuccess": 2
  }
}
```
