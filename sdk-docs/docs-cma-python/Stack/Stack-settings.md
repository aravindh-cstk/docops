---
title: "settings"
description: "The settings method retrieves the settings of the stack."
url: "https://www.contentstack.com/python-management-stack-settings"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## settings

The settings method retrieves the settings of the stack.

No parameters.

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack('api_key').settings()
```
