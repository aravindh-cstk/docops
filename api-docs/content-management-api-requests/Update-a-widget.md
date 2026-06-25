---
title: "Update a widget"
description: PUT /extensions/{widget_uid}
url: developer-apis/content-management-api-requests/update-a-widget
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-28
---

# Update a widget

**PUT** `/extensions/{widget_uid}`

The Update a widget request is used to update the details of a widget.

To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, external source link (or the updated external source code), configuration details, set if the extension is a widget or field, and specify the scope i.e., the content types that you want to apply the widget.

## URL Parameters

- **widget_uid** (required)
  Enter the UID of the widget that you want to update.
  Default: `bltcd0ac000b000b00f`

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
		"title": "Widget Updated",
		"src": "Enter either the source code or the external hosting link of the widget depending on the hosting method you selected.",
		"config": "{}",
                "type": "widget",
                "scope": {
                "content_types": [
                "<your_content_type_uid>"
                ]

         	}
	}
}
```

## Sample Response

```json
{
	"notice": "Extension updated successfully.",
	"extension": {
		"uid": "bltcd0ac000b000b00f",
		"created_at": "2018-07-03T10:32:49.772Z",
		"updated_at": "2018-07-03T10:49:46.090Z",
		"created_by": "blt1e1111e1111cf1e1",
		"updated_by": "blt1e1111e1111cf1e1",
		"tags": [
			"tag1",
			"tag2"
		],
		"ACL": {},
		"_version": 2,
		"title": "Widget Updated",
		"config": {},
		"type": "widget",
		"scope": {
			"content_types": [
				"$all"
			]
		},
		"src": "Either you get the source code or the external hosting link of the widget depending on the hosting method."
	}
}
```

