---
title: "create_settings"
description: "The create_settings method creates stack settings"
url: "https://www.contentstack.com/python-management-stack-create_settings"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create_settings

The create_settings method creates stack settings

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body. |

Returns:
Type
JSON

```
data = {
           "stack_settings": {
               "stack_variables": {
                   "enforce_unique_urls": 'true',
                   "sys_rte_allowed_tags": "style,figure,script",
                   "sys_rte_skip_format_on_paste": "GD:font-size"
              },
               "rte": {
                   "cs_only_breakline": 'true'
               }
           }
       }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack('api_key').create_stack_settings(data).json()
```
