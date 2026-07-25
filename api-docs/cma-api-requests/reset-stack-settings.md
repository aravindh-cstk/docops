---
title: "Reset stack settings"
description: /stacks/settings/reset
url: /reset-stack-settings
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:01.810Z
updated_at: 2023-03-11T07:55:39.954Z
---

# Reset stack settings

<p>The <span data-type="inlineCode">Reset stack settings</span> call resets your stack to default settings, and additionally, lets you add parameters to or modify the settings of an existing stack.<br></p>

**API Endpoint**: `/stacks/settings/reset`

**Method**: `POST`

## Headers

- **api_key** (required)
  <p>Enter the API key of your stack.</p>
- **authtoken** (required)
  <p>Enter your authtoken.</p>
- **Content-Type** (required)
  <p>Enter "application/json" to pass a request body.</p>

## Request Body

```json
{
    "stack_settings":{}
}
```

## Response

```json
{
    "notice": "Stack settings updated successfully.",
    "stack_settings": {
        "stack_variables": {},
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "471f7fd8622f1cc0a0148ad7a6561943f25b79f1"
        },
        "live_preview": {},
        "rte": {}
    }
}
```

