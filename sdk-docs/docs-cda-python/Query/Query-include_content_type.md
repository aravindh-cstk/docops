---
title: "include_content_type"
description: "This method also includes the ContentType in the entry"
url: "https://www.contentstack.com/python-query-include_reference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## include_content_type

This method also includes the ContentType in the entry

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
query.include_content_type()
```
