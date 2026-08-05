---
title: "Unshare a stack"
description: /stacks/unshare
url: /unshare-a-stack
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:04.596Z
updated_at: 2023-01-05T14:09:04.596Z
---

# Unshare a stack

<p>The <span data-type="inlineCode">Unshare a stack</span> call unshares a stack with a user and removes the user account from the list of collaborators. Once this call is executed, the user will not be able to view the stack in their account.</p><p>In the 'Body' section, you need to provide the email ID of the user from whom you wish to unshare the stack.
</p>

**API Endpoint**: `/stacks/unshare`

**Method**: `POST`

## Headers

- **api_key** (required)
- **authtoken** (required)
- **Content-Type** (required)

## Request Body

```json
{
	"email": "manager@example.com"
}
```

## Response

```json
{
	"notice": "The stack has been successfully unshared."
}
```

