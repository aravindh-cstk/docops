---
title: "addQuery"
description: "Add a custom query against specified key. parameters The key and value pair that will be added to the Query"
url: "https://www.contentstack.com/dart-query-addquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addQuery

Add a custom query against specified key. parameters The key and value pair that will be added to the Query

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| parameters | Map | Yes | — | comma-separated string value |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final query = stack.contentType('contentType').entry().query();
query.addParams("keyword1", "keyword2", "keyword3");
```
