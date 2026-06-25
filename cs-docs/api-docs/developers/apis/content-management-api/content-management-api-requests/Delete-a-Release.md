---
title: "Delete a Release"
description: DELETE /releases/{release_uid}
url: developers/apis/content-management-api/requests/delete-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-01-06
---

# Delete a Release

**DELETE** `/releases/{release_uid}`

The Delete a Release request allows you to delete a specific Release from a stack.

When executing the API request, provide the Release UID.

To configure the permissions for your application via OAuth, please include the cm.releases.management:write scope.

## URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to delete.
  Default: `blt719af000dcde0000`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"notice": "Release deleted successfully."
}
```

