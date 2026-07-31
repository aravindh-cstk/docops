---
title: "Get Custom Credentials"
description: /v1/brand-kits/{brand_kit_uid}/llm-configs?include_decrypted_keys={boolean}
url: /get-custom-credentials
product: Contentstack
doc_type: api-request
created_at: 2024-11-08T08:00:15.732Z
updated_at: 2024-11-11T15:25:43.407Z
---

# Get Custom Credentials

<p>The <span class="code">Get Custom Credentials</span> request fetches the custom credentials from a Brand Kit in an organization.</p><p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:read</span> scope.</p>

**API Endpoint**: `/v1/brand-kits/{brand_kit_uid}/llm-configs?include_decrypted_keys={boolean}`

**Method**: `GET`

## URL Parameters

- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>

## Query Parameters

- **include_decrypted_keys** (optional)
  <p>The “include_decrypted_keys” parameter allows you to fetch LLM Configuration details in encrypted format when set to <span class="code">true</span>.</p>

## Headers

- **organization_uid** (required)
  <p>Enter the Organization UID.</p>
- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/brand-kit-management-api#authentication" target="_self">Authentication</a>.</p>

## Response

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

