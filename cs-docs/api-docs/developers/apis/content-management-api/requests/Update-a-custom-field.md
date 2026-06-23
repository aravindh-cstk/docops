---
title: "Update a custom field"
description: PUT /extensions/{custom_field_uid}
url: developers/apis/content-management-api/requests/update-a-custom-field
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Update a custom field

**PUT** `/extensions/{custom_field_uid}`

The Update a custom field request is used to update the details of a custom field.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the custom field, such as its tags, data type, title, external source link (or the updated external source code), set if the field is to take multiple values or not, and configuration details.

## URL Parameters

- **custom_field_uid** (required)
  Enter the UID of the custom field that you want to update.
  Default: `bltcd0ac000b000b00e`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack that holds the asset
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentication).
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
		"title": "Old Extension",
		"src": "Enter either the source code (use 'srcdoc') or the external hosting link of the extension depending on the hosting method you selected.",
		"multiple": false,
		"config": "{}",
		"type": "field"
	}
}
```

## Sample Response

```json
{
	"notice": "Extension updated successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00e",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:49:46.090Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 2,
		"title": "Old Extension",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"src": "Either you get the source code or the external hosting link of the extension depending on the hosting method."
	}
}
```

