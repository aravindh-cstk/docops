---
title: "order_by_descending"
description: "you can sort them in the descending order with respect to the value of a specific field in the response body"
url: "https://www.contentstack.com/python-query-order_by_descending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## order_by_descending

you can sort them in the descending order with respect to the value of a specific field in the response body

No parameters.

Returns:
Type
Query

```
import contentstack;

stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
query = content_type.query()
query.order_by_descending("key")
```
