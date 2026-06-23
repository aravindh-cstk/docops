---
title: "Get Content Usage"
description: GET /v1/knowledge-vault/get-usage
url: https://ai.contentstack.com/brand-kits/v1/knowledge-vault/get-usage
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-09-29
---

# Get Content Usage

**GET** `/v1/knowledge-vault/get-usage`

The Get Content Usage request lets you fetch the details of content being used from the Knowledge Vault.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

## Headers

- **authtoken** (optional)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (optional)
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/knowledge-vault-api#authentication).
  Default: `[Bearer <OAuth token>]`
- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

## Sample Response

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

