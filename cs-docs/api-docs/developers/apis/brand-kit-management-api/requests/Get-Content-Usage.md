---
title: "Get Content Usage"
description: GET /v1/knowledge-vault/get-usage
url: https://ai.contentstack.com/brand-kits/v1/knowledge-vault/get-usage
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# Get Content Usage


**Method:** `GET`  
**Endpoint:** `/v1/knowledge-vault/get-usage`

The Get Content Usage request lets you fetch the details of content being used from the Knowledge Vault.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| brand_kit_uid | your_brand_kit_uid  | Enter the Brand Kit UID. |

| authtoken | your_authtoken | Enter the authtoken. |

| authorization | [Bearer <OAuth token>]  | Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication). |

**Response (200):**

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
