---
title: "include_metadata"
description: "Includes entry metadata along with response body."
url: "https://www.contentstack.com/python-entry-include_metadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_metadata

Includes entry metadata along with response body.

No parameters.

Returns:
Type
Entry

```
import contentstack
stack = contentstack.Stack('api_key','delivery_token','environment')
content_type = stack.content_type('contenttype_uid').
result = content_type.entry('entry_uid').include_metadata().find()
print(result)
```
