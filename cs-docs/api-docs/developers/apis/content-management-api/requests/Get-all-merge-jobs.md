---
title: "Get all merge jobs"
description: GET /stacks/branches_queue
url: developers/apis/content-management-api/requests/get-all-merge-jobs
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-07-26
---

# Get all merge jobs


**Method:** `GET`  
**Endpoint:** `/stacks/branches_queue`

The Get all merge jobs request returns a list of all the recent merge jobs within a specific period.

**Note**: By default, the last**100** merge jobs are returned in the response.

##### Get a Single Merge Job

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

**Response (200):**

```json
{
    "queue": [
        {
            "uid": "3ebc12e9-20b6-40d2-8aae-f29877f3a7fe",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-26T16:31:37.123Z",
            "updated_at": "2023-05-26T16:31:37.123Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "in_progress",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample",
                    "no_revert": false
                }
            },
            "merged_at": null,
            "errors": []
        },
        {
            "uid": "7a75ae8d-3580-48da-93eb-80b9635f6330",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-04T08:39:06.074Z",
            "updated_at": "2023-05-04T08:39:21.413Z",
            "created_by": "bltd14ff1cb3b7ca7ae",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "test",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "test",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": "2023-05-04T08:39:21.413Z",
            "errors": []
        },
        {
            "uid": "185c7583-f811-401a-9278-70682305dd4d",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T14:26:32.918Z",
            "updated_at": "2023-05-03T14:26:48.330Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T14:26:48.330Z",
            "errors": []
        },
        {
            "uid": "38c295a9-f8b9-472e-8b65-74ebc22e5f73",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:14:23.222Z",
            "updated_at": "2023-05-03T06:14:23.296Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "failed",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "ignore",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": null,
            "errors": [
                "No items available for merge"
            ]
        },
        {
            "uid": "37422e29-5166-433a-95d4-e22f755a7d0c",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:03:58.566Z",
            "updated_at": "2023-05-03T06:04:13.835Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_modified_only_prefer_base",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T06:04:13.835Z",
            "errors": []
        },
        {
            "uid": "9e9b08ea-f0dc-4352-9495-47e13e89fe69",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:03:30.191Z",
            "updated_at": "2023-05-03T06:03:45.494Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "overwrite_with_compare",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T06:03:45.494Z",
            "errors": []
        },
        {
            "uid": "185e7178-e8b0-4e59-b7d8-eb1c2062ac04",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:02:42.840Z",
            "updated_at": "2023-05-03T06:02:58.126Z",
            "created_by": "blt151bca2f320b01be",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_base",
                    "merge_comment": "sample"
                }
            },
            "merged_at": "2023-05-03T06:02:58.126Z",
            "errors": []
        },
        {
            "uid": "c333e912-9698-4f70-91c9-728ace9e0f25",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T06:02:26.519Z",
            "updated_at": "2023-05-03T06:02:41.836Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": "2023-05-03T06:02:41.836Z",
            "errors": []
        },
        {
            "uid": "cab3e738-32cd-4d23-994c-bc57e43e0430",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-05-03T05:53:21.384Z",
            "updated_at": "2023-05-03T05:53:36.871Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "redesign",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "redesign",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": "2023-05-03T05:53:36.871Z",
            "errors": []
        },
        {
            "uid": "304116d6-8169-4192-8d3a-31bb27ac85ee",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-21T10:28:01.287Z",
            "updated_at": "2023-04-21T10:28:17.021Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "dev",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "dev",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "Sample Comment"
                }
            },
            "merged_at": "2023-04-21T10:28:17.021Z",
            "errors": []
        },
        {
            "uid": "a7f23177-59d4-451a-bda4-e6bbd1e8a88d",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T10:48:44.794Z",
            "updated_at": "2023-04-13T10:48:59.970Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "sample",
                "compare_branch": "dev",
                "status": "complete",
                "configuration": {
                    "base_branch": "sample",
                    "compare_branch": "dev",
                    "default_merge_strategy": "merge_modified_only_prefer_base",
                    "merge_comment": "Sample comment"
                }
            },
            "merged_at": null,
            "errors": []
        },
        {
            "uid": "03f35e8d-059e-44f2-905b-82e7206f8114",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T10:41:03.313Z",
            "updated_at": "2023-04-13T10:41:18.650Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "sample",
                "status": "complete",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "sample",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": null,
            "errors": []
        },
        {
            "uid": "300fd68a-e1db-4ab6-94ea-dcf51e4e08b1",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T09:43:17.984Z",
            "updated_at": "2023-04-13T09:43:33.377Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "sample",
                "status": "failed",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "sample",
                    "default_merge_strategy": "merge_prefer_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": null,
            "errors": [
                {
                    "event": "update",
                    "type": "global_fields",
                    "uid": "sample",
                    "error": "{\"error_message\":\"We're sorry, but something went wrong. We've been notified about this issue and will take a look at it shortly. Please contact support@contentstack.com for assistance.\",\"error_code\":194}"
                }
            ]
        },
        {
            "uid": "a411a7e0-a988-472b-9e59-59a65ddb49fe",
            "stack": "blt6de749920a15b8f6",
            "created_at": "2023-04-13T09:32:00.911Z",
            "updated_at": "2023-04-13T09:32:16.301Z",
            "created_by": "blt5de115d27bef7c0e",
            "merge_details": {
                "base_branch": "main",
                "compare_branch": "dev",
                "status": "failed",
                "configuration": {
                    "base_branch": "main",
                    "compare_branch": "dev",
                    "default_merge_strategy": "overwrite_with_compare",
                    "merge_comment": "sample comment"
                }
            },
            "merged_at": null,
            "errors": [
                {
                    "event": "delete",
                    "type": "global_fields",
                    "uid": "sample",
                    "error": "{\"error_message\":\"Access denied. You have insufficient permissions to perform this operation.\",\"error_code\":162}"
                }
            ]
        }
    ]
}
```
