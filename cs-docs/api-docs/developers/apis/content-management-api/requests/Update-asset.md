---
title: "Update asset"
description: PUT /assets/{asset_uid}
url: developers/apis/content-management-api/requests/update-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-04
---

# Update asset

**PUT** `/assets/{asset_uid}`

The Update asset request allows you to update the title and description of an asset.  
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

**Note: **Here are some points to keep in mind:  
1. You can also use this request to [Generate a permanent URL](/docs/developers/apis/content-management-api#generate-permanent-asset-url)
 for your asset, which remains constant irrespective of any further updates to the asset.  
2. This call updates only the meta data of an asset. To replace an asset, try the [Replace asset](/docs/developers/apis/content-management-api#replace-asset) request under **Asset Collection**.

Under 'Body', you need to pass the updated details of "Title" and "Description" is in the form of 'raw' body as follows:

```
{
   "asset":{
      "title":"new title",
       "description":"updated description"
     }
}
```

Another way to provide a "Title" and a "Description" for the asset is to pass them as optional form-data parameters, i.e., asset[title] and asset[description]. You can assign a parent folder to your asset by using the asset[parent_uid] parameter, where you need to pass the UID of the parent folder.

## URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset that you want to update.
  Default: `blt558a9890b838abcd`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Pass “multipart/form-data” as the value to this parameter to include form data body parameters.
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
	"asset": {
		"title": "Title",
		"description": "Description"
	},
	"version":" enter_version_number"
}
```

## Sample Response

```json
{
  "notice": "Asset updated successfully.",
  "asset": {
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
    "url": "https://assets.contentstack.io/v3/assets/{api_key}/{asset-id}/{upload_uid}/download",
    "ACL": {},
    "_version": 1,
    "title": "Test",
    "description": "This is testing",
    "publish_details": [
      {
        "environment": "bltc15045c3098babcd",
        "locale": "en-us",
        "time": "2015-01-08T15:07:53.495Z",
        "user": "sys_bltd0f5afeabcd"
      }
    ]
  }
}
```

