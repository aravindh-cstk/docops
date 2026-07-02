---
title: "include_count"
description: "Retrieve count and data of objects in result"
url: "https://www.contentstack.com/python-query-include_count"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_count

Retrieve count and data of objects in result

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
query = content_type.query()
query.include_count()
```
