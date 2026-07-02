---
title: "param"
description: "This method is useful to add additional Query parameters to the entry"
url: "https://www.contentstack.com/python-entry-param"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## param

This method is useful to add additional Query parameters to the entry

No parameters.

Returns:
Type
Entry

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
entry = content_type.entry(uid='entry_uid')
entry.param("key", "value")
```
