---
title: "Delete management token"
description: DELETE /stacks/management_tokens/{token_uid}
url: developer-apis/content-management-api-requests/delete-management-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Delete management token

**DELETE** `/stacks/management_tokens/{token_uid}`

The Delete management token request deletes a specific management token.

## URL Parameters

- **token_uid** (required)
  Enter the UID of the management token that you want to delete.
  Default: `blt3c33b3833884482`

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`

## Sample Response

```json
{
    "notice": "Management Token deleted successfully."
}
```

