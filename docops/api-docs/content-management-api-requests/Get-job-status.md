---
title: "Get job status"
description: GET /bulk/jobs/{job_id}
url: developer-apis/content-management-api-requests/get-job-status
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-08-29
---

# Get job status

**GET** `/bulk/jobs/{job_id}`

The Get job status request returns comprehensive information of a specific publish/unpublish operation.

**Note**: Pass api_version parameter as **3.2** in the Headers section.

## URL Parameters

- **job_id** (required)
  Enter the UID of the job of which you want to retrieve the details.
  Default: `eb4c0236-103a-4a04-82a4-0a452b94bfc8`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **api_version** (required)
  Enter the API version.
  Default: `3.2`

## Sample Response

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

