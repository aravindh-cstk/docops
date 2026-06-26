---
title: "addParam"
description: "This method adds key and value to an Entry."
url: "https://www.contentstack.com/dart-entry-addparam"
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
| key | String | Yes | — | The key as string which needs to be added to an Entry |
| value | String | Yes | — | The value as string which needs to be added to an Entry |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final entry = stack.contentType('contentType').entry("uid");
entry.addParam(key, value);
```
