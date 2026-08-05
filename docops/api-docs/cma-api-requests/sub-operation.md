---
title: "SUB Operation"
description: /content_types/{content_type_uid}/entries/{entry_uid}
url: /sub-operation
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.163Z
updated_at: 2023-06-22T03:56:04.259Z
---

# SUB Operation

<p>The <span data-type="inlineCode">SUB operation</span> works the opposite of ADD. It reads the latest value of a “Number” field and decrements it by a numeric value passed along with the operator.</p>
<p>For example, you have a “Number” field and you want to decrease the value of the field by one. In this case, you need to use the <span data-type="inlineCode">"SUB":1</span> operation. This operation reads the latest value of the field, decrements it by 1, and replaces the existing value of the field with the new value.</p>


**API Endpoint**: `/content_types/{content_type_uid}/entries/{entry_uid}`

**Method**: `PUT`

## URL Parameters

- **content_type_uid** (required)
  <p>Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack.</p>
- **entry_uid** (required)
  <p>Enter the unique ID of the entry.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter Stack API Key.</p>
- **authtoken** (optional)
  <p>Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests.</p>
- **authorization** (required)
  <p>Enter the management token.</p>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
	"entry": {
		"number": {
			"SUB": 2
		}
	}
}
```

## Response

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
		"number": 7,
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

