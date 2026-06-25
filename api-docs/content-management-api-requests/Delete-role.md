---
title: "Delete role"
description: DELETE /roles/{role_uid}
url: developer-apis/content-management-api-requests/delete-role
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-29
---

# Delete role

**DELETE** `/roles/{role_uid}`

The Delete role call deletes an existing role from your stack.  
To configure the permissions for your application via OAuth, please include the cm.roles.management:write scope.

## URL Parameters

- **role_uid** (required)
  Enter the unique ID of the role that you want to delete.
  Default: `bltc7aa14ea1959b252`

## Headers

- **api_key** (required)
  Default: `Enter the API key of your stack`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Response

```json
{
  "notice": "The role deleted successfully."
}
```

