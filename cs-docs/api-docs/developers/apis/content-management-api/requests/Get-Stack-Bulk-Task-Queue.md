---
title: "Get Stack Bulk Task Queue"
description: GET /bulk/jobs
url: developers/apis/content-management-api/requests/get-stack-bulk-task-queue
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-03-11
---

# Get Stack Bulk Task Queue


**Method:** `GET`  
**Endpoint:** `/bulk/jobs`

The Get Stack Bulk Task Queue request retrieves a list of all the bulk actions performed on entries and assets within a stack.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authorization | your_management_token | Enter your management token. |

| authtoken | your_authtoken | Enter your authtoken. |

| bulk_version | 2.0 | Pass bulk_version parameter as 2.0. |

| include_count | true | Set this parameter to true to include the total count of items within the job. |

| skip | 2 | Enter the number of items to be skipped from the response body. |

| limit | 10 | Enter the maximum number of items to be returned. |

| asc | created_at | Sort the response in ascending order. Options include created_at, updated_at, status, created_by, and action. |

| desc | updated_at | Sort the response in descending order. Options include created_at, updated_at, status, created_by, and action. |

| status | 4,2 | Filter results by integers (1-6) separated by a comma to represent statuses: 1 - Waiting, 2 - In Queue, 3 - In Progress, 4 - Completed, 5 - Partial Complete, 6  |

| users | blt**************53 | Filter results by user IDs, provided as a single ID or comma-separated IDs. |

| from | 2024-05-13 | Specify the start date for the required data. Use the following date format: YYYY-MM-DD. |

| to | 2024-06-13 | Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD. |

**Response (200):**

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
