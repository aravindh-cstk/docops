---
title: "Export an entry"
description: GET /content_types/{content_type_uid}/entries/{entry_uid}/export?locale={locale_code}
url: developer-apis/content-management-api-requests/export-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Export an entry

**GET** `/content_types/{content_type_uid}/entries/{entry_uid}/export?locale={locale_code}`

The Export an entry call is used to export an entry. The exported entry data is saved in a downloadable JSON file.The exported file won’t get downloaded automatically. To download the exported file, a **REST API** client, such as **Postman** can be used.   
To configure the permissions for your application via OAuth, please include the cm.entries:export scope.

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`
- **entry_uid** (required)
  Enter the unique ID of the entry that you wish to fetch. Note: In case you do not know the UID of your entry, use the ‘Get Entries’ call to get all the entries (along with the UIDs).
  Default: `blt9965f5f9840923ba`

## Query Parameters

- **locale** (optional)
  Enter the code of the language to unlocalize the entry of that particular language.
  Default: `en-us`
- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication)
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

```json
{
	"title": "example",
	"url": "/example",
	"tags": [],
	"locale": "en-us",
	"uid": "abcdefhgi1234567890",
	"created_by": "1234567890abcdefghijklmnopq",
	"updated_by": "1234567890abcdefghijklmnopq",
	"created_at": "2015-01-08T15:07:53.495Z",
	"updated_at": "2015-01-08T15:07:53.495Z",
	"ACL": {},
	"_version": 1,
	"_in_progress": false,
	"reference": [
		"bltf123123123123de"
	]
}
```

