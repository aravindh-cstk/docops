---
title: "excepts"
description: "Specifies list of field\\_uid that would be excluded from the response. It refers to the top-level fields of the schema"
url: "https://www.contentstack.com/python-query-excepts"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## excepts

Specifies list of field_uid that would be excluded from the response. It refers to the top-level fields of the schema

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
query.excepts()
```
