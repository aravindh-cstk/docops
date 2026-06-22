---
title: "Delete multiple items from a Release"
description: DELETE /releases/{release_uid}/items?all={boolean_value}
url: developers/apis/content-management-api/requests/delete-multiple-items-from-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-14
---

# Delete multiple items from a Release


**Method:** `DELETE`  
**Endpoint:** `/releases/{release_uid}/items?all={boolean_value}`

The Delete multiple items from a Release request deletes one or more items (entries and/or assets) from a specific Release.

When executing the API request, provide the Release UID. In the 'Body' section, you need to provide the UIDs of the items along with details such as their locale, versions, the action to be performed on the items (publish/unpublish), and content type UID of entries (if any).

To configure the permissions for your application via OAuth, please include the cm.release:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| release_version | 2.0 | Enter the release version. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter application/json to pass a request body. |

| branch | main | Enter your branch unique ID. |

| release_uid | blt719af000dcde0000 | Enter the unique ID of the release from which you want to remove items. |

| all | true | The ‘all’ parameter will allow you to delete all items (entries and/or assets) of a release at once. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

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

**Response (200):**

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
