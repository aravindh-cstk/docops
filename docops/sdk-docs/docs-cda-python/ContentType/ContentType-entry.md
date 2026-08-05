---
title: "entry"
description: "An entry is the actual piece of content created using one of the defined content types"
url: "https://www.contentstack.com/python-contenttype-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## entry

An entry is the actual piece of content created using one of the defined content types

No parameters.

Returns:
Type
Entry

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
entry = content_type.entry(uid='entry_uid')
```
