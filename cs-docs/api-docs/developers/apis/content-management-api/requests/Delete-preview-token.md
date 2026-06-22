---
title: "Delete preview token"
description: DELETE /stacks/delivery_tokens/{delivery_token_uid}/preview_token
url: developers/apis/content-management-api/requests/delete-preview-token
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-02-01
---

# Delete preview token


**Method:** `DELETE`  
**Endpoint:** `/stacks/delivery_tokens/{delivery_token_uid}/preview_token`

The Delete preview token request deletes a preview token associated with a specific delivery token.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | your_stack_api_key | Enter the API key of the stack. |

| authtoken | your_authtoken | Enter your authtoken. |

| authorization | your_management_token | Enter your management token. |

| delivery_token_uid | your_delivery_token_uid | Enter the UID of the delivery token for which you want to delete the preview token. |

**Response (200):**

```json
{
    "notice": "Preview token deleted successfully."
}
```
