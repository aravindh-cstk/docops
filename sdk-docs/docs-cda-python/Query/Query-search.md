---
title: "search"
description: "This method provides only the entries matching the specified value."
url: "https://www.contentstack.com/python-query-search"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## search

This method provides only the entries matching the specified value.

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
query = query.search("search_keyword")
```
