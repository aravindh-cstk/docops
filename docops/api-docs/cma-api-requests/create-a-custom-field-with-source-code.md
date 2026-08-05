---
title: "Create a custom field with source code"
description: /extensions
url: /create-a-custom-field-with-source-code
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.107Z
updated_at: 2024-02-22T10:51:14.897Z
---

# Create a custom field with source code

<p>The <span data-type='inlineCode'>Create a custom field with source code</span> request is used to create a&nbsp;custom field in Contentstack by providing the source code of the extensions. This source code will be hosted on Contentstack.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.extensions.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p>In the ‘Body’ section, you need to provide details of the custom field, such as its tags, data type, title, source code of the extension, set if the field is to take multiple values or not, and configuration details.</p><p class="note"><strong>Note:</strong> The custom field has various data types you can select from – Text, Number, Date, Boolean, JSON, Reference, File, and Asset.</p>

**API Endpoint**: `/extensions`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
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
		"title": "New Custom Field",
		"srcdoc": "Source code of the extension",
		"multiple": false,
		"config": "{}",
		"type": "field"
	}
}
```

## Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00f",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:32:49.772Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1"
		],
		"ACL": {},
		"_version": 1,
		"title": "New Custom Field",
		"config": {},
		"type": "field",
		"data_type": "text",
		"multiple": false,
		"srcdoc": "Source code of the extension"
	}
}
```

