---
title: "orderByAscending"
description: "sort the results in ascending order with the given key."
url: "https://www.contentstack.com/dart-query-orderbyascending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## orderByAscending

sort the results in ascending order with the given key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key by which you can s ort the results in ascending order |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final query = stack.contentType('contentType').entry().query();
query.ascending("ascKey");
```
