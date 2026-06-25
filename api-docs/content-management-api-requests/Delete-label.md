---
title: "Delete label"
description: DELETE /labels/{label_uid}
url: developer-apis/content-management-api-requests/delete-label
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-25
---

# Delete label

**DELETE** `/labels/{label_uid}`

The Delete label call is used to delete a specific label.

When executing the API call, add the management_token in the Authorization parameters.  
To configure the permissions for your application via OAuth, please include the cm.labels.management:writescope.

## URL Parameters

- **label_uid** (required)
  Enter the unique ID of the label that you want to delete.
  Default: `blt5d1761bce4b36d57`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
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
  "notice": "Label deleted successfully."
}
```

