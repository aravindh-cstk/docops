---
title: "Get assets and subfolders of a parent folder"
description: GET /assets?include_folders={boolean_value}&folder={folder_uid}
url: developers/apis/content-management-api/requests/get-assets-and-subfolders-of-a-parent-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Get assets and subfolders of a parent folder


**Method:** `GET`  
**Endpoint:** `/assets?include_folders={boolean_value}&folder={folder_uid}`

The Get assets and folders of a parent folder retrieves details of both assets and asset subfolders within a specific parent asset folder.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 | Enter the API key of the stack that holds the asset |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| include_folders | true | Set this parameter to ‘true’ to include the asset folders in the search query. |

| folder | enter_your_folder_uid | Enter the UID of the parent folder. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"assets": [{
			"uid": "blt1111b11e11ae111f",
			"created_at": "2019-07-10T12:01:24.694Z",
			"updated_at": "2019-07-10T12:01:24.694Z",
			"created_by": "blt22e22222d22d2f22222a2b2f",
			"updated_by": "blt22e22222d22d2f22222a2b2f",
			"content_type": "application/vnd.contenstack.folder",
			"tags": [],
			"name": "Demo Folder",
			"ACL": {},
			"is_dir": true,
			"parent_uid": "bltd11bd1a1c11111ee",
			"_version": 1
		},
		{
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
			"parent_uid": "bltd11bd1a1c11111ee",
			"_version": 1,
			"title": "Sample File",
			"publish_details": []
		}
	]
}
```
