---
title: "Delete delivery token"
description: /stacks/delivery_tokens/{token_uid}?force={boolean_value}
url: /delete-delivery-token
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:04.578Z
updated_at: 2023-01-05T14:09:04.578Z
---

# Delete delivery token

<p>The <span data-type="inlineCode">Delete delivery token</span>&nbsp;request deletes a specific delivery token.</p>

**API Endpoint**: `/stacks/delivery_tokens/{token_uid}?force={boolean_value}`

**Method**: `DELETE`

## URL Parameters

- **token_uid** (required)
  <p>Enter the UID of the token that you want to delete.</p>

## Query Parameters

- **force** (optional)
  <p>Enter ‘true’ to force delete a delivery token.</p>

## Headers

- **api_key** (required)
- **authtoken** (required)

## Response

```json
{
	"notice:": "Delivery Token deleted successfully."
}
```

