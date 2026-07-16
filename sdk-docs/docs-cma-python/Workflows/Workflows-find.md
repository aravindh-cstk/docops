---
title: "find"
description: "The find method retrieves the details of all workflows in the stack."
url: "https://www.contentstack.com/python-management-workflows-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The find method retrieves the details of all workflows in the stack.

No parameters.

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack("api_key").workflows().find().json()
```
