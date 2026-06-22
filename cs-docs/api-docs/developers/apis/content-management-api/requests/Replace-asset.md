---
title: "Replace asset"
description: PUT /assets/{asset_uid}?environment={environment}&relative_urls={boolean_value}
url: developers/apis/content-management-api/requests/replace-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Replace asset


**Method:** `PUT`  
**Endpoint:** `/assets/{asset_uid}?environment={environment}&relative_urls={boolean_value}`

The Replace asset call will replace an existing asset with another file on the stack.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

**Tip:** You can try the call manually in any REST API client, such as Postman.  
Under 'Body', pass a body parameter named asset[upload] and select the input type as 'File'. This will enable you to select the file that you wish to import.  
You can assign a parent folder to your asset by using the asset[parent_uid] parameter, where you can pass the UID of the parent folder.  
Additionally, you can pass optional parameters such as asset[title] and asset[description] which let you enter a title and a description for the uploaded asset, respectively.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 | Enter the API key of the stack that holds the asset |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| Content-Type | multipart/form-data |  |

| branch | main | Enter your branch unique ID. |

| asset_uid | blt91af1e5af9c3639f | Enter the unique ID of the asset of which you wish to retrieve details, or that you wish to update or delete. |

| environment | production | Enter the name of the environment if you wish to retrieve the assets published on a particular environment. You can enter multiple environments. |

| relative_urls | false | Set this to 'true' to display the relative URL of the asset. This parameter is not applicable when you delete an asset. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

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
