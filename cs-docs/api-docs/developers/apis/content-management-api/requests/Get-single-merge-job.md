---
title: "Get single merge job"
description: GET /stacks/branches_queue/your_merge_job_uid
url: developers/apis/content-management-api/requests/get-single-merge-job
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-07-26
---

# Get single merge job


**Method:** `GET`  
**Endpoint:** `/stacks/branches_queue/your_merge_job_uid`

The Get single merge job request returns the status and configuration details of a particular merge job.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| merge_job_uid | your_merge_job_uid |  |

**Response (200):**

```json
{
    "queue": [
        {
            "uid": "3ebc12e9-20b6-40d2-8aae-f29877f3a7fe",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-26T16:31:37.123Z",
            "updated_at": "2023-05-26T16:31:52.546Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample",
                    "no_revert": false
                }
            },
            "merged_at": "2023-05-26T16:31:52.546Z",
            "errors": []
        }
    ]
}
```
