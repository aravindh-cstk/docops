---
title: "Update asset"
description: /assets/{asset_uid}
url: /update-asset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:24.557Z
updated_at: 2025-07-04T05:54:47.004Z
---

# Update asset

<p>The <span data-type='inlineCode'>Update asset</span> request allows you to update the title and description of an asset.<br /><span style="font-size: 10.5pt;">To configure the permissions for your application via OAuth, </span>please include the <span data-type='inlineCode'>cm.assets.management:write</span> scope.</p>
<p class="note"><strong>Note:&nbsp;</strong>Here are some points to keep in mind:<br />1. You can also use this request to <a href="/docs/developers/apis/content-management-api#generate-permanent-asset-url" target="_self">Generate a permanent URL</a>
 for your asset, which remains constant irrespective of any further updates to the asset.<br />2. This call updates only the meta data of an asset. To replace an asset, try the <a href="/docs/developers/apis/content-management-api#replace-asset" target="_self">Replace asset</a> request under <strong>Asset Collection</strong>.</p>
<p>Under 'Body', you need to pass the updated details of "Title" and "Description" is in the form of 'raw' body as follows:</p><pre>{
   "asset":{
      "title":"new title",
       "description":"updated description"
     }
}
</pre>
<p>Another way to provide a "Title" and a "Description" for the asset is to pass them as optional form-data parameters, i.e., <span data-type='inlineCode'>asset[title]</span> and <span data-type='inlineCode'>asset[description]</span>. You can assign a parent folder to your asset by using the <span data-type='inlineCode'>asset[parent_uid]</span> parameter, where you need to pass the UID of the parent folder.</p>

**API Endpoint**: `/assets/{asset_uid}`

**Method**: `PUT`

## URL Parameters

- **asset_uid** (required)
  <p>Enter the UID of the asset that you want to update.</p>

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
  <p>Pass “multipart/form-data” as the value to this parameter to include form data body parameters.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
	"asset": {
		"title": "Title",
		"description": "Description"
	},
	"version":" enter_version_number"
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

