---
title: "Update asset revision"
description: PUT /assets/{asset_uid}
url: developer-apis/content-management-api-requests/update-asset-revision
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Update asset revision

**PUT** `/assets/{asset_uid}`

The Update asset revision call upgrades a specified version of an asset as the latest version of that asset.

To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

Under 'Body', you need to specify the asset version number that you want to make the latest in raw JSON format, and also provide a "Title" and a "Description" for the asset. Another way to provide a "Title" and a "Description" for the asset is to pass them as optional form-data parameters, i.e., asset[title] and asset[description].

Here's an example of the raw body:

```
{
    "asset": {
        "title": "Title",
        "description": "Description"
    },
    "version": 3
}
```

## URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset of which you want to update the version.
  Default: `enter_your_asset_uid`

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
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Pass “application/json” to enter JSON request body and “multipart/form-data” to include form data body parameters.
  Default: `application/json`
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
	"version": enter_version_number
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
    "_version": 2,
    "title": "Test",
    "description": "This is testing"
  }
}
```

