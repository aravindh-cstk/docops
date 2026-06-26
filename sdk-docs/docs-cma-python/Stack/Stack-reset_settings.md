---
title: "reset_settings"
description: "The reset_settings method resets the stack settings."
url: "https://www.contentstack.com/python-management-stack-reset_settings"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## reset_settings

The reset_settings method resets the stack settings.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | No | — | The request body. |

Returns:
Type
JSON

```
data = {
      "stack_settings":{}
   }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack('api_key').reset_stack_settings(data)
```
