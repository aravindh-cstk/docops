---
title: "Delete asset"
description: DELETE /assets/{asset_uid}
url: developers/apis/content-management-api/requests/delete-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-01
---

# Delete asset


**Method:** `DELETE`  
**Endpoint:** `/assets/{asset_uid}`

The Delete asset call will delete an existing asset from the stack.  
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | the API key of the stack that holds the asset |  |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| branch | main | Enter your branch unique ID. |

| asset_uid | blt91af1e5af9c3639f | Enter the unique ID of the asset that you want to delete. |

**Response (200):**

```json
{
  "notice": "Asset deleted successfully."
}
```
