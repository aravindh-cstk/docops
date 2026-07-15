---
title: "find"
description: "The find method retrieves the details of all the delivery tokens created in the stack."
url: "https://www.contentstack.com/python-management-delivery-token-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The find method retrieves the details of all the delivery tokens created in the stack.

No parameters.

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack("api_key").delivery_token().find().json()
```
