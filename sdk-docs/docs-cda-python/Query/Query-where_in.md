---
title: "where_in"
description: "Get entries having values based on referenced fields. This query retrieves all entries that satisfy the query conditions made on referenced fields"
url: "https://www.contentstack.com/python-query-where_in"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## where_in

Get entries having values based on referenced fields. This query retrieves all entries that satisfy the query conditions made on referenced fields

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
query = query.where_in("brand")
```
