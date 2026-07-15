---
title: "fetch"
description: "Fetches the latest version of the entries from stack"
url: "https://www.contentstack.com/python-entry-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

Fetches the latest version of the entries from stack

No parameters.

Returns:
Type
dict

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
entry = content_type.entry(uid='entry_uid')
response = entry.fetch()
```
