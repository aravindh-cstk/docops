---
title: "limit"
description: "A limit on the number of objects to return./p>"
url: "https://www.contentstack.com/python-query-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## limit

A limit on the number of objects to return./p>

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
query = content_type.query()
query.limit(count)
```
