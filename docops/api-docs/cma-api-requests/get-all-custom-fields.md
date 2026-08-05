---
title: "Get all custom fields"
description: /extensions?query={"type":"field"}
url: /get-all-custom-fields
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.738Z
updated_at: 2024-04-25T05:48:04.948Z
---

# Get all custom fields

<p>The <span data-type='inlineCode'>Get all custom fields</span> request is used to get the information of all custom fields created in a stack.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.extensions.management:read</span> scope.</p>

**API Endpoint**: `/extensions?query={"type":"field"}`

**Method**: `GET`

## Query Parameters

- **query** (required)
  <p>For custom fields</p>
- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack that holds the asset</p>
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
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
			"title": "Ratings",
			"multiple": false,
			"config": {},
			"type": "field",
			"data_type": "number",
			"srcdoc": "Source doc of the extension"
		},
		{
			"uid": "blt222c222ce22b22a22",
			"created_at": "2018-07-03T05:32:29.450Z",
			"updated_at": "2018-07-03T05:32:29.450Z",
			"created_by": "blt1e1111e1111cf1e1",
			"updated_by": "blt0e0000e0000cf2e0",
			"tags": [],
			"ACL": [],
			"_version": 1,
			"title": "Color picker",
			"multiple": false,
			"config": {},
			"type": "field",
			"data_type": "text",
			"srcdoc": "Source doc of the extension"
		}
	]
}
```

