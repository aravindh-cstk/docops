---
title: "Delete preview token"
description: DELETE /stacks/delivery_tokens/{delivery_token_uid}/preview_token
url: developer-apis/content-management-api-requests/delete-preview-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-01
---

# Delete preview token

**DELETE** `/stacks/delivery_tokens/{delivery_token_uid}/preview_token`

The Delete preview token request deletes a preview token associated with a specific delivery token.

## URL Parameters

- **delivery_token_uid** (required)
  Enter the UID of the delivery token for which you want to delete the preview token.
  Default: `your_delivery_token_uid`

## Headers

- **api_key** (required)
  Enter the API key of the stack.
  Default: `your_stack_api_key`
- **authtoken** (required)
  Enter your authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your management token.
  Default: `your_management_token`

## Sample Response

```json
{
    "notice": "Preview token deleted successfully."
}
```

