---
title: "only"
description: "provides data that contains only mentinoed keywords"
url: "https://www.contentstack.com/dart-query-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## only

provides data that contains only mentinoed keywords

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | List<String> | Yes | — | Array of the only reference keys to be included in response |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final query = stack.contentType('contentTypeUid').entry().query();
query.only(fieldUid);
```
