---
title: "includeGlobalField"
description: "This method includes the Global field's schema along with the content type schema."
url: "https://www.contentstack.com/dart-contenttype-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeGlobalField

This method includes the Global field's schema along with the content type schema.

No parameters.

Returns:
Type
void

```
import Contentstack
final stack = contentstack.Stack('apiKey','deliveryToken','environment');
final contentType = stack.contentType().query();
contentType.includeGlobalField()
```
