---
title: "Get all users of a stack"
description: /stacks/users
url: /get-all-users-of-a-stack
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:08.438Z
updated_at: 2023-01-31T12:36:51.234Z
---

# Get all users of a stack

<p>The <span data-type="inlineCode">Get all users of a stack</span> call fetches the list of all users of a particular stack
</p>

**API Endpoint**: `/stacks/users`

**Method**: `GET`

## Headers

- **api_key** (required)
- **authtoken** (required)
- **Content-Type** (required)

## Response

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

