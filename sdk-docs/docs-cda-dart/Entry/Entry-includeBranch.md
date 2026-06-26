---
title: "includeBranch"
description: "Includes branch in the response"
url: "https://www.contentstack.com/dart-entry-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

Includes branch in the response

No parameters.

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final entry = stack.contentType('contentType').entry("uid");
entry.includeBranch();
```
