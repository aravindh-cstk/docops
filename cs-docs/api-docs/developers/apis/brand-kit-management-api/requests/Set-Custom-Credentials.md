---
title: "Set Custom Credentials"
description: PUT /v1/brand-kits/{brand_kit_uid}/llm-configs
url: developers/apis/brand-kit-management-api/requests/set-custom-credentials
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-11-11
---

# Set Custom Credentials

**PUT** `/v1/brand-kits/{brand_kit_uid}/llm-configs`

The Set Custom Credentials request lets you configure the custom API credentials for Brand Kit.

To configure the permissions for your application via [OAuth](../../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

Here’s an example of the Request Body for configuring the Brand Kit using **OpenAI** API provider:

```
{
    "include_decrypted_keys": true,
    "llm_config": {
        "mode": 1,
        "config": {
            "provider": "openai",
            "keys": {
                "api_key": "Key-XXXXXXXXXXXXXX"
            },
            "model": "gpt-4o-mini"
        }
    }
}
```

## URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

## Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

## Sample Request

```json
{
    "include_decrypted_keys": true,
    "llm_config": {
        "mode": 1,
        "config": {
            "provider": "openai",
            "keys": {
                "api_key": "Key-XXXXXXXXXXXXXX"
            },
            "model": "gpt-4o-mini"
        }
    }
}
```

## Sample Response

```json
{
    "message": "llm config updated successfully",
    "llm_config": {
        "_id": "672b04a6e3d93d9a8269741f",
        "deleted_at": false,
        "organization_uid": "blt53d0371e00331654",
        "uid": "cse56a3c0b2a7a4d",
        "__v": 0,
        "created_at": "2024-11-06T05:54:46.838Z",
        "deleted_by": false,
        "mode": 1,
        "updated_at": "2024-11-08T07:26:41.370Z",
        "updated_by": "blt520e013f9bbe3976",
        "config": {
            "model": "gpt-4o-mini",
            "provider": "openai",
            "decrypted_keys": {
                "api_key": "Key-XXXXXXXXXXXXXX"
            }
        }
    }
}
```

