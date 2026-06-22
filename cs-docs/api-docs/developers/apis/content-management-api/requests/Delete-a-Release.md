---
title: "Delete a Release"
description: DELETE /releases/{release_uid}
url: developers/apis/content-management-api/requests/delete-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-01-06
---

# Delete a Release


**Method:** `DELETE`  
**Endpoint:** `/releases/{release_uid}`

The Delete a Release request allows you to delete a specific Release from a stack.

When executing the API request, provide the Release UID.

To configure the permissions for your application via OAuth, please include the cm.releases.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| release_version | 2.0 | Enter the release version. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| branch | main | Enter your branch unique ID. |

| release_uid | blt719af000dcde0000 | Enter the unique ID of the release that you want to delete. |

**Response (200):**

```json
{
	"notice": "Release deleted successfully."
}
```
