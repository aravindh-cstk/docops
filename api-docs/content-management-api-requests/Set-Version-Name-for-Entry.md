---
title: "Set Version Name for Entry"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name
url: developer-apis/content-management-api-requests/set-version-name-for-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-04-24
---

# Set Version Name for Entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/versions/{version_number}/name`

The Set Version Name for Entry request allows you to assign a name to a specific version of an entry.

In the request body, you need to specify the version name to be assigned and the locale of the entry.

To configure the permissions for your application via OAuth, please include the cm.entry:write scope.

**Tip**: You can add an additional parameter force:true to force update the version name of the master entry.

##### Get Details of All Versions of an Entry

## URL Parameters

- **content_type_uid** (required)
  Enter the content type UID of the entry version to which you want to assign a specific name.
  Default: `product`
- **entry_uid** (required)
  Enter the UID of the entry to which you want to assign a specific version name.
  Default: `blt01638c90cc28fb6d`
- **version_number** (required)
  Enter the version number of the entry to which you want to assign a name.
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
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
	"entry": {
		"_version_name": "Test version",
		"locale": "fr-fr",
		"force": true
	}
}
```

## Sample Response

```json
{
	"notice": "Version name assigned successfully"
}
```

