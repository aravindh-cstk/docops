---
title: "Get job items status"
description: /bulk/jobs/{job_id}/items?include_count={boolean_value}&type={type_value}&skip={skip_value}&limit={limit_value}&status={status_value}&ct[]={content_type_uid}&include_reference={boolean_value}
url: /get-job-items-status
product: Contentstack
doc_type: api-request
created_at: 2024-07-04T12:12:54.351Z
updated_at: 2024-08-29T10:35:15.297Z
---

# Get job items status

<p>The <span class="code">Get job items status</span> request retrieves all the details of the items associated with a specific publish/unpublish job, along with their status.</p><div class="note"><strong>Note</strong>:<ul><li>Pass <span class="code">api_version</span> parameter as <strong>3.2</strong> in the Headers section.</li><li>The <span class="code">include_count</span> query parameter will return the count only if skip is <strong>0</strong> or the value for skip is not provided.</li><li>The item status API request returns only the first <strong>100</strong> items. If you want to fetch the details other than the first 100 in your response, refer to the <a href="https://www.contentstack.com/docs/developers/apis/content-delivery-api#pagination">Pagination</a> section to retrieve data for all items in paginated form.</li></ul></div>

**API Endpoint**: `/bulk/jobs/{job_id}/items?include_count={boolean_value}&type={type_value}&skip={skip_value}&limit={limit_value}&status={status_value}&ct[]={content_type_uid}&include_reference={boolean_value}`

**Method**: `GET`

## URL Parameters

- **job_id** (required)
  <p><span style='font-size: 12pt;'>Enter the UID of the job of which you want to retrieve the details.</span></p>

## Query Parameters

- **include_count** (optional)
  <p><span style='font-size: 12pt;'>If set to true, the response includes the total count of items within the job. Default value for this parameter is false.</span></p>
- **skip** (optional)
  <p><span style='font-size: 12pt;'>Enter the number of items to be skipped from the response body. Default value for this parameter is 0.</span></p>
- **limit** (optional)
  <p>Enter the maximum number of items to be returned. Default and maximum value for this parameter is 100.</p>
- **include_reference** (optional)
  <p>Set this parameter to 'true' to include the details of all the referenced items in response. Default value for this parameter is false.</p>
- **status** (optional)
  <p>Enter the status 'success' or 'failed' for which you want to retrieve items.</p>
- **type** (optional)
  <p>Enter the filter 'entry' or 'asset' for which you want to retrieve items.</p>
- **ct[]** (optional)
  <p>Enter the unique ID of the content type from which you want to filter responses. Filter multiple content types by using <span class="code">ct[]=your_content_type_uid1&amp;ct[]=your_content_type_uid2</span>.</p>

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

