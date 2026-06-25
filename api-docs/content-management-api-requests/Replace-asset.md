---
title: "Replace asset"
description: PUT /assets/{asset_uid}?environment={environment}&relative_urls={boolean_value}
url: developer-apis/content-management-api-requests/replace-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Replace asset

**PUT** `/assets/{asset_uid}?environment={environment}&relative_urls={boolean_value}`

The Replace asset call will replace an existing asset with another file on the stack.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

**Tip:** You can try the call manually in any REST API client, such as Postman.  
Under 'Body', pass a body parameter named asset[upload] and select the input type as 'File'. This will enable you to select the file that you wish to import.  
You can assign a parent folder to your asset by using the asset[parent_uid] parameter, where you can pass the UID of the parent folder.  
Additionally, you can pass optional parameters such as asset[title] and asset[description] which let you enter a title and a description for the uploaded asset, respectively.

## URL Parameters

- **asset_uid** (required)
  Enter the unique ID of the asset of which you wish to retrieve details, or that you wish to update or delete.
  Default: `blt91af1e5af9c3639f`

## Query Parameters

- **environment** (optional)
  Enter the name of the environment if you wish to retrieve the assets published on a particular environment. You can enter multiple environments.
  Default: `production`
- **relative_urls** (optional)
  Set this to 'true' to display the relative URL of the asset. This parameter is not applicable when you delete an asset.
  Default: `false`
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
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"notice": "Asset updated successfully.",
	"asset": {
		"uid": "blt91af1e5af9c3639f",
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
		"publish_details": [{
			"environment": "bltc15045c3098babcd",
			"locale": "en-us",
			"time": "2015-01-08T15:07:53.495Z",
			"user": "sys_bltd0f5afeabcd"
		}]
	}
}
```

