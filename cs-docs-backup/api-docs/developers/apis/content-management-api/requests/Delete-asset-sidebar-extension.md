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

**DELETE** `/extensions/{asset_sidebar_extension_uid}`

The Delete asset sidebar extension request allows you to delete a specific asset sidebar extension.

## URL Parameters

- **asset_sidebar_extension_uid** (required)
  Enter the UID of the asset sidebar extension that you want to delete.
  Default: `blt123ea123b123a123f`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch or alias unique ID.
  Default: `main`

## Sample Response

```json
{
    "notice": "Extension deleted successfully."
}
```

