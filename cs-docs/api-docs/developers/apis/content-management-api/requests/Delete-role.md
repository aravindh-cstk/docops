---
title: "Delete role"
description: DELETE /roles/{role_uid}
url: developers/apis/content-management-api/requests/delete-role
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-29
---

# Delete role


**Method:** `DELETE`  
**Endpoint:** `/roles/{role_uid}`

The Delete role call deletes an existing role from your stack.  
To configure the permissions for your application via OAuth, please include the cm.roles.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | Enter the API key of your stack |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| role_uid | bltc7aa14ea1959b252 | Enter the unique ID of the role that you want to delete. |

**Response (200):**

```json
{
  "notice": "The role deleted successfully."
}
```
