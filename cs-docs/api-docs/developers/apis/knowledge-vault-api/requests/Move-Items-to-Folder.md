---
title: "Move Items to Folder"
description: PUT /v1/knowledge-vault/folders/{folder_uid}/move-items
url: developers/apis/knowledge-vault-api/requests/move-items-to-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-02
---

# Move Items to Folder


**Method:** `PUT`  
**Endpoint:** `/v1/knowledge-vault/folders/{folder_uid}/move-items`

The Move Items to Folder request lets you move multiple items into a specified folder within the Knowledge Vault of a brand kit.

To configure the permissions for your app via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

Example:

```
{
   "content_uids": [
       "cs**************",
       "cs**************"
   ]
}
```

The content_uids holds the list of content item UIDs to move into another folder.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>] | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/knowledge-vault-api#authentication). |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| brand_kit_uid | your_brand_kit_uid | Enter the Brand Kit UID. |

| folder_uid  | your_folder_uid | Enter the UID of the folder where the items will be moved. |

**Request Body:**

```json
{
   "content_uids": [
       "cs**************",
       "cs**************"
   ]
}
```

**Response (200):**

```json
{
   "message": "Items moved successfully",
   "updated_count": 2,
   "elapsed_time": 0.033
}
```
