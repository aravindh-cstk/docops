---
title: "Brand Kit | Custom Credentials (LLM) Configuration"
description: Configure custom LLM credentials for Brand Kit workflows and AI-assisted content generation.
url: https://www.contentstack.com/docs/developers/apis/brand-kit-management-api/custom-credentials-llm-configuration
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Brand Kit | Custom Credentials (LLM) Configuration

Custom Credentials (LLM) Configuration allows you to integrate your own Large Language Model (LLM) credentials instead of using Contentstack’s default API settings. By using custom credentials, you can specify details such as the API provider, model type, and other required fields, enabling a personalized setup that aligns with your specific requirements.

## Get Custom Credentials

### Get Custom Credentials

**GET** `/v1/brand-kits/{brand_kit_uid}/llm-configs?include_decrypted_keys={boolean}`

The Get Custom Credentials request fetches the custom credentials from a Brand Kit in an organization.

To configure the permissions for your application via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:read scope.

#### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Query Parameters

- **include_decrypted_keys** (optional)
  The “include_decrypted_keys” parameter allows you to fetch LLM Configuration details in encrypted format when set to true.
  Default: `true`

#### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Response

```json
{
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




## Set Custom Credentials

### Set Custom Credentials

**PUT** `/v1/brand-kits/{brand_kit_uid}/llm-configs`

The Set Custom Credentials request lets you configure the custom API credentials for Brand Kit.

To configure the permissions for your application via [OAuth](../../../../cs-docs/developers/developer-hub/contentstack-oauth.md), include the brand-kits:manage scope.

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

#### URL Parameters

- **brand_kit_uid** (required)
  Enter the Brand Kit UID.
  Default: `your_brand_kit_uid`

#### Headers

- **organization_uid** (required)
  Enter the Organization UID.
  Default: `your_organization_uid`
- **authtoken** (required)
  Enter the authtoken.
  Default: `your_authtoken`
- **authorization** (required)
  Enter your OAuth token. Learn more about [Authentication](../../../api-detail/brand-kit-management-api.md#authentication).
  Default: `[Bearer <OAuth token>]`

#### Sample Request

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

#### Sample Response

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

