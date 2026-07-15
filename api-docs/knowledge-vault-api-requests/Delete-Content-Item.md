---
title: "Delete Content Item"
description: DELETE /v1/knowledge-vault/{content_uid}
url: https://ai.contentstack.com/brand-kits/v1/knowledge-vault/-content_uid-
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-12-12
---

# Delete Content Item

**DELETE** `/v1/knowledge-vault/{content_uid}`

The Delete Content request lets you delete a specific content stored in the Knowledge Vault.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

## URL Parameters

- **content_uid** (optional)
  Enter the Content UID.
  Default: `your_content_uid`

## Headers

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../api-detail/knowledge-vault-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

## Sample Response

```json
{
    "message": "Content deleted successfully"
}
```

