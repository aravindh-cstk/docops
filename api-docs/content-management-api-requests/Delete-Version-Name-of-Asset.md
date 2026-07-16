---
title: "Delete Version Name of Asset"
description: DELETE /assets/{asset_uid}/versions/{version_number}/name
url: developer-apis/content-management-api-requests/delete-version-name-of-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-01
---

# Delete Version Name of Asset

**DELETE** `/assets/{asset_uid}/versions/{version_number}/name`

The Delete Version Name of Asset request allows you to delete the name assigned to a specific version of an asset. This request resets the name of the asset version to the version number.  
  
To configure the permissions for your application via OAuth, please include the cm.asset:write scope.

## URL Parameters

- **asset_uid** (required)
  Enter the UID of the asset of which you want to delete the version name.
  Default: `blt04d762f8af902c97`
- **version_number** (required)
  Enter the version number of the asset of which you want to delete the version name.
  Default: `2`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"notice": "Version name deleted successfully"
}
```

