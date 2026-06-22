---
title: "Create widget with source URL"
description: POST /extensions
url: developers/apis/content-management-api/requests/create-widget-with-source-url
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Create widget with source URL


**Method:** `POST`  
**Endpoint:** `/extensions`

The Create Widget with source URL call is used to create a widget that is hosted externally.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide details of the widget, such as its tags, title, external source link (src), configuration details, set if the extension is a widget or field, and specify the scope, i.e., the content types to which you want to apply the widget.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_Authtoken |  |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| Content-Type | application/json |  |

| branch | main | Enter your branch unique ID. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

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

**Response (200):**

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
