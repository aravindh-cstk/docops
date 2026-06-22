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


**Method:** `POST`  
**Endpoint:** `/stacks/settings/reset`

The Reset stack settings call resets your stack to default settings, and additionally, lets you add parameters to or modify the settings of an existing stack.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| api_key | API_key_of_your_stack | Enter the API key of your stack. |

| authtoken | Your_Authtoken | Enter your authtoken. |

| Content-Type | application/json | Enter "application/json" to pass a request body. |

**Request Body:**

```json
{
    "stack_settings":{}
}
```

**Response (201):**

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
