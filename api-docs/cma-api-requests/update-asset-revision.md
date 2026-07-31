---
title: "Update asset revision"
description: /assets/{asset_uid}
url: /update-asset-revision
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.831Z
updated_at: 2024-03-21T13:22:33.388Z
---

# Update asset revision

<p>The <span data-type='inlineCode'>Update asset revision</span> call upgrades a specified version of an asset as the latest version of that asset.</p><p><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth,</span> please include the <span data-type='inlineCode'>cm.assets.management:write</span> scope.</p><p>Under 'Body', you need to specify the asset version number that you want to make the latest in raw JSON format, and also provide a "Title" and a "Description" for the asset. Another way to&nbsp;provide a "Title" and a "Description" for the asset is to pass them&nbsp;as optional form-data parameters, i.e., <span data-type='inlineCode'>asset[title]</span> and <span data-type='inlineCode'>asset[description]</span>.</p><p>Here's an example of the raw body:</p><pre>{<br />    "asset": {<br />        "title": "Title",<br />        "description": "Description"<br />    },<br />    "version": 3<br />}</pre>

**API Endpoint**: `/assets/{asset_uid}`

**Method**: `PUT`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the UID of the asset of which you want to update the version.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack that holds the asset</p>
- **authtoken** (optional)
- **authorization** (required)
  <p><span>Enter your OAuth token or management token. Learn more about&nbsp;</span><a href="/docs/developers/apis/content-management-api#authentication" target="_self"><span></span>authentication</a></p><div></div><span></span>
- **Content-Type** (required)
  <p>Pass “application/json” to enter JSON request body and&nbsp;“multipart/form-data” to include form data body parameters.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
	"asset": {
		"title": "Title",
		"description": "Description"
	},
	"version": enter_version_number
}
```

## Response

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

