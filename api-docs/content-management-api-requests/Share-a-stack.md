---
title: "Share a stack"
description: POST /stacks/share
url: developer-apis/content-management-api-requests/share-a-stack
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Share a stack

**POST** `/stacks/share`

The Share a stack call shares a stack with the specified user to collaborate on the stack.

In the 'Body' section, you need to provide the email ID of the user with whom you wish to share the stack along with the role uid that you wish to assign the user.

## Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Default: `application/json`

## Sample Request

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

## Sample Response

```json
{
	"notice": "The invitation has been sent successfully."
}
```

