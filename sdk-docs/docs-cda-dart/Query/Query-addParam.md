---
title: "addParam"
description: "This method adds key and value to an Entry."
url: "https://www.contentstack.com/dart-query-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParam

This method adds key and value to an Entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key of the parameter |
| value | String | Yes | — | value of the param against the key |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final query = stack.contentType('contentTypeUid').entry().query();
entry.addParam("key", "value");
```
