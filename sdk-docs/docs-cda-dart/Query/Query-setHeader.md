---
title: "setHeader"
description: "adds header to the request"
url: "https://www.contentstack.com/dart-query-setheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setHeader

adds header to the request

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key of the header |
| value | String | Yes | — | value of the header against the key |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final query = stack.contentType('contentTypeUid').entry().query();
query.setHeader("key", "value")
```
