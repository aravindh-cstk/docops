---
title: "Get Content Usage"
description: /v1/knowledge-vault/get-usage
url: https://ai.contentstack.com/brand-kits/v1/knowledge-vault/get-usage
product: Contentstack
doc_type: api-request
created_at: 2024-11-08T11:40:53.124Z
updated_at: 2025-09-29T10:21:20.581Z
---

# Get Content Usage

<p>The <span class="code">Get Content Usage</span> request lets you fetch the details of content being used from the Knowledge Vault.</p><p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p>

**API Endpoint**: `/v1/knowledge-vault/get-usage`

**Method**: `GET`

## Headers

- **authtoken** (optional)
  <p>Enter the authtoken.</p>
- **authorization** (optional)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/knowledge-vault-api#authentication" target="_self">Authentication</a>.</p>
- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>

## Response

```json
{
    "usage": {
        "count": 0,
        "tokens": {
            "current": 60,
            "remaining": 999940
        }
    }
}
```

