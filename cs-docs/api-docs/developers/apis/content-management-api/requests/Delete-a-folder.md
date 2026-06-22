---
title: "Delete a folder"
description: DELETE /assets/folders/{folder_uid}
url: developers/apis/content-management-api/requests/delete-a-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Delete a folder


**Method:** `DELETE`  
**Endpoint:** `/assets/folders/{folder_uid}`

The Delete a folder call is used to delete an [asset folder](/docs/content-managers/author-content/#create-and-manage-asset-folders) along with all the assets within that folder.

When executing the API call, provide the parent folder UID.   
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 | Enter the API key of the stack that holds the asset |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| folder_uid | bltc7aa14ea1959b25c | Enter the UID of the asset folder that you want to delete. |

**Response (200):**

```json
{
	"notice": "Folder deleted successfully."
}
```
