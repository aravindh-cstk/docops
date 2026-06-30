---
title: "include_metadata"
description: "Includes Query metadata along with response body."
url: "https://www.contentstack.com/python-query-include_metadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## include_metadata

Includes Query metadata along with response body.

No parameters.

Returns:
Type
Query

```
import contentstack

stack = contentstack.Stack('api_key','delivery_token','environment')
query = stack.content_type('contenttype_uid').query()
result = query.include_metadata().find()
print(result)
```
