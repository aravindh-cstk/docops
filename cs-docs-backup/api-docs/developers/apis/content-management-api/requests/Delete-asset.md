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

**DELETE** `/assets/{asset_uid}`

The Delete asset call will delete an existing asset from the stack.  
To configure the permissions for your application via OAuth, please include the cm.assets.management:write scope.

## URL Parameters

- **asset_uid** (required)
  Enter the unique ID of the asset that you want to delete.
  Default: `blt91af1e5af9c3639f`

## Headers

- **api_key** (required)
  Default: `the API key of the stack that holds the asset`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
  "notice": "Asset deleted successfully."
}
```

