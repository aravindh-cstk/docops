---
title: "Get assets of a specific folder"
description: GET /assets?folder={folder_uid}
url: developers/apis/content-management-api/requests/get-assets-of-a-specific-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Get assets of a specific folder


**Method:** `GET`  
**Endpoint:** `/assets?folder={folder_uid}`

The Get assets of a specific folder retrieves all assets of a specific asset folder; however, it doesn't retrieve the details of subfolders within it.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | bltd7eee4a49bdf2842 | Enter the API key of the stack that holds the asset |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| folder | enter_your_folder_uid | Enter the UID of the asset folder. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"assets": [{
			"uid": "bltabc555e5a5b55b5d",
			"created_at": "2018-12-27T04:58:58.014Z",
			"updated_at": "2019-07-10T12:02:14.299Z",
			"created_by": "blt1e1dead1f11f1111",
			"updated_by": "blt1e1dead1f11f1111",
			"content_type": "image/png",
			"file_size": "42670",
			"tags": [],
			"filename": "Sample File",
			"url": "https://images.contentstack.io/v3/assets/blt33333c3acaae33b3/bltabc555e5a5b55b5d/5c555c55d5c5e5cc5b55d555/download",
			"ACL": {},
			"is_dir": false,
			"parent_uid": "blt0011b00e11ae001f",
			"_version": 1,
			"title": "Sample File",
			"publish_details": []
		},
		{
			"uid": "bltdd55a5555555b5f5",
			"created_at": "2018-12-27T04:58:58.101Z",
			"updated_at": "2019-07-10T12:02:14.299Z",
			"created_by": "blt1e1dead1f11f1111",
			"updated_by": "blt1e1dead1f11f1111",
			"content_type": "image/png",
			"file_size": "53825",
			"tags": [],
			"filename": "Sample File 2",
			"url": "https://images.contentstack.io/v3/assets/blt33333c3acaae33b3/bltdd55a5555555b5f5/5c555c555a5ac5dc5b55cc5a/download",
			"ACL": {},
			"is_dir": false,
			"parent_uid": "blt0011b00e11ae001f",
			"_version": 1,
			"title": "Sample File 2",
			"publish_details": []
		}
	]
}
```
