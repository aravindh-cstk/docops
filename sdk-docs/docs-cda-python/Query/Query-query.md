---
title: "query"
description: "Adds key value pairs to the to the query parameters"
url: "https://www.contentstack.com/python-query-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

Adds key value pairs to the to the query parameters

No parameters.

Returns:
Type
Query

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
query = content_type.query()
query = query.query("key":"value")
```
