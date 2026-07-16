---
title: "find"
description: "The find method retrieves the details of all the environments in a particular stack."
url: "https://www.contentstack.com/python-management-environment-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The find method retrieves the details of all the environments in a particular stack.

No parameters.

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack("api_key").environments().find().json()
```
