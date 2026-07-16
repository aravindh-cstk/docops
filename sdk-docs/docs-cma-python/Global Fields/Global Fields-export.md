---
title: "export"
description: "The export method exports the existing global fields from a particular stack."
url: "https://www.contentstack.com/python-management-global-fields-export"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## export

The export method exports the existing global fields from a particular stack.

No parameters.

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.stack('api_key').global_fields().export().json()
```
