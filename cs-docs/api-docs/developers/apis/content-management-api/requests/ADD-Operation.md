---
title: "ADD Operation"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}
url: developers/apis/content-management-api/requests/add-operation
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-06-21
---

# ADD Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

The ADD operation reads the latest value of a “Number” field and increments it by a numeric passed along with the operator. The increment occurs irrespective of what the current value of the field is.

For example, you have a “Number” field and you want to increment the value of the field by one. In this case, you need to use the "ADD":1 operation. This operation reads the latest value of the field, increments it by 1, and replaces the existing value of the field with the new value.

##### SUB Operation

## URL Parameters

- **content_type_uid** (required)
  Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.
  Default: `your_content_type_uid`
- **entry_uid** (required)
  Enter the unique ID of the entry.
  Default: `enter_your_entry_uid`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter Stack API Key.
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.
  Default: `your_authtoken`
- **authorization** (required)
  Enter the management token.
  Default: `Your_Management_Token`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
	"entry": {
		"number": {
			"ADD": 1
		}
	}
}
```

## Sample Response

```json
{
	"notice": "Entry updated successfully.",
	"entry": {
		"title": "Demo",
		"description": "",
		"call_to_action_link": {
			"title": "",
			"href": ""
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 9,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:53:22.464Z",
		"_version": 3,
		"_in_progress": true,
		"multiple_number": [
			1,
			2,
			3,
			4,
			5
		],
		"multiple_group": []
	}
}
```

