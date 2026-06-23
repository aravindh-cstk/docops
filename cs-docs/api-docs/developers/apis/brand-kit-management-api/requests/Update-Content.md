---
title: "Update Content"
description: PUT /v1/knowledge-vault/{content_uid}
url: https://ai.contentstack.com/brand-kits/v1/knowledge-vault/{content_uid}
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-06-06
---

# Update Content

**PUT** `/v1/knowledge-vault/{content_uid}`

The Update Content request lets you update a specific content stored in the Knowledge Vault.

To configure the permissions for your application via [OAuth](/docs/developers/developer-hub/contentstack-oauth), include the brand-kits:manage scope.

## URL Parameters

- **content_uid** (required)
  Enter the Content UID.
  Default: `your_content_uid`

## Headers

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](/docs/developers/apis/brand-kit-management-api#authentication).
  Default: `[Bearer <OAuth token>] `

## Sample Request

```json
{
  "content": "Contentstack is a headless CMS that enables flexible, scalable content management and omnichannel delivery across digital platforms."
}
```

## Sample Response

```json
{
    "message": "Your content will be updated shortly",
    "content": {
        "uid": "cs************de",
        "tokens": {
            "count": 2905,
            "remaining": 99997095
        }
    }
}
```

