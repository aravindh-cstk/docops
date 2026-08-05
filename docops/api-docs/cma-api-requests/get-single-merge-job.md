---
title: "Get single merge job"
description: /stacks/branches_queue/your_merge_job_uid
url: /get-single-merge-job
product: Contentstack
doc_type: api-request
created_at: 2023-05-23T09:58:55.735Z
updated_at: 2023-07-26T13:24:48.668Z
---

# Get single merge job

<p>The <span data-type='inlineCode'>Get single merge job</span> request returns the status and configuration details of a particular merge job.</p>

**API Endpoint**: `/stacks/branches_queue/your_merge_job_uid`

**Method**: `GET`

## URL Parameters

- **merge_job_uid** (required)

## Headers

- **api_key** (required)
  <span>Enter the API key of the stack.</span>
- **authtoken** (optional)
  <span>Enter your authtoken.</span>
- **authorization** (required)
  <span>Enter your management token.</span>

## Response

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

