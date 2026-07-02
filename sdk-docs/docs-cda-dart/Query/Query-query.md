---
title: "query"
description: "Add a custom query against specified key."
url: "https://www.contentstack.com/dart-query-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

Add a custom query against specified key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key for the query |
| value | String | Yes | — | value for the query |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final query = stack.contentType('contentType').entry().query();
query.addQuery("param_key", "param_value");
```
