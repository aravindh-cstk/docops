---
title: "includeBranch"
description: "includes branch in the response"
url: "https://www.contentstack.com/dart-query-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeBranch

includes branch in the response

No parameters.

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final query = stack.contentType('room').entry().query();
query.includeBranch()
```
