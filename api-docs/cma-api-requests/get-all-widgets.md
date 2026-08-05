---
title: "Get all widgets"
description: /extensions?query={"type":"widget"}
url: /get-all-widgets
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.067Z
updated_at: 2024-04-25T06:05:35.965Z
---

# Get all widgets

<p>The <span data-type='inlineCode'>Get widgets</span> request is used to get the information of all custom widgets created in a stack.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.extensions.management:read</span> scope.</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'></span></p>

**API Endpoint**: `/extensions?query={"type":"widget"}`

**Method**: `GET`

## Query Parameters

- **query** (required)
  <p>Parameter for&nbsp;custom widgets.</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Response

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

