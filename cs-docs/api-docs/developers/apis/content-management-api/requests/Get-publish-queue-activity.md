---
title: "Get publish queue activity"
description: GET /publish-queue/{publish_queue_uid}
url: developers/apis/content-management-api/requests/get-publish-queue-activity
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-07-24
---

# Get publish queue activity

**GET** `/publish-queue/{publish_queue_uid}`

The Get publish queue activity request returns comprehensive information on a specific publish, unpublish, or delete action that was performed on an entry and/or asset. You can also retrieve details of a specific release deployment.  
To configure the permissions for your application via OAuth, please include the cm.publish-queue.management:read scope.

**Note**: You can retrieve the publish queue details for activities performed in the last **30** days only.

You can apply queries to filter the results. Refer to the [Queries](/docs/developers/apis/content-management-api#authentication) section for more details.

## URL Parameters

- **publish_queue_uid** (required)
  Enter the UID of a specific publish queue activity of which you want to retrieve the details. Execute the [Get publish queue](/docs/developers/apis/content-management-api#get-publish-queue) API request to retrieve the UID of a particular publish queue activity.
  Default: `your_publish_queue_uid`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the 'branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter your stack API Key.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`
- **api_version** (required)
  Enter the API version.
  Default: `3.2`

## Sample Response

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

