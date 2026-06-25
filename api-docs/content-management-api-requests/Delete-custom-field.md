---
title: "Delete custom field"
description: DELETE /extensions/{custom_field_uid}
url: developer-apis/content-management-api-requests/delete-custom-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-18
---

# Delete custom field

**DELETE** `/extensions/{custom_field_uid}`

The Delete custom field request is used to delete a specific custom field.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

## URL Parameters

- **custom_field_uid** (required)
  Enter the UID of the custom field that you want to delete.
  Default: `blt123c123ce12b3123`

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

