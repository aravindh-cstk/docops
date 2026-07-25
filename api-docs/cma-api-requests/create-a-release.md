---
title: "Create a Release"
description: /releases
url: /create-a-release
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:00.837Z
updated_at: 2024-11-14T06:30:11.275Z
---

# Create a Release

<p>The <span data-type='inlineCode'>Create a Release</span> request allows you to create a new Release in your stack. To create a release, you need to provide the name of the release in the request body.</p><p>To configure the permissions for your application via OAuth, please include the <span data-type='inlineCode'>cm.releases.management:write</span> scope.</p>

**API Endpoint**: `/releases`

**Method**: `POST`

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
		"name": "Release Name",
		"description": "2018-12-12",
		"locked": false,
		"archived": false
	}
}
```

## Response

```json
{
	"notice": "Release created successfully.",
	"release": {
		"name": "Release Name",
		"description": "2018-12-12",
		"locked": false,
		"uid": "blt123123aaa321321",
		"created_by": "blt123123123123123",
		"updated_by": "blt123123123123123",
		"created_at": "2017-12-12T12:12:12:122Z",
		"updated_at": "2017-12-12T12:12:12:122Z",
		"status": [],
               "_deploy_latest": false
	}
}
```

