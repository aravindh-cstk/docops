---
title: "add_param"
description: "This method adds key and value to the Query"
url: "https://www.contentstack.com/python-query-add_param"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## add_param

This method adds key and value to the Query

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
query.add_param("key","value")
```
