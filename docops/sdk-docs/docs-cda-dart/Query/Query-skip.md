---
title: "skip"
description: "The number of objects to skip before returning any."
url: "https://www.contentstack.com/dart-query-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## skip

The number of objects to skip before returning any.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| skipCount | Int | Yes | — | No of objects to skip from returned objects |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final query = stack.contentType('contentType').entry().query();
query.skip(4);
```
