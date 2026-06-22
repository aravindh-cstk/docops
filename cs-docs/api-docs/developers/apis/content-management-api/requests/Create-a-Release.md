---
title: "Create a Release"
description: POST /releases
url: developers/apis/content-management-api/requests/create-a-release
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-14
---

# Create a Release


**Method:** `POST`  
**Endpoint:** `/releases`

The Create a Release request allows you to create a new Release in your stack. To create a release, you need to provide the name of the release in the request body.

To configure the permissions for your application via OAuth, please include the cm.releases.management:write scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| release_version | 2.0 | Enter the release version. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| Content-Type | application/json | Enter application/json to pass a request body. |

| branch | main | Enter your branch unique ID. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Request Body:**

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

**Response (200):**

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
