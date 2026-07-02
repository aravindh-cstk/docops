---
title: "tags"
description: "Include tags with which to search entries that accept variable-length argument lists"
url: "https://www.contentstack.com/python-query-tags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## tags

Include tags with which to search entries that accept variable-length argument lists

No parameters.

Returns:
Type
dict

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
query.tags('black', 'gold', 'silver')
response = query.fetch()
```
