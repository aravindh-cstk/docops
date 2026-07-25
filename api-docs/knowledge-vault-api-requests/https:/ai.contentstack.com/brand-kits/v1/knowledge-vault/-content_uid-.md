---
title: "Delete Content Item"
description: /v1/knowledge-vault/{content_uid}
url: https://ai.contentstack.com/brand-kits/v1/knowledge-vault/-content_uid-
product: Contentstack
doc_type: api-request
created_at: 2024-11-08T11:49:06.273Z
updated_at: 2025-12-12T08:28:18.009Z
---

# Delete Content Item

<p>The <span class="code">Delete Content</span> request lets you delete a specific content stored in the Knowledge Vault.</p><p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p>

**API Endpoint**: `/v1/knowledge-vault/{content_uid}`

**Method**: `DELETE`

## URL Parameters

- **content_uid** (optional)
  <p>Enter the Content UID.</p>

## Headers

- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>
- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/knowledge-vault-api#authentication" target="_self">Authentication</a>.</p>

## Response

```json
{
    "message": "Content deleted successfully"
}
```

