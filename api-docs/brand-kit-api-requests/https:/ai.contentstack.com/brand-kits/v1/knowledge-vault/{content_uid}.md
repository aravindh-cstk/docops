---
title: "Delete Content"
description: /v1/knowledge-vault/{content_uid}
url: https://ai.contentstack.com/brand-kits/v1/knowledge-vault/{content_uid}
product: Contentstack
doc_type: api-request
created_at: 2024-06-03T06:07:02.945Z
updated_at: 2024-06-06T10:56:39.089Z
---

# Delete Content

<p>The <span class="code">Delete Content</span> lets you delete a specific content stored in the Knowledge Vault.</p>
<p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p>

**API Endpoint**: `/v1/knowledge-vault/{content_uid}`

**Method**: `DELETE`

## URL Parameters

- **content_uid** (required)
  <p>Enter the Content UID.</p>

## Headers

- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>
- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/brand-kit-management-api#authentication" target="_self">Authentication</a>.</p>

## Response

```json
{
    "message": "Content deleted successfully"
}
```

