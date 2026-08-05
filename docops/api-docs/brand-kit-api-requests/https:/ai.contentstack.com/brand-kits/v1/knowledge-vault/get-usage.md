---
title: "Get Content Usage"
description: /v1/knowledge-vault/get-usage
url: https://ai.contentstack.com/brand-kits/v1/knowledge-vault/get-usage
product: Contentstack
doc_type: api-request
created_at: 2024-06-03T06:06:36.923Z
updated_at: 2024-06-06T11:05:01.910Z
---

# Get Content Usage

<p>The <span class="code">Get Content Usage</span> request lets you fetch the details of content being used from the Knowledge Vault.</p>
<p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p>

**API Endpoint**: `/v1/knowledge-vault/get-usage`

**Method**: `GET`

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
    "usage": {
        "count": 0,
        "tokens": {
            "current": 60,
            "remaining": 999940
        }
    }
}
```

