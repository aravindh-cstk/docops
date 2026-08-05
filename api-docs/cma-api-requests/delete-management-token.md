---
title: "Delete management token"
description: /stacks/management_tokens/{token_uid}
url: /delete-management-token
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:08.436Z
updated_at: 2023-01-05T14:09:08.436Z
---

# Delete management token

<p>The <span data-type="inlineCode">Delete management token</span> request deletes a specific management token.</p>

**API Endpoint**: `/stacks/management_tokens/{token_uid}`

**Method**: `DELETE`

## URL Parameters

- **token_uid** (required)
  <p>Enter the UID of the management token that you want to delete.</p>

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (required)
  <p>Enter your authtoken.</p>

## Response

```json
{
    "notice": "Management Token deleted successfully."
}
```

