---
title: "Reset stack settings"
description: POST /stacks/settings/reset
url: developers/apis/content-management-api/requests/reset-stack-settings
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-11
---

# Reset stack settings

**POST** `/stacks/settings/reset`

The Reset stack settings call resets your stack to default settings, and additionally, lets you add parameters to or modify the settings of an existing stack.

## Headers

- **api_key** (required)
  Enter the API key of your stack.
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Enter your authtoken.
  Default: `Your_Authtoken`
- **Content-Type** (required)
  Enter "application/json" to pass a request body.
  Default: `application/json`

## Sample Request

```json
{
    "stack_settings":{}
}
```

## Sample Response

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

