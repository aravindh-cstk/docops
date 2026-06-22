---
title: "Get subfolders of a parent folder"
description: GET /assets?include_folders=true&query={'is_dir': true}&folder={parent_folder_uid}
url: developers/apis/content-management-api/requests/get-subfolders-of-a-parent-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Get subfolders of a parent folder


**Method:** `GET`  
**Endpoint:** `/assets?include_folders=true&query={"is_dir": true}&folder={parent_folder_uid}`

The Get subfolders of a parent folder request retrieves the details of only the subfolders of a specific [asset folder](/docs/content-managers/author-content/#create-and-manage-asset-folders). This request does not retrieve asset files.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | bltd7eee4a49bdf2842 | Enter the API key of the stack that holds the asset |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| include_folders | true | Set this parameter to ‘true’ to include the asset folders in the search query. |

| query | {"is_dir": true} | Enter the is_dir parameter to include asset folder details. |

| folder | enter_your_folder_uid | Enter the parent folder UID. |

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
	}]
}
```
