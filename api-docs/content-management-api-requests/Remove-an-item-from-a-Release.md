---
title: "Remove an item from a Release"
description: DELETE /releases/{release_uid}/items
url: developer-apis/content-management-api-requests/remove-an-item-from-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-14
---

# Remove an item from a Release

**DELETE** `/releases/{release_uid}/items`

The Remove an item from a Release request removes one or more items (entries and/or assets) from a specific Release.

When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the details of the item such as their UIDs, version (of the entry), content type UID (of an entry), the action to be performed (publish/unpublish), and the locale of the item.

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

## URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release from which you want to remove an item.
  Default: `blt718af000dcde0000`

## Query Parameters

- **include_branch** (optional)
  Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.
  Default: `false`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **release_version** (optional)
  Enter the release version.
  Default: `2.0`
- **authtoken** (optional)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`
- **Content-Type** (required)
  Enter application/json to pass a request body.
  Default: `application/json`
- **branch** (optional)
  Enter your branch unique ID.
  Default: `main`

## Sample Request

```json
{
	"items": [{
		"uid": "blt123123123123",
		"version": 1,
		"locale": "ja-jp",
		"content_type_uid": "category",
		"action": "publish"
	}]
}
```

## Sample Response

```json
{
	"notice": "Item(s) send to remove from release successfully.",
	"release": {
		"name": "Release Name 2",
		"description": "2018-12-12",
		"items": [{
				"action": "publish",
				"title": "Sample1",
				"uid": "blt123123ef321321",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo1"
			},
			{
				"action": "unpublish",
				"title": "Sample2",
				"uid": "blt321321fe123123",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "demo2"
			}
		],
		"uid": "blt123123ab12312de",
		"created_by": "blt123123123123123",
		"updated_by": "blt123123123123322",
		"created_at": "2017-12-12T12:12:12:122Z",
		"updated_at": "2017-12-14T13:13:13:122Z",
		"locked": false,
		"status": []
	}
}
```

