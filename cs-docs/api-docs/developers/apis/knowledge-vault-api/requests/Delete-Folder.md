---
title: "Delete Folder"
description: DELETE /v1/knowledge-vault/folders/{folder_uid}
url: developers/apis/knowledge-vault-api/requests/delete-folder
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-02
---

# Delete Folder


**Method:** `DELETE`  
**Endpoint:** `/v1/knowledge-vault/folders/{folder_uid}`

The Delete Folder request permanently deletes a specified folder from the Knowledge Vault in a brand kit.

To configure the permissions for your app via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>] | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/knowledge-vault-api#authentication). |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| brand_kit_uid | your_brand_kit_uid | Enter the Brand Kit UID. |

| folder_uid | your_folder_uid | Enter the UID of the folder to be deleted. |

**Response (200):**

```json
{
  "message": "Folder deleted successfully.",
}
```
