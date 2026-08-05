---
title: "includeCount"
description: "This method includes the includeCount method facilitate to find the total count of content types available in your stack."
url: "https://www.contentstack.com/dart-contenttype-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeCount

This method includes the includeCount method facilitate to find the total count of content types available in your stack.

No parameters.

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack("apiKey", "delieveryToken", "environment")
final entry = stack.contentType("contentType").entry("uid");
entry.includeCount();
```
