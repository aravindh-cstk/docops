---
title: "PUSH Operation"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}
url: developers/apis/content-management-api/requests/push-operation
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-06-21
---

# PUSH Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

The PUSH operation allows you to “push” (or append) data into an array without overriding an existing value.

For example, you have an entry with a Number field (named “Multiple Number”), marked as “Multiple” and with the data, “1,” “4,” “5,” and you need to add “2” and “3” to it. In this case, you need to use the PUSH operation as follows:

```
{
    "entry": {
        "multiple_number": {
            "PUSH": {
                "data": [
                    2,
                    3
                ]
            }
        }
    }
}
```

Say you need to push specific data (say “abc”) into a field named “Demo Field” which is within a “Group” field marked as “Multiple”. You need to use the “PUSH” operator as follows:

```
{
    "entry": {
        "multiple_group": {
            "PUSH": {
                "data": {
                    "demo_field": "abc"
                }
            }
        }
    }
}
```

##### PULL Operation

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
		"multiple_number": {
			"PUSH": {
				"data": [
					2,
					3
				]
			}
		},
		"multiple_group": {
			"PUSH": {
				"data": {
					"demo_field": "abc"
				}
			}
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
		"description": "No Description",
		"call_to_action_link": {
			"title": "Click here",
			"href": "https://www.contentstack.com/docs"
		},
		"card_image": null,
		"text": "",
		"group": {
			"title": ""
		},
		"number": 8,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:55:35.708Z",
		"_version": 2,
		"_in_progress": true,
		"multiple_number": [
			1,
			2,
			3,
			4,
			5
		],
		"multiple_group": [{
			"demo_field": "abc"
		}]
	}
}
```

