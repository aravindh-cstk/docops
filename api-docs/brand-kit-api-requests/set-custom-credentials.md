---
title: "Set Custom Credentials"
description: /v1/brand-kits/{brand_kit_uid}/llm-configs
url: /set-custom-credentials
product: Contentstack
doc_type: api-request
created_at: 2024-11-08T07:56:04.551Z
updated_at: 2024-11-11T16:32:31.300Z
---

# Set Custom Credentials

<p>The <span class="code">Set Custom Credentials</span> request lets you configure the custom API credentials for Brand Kit.</p><p>To configure the permissions for your application via <a href="/docs/developers/developer-hub/contentstack-oauth" target="_self">OAuth</a>, include the <span class="code">brand-kits:manage</span> scope.</p><p>Here’s an example of the Request Body for configuring the Brand Kit using <strong>OpenAI</strong> API provider:</p><pre>{<br />    "include_decrypted_keys": true,<br />    "llm_config": {<br />        "mode": 1,<br />        "config": {<br />            "provider": "openai",<br />            "keys": {<br />                "api_key": "Key-XXXXXXXXXXXXXX"<br />            },<br />            "model": "gpt-4o-mini"<br />        }<br />    }<br />}<br /></pre>

**API Endpoint**: `/v1/brand-kits/{brand_kit_uid}/llm-configs`

**Method**: `PUT`

## URL Parameters

- **brand_kit_uid** (required)
  <p>Enter the Brand Kit UID.</p>

## Headers

- **organization_uid** (required)
  <p>Enter the Organization UID.</p>
- **authtoken** (required)
  <p>Enter the authtoken.</p>
- **authorization** (required)
  <p>Enter your OAuth token. Learn more about <a href="/docs/developers/apis/brand-kit-management-api#authentication" target="_self">Authentication</a>.</p>

## Request Body

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

## Response

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

