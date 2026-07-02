---
title: "removeHeader"
description: "Removed header from the request by key"
url: "https://www.contentstack.com/dart-query-removeheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## removeHeader

Removed header from the request by key

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key of the header |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final query = stack.contentType('contentTypeUid').entry().query();
query.removeHeader("key")
```
