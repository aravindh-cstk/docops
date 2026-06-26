---
title: "find"
description: "It fetches the query response"
url: "https://www.contentstack.com/python-query-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

It fetches the query response

No parameters.

Returns:
Type
dict

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
response = query.find()
```
