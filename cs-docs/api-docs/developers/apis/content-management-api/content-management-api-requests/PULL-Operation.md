---
title: "PULL Operation"
description: PUT /content_types/{content_type_uid}/entries/{entry_uid}
url: developers/apis/content-management-api/requests/pull-operation
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-06-21
---

# PULL Operation

**PUT** `/content_types/{content_type_uid}/entries/{entry_uid}`

ThePULL operationallows you to pull data from an array field based on a query passed.

For example, you have an entry with a “Number” field named “Multiple Number” which has the values, “1,” “2,” “3,” “4,” and “5”, and you need to remove “2” and “ 3”. You need to use the PULL operation as follows:

```
{
    "entry": {
        "multiple_number": {
            "PULL": {
                "query": {
                    "$in": [
                        2,
                        3
                    ]
                }
            }
        }
    }
}
```

Another example is if you need to pull specific field data from a field (say a “Group” field) marked as “Multiple,” where the field name is “Demo Field” and the specific value to be pulled is “abc”. You need to use the “PULL” operator as follows:

```
{
    "entry": {
        "multiple_group": {
            "PULL": {
                "query": {
                    "demo_field": {
                        "$in": ["abc"]
                    }
                }
            }
        }
    }
}
```

**Note:** Here are certain limitations to the PULL request:  
1. Currently, a PULL operation on multiple fields will retrieve the result of only ONE field i.e., if you include multiple fields in your PULL request, you will be able to retrieve the data of only the first mentioned field.  
2. PULL query does not work on Nested Group fields.

##### UPDATE Operation

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
			"PULL": {
				"query": {
					"$in": [
						2,
						3
					]
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
		"number": 8,
		"tags": [],
		"locale": "en-us",
		"uid": "blt5e88ef72e914efb1",
		"created_by": "blt5e47a42c081522df4fc5ac57",
		"updated_by": "blt5e47a42c081522df4fc5ac57",
		"created_at": "2020-03-02T07:35:13.851Z",
		"updated_at": "2020-03-02T07:53:22.464Z",
		"_version": 4,
		"_in_progress": true,
		"multiple_number": [
			1,
			4,
			5
		]
	}
}
```

