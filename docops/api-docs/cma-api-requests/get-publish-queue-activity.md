---
title: "Get publish queue activity"
description: /publish-queue/{publish_queue_uid}
url: /get-publish-queue-activity
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:59.853Z
updated_at: 2024-07-24T07:18:41.756Z
---

# Get publish queue activity

<p>The <span data-type='inlineCode'>Get publish queue activity</span> request returns comprehensive information on a specific publish, unpublish, or delete action that was performed on an entry and/or asset. You can also retrieve details of a specific release deployment.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.publish-queue.management:read</span></span><span style="color: rgb(0, 0, 255);font-size: 10.5pt;"> </span><span style="font-size: 10.5pt;">scope.</span></p><p class="note"><strong>Note</strong>: You can retrieve the publish queue details for activities performed in the last <strong>30</strong> days only.</p><p>You can apply queries to filter the results. Refer to the <a href="/docs/developers/apis/content-management-api#authentication" target="_self">Queries</a> section for more details.</p>

**API Endpoint**: `/publish-queue/{publish_queue_uid}`

**Method**: `GET`

## URL Parameters

- **publish_queue_uid** (required)
  <p>Enter the UID of a specific publish queue activity of which you want to retrieve the details. Execute the <a href="/docs/developers/apis/content-management-api#get-publish-queue">Get publish queue</a> API request to retrieve the UID of a particular publish queue activity.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the 'branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter your stack API Key.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>
- **api_version** (required)
  <p>Enter the API version.</p>

## Response

```json
{
    "entry": {
        "_id": "blt7632hgshdg7236236733",
        "uid": "entry_uid",
        "stack": "stack_api_key",
        "created_at": "2020-06-09T06:48:46.461Z",
        "updated_at": "2020-06-09T06:48:46.461Z",
        "created_by": "user_uid",
        "updated_by": "user_uid",
        "type": "entry",
        "content_type": {
            "title": "Author Details",
            "uid": "author_details"
        },
        "publish_details": {
            "status": "success"
        },
        "entry": {
            "title": "Author 2",
            "uid": "user_uid",
            "locale": "en-us",
            "version": 1
        },
        "locale": [
            "en-us"
        ],
        "environment": [
            "environment_uid"
        ],
        "action": "publish",
        "published_at": "2020-06-09T06:48:46.410Z",
        "user": "user_uid",
        "approval": false,
        "approved": true,
        "rejected": false
    }
}
```

