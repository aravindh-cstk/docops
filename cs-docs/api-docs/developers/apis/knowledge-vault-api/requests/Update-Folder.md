---
title: "Update Folder"
description: PUT /v1/knowledge-vault/folders/{folder_uid}
url: developers/apis/knowledge-vault-api/requests/update-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-02
---

# Update Folder


**Method:** `PUT`  
**Endpoint:** `/v1/knowledge-vault/folders/{folder_uid}`

The Update Folder request lets you rename an existing folder in the Knowledge Vault of a brand kit.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

Example:

```
{
  "name": "AI for Business Leaders"
}
```

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>] | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/knowledge-vault-api#authentication). |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| brand_kit_uid | your_brand_kit_uid | Enter the Brand Kit UID. |

| older_uid | your_folder_uid | Enter the UID of the folder to be updated. |

**Request Body:**

```json
{
  "name": "AI for Business Leaders"
}
```

**Response (200):**

```json
{
   "message": "Folder name updated successfully"
}
```
