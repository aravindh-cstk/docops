---
title: "Get all widgets"
description: GET /extensions?query={'type':'widget'}
url: developers/apis/content-management-api/requests/get-all-widgets
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-25
---

# Get all widgets


**Method:** `GET`  
**Endpoint:** `/extensions?query={"type":"widget"}`

The Get widgets request is used to get the information of all custom widgets created in a stack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:read scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_Authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| query | {"type":"widget"} | Parameter for custom widgets. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"extensions": [{
			"uid": "blt002c000ce00b00000",
			"created_at": "2018-07-03T05:32:29.450Z",
			"updated_at": "2018-07-03T05:32:29.450Z",
			"created_by": "blt1e1111e1111cf1e1",
			"updated_by": "blt2e2222e2222cf2e2",
			"tags": [],
			"ACL": [],
			"_version": 1,
			"title": "Text Intelligence",
			"config": {
				"token": "bd1111c1ebc1d1efc1111111c1b1cfbe1af11dc1"
			},
			"type": "widget",
			"scope": {
				"content_types": [
					"$all"
				]
			},
			"srcdoc": "Source doc of the widget"
		},
		{
			"uid": "blt222c222ce22b22222",
			"created_at": "2018-07-03T05:32:29.450Z",
			"updated_at": "2018-07-03T05:32:29.450Z",
			"created_by": "blt1e1111e1111cf1e1",
			"updated_by": "blt0e0000e0000cf2e0",
			"tags": [],
			"ACL": [],
			"_version": 1,
			"title": "Translation",
			"config": {
				"from": {
					"ga": "Irish",
					"it": "Italian",
					"ja": "Japanese",
					"de": "German"
				},
				"to": {
					"en": "English",
					"hi": "Hindi"
				}
			},
			"type": "widget",
			"scope": {
				"content_types": [
					"Content type uids separated by commas"
				]
			},
			"srcdoc": "Source doc of the widget"
		}
	]
}
```
