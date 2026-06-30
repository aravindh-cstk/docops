---
title: "where"
description: "Get entries containing the field values matching the condition in the query"
url: "https://www.contentstack.com/python-query-where"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## where

Get entries containing the field values matching the condition in the query

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
query = content_type.query("field_uid", QueryOperation.EQUALS)
query.where()
```
