---
title: "Update or move folder"
description: PUT /assets/folders/{folder_uid}
url: developers/apis/content-management-api/requests/update-or-move-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Update or move folder


**Method:** `PUT`  
**Endpoint:** `/assets/folders/{folder_uid}`

The Update or move folder request can be used either to update the details of a folder or set the parent folder if you want to move a folder under another folder.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

When executing the API request, provide the UID of the folder that you want to move/update.

In the ‘Body’ section, you need to provide a new name for your folder, and if you want to move your folder within another folder, then you need provide the UID of the parent folder.

**Note**: Here are some points that needs to be considered when executing this API request:

- A maximum of 300 folders can be created.
- The maximum level of folder nesting is 5.
- When nesting folder, you cannot nest a folder within the same folder or within its child folders.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 | Enter the API key of the stack that holds the asset |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| folder_uid | blt12af3e1af23c123f | Enter the UID of the folder that you want to either update or move. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

```json
{
	"asset": {
		"name": "Demo"
	}
}
```

**Response (200):**

```json
{
	"notice": "Folder updated successfully.",
	"asset": {
		"uid": "blt91af1e5af9c3639f",
		"created_at": "2019-07-17T05:40:36.606Z",
		"updated_at": "2019-07-17T05:44:23.604Z",
		"created_by": "blt123123cc123fee1e",
		"updated_by": "blt123123cc123fee1e",
		"content_type": "application/vnd.contenstack.folder",
		"tags": [],
		"name": "Demo",
		"is_dir": true,
		"parent_uid": "blt91af1e5af9c0000f",
		"_version": 3
	}
}
```
