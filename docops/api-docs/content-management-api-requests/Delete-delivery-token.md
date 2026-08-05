---
title: "Delete delivery token"
description: DELETE /stacks/delivery_tokens/{token_uid}?force={boolean_value}
url: developer-apis/content-management-api-requests/delete-delivery-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Delete delivery token

**DELETE** `/stacks/delivery_tokens/{token_uid}?force={boolean_value}`

The Delete delivery token request deletes a specific delivery token.

## URL Parameters

- **token_uid** (required)
  Enter the UID of the token that you want to delete.
  Default: `cs22222ecd22a2ccd222`

## Query Parameters

- **force** (optional)
  Enter ‘true’ to force delete a delivery token.
  Default: `false`

## Headers

- **api_key** (required)
  Default: `blt20962a819b57e233`
- **authtoken** (required)
  Default: `Your_Authtoken`

## Sample Response

```json
{
	"notice:": "Delivery Token deleted successfully."
}
```

