---
title: "Delete preview token"
description: /stacks/delivery_tokens/{delivery_token_uid}/preview_token
url: /delete-preview-token
product: Contentstack
doc_type: api-request
created_at: 2024-02-01T18:05:44.309Z
updated_at: 2024-02-01T18:05:44.309Z
---

# Delete preview token

<p>The <span data-type='inlineCode'>Delete preview token</span> request deletes a preview token associated with a specific delivery token.</p>

**API Endpoint**: `/stacks/delivery_tokens/{delivery_token_uid}/preview_token`

**Method**: `DELETE`

## URL Parameters

- **delivery_token_uid** (required)
  <p>Enter the UID of the delivery token for which you want to delete the preview token.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of the stack.</p>
- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **authorization** (required)
  <p>Enter your management token.</p>

## Response

```json
{
    "notice": "Preview token deleted successfully."
}
```

