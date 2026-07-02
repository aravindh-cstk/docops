---
title: "include_embedded_items"
description: "Retrieve the published pranch in the response"
url: "https://www.contentstack.com/python-query-include_embedded_items"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_embedded_items

Retrieve the published pranch in the response

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
query.include_embedded_items()
```
