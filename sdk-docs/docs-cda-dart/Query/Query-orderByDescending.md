---
title: "orderByDescending"
description: "Sort the results in descending order with the given key."
url: "https://www.contentstack.com/dart-query-orderbydescending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## orderByDescending

Sort the results in descending order with the given key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key by which you can s ort the results in descending order |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final query = stack.contentType('contentType').entry().query();
query.orderByDescending("descendingKey");
```
