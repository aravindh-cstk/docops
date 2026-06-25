---
title: "Delete the Dashboard Widget"
description: DELETE /extensions/{extension_uid}
url: developer-apis/content-management-api-requests/delete-the-dashboard-widget
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-18
---

# Delete the Dashboard Widget

**DELETE** `/extensions/{extension_uid}`

The Delete dashboard widget call is used to delete a specific custom dashboard.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

## URL Parameters

- **extension_uid** (required)
  Default: `blt20a7158319e3e32d`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
    "notice": "Extension deleted successfully."
}
```

