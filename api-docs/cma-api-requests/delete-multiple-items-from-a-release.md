---
title: "Delete multiple items from a Release"
description: /releases/{release_uid}/items?all={boolean_value}
url: /delete-multiple-items-from-a-release
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:58.895Z
updated_at: 2024-11-14T06:33:47.103Z
---

# Delete multiple items from a Release

<p>The <span data-type='inlineCode'>Delete multiple items from a Release</span> request deletes one or more items (entries and/or assets) from a specific Release.</p><p>When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the UIDs of the items along with details such as their locale, versions, the action to be performed on the items (publish/unpublish), and content type UID of entries (if any).</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.release:write</span> scope.</p>

**API Endpoint**: `/releases/{release_uid}/items?all={boolean_value}`

**Method**: `DELETE`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release from which you want to remove items.</p>

## Query Parameters

- **all** (required)
  <p><span style="background-color: initial;">The ‘all’ parameter will allow you to delete all items (entries and/or assets) of a release at once.</span></p>
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
		"uid": "item_uid",
		"locale": "en-us",
		"version": 1,
		"content_type_uid": "your_content_type_uid",
		"action": "publish_or_unpublish"
	}]
}
```

## Response

```json
{
	"notice": "Item(s) send to remove from release successfully.",
	"release": {
		"name": "Release Name",
		"description": "2018-12-12",
		"items": [{
				"action": "publish_or_unpublish",
				"title": "Sample",
				"uid": "item_uid",
				"locale": "en-us",
				"version": 1,
				"content_type_uid": "your_content_type_uid"
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

