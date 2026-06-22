---
title: "Get a single folder"
description: GET /assets/folders/{folder_uid}?include_path={boolean_value}
url: developers/apis/content-management-api/requests/get-a-single-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Get a single folder


**Method:** `GET`  
**Endpoint:** `/assets/folders/{folder_uid}?include_path={boolean_value}`

The Get a single folder call gets the comprehensive details of a specific [asset folder](/docs/content-managers/author-content/#create-and-manage-asset-folders) by means of folder UID.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

When executing the API call to search for a subfolder, you need to provide the parent folder UID.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 | Enter the API key of the stack that holds the asset |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| folder_uid | enter_asset_folder_uid | Enter the uid of the folder |

| include_path | false | Set this parameter to ‘true’ to retrieve the complete path of the folder. The path will be displayed as an array of objects which includes the names and UIDs of |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"asset": {
		"uid": "blt91af1e5af9c3639f",
		"created_at": "2019-07-16T07:25:43.846Z",
		"updated_at": "2019-07-16T07:25:43.846Z",
		"created_by": "blt123123cc123fe123",
		"updated_by": "blt123123cc123fe123",
		"content_type": "application/vnd.contenstack.folder",
		"tags": [],
		"name": "Demo",
		"ACL": {},
		"is_dir": true,
		"parent_uid": "blt123af1e2af3c12321f",
		"path": [{
			"uid": "blt99af9e9af9c9999f",
			"name": "sample"
		}],
		"_version": 1
	}
}
```
