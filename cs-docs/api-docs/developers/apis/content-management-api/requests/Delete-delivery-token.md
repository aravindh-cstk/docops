---
title: "Delete delivery token"
description: DELETE /stacks/delivery_tokens/{token_uid}?force={boolean_value}
url: developers/apis/content-management-api/requests/delete-delivery-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Delete delivery token


**Method:** `DELETE`  
**Endpoint:** `/stacks/delivery_tokens/{token_uid}?force={boolean_value}`

The Delete delivery token request deletes a specific delivery token.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | blt20962a819b57e233 |  |

| authtoken | Your_Authtoken |  |

| token_uid | cs22222ecd22a2ccd222 | Enter the UID of the token that you want to delete. |

| force | false | Enter ‘true’ to force delete a delivery token. |

**Response (200):**

```json
{
	"notice:": "Delivery Token deleted successfully."
}
```
