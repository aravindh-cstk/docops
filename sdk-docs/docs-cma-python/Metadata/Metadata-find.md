---
title: "find"
description: "The find method retrieves the details of all the metadata attached to all the entries and assets in your stack."
url: "https://www.contentstack.com/python-management-metadata-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves the details of all the metadata attached to all the entries and assets in your stack.

No parameters.

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack("api_key").metadata().find().json()
```
