---
title: "fetch"
description: "The fetch method retrieves the entries from the stack."
url: "https://www.contentstack.com/python-management-stack-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the entries from the stack.

No parameters.

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack('api_key').fetch()
```
