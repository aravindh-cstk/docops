---
title: "delete"
description: "The delete method deletes the stack from the organization."
url: "https://www.contentstack.com/python-management-stack-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The delete method deletes the stack from the organization.

No parameters.

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack('api_key').delete()
```
