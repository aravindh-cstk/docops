---
title: "include_embedded_items"
description: "include_embedded_items instance of Entry include_embedded_objects (Entries and Assets) along with entry/entries details"
url: "https://www.contentstack.com/python-entry-include_embedded_items"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_embedded_items

include_embedded_items instance of Entry include_embedded_objects (Entries and Assets) along with entry/entries details

No parameters.

Returns:
Type
Entry

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
entry = content_type.entry(uid='entry_uid')
entry.include_embedded_items()
```
