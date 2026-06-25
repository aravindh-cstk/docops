---
title: "Delete Version Name of Entry"
description: DELETE /content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name
url: developer-apis/content-management-api-requests/delete-version-name-of-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Delete Version Name of Entry

**DELETE** `/content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name`

The Delete Version Name of Entry request allows you to delete the name assigned to a specific version of an entry. This request resets the name of the entry version to the version number.   
To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

## URL Parameters

- **content_type_uid** (required)
  Enter the content type UID of the entry of which you want to delete the version name.
  Default: `product`
- **entry_uid** (required)
  Enter the UID of the entry of which you want to delete the version name.
  Default: `blt01638c90cc28fb6d`
- **version_number** (required)
  Enter the version number of the entry that you want to delete.
  Default: `1`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `Your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`

## Sample Request

```json
{
	"entry": {
		"locale": "en-us"
	}
}
```

## Sample Response

```json
{
	"notice": "Version name deleted successfully"
}
```

