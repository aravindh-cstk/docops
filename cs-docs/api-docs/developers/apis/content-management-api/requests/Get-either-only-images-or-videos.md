---
title: "Get either only images or videos"
description: GET /assets/{asset_type}
url: developers/apis/content-management-api/requests/get-either-only-images-or-videos
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Get either only images or videos


**Method:** `GET`  
**Endpoint:** `/assets/{asset_type}`

The Get either only images or videos request retrieves assets that are either image or video files, based on query request.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

You can add queries to extend the functionality of this API call. Under the URL Parameters section, insert a parameter named query and provide a query in JSON format as the value.

To learn more about the queries, refer to the [Queries](/docs/developers/apis/content-delivery-api#queries) section of the Content Delivery API doc.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | the API key of the stack that holds the asset |  |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| asset_type | images | Enter the asset type that you want to retrieve. For example, "images" or "videos".  For images, _https://api.contentstack.io/v3/assets/images_  For videos, _htt |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

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
