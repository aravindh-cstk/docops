---
title: "Create widget with source code"
description: POST /extensions
url: developers/apis/content-management-api/requests/create-widget-with-source-code
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-25
---

# Create widget with source code

**POST** `/extensions`

The Create widget with source code request is used to create a widget in Contentstack by providing the source code. This source code will be hosted on Contentstack.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write
scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, source code of the widget, configuration details, set if the extension is a widget or field, and specify the scope i.e., the content types that you want to apply the widget.

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (optional)
  Default: `Your_Authtoken`
- **authorization** (required)
  Enter your OAuth token or management token. Learn more about [authentication](../../../../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

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

## Sample Response

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

