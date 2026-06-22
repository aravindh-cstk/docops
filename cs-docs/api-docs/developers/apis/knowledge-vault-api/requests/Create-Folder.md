---
title: "Create Folder"
description: POST /v1/knowledge-vault/folders
url: developers/apis/knowledge-vault-api/requests/create-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-02
---

# Create Folder


**Method:** `POST`  
**Endpoint:** `/v1/knowledge-vault/folders`

The Create Folder request lets you create a new folder within a specified parent directory in your knowledge vault.

To configure the permissions for your app via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

Example:

```
{
  "name": "AI for Advanced Users",
  "path": "/dir0000000000000"
}
```

The _name_ and _path_ are required strings where _name_ specifies the new folder’s name and _path_ provides the parent folder UID where the new folder will be created.

**Note**: Root folder UID is dir0000000000000.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>] | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/knowledge-vault-api#authentication). |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| brand_kit_uid | your_brand_kit_uid | Enter the Brand Kit UID. |

**Request Body:**

```json
{
  "name": "AI for Advanced Users",
  "path": "/dir0000000000000"
}
```

**Response (201):**

```json
{
   "message": "Folder created successfully",
   "folder_uid": "dir************"
}
```
