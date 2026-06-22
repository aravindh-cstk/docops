---
title: "Delete management token"
description: DELETE /stacks/management_tokens/{token_uid}
url: developers/apis/content-management-api/requests/delete-management-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-01-05
---

# Delete management token


**Method:** `DELETE`  
**Endpoint:** `/stacks/management_tokens/{token_uid}`

The Delete management token request deletes a specific management token.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of your stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| token_uid | blt3c33b3833884482 | Enter the UID of the management token that you want to delete. |

**Response (200):**

```json
{
    "notice": "Management Token deleted successfully."
}
```
