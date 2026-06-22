---
title: "Share a stack"
description: POST /stacks/share
url: developers/apis/content-management-api/requests/share-a-stack
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Share a stack


**Method:** `POST`  
**Endpoint:** `/stacks/share`

The Share a stack call shares a stack with the specified user to collaborate on the stack.

In the 'Body' section, you need to provide the email ID of the user with whom you wish to share the stack along with the role uid that you wish to assign the user.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | API_key_of_your_stack |  |

| authtoken | Your_Authtoken |  |

| Content-Type | application/json |  |

**Request Body:**

```json
{
	"emails": [
		"manager@example.com"
	],
	"roles": {
		"manager@example.com": [
			"abcdefhgi1234567890"
		]
	}
}
```

**Response (200):**

```json
{
	"notice": "The invitation has been sent successfully."
}
```
