---
title: "Get All Folders"
description: GET /v1/knowledge-vault/folders?limit={limit}&sort={sort_field}&skip={skip}&order={asc|desc}
url: developers/apis/knowledge-vault-api/requests/get-all-folders
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-03-02
---

# Get All Folders


**Method:** `GET`  
**Endpoint:** `/v1/knowledge-vault/folders?limit={limit}&sort={sort_field}&skip={skip}&order={asc|desc}`

The Get All Folders request retrieves a paginated list of all folders within the Knowledge Vault for a specified brand kit. You can apply filters such as sorting, pagination, and the inclusion of user metadata in the response.

To configure the permissions for your app via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>] | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/knowledge-vault-api#authentication). |

| organization_uid | your_organization_uid | Enter the Organization UID. |

| brand_kit_uid | your_brand_kit_uid | Enter the Brand Kit UID. |

| limit | 10 | Enter the maximum number of folders to return. |

| sort | created_at | Enter the value on the basis of which you want to sort your folders. |

| skip | 0 | Enter the number of folders to be skipped from the response body. |

| order | asc | Enter the ascending or descending order to organize the folders. |

**Response (200):**

```json
{
   "documents": [
       {
           "folder_uid": "dir0000000000000",
           "organization_uid": "blt*************",
           "brand_kit_uid": "cs************",
           "created_at": "2025-11-30 09:31:29.864609",
           "created_by": "blt*************",
           "updated_at": "2025-11-30 09:31:29.864619",
           "updated_by": "blt*************",
           "deleted_at": false,
           "type": "folder",
           "name": "Root",
           "path": "/"
       },
       {
           "folder_uid": "dir************",
           "organization_uid": "blt57de41ea4319272c",
           "brand_kit_uid": "cs************",
           "created_at": "2025-11-30 09:32:18.992813",
           "created_by": "blt*************",
           "updated_at": "2025-11-30 09:33:26.411742",
           "updated_by": "blt*************",
           "deleted_at": false,
           "type": "folder",
           "name": "AI for Beginners",
           "path": "/dir0000000000000"
       },
       {
           "folder_uid": "dir************",
           "organization_uid": "blt*************",
           "brand_kit_uid": "cs************",
           "created_at": "2025-11-30 09:41:05.895270",
           "created_by": "blt*************",
           "updated_at": "2025-11-30 09:41:05.895281",
           "updated_by": "blt*************",
           "deleted_at": false,
           "type": "folder",
           "name": "AI for Advanced Users",
           "path": "/dir0000000000000"
       }
   ]
}
```
