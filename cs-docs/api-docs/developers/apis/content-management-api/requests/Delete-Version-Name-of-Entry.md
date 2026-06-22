---
title: "Delete Version Name of Entry"
description: DELETE /content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name
url: developers/apis/content-management-api/requests/delete-version-name-of-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Delete Version Name of Entry


**Method:** `DELETE`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name`

The Delete Version Name of Entry request allows you to delete the name assigned to a specific version of an entry. This request resets the name of the entry version to the version number.   
To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication) |

| content_type_uid | product | Enter the content type UID of the entry of which you want to delete the version name. |

| entry_uid | blt01638c90cc28fb6d | Enter the UID of the entry of which you want to delete the version name. |

| version_number | 1 | Enter the version number of the entry that you want to delete. |

**Request Body:**

```json
{
	"entry": {
		"locale": "en-us"
	}
}
```

**Response (204):**

```json
{
	"notice": "Version name deleted successfully"
}
```
