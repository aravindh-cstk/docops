---
title: "PULL Operation"
description: /content_types/{content_type_uid}/entries/{entry_uid}
url: /pull-operation
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:16.012Z
updated_at: 2026-07-20T18:24:06.366Z
---

# PULL Operation

<p>The<span data-type='inlineCode'>PULL operation</span>allows you to pull data from an array field based on a query passed.</p><p>For example, you have an entry with a “Number” field named “Multiple Number” which has the values, “1,” “2,” “3,” “4,” and “5”, and you need to remove “2” and “ 3”. You need to use the PULL operation as follows:</p><pre>{
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
}</pre><p>Another example is if you need to pull specific field data from a field (say a “Group” field) marked as “Multiple,” where the field name is “Demo Field” and the specific value to be pulled is “abc”. You need to use the “PULL” operator as follows:</p><pre>{
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
}</pre><p class="note"><strong>Note:</strong> Here are certain limitations to the PULL request:<br />1. Currently, a PULL operation on multiple fields will retrieve the result of only ONE field i.e., if you include multiple fields in your PULL request, you will be able to retrieve the data of only the first mentioned field.<br />2. PULL query does not work on Nested Group fields.</p>

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

