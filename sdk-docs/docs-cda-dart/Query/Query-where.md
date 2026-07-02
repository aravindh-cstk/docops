---
title: "where"
description: "Get entries containing the field values matching the condition in the query."
url: "https://www.contentstack.com/dart-query-where"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## where

Get entries containing the field values matching the condition in the query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | String | Yes | — | The field uid |
| queryOperation | QueryOperation | Yes | — | The QueryOperation |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final query = stack.contentType('contentType').entry().query();
query.where("fieldUid", QueryOperation);
```
