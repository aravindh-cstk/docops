---
title: "PUSH Operation"
description: /content_types/{content_type_uid}/entries/{entry_uid}
url: /push-operation
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.985Z
updated_at: 2026-07-20T18:23:47.755Z
---

# PUSH Operation

<p>The <span data-type='inlineCode'>PUSH operation</span> allows you to “push” (or append) data into an array without overriding an existing value.</p><p>For example, you have an entry with a Number field (named “Multiple Number”), marked as “Multiple” and with the data, “1,” “4,” “5,” and you need to add “2” and “3” to it. In this case, you need to use the PUSH operation as follows:</p><pre>{
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
}</pre><p>Say you need to push specific data (say “abc”) into a field named “Demo Field” which is within a “Group” field marked as “Multiple”. You need to use the “PUSH” operator as follows:</p><pre>{
    "entry": {
        "multiple_group": {
            "PUSH": {
                "data": {
                    "demo_field": "abc"
                }
            }
        }
    }
}</pre>

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

## Response

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

