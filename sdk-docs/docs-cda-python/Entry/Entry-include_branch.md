---
title: "include_branch"
description: "Retrieve the published pranch in the entry response"
url: "https://www.contentstack.com/python-entry-include_branch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## include_branch

Retrieve the published pranch in the entry response

No parameters.

Returns:
Type
Entry

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
entry = content_type.entry(uid='entry_uid')
entry.include_branch()
```
