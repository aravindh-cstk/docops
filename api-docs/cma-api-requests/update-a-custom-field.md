---
title: "Update a custom field"
description: /extensions/{custom_field_uid}
url: /update-a-custom-field
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.126Z
updated_at: 2024-02-22T10:52:48.479Z
---

# Update a custom field

<p>The <span data-type='inlineCode'>Update a custom field</span>&nbsp;request is used to update the details of a&nbsp;custom field.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.extensions.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p>In the ‘Body’ section, you need to provide details of the custom field, such as its tags, data type, title, external source link (or the updated external source code), set if the field is to take multiple values or not, and configuration details.</p>

**API Endpoint**: `/extensions/{custom_field_uid}`

**Method**: `PUT`

## URL Parameters

- **custom_field_uid** (required)
  <p>Enter the UID of the custom field that you want to update.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack that holds the asset</p>
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

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

## Response

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

