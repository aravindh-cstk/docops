---
title: "find"
description: "The find method retrieves the data about all extensions in the stack."
url: "https://www.contentstack.com/python-management-extensions-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves the data about all extensions in the stack.

No parameters.

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack("api_key").extension().find().json()
```
