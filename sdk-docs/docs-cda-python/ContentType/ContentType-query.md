---
title: "query"
description: "We can query on entry of specified ContentType"
url: "https://www.contentstack.com/python-contenttype-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

We can query on entry of specified ContentType

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
content_type = stack.content_type('content_type_uid')
query = content_type.query()
```
