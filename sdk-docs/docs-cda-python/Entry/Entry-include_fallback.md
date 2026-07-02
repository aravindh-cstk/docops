---
title: "include_fallback"
description: "Retrieve the published content of the fallback locale if an entry is not localized in specified locale"
url: "https://www.contentstack.com/python-entry-include_fallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_fallback

Retrieve the published content of the fallback locale if an entry is not localized in specified locale

No parameters.

Returns:
Type
Entry

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
entry = content_type.entry(uid='entry_uid')
entry.include_fallback()
```
