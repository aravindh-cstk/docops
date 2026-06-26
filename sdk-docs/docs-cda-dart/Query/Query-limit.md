---
title: "limit"
description: "A limit on the number of objects to return."
url: "https://www.contentstack.com/dart-query-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## limit

A limit on the number of objects to return.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limitCount | int | Yes | — | the count you want to limit your response |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final query = stack.contentType('contentType').entry().query();
query.limit(2);
```
