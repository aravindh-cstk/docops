---
title: "Create a custom field with source URL"
description: POST /extensions
url: developers/apis/content-management-api/requests/create-a-custom-field-with-source-url
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Create a custom field with source URL

**POST** `/extensions`

The Create a custom field with source URL call is used to create a custom field that is hosted externally.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the custom field, such as its tags, data type, title, external source link, set if the field is to take multiple values or not, and configuration details.

**Note:** The custom field has various data types you can select from – Text, Number, Date, Boolean, JSON, Reference, File, and Asset.

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `main`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"title": "New Custom Field",
		"src": "https://www.sample.com",
		"multiple": false,
		"config": "{}",
		"type": "field"
	}
}
```

## Sample Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b01d",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:32:49.772Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 1,
		"title": "New Custom Field",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"src": "https://www.sample.com"
	}
}
```

