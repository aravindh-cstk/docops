---
title: "Delete the Dashboard Widget"
description: DELETE /extensions/{extension_uid}
url: developers/apis/content-management-api/requests/delete-the-dashboard-widget
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-18
---

# Delete the Dashboard Widget


**Method:** `DELETE`  
**Endpoint:** `/extensions/{extension_uid}`

The Delete dashboard widget call is used to delete a specific custom dashboard.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| extension_uid | blt20a7158319e3e32d |  |

**Response (200):**

```json
{
    "notice": "Extension deleted successfully."
}
```
