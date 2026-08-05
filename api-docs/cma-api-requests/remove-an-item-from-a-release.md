---
title: "Remove an item from a Release"
description: /releases/{release_uid}/items
url: /remove-an-item-from-a-release
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:03.642Z
updated_at: 2024-11-14T06:33:29.718Z
---

# Remove an item from a Release

<p>The <span data-type='inlineCode'>Remove an item from a Release</span> request removes one or more items (entries and/or assets) from a specific Release.</p><p>When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the details of the item such as their UIDs, version (of the entry), content type UID (of an entry), the action to be performed (publish/unpublish), and the locale of the item.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.release:write</span> scope.</p>

**API Endpoint**: `/releases/{release_uid}/items`

**Method**: `DELETE`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release from which you want to remove an item.</p>

## Query Parameters

- **include_branch** (optional)
  <p>Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module resides.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **release_version** (optional)
  <p>Enter the release version.</p>
- **authtoken** (optional)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>
- **Content-Type** (required)
  <p>Enter <span class="code">application/json</span> to pass a request body.</p>
- **branch** (optional)
  <p>Enter your branch unique ID.</p>

## Request Body

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

## Response

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

