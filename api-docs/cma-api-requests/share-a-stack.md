---
title: "Share a stack"
description: /stacks/share
url: /share-a-stack
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:04.597Z
updated_at: 2023-01-05T14:09:04.597Z
---

# Share a stack

<p>The <span data-type="inlineCode">Share a stack</span> call shares a stack with the specified user to collaborate on the stack.</p><p>In the 'Body' section, you need to provide the email ID of the user with whom you wish to share the stack along with the role uid that you wish to assign the user.
</p>

**API Endpoint**: `/stacks/share`

**Method**: `POST`

## Headers

- **api_key** (required)
- **authtoken** (required)
- **Content-Type** (required)

## Request Body

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

## Response

```json
{
	"notice": "The invitation has been sent successfully."
}
```

