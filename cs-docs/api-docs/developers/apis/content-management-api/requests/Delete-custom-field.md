---
title: "Delete custom field"
description: DELETE /extensions/{custom_field_uid}
url: developers/apis/content-management-api/requests/delete-custom-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-18
---

# Delete custom field


**Method:** `DELETE`  
**Endpoint:** `/extensions/{custom_field_uid}`

The Delete custom field request is used to delete a specific custom field.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| custom_field_uid | blt123c123ce12b3123 | Enter the UID of the custom field that you want to delete. |

**Response (200):**

```json
{
	"notice": "Extension deleted successfully."
}
```
