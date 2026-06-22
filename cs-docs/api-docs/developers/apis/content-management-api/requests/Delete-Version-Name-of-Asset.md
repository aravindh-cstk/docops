---
title: "Delete Version Name of Asset"
description: DELETE /assets/{asset_uid}/versions/{version_number}/name
url: developers/apis/content-management-api/requests/delete-version-name-of-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-01
---

# Delete Version Name of Asset


**Method:** `DELETE`  
**Endpoint:** `/assets/{asset_uid}/versions/{version_number}/name`

The Delete Version Name of Asset request allows you to delete the name assigned to a specific version of an asset. This request resets the name of the asset version to the version number.  
  
To configure the permissions for your application via OAuth, please include the cm.asset:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| asset_uid | blt04d762f8af902c97 | Enter the UID of the asset of which you want to delete the version name. |

| version_number | 2 | Enter the version number of the asset of which you want to delete the version name. |

**Response (204):**

```json
{
	"notice": "Version name deleted successfully"
}
```
