---
title: "Ingest Content"
description: POST /v1/knowledge-vault/
url: https://ai.contentstack.com/brand-kits/v1/knowledge-vault/
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# Ingest Content

**POST** `/v1/knowledge-vault/`

The Ingest Content request lets you add content in the Knowledge Vault.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

## Headers

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid `
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

## Sample Request

```json
{
  "content": "Contentstack is a headless content management system (CMS) that allows you to manage and deliver content across multiple digital channels. It offers a flexible and scalable platform for creating, managing, and publishing content, with features like content modeling, multilingual support, and integrations with various tools and platforms. Contentstack enables efficient content management and omnichannel delivery."
}
```

## Sample Response

```json
{
    "message": "Your content will be ingested shortly",
    "content": {
        "uid": "cs************de",
        "tokens": {
            "count": 2882,
            "remaining": 99997118
        }
    }
}
```

