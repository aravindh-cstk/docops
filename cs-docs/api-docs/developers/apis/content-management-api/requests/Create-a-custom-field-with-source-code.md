---
title: "Create a custom field with source code"
description: POST /extensions
url: developers/apis/content-management-api/requests/create-a-custom-field-with-source-code
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Create a custom field with source code


**Method:** `POST`  
**Endpoint:** `/extensions`

The Create a custom field with source code request is used to create a custom field in Contentstack by providing the source code of the extensions. This source code will be hosted on Contentstack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the custom field, such as its tags, data type, title, source code of the extension, set if the field is to take multiple values or not, and configuration details.

**Note:** The custom field has various data types you can select from – Text, Number, Date, Boolean, JSON, Reference, File, and Asset.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

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

**Response (200):**

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
