---
title: "Import an existing entry"
description: POST /content_types/{content_type_uid}/entries/{entry_uid}/import?locale={locale}&overwrite={overwrite}
url: developers/apis/content-management-api/requests/import-an-existing-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Import an existing entry

**POST** `/content_types/{content_type_uid}/entries/{entry_uid}/import?locale={locale}&overwrite={overwrite}`

The Import an existing entry call will import a new version of an existing entry. You can create multiple versions of an entry.   
To configure the permissions for your application via OAuth, please include the cm.entries:import scope.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type that will contain the desired entry. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of an entry that you wish to import. **Note:** In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

## Query Parameters

- **locale** (optional)
  Enter the code of the language to import the entry of that particular language.
  Default: `en-us`
- **overwrite** (optional)
  Select 'true' to replace an existing entry with the imported entry file.
  Default: `false`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of stack of which you wish to retrieve the content types.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](/docs/developers/apis/content-management-api#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"notice": "Entry imported successfully.",
	"entry": {
		"title": "example",
		"url": "/example",
		"reference": [
			"bltfeec9dd9340037de"
		],
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 2,
		"tags": [],
		"_in_progress": false
	}
}
```

