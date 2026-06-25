---
title: "Clone a Release"
description: POST /releases/{release_uid}/clone
url: developers/apis/content-management-api/requests/clone-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-10
---

# Clone a Release

**POST** `/releases/{release_uid}/clone`

The Clone a Release request allows you to clone (make a copy of) a specific Release in a stack. When executing the API request, provide the Release UID.

In the 'Body' section, you need to provide the new name and description of the cloned Release.

To configure the permissions for your application via OAuth, please include the cm.release:clone scope.

## URL Parameters

- **release_uid** (required)
  Enter the unique ID of the release that you want to clone.
  Default: `blt719af000dcde0000`

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
	"release": {
		"name": "New Release Name",
		"description": "2018-12-12"
	}
}
```

## Sample Response

```json
{
	"notice": "Release cloned successfully.",
	"release": {
		"name": "New Release Name",
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
		"uid": "blt1123ab123ede123",
		"created_by": "blt123123123123123",
		"updated_by": "blt123123123123123",
		"created_at": "2017-12-12T12:12:12:122Z",
		"updated_at": "2017-12-12T12:12:12:122Z",
		"locked": false,
		"status": []
	}
}
```

