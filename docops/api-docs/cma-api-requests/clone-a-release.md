---
title: "Clone a Release"
description: /releases/{release_uid}/clone
url: /clone-a-release
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:08:58.887Z
updated_at: 2025-07-10T11:04:43.522Z
---

# Clone a Release

<p>The <span data-type='inlineCode'>Clone a Release</span> request allows you to clone (make a copy of) a specific Release in a stack. When executing the API request, provide the Release UID.</p>
<p>In the 'Body' section, you need to provide the new name and description of the cloned Release.</p>
<p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.release:clone</span> scope.</p>

**API Endpoint**: `/releases/{release_uid}/clone`

**Method**: `POST`

## URL Parameters

- **release_uid** (required)
  <p>Enter the unique ID of the release that you want to clone.</p>

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
	"release": {
		"name": "New Release Name",
		"description": "2018-12-12"
	}
}
```

## Response

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

