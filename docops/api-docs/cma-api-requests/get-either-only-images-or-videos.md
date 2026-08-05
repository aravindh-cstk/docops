---
title: "Get either only images or videos"
description: /assets/{asset_type}
url: /get-either-only-images-or-videos
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.832Z
updated_at: 2024-03-21T13:17:33.728Z
---

# Get either only images or videos

<p>The <span data-type='inlineCode'>Get either only images or videos</span> request retrieves assets that are either image or video files, based on query request. <br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.assets.management:read</span> scope.</p><p>You can add queries to extend the functionality of this API call. Under the <span data-type='inlineCode'>URL Parameters</span> section, insert a parameter named <span data-type='inlineCode'>query</span> and provide a query in JSON format as the value.</p><p>To learn more about the queries, refer to the <a href="/docs/developers/apis/content-delivery-api#queries" target="_self">Queries</a> section of the Content Delivery API doc.</p>

**API Endpoint**: `/assets/{asset_type}`

**Method**: `GET`

## URL Parameters

- **asset_type** (required)
  <p>Enter the asset type that you want to retrieve. For example, "images" or "videos".</p>
<p>For images,&nbsp;<em>https://api.contentstack.io/v3/assets/images</em></p>
<p>For videos,&nbsp;<em>https://api.contentstack.io/v3/assets/videos</em></p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a><div></div><span></span></p><p></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

