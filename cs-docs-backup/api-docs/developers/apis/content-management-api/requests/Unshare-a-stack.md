---
title: "Unshare a stack"
description: POST /stacks/unshare
url: developers/apis/content-management-api/requests/unshare-a-stack
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Unshare a stack

**POST** `/stacks/unshare`

The Unshare a stack call unshares a stack with a user and removes the user account from the list of collaborators. Once this call is executed, the user will not be able to view the stack in their account.

In the 'Body' section, you need to provide the email ID of the user from whom you wish to unshare the stack.

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
	"email": "manager@example.com"
}
```

## Sample Response

```json
{
	"notice": "The stack has been successfully unshared."
}
```

