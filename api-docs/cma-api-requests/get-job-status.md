---
title: "Get job status"
description: /bulk/jobs/{job_id}
url: /get-job-status
product: Contentstack
doc_type: api-request
created_at: 2024-07-04T10:22:30.099Z
updated_at: 2024-08-29T10:34:13.694Z
---

# Get job status

<p>The <span class="code">Get job status</span> request returns comprehensive information of a specific publish/unpublish operation.</p><p class="note"><strong>Note</strong>: Pass <span class="code">api_version</span> parameter as <strong>3.2</strong> in the Headers section.</p>

**API Endpoint**: `/bulk/jobs/{job_id}`

**Method**: `GET`

## URL Parameters

- **job_id** (required)
  <p><span style='font-size: 12pt;'>Enter the UID of the job of which you want to retrieve the details.</span></p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authorization** (required)
  <p><span></span><span style='font-size: 12pt;'>Enter your management token.</span></p><div></div><span></span>
- **api_version** (required)
  <p><span style='font-size: 12pt;'>Enter the API version.</span></p>

## Response

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

