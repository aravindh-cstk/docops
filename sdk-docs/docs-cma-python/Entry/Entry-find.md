---
title: "find"
description: "The find method retrieves the details of all existing entries."
url: "https://www.contentstack.com/python-management-entry-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves the details of all existing entries.

No parameters.

Returns:
Type
Entry

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = client.stack("api_key").content_types('content_type_uid').entry().find().json()
```
