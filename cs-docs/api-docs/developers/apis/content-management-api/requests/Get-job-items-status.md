---
title: "Get job items status"
description: GET /bulk/jobs/{job_id}/items?include_count={boolean_value}&type={type_value}&skip={skip_value}&limit={limit_value}&status={status_value}&ct[]={content_type_uid}&include_reference={boolean_value}
url: developers/apis/content-management-api/requests/get-job-items-status
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-08-29
---

# Get job items status


**Method:** `GET`  
**Endpoint:** `/bulk/jobs/{job_id}/items?include_count={boolean_value}&type={type_value}&skip={skip_value}&limit={limit_value}&status={status_value}&ct[]={content_type_uid}&include_reference={boolean_value}`

The Get job items status request retrieves all the details of the items associated with a specific publish/unpublish job, along with their status.

**Note**:

- Pass api_version parameter as 3.2 in the Headers section.
- The include_count query parameter will return the count only if skip is 0 or the value for skip is not provided.
- The item status API request returns only the first 100 items. If you want to fetch the details other than the first 100 in your response, refer to the Pagination section to retrieve data for all items in paginated form.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authorization | your_management_token | Enter your management token. |

| api_version | 3.2 | Enter the API version. |

| job_id | eb4c0236-103a-4a04-82a4-0a452b94bfc8 | Enter the UID of the job of which you want to retrieve the details. |

| include_count | false | If set to true, the response includes the total count of items within the job. Default value for this parameter is false. |

| skip | 0 | Enter the number of items to be skipped from the response body. Default value for this parameter is 0. |

| limit | 100 | Enter the maximum number of items to be returned. Default and maximum value for this parameter is 100. |

| include_reference | true | Set this parameter to 'true' to include the details of all the referenced items in response. Default value for this parameter is false. |

| status | success | Enter the status 'success' or 'failed' for which you want to retrieve items. |

| type | asset | Enter the filter 'entry' or 'asset' for which you want to retrieve items. |

| ct[] | your_content_type_uid | Enter the unique ID of the content type from which you want to filter responses. Filter multiple content types by using ct[]=your_content_type_uid1&ct[]=your_co |

**Response (200):**

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
