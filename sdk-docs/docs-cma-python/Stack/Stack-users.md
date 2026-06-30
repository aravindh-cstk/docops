---
title: "users"
description: "The users method retrieves the details of all the users of a stack."
url: "https://www.contentstack.com/python-management-stack-users"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## users

The users method retrieves the details of all the users of a stack.

No parameters.

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack().users()
```
