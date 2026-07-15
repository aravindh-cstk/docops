---
title: "Upload a widget"
description: POST /extensions
url: developer-apis/content-management-api-requests/upload-a-widget
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-22
---

# Upload a widget

**POST** `/extensions`

The Upload a widget request is used to upload a new custom widget to a stack.  
To configure the permissions for your application via OAuth, please include the cm.extensions.management:write scope.

In the ‘Body’ section, you need to provide the following ‘Body’ parameters under ‘form-data’:

- extension[upload]: Select the HTML file of the widget that you want to upload
- extension[title]: Enter the title of the widget that you want to upload
- extension[tags]: Enter the tags that you want to assign to the widget
- extension[scope]: Enter either {"content_types":["$all"]} or {"content_types":["content_type_uid1”, “content_type_uid2”, “..."]} to apply this widget to all content types or specific content types, respectively
- extension[type]: Enter type as ‘widget’, since this is a custom widget extension

**Tip**: You can try the call manually in any REST API client, such as Postman. Under 'Body', for the extension[upload] parameter, select the input type as 'File'. This will enable you to select the file that you wish to import.

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
  Enter your OAuth token or management token. Learn more about [authentication](../api-detail/content-management-api.md#authentication).
  Default: `[Bearer <OAuth token>] or [your_management_token]`
- **Content-Type** (required)
  Default: `multipart/form-data`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Response

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
	}
}
```

