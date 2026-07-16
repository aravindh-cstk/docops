---
title: "param"
description: "Adds Query Parameters to the to the request"
url: "https://www.contentstack.com/python-query-param"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## param

Adds Query Parameters to the to the request

No parameters.

Returns:
Type
Query

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
query = content_type.query()
query = query.param("key", "value")
```
