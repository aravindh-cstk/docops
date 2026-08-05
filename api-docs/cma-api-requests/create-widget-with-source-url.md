---
title: "Create widget with source URL"
description: /extensions
url: /create-widget-with-source-url
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.004Z
updated_at: 2024-02-22T13:02:21.026Z
---

# Create widget with source URL

<p>The <span data-type='inlineCode'>Create Widget with source URL</span> call is used to create a widget that is hosted externally.<br /><span style='font-size: 10.5pt;'>To configure the permissions for your application via OAuth, please include the </span><span><span data-type='inlineCode'>cm.extensions.management:write</span></span><span style='color:rgb(0, 0, 255);font-size: 10.5pt;'> </span><span style='font-size: 10.5pt;'>scope.</span></p><p>In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, external source link (src), configuration details, set if the extension is a widget or field, and specify the scope, i.e., the content types to which you want to apply the widget.<span></span></p>

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
                "data_type": "text",
		"title": "New Widget",
		"src": "https://www.sample.com",
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
		"uid": "blt1f1111111ed11a0d",
		"created_at": "2018-07-03T10:20:29.755Z",
		"updated_at": "2018-07-03T10:20:29.755Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"data_type": "text",
		"ACL": {},
		"_version": 1,
		"title": "New Widget",
		"config": {
			"token": "bd1111c1ebc1d1efc1111111c1b1cfbe1af11de1"
		},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"src": "https://www.sample.com"
	}
}
```

