---
title: "Get stack settings"
description: GET /stacks/settings
url: developers/apis/content-management-api/requests/get-stack-settings
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-11
---

# Get stack settings

**GET** `/stacks/settings`

The Get stack settings call retrieves the configuration settings of an existing stack.

## Headers

- **api_key** (required)
  Default: `API_key_of_your_stack`
- **authtoken** (required)
  Default: `Your_Authtoken`

## Sample Response

```json
{
    "stack_settings": {
        "rte": {
            "cs_only_breakline": true
        },
        "stack_variables": {
            "enforce_unique_urls": true,
            "sys_rte_allowed_tags": "style, figure, script",
            "sys_rte_skip_format_on_paste": "GD:font-size"
        },
        "discrete_variables": {
            "cms": true,
            "_version": 3,
            "secret_key": "471f7fd8622f1cc0a0148ad7a6561943f25b79f1"
        },
        "live_preview": {}
    }
}
```

