---
title: "Create widget with source code"
description: /extensions
url: /create-widget-with-source-code
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.036Z
updated_at: 2024-04-25T06:06:47.121Z
---

# Create widget with source code

<p>The <span data-type='inlineCode'>Create widget with source code</span> request is used to create a widget in Contentstack by providing the source code. This source code will be hosted on Contentstack.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.extensions.management:write</span>
scope.</p>
<p>In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, source code of the widget, configuration details, set if the extension is a widget or field, and specify the scope i.e., the content types that you want to apply the widget.</p>

**API Endpoint**: `/extensions`

**Method**: `POST`

## Query Parameters

- **include_branch** (optional)
  <p>Set this to '<span class="code">true</span>' to include the '<span class="code">_branch</span>' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
- **authtoken** (optional)
- **authorization** (required)
  <p><span style='font-size: 10.5pt;'>Enter your OAuth token or management token. Learn more about</span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><a href="https://www.contentstack.com/docs/developers/apis/content-management-api#authentication"><span style='font-size: 10.5pt;'>authentication</span></a><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'>.</span></p>
- **Content-Type** (required)
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

```json
{
	"extension": {
		"tags": [
			"tag1",
			"tag2"
		],
		"title": "New Widget",
		"srcdoc": "Source code of the widget",
		"config": "{}",
		"type": "widget",
		"scope": {
			"content_types": ["$all"]
		}
	}
}
```

## Response

```json
{
	"notice": "Extension created successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00f",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:32:49.772Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 1,
		"title": "New Widget",
		"config": {},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"srcdoc": "Source code of the widget"
	}
}
```

