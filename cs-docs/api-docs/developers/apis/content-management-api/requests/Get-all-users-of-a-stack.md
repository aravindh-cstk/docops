---
title: "Get all users of a stack"
description: GET /stacks/users
url: developers/apis/content-management-api/requests/get-all-users-of-a-stack
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-31
---

# Get all users of a stack


**Method:** `GET`  
**Endpoint:** `/stacks/users`

The Get all users of a stack call fetches the list of all users of a particular stack

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | API_key_of_your_stack |  |

| authtoken | Your_Authtoken |  |

| Content-Type | application/json |  |

**Response (200):**

```json
{
	"users": [{
		"uid": "blt69fc93c3f1c8e16b",
		"created_at": "2021-10-19T11:43:47.606Z",
		"updated_at": "2023-01-23T05:53:40.818Z",
		"email": "john.doe@contentstack.com",
		"username": "john_blt9b474691",
		"first_name": "john",
		"last_name": "doe",
		"active": true,
		"metadata": {
			"idp_user": false
		},
		"settings": {
			"preferences": {
				"global": [],
				"stack": []
			}
		},
		"is_owner": true
	}]
}
```
