---
title: "find"
description: "The find method searches the organization entries."
url: "https://www.contentstack.com/python-management-organization-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method searches the organization entries.

No parameters.

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = client.organizations().find()
```
