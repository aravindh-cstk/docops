---
title: "CMA | Job Status"
description: Check asynchronous job status for long-running Contentstack management operations and bulk tasks.
url: https://www.contentstack.com/docs/developers/apis/content-management-api/job-status
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# CMA | Job Status

The Job Status API allows you to monitor the progress of your bulk operations on entries and assets. This functionality helps tracking the status of jobs, offering comprehensive details about the job's execution and the items present in the job, including nested references. Read more about [Nested Reference Publishing](../../../../cs-docs/content-managers/publish-content/about-nested-reference-publishing.md).

## Get Job Status

### Get job status

**GET** `/bulk/jobs/{job_id}`

The Get job status request returns comprehensive information of a specific publish/unpublish operation.

**Note**: Pass api_version parameter as **3.2** in the Headers section.

#### URL Parameters

- **job_id** (required)
  Enter the UID of the job of which you want to retrieve the details.
  Default: `eb4c0236-103a-4a04-82a4-0a452b94bfc8`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **api_version** (required)
  Enter the API version.
  Default: `3.2`

#### Sample Response

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




## Get Job Items Status

### Get job items status

**GET** `/bulk/jobs/{job_id}/items?include_count={boolean_value}&type={type_value}&skip={skip_value}&limit={limit_value}&status={status_value}&ct[]={content_type_uid}&include_reference={boolean_value}`

The Get job items status request retrieves all the details of the items associated with a specific publish/unpublish job, along with their status.

**Note**:

- Pass api_version parameter as 3.2 in the Headers section.
- The include_count query parameter will return the count only if skip is 0 or the value for skip is not provided.
- The item status API request returns only the first 100 items. If you want to fetch the details other than the first 100 in your response, refer to the Pagination section to retrieve data for all items in paginated form.

#### URL Parameters

- **job_id** (required)
  Enter the UID of the job of which you want to retrieve the details.
  Default: `eb4c0236-103a-4a04-82a4-0a452b94bfc8`

#### Query Parameters

- **include_count** (optional)
  If set to true, the response includes the total count of items within the job. Default value for this parameter is false.
  Default: `false`
- **skip** (optional)
  Enter the number of items to be skipped from the response body. Default value for this parameter is 0.
  Default: `0`
- **limit** (optional)
  Enter the maximum number of items to be returned. Default and maximum value for this parameter is 100.
  Default: `100`
- **include_reference** (optional)
  Set this parameter to 'true' to include the details of all the referenced items in response. Default value for this parameter is false.
  Default: `true`
- **status** (optional)
  Enter the status 'success' or 'failed' for which you want to retrieve items.
  Default: `success`
- **type** (optional)
  Enter the filter 'entry' or 'asset' for which you want to retrieve items.
  Default: `asset`
- **ct[]** (optional)
  Enter the unique ID of the content type from which you want to filter responses. Filter multiple content types by using ct[]=your_content_type_uid1&ct[]=your_content_type_uid2.
  Default: `your_content_type_uid`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **api_version** (required)
  Enter the API version.
  Default: `3.2`

#### Sample Response

```json
{
    "items": [
        {
            "uid": "bltfc507bd97607bb5b",
            "locale": "",
            "version": 1,
            "title": "Charles_Dickens_Headshot.jpg",
            "type": "asset",
            "publish_details": {
                "status": "success"
            },
            "publish_locale": "en-us",
            "environment": "blt6c683aa0c6be0dce",
            "action": "publish",
            "published_at": "2024-07-01T05:22:33.931Z",
            "scheduled_at": "",
            "user": "blte93d4119f79db761",
            "depth": 4
        },
        {
            "uid": "blt212c614af8c395cc",
            "locale": "en-us",
            "version": 2,
            "title": "Mark Twain",
            "type": "entry",
            "publish_details": {
                "status": "failed",
                "failure_reason": "The entry you want to publish is in-progress. Please fill mandatory fields."
            },
            "publish_locale": "en-us",
            "environment": "blt6c683aa0c6be0dce",
            "action": "publish",
            "published_at": null,
            "scheduled_at": "",
            "user": "blte93d4119f79db761",
            "depth": 2,
            "content_type": {
                "uid": "author"
            }
        },
    ],
    "skip": 0,
    "limit": 100,
    "total_count": 29
}
```




## Get Stack Bulk Task Queue

### Get Stack Bulk Task Queue

**GET** `/bulk/jobs`

The Get Stack Bulk Task Queue request retrieves a list of all the bulk actions performed on entries and assets within a stack.

#### Query Parameters

- **include_count** (optional)
  Set this parameter to true to include the total count of items within the job.
  Default: `true`
- **skip** (optional)
  Enter the number of items to be skipped from the response body.
  Default: `2`
- **limit** (optional)
  Enter the maximum number of items to be returned.
  Default: `10`
- **asc** (optional)
  Sort the response in ascending order. Options include created_at, updated_at, status, created_by, and action.
  Default: `created_at`
- **desc** (optional)
  Sort the response in descending order. Options include created_at, updated_at, status, created_by, and action.
  Default: `updated_at`
- **status** (optional)
  Filter results by integers (1-6) separated by a comma to represent statuses: 1 - Waiting, 2 - In Queue, 3 - In Progress, 4 - Completed, 5 - Partial Complete, 6 - Failed.
  Default: `4,2`
- **users** (optional)
  Filter results by user IDs, provided as a single ID or comma-separated IDs.
  Default: `blt**************53`
- **from** (optional)
  Specify the start date for the required data. Use the following date format: YYYY-MM-DD.
  Default: `2024-05-13`
- **to** (optional)
  Enter the current date or any date after the from date. The date format should be: YYYY-MM-DD.
  Default: `2024-06-13`

#### Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **bulk_version** (required)
  Pass bulk_version parameter as 2.0.
  Default: `2.0`

#### Sample Response

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

