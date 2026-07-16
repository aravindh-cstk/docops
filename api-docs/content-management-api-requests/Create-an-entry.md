---
title: "Create an entry"
description: POST /content_types/{content_type_uid}/entries?locale={locale_code}
url: developer-apis/content-management-api-requests/create-an-entry
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-03-21
---

# Create an entry

**POST** `/content_types/{content_type_uid}/entries?locale={locale_code}`

The Create an entry call creates a new entry for the selected content type.

To configure the permissions for your application via OAuth, please include the cm.entries.management:write scope.   
When executing the API call, in the 'Body' section, you need to provide the content of your entry based on the content type created.

Here are some important scenarios when creating an entry.

**Scenario 1:** If you have a reference field in your content type, here's the format you need to follow to add the data in the ‘Body’ section

```
{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "reference_field_uid": [{
            "uid": "blt111000d1e110b001",
            "_content_type_uid": "referred_content_type_uid"
        }]
    }
}
```

**Scenario 2:** If you need to create an entry that contains asset files, you need to provide the asset UID(s) in the ‘Body’ section.

To add a single file, enter a single UID (file_field_uid). For multiple asset files, enter the asset files’ UIDs (file_field_uid_multiple) in an array. You need to use only one of the following formats.

Here's the JSON schema for both the cases:

```
{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "file_field_uid": "asset_uid", // ‘File’ field marked ‘Single’
        "file_field_uid_multiple": ["asset_uid1", "asset_uid2, ..."], // ‘File’ field marked ‘Multiple’
    }
}
```

**Scenario 3:** If you need to add your asset file within a Rich Text Editor, use the following JSON schema:

```
{
    "entry": {
        "title": "Entry title",
        "url": "Entry URL",
        "rte_field_uid": "

"
    }
}
```

**Note**: In the above code, in place of rte-field-uid, you need to provide the UID of the Rich Text Editor field.

##### Create an Entry with JSON RTE

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type of which you wish to retrieve the details. The uid is generated based on the title of the content type and it is unique across a stack.
  Default: `product`

## Query Parameters

- **locale** (required)
  Enter the code of the language in which you want your entry to be localized in.
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
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
	"entry": {
		"title": "example",
		"url": "/example"
	}
}
```

## Sample Response

```json
{
	"notice": "Entry created successfully.",
	"entry": {
		"title": "example",
		"url": "/example",
		"locale": "en-us",
		"uid": "abcdefhgi1234567890",
		"created_by": "1234567890abcdefghijklmnopq",
		"updated_by": "1234567890abcdefghijklmnopq",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": 1,
		"tags": [],
                "_in_progress": true
	}
}
```

