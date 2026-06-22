---
title: "Get a single label"
description: GET /labels/{label_uid}
url: developers/apis/content-management-api/requests/get-a-single-label
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-07-25
---

# Get a single label


**Method:** `GET`  
**Endpoint:** `/labels/{label_uid}`

The Get a single label call returns information about a particular label of a stack.

When executing the API call, add the label_uid as a URL parameter and management_token in the Authorization parameters.

To configure the permissions for your application via OAuth, please include the cm.labels.management:readscope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | [Bearer <OAuth token>] or [your_management_token] | Enter your OAuth token or management token. Learn more about [authentication](https://www.contentstack.com/docs/developers/apis/content-management-api#authentic |

| branch | main | Enter your branch unique ID. |

| label_uid | blt5d1761bce4b36d57 | Enter the unique ID of the label that you want to retrieve. |

| include_branch | false | Set this to 'true' to include the '_branch' top-level key in the response. This key states the unique ID of the branch where the concerned Contentstack module r |

**Response (200):**

```json
{
	"label": [{
		"name": "Test",
		"parent": [],
		"uid": "1234567890abcdef",
		"created_by": "sys_bltf123456789012",
		"updated_by": "sys_bltf123456789012",
		"created_at": "2015-01-08T15:07:53.495Z",
		"updated_at": "2015-01-08T15:07:53.495Z",
		"ACL": {},
		"_version": "1"
	}]
}
```
