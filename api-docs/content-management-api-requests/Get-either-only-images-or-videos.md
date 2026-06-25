---
title: "Get either only images or videos"
description: GET /assets/{asset_type}
url: developer-apis/content-management-api-requests/get-either-only-images-or-videos
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Get either only images or videos

**GET** `/assets/{asset_type}`

The Get either only images or videos request retrieves assets that are either image or video files, based on query request.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](../../../../api-detail/content-delivery-api.md#queries) section of the Content Delivery API doc.

## URL Parameters

- **asset_type** (required)
  Enter the asset type that you want to retrieve. For example, "images" or "videos". For images, _https://api.contentstack.io/v3/assets/images_ For videos, _https://api.contentstack.io/v3/assets/videos_
  Default: `images`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `the API key of the stack that holds the asset`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
  "assets": [
    {
      "uid": "blt558a9890b838abcd",
      "created_at": "2015-01-08T15:07:53.495Z",
      "updated_at": "2015-01-08T15:07:53.495Z",
      "created_by": "abcd1234567890",
      "updated_by": "abcd1234567890",
      "content_type": "image/png",
      "file_size": "12227244",
      "tags": [],
      "app_user_object_uid": "system",
      "filename": "file-name.png",
      "url": "https://api.assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
      "ACL": {},
      "publish_details": [
        {
          "environment": "bltc15045c3098babcd",
          "locale": "en-us",
          "time": "2015-01-08T15:07:53.495Z",
          "user": "sys_bltd0f5afeabcd"
        }
      ]
    }
  ]
}
```

