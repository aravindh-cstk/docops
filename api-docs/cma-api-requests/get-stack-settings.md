---
title: "Get stack settings"
description: /stacks/settings
url: /get-stack-settings
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:09.388Z
updated_at: 2023-03-11T07:54:19.683Z
---

# Get stack settings

<p>The <span data-type="inlineCode">Get stack settings</span> call retrieves the configuration settings of an existing stack.</p>

**API Endpoint**: `/stacks/settings`

**Method**: `GET`

## Headers

- **api_key** (required)
- **authtoken** (required)

## Response

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

