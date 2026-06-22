---
title: "Delete a widget"
description: DELETE /extensions/{widget_uid}
url: developers/apis/content-management-api/requests/delete-a-widget
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-18
---

# Delete a widget


**Method:** `DELETE`  
**Endpoint:** `/extensions/{widget_uid}`

The Delete a widget call is used to delete a specific custom widget.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_Authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| widget_uid | bltcd0ac000b000b00f | Enter the UID of the widget that you want to delete. |

**Response (200):**

```json
{
	"notice": "Extension deleted successfully."
}
```
