---
title: "Delete a widget"
description: DELETE /extensions/{widget_uid}
url: developer-apis/content-management-api-requests/delete-a-widget
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-18
---

# Delete a widget

**DELETE** `/extensions/{widget_uid}`

The Delete a widget call is used to delete a specific custom widget.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

## URL Parameters

- **widget_uid** (required)
  Enter the UID of the widget that you want to delete.
  Default: `bltcd0ac000b000b00f`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
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

