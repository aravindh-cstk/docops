---
title: "SUB Operation"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}
url: developers/apis/content-management-api/requests/sub-operation
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-06-22
---

# SUB Operation


**Method:** `PUT`  
**Endpoint:** `/content_types/{content_type_uid}/entries/{entry_uid}`

The SUB operation works the opposite of ADD. It reads the latest value of a “Number” field and decrements it by a numeric value passed along with the operator.

For example, you have a “Number” field and you want to decrease the value of the field by one. In this case, you need to use the "SUB":1 operation. This operation reads the latest value of the field, decrements it by 1, and replaces the existing value of the field with the new value.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 | Enter Stack API Key. |

| authtoken | your_authtoken | Enter your Authtoken. We recommend you to use the stack’s Management Token instead, along with the stack API key, to make valid Content Management API requests. |

| authorization | Your_Management_Token | Enter the management token. |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| content_type_uid | your_content_type_uid | Enter the unique ID of the content type. The UID is generated based on the title of the content type. The unique ID of a content type is unique across a stack. |

| entry_uid | enter_your_entry_uid | Enter the unique ID of the entry. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

```json
{
	"entry": {
		"number": {
			"SUB": 2
		}
	}
}
```

**Response (200):**

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
