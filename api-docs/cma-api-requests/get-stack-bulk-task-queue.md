---
title: "Get Stack Bulk Task Queue"
description: /bulk/jobs
url: /get-stack-bulk-task-queue
product: Contentstack
doc_type: api-request
created_at: 2024-08-29T10:21:21.920Z
updated_at: 2025-03-11T10:58:32.256Z
---

# Get Stack Bulk Task Queue

<p>The <span class="code">Get Stack Bulk Task Queue</span> request retrieves a list of all the bulk actions performed on entries and assets within a stack.</p>

**API Endpoint**: `/bulk/jobs`

**Method**: `GET`

## Query Parameters

- **include_count** (optional)
  <p>Set this parameter to <span class="code">true</span> to include the total count of items within the job.</p>
- **skip** (optional)
  <p>Enter the number of items to be skipped from the response body.</p>
- **limit** (optional)
  <p>Enter the maximum number of items to be returned.</p>
- **asc** (optional)
  <p>Sort the response in ascending order. Options include <span class="code">created_at</span>, <span class="code">updated_at</span>, <span class="code">status</span>, <span class="code">created_by</span>, and <span class="code">action</span>.</p>
- **desc** (optional)
  <p>Sort the response in descending order. Options include <span class="code">created_at</span>, <span class="code">updated_at</span>, <span class="code">status</span>, <span class="code">created_by</span>, and <span class="code">action</span>.</p>
- **status** (optional)
  <p>Filter results by integers (1-6) separated by a comma to represent statuses: 1 - Waiting, 2 - In Queue, 3 - In Progress, 4 - Completed, 5 - Partial Complete, 6 - Failed.</p>
- **users** (optional)
  <p>Filter results by user IDs, provided as a single ID or comma-separated IDs.</p>
- **from** (optional)
  <p>Specify the start date for the required data. Use the following date format: <span class="code">YYYY-MM-DD</span>.</p>
- **to** (optional)
  <p>Enter the current date or any date after the <span class="code">from</span> date. The date format should be: <span class="code">YYYY-MM-DD</span>.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authorization** (required)
  <p><span></span><span style='font-size: 12pt;'>Enter your management token.</span></p><div></div><span></span>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **bulk_version** (required)
  <p>Pass <span class="code">bulk_version</span> parameter as <span class="code">2.0</span>.</p>

## Response

```json
{
    "jobItems": [
        {
            "_id": "66cc68f89e393ee4e7dd1fc2",
            "action": "publish",
            "job_id": "cs-41e64add-001c-4a34-b841-c017b6a4a993",
            "uid": "blt45b6d47d9a1e8824",
            "content_type_uid": "ct_1",
            "title": "Test_RD",
            "locale": "en-us",
            "reference": true,
            "version": 3,
            "created_at": "2024-08-26T11:37:28.851Z",
            "updated_at": "2024-08-26T11:37:28.851Z"
        },
        {
            "_id": "66cc68f89e393ee4e7dd1fc3",
            "action": "publish",
            "job_id": "cs-41e64add-001c-4a34-b841-c017b6a4a993",
            "uid": "blta38419e21c526e4d",
            "content_type_uid": "ct_1",
            "title": "dascs v2",
            "locale": "en-us",
            "reference": true,
            "version": 2,
            "created_at": "2024-08-26T11:37:28.851Z",
            "updated_at": "2024-08-26T11:37:28.851Z"
        },
        {
            "_id": "66cc68f89e393ee4e7dd1fc5",
            "action": "publish",
            "job_id": "cs-41e64add-001c-4a34-b841-c017b6a4a993",
            "uid": "blt26eef6d406118a1f",
            "content_type_uid": "sys_assets",
            "title": "beautiful-peacock-feathers.jpg",
            "locale": "en-us",
            "version": 1,
            "created_at": "2024-08-26T11:37:28.884Z",
            "updated_at": "2024-08-26T11:37:28.884Z"
        },
        {
            "errors": [
                {
                    "path": "uid",
                    "errorKey": "This item has already been added to the release"
                }
            ],
            "_id": "66cc68f89e393ee4e7dd1fc6",
            "action": "publish",
            "job_id": "cs-41e64add-001c-4a34-b841-c017b6a4a993",
            "uid": "blta38419e21c526e4d",
            "content_type_uid": "ct_1",
            "title": "dascs v2",
            "locale": "en-us",
            "version": 2,
            "created_at": "2024-08-26T11:37:28.884Z",
            "updated_at": "2024-08-26T11:37:28.951Z",
            "errored": true
        }
    ]
}
```

