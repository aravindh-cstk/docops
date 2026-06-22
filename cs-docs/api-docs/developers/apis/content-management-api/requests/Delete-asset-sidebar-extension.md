---
title: "Delete asset sidebar extension"
description: DELETE /extensions/{asset_sidebar_extension_uid}
url: developers/apis/content-management-api/requests/delete-asset-sidebar-extension
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-18
---

# Delete asset sidebar extension


**Method:** `DELETE`  
**Endpoint:** `/extensions/{asset_sidebar_extension_uid}`

The Delete asset sidebar extension request allows you to delete a specific asset sidebar extension.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| branch | main | Enter your branch or alias unique ID. |

| asset_sidebar_extension_uid | blt123ea123b123a123f | Enter the UID of the asset sidebar extension that you want to delete. |

**Response (200):**

```json
{
    "notice": "Extension deleted successfully."
}
```
