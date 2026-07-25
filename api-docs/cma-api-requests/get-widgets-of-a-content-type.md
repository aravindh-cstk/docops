---
title: "Get widgets of a content type"
description: /extensions?scope={content_type_uid}
url: /get-widgets-of-a-content-type
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.073Z
updated_at: 2024-02-20T12:26:37.973Z
---

# Get widgets of a content type

<p>The <span data-type='inlineCode'>Get widgets of a content type</span> request gets the comprehensive details of all widgets that are assigned to a specific content type.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.extensions.management:read</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p>

**API Endpoint**: `/extensions?scope={content_type_uid}`

**Method**: `GET`

## Query Parameters

- **scope** (required)
  <p>Enter the UID of the content type of which you want to retrieve the details of all the applicable widgets.<br></p>
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
		"uid": "blt002c000ce00b0000d",
		"created_at": "2018-07-03T05:32:29.450Z",
		"updated_at": "2018-07-03T05:32:29.450Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt2e2222e2222cf2e2",
		"tags": [],
		"ACL": [],
		"_version": 1,
		"title": "Text Intelligence",
		"config": {
			"token": "bd1111c1ebc1d1efc1111111c1b1cfbe1af11de1"
		},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"srcdoc": "Source doc of the widget"
	}]
}
```

