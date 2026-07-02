---
title: "find"
description: "The find method retrieves all the existing labels of the stack."
url: "https://www.contentstack.com/python-management-labels-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves all the existing labels of the stack.

No parameters.

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack("api_key").label().find().json()
```
