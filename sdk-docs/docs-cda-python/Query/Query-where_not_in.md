---
title: "where_not_in"
description: "Get entries having values based on referenced fields. This query works the opposite of $in_query and retrieves all entries that does not satisfy query conditions made on referenced fields."
url: "https://www.contentstack.com/python-query-where_not_in"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## where_not_in

Get entries having values based on referenced fields. This query works the opposite of $in_query and retrieves all entries that does not satisfy query conditions made on referenced fields.

No parameters.

Returns:
Type
Query

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
query.where_not_in("brand")
```
