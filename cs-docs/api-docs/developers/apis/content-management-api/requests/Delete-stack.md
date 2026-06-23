---
title: "Delete stack"
description: DELETE /stacks
url: developers/apis/content-management-api/requests/delete-stack
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Delete stack

**DELETE** `/stacks`

The Delete stack call is used to delete an existing stack permanently from your Contentstack account.

## Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`

## Sample Response

```json
{
	"notice": "Stack deleted successfully!"
}
```

