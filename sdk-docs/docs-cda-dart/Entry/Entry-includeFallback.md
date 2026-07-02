---
title: "includeFallback"
description: "Retrieve the published content of the fallback locale if an entry is not localized in specified locale."
url: "https://www.contentstack.com/dart-entry-includefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeFallback

Retrieve the published content of the fallback locale if an entry is not localized in specified locale.

No parameters.

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final entry = stack.contentType('contentType').entry("uid");
entry.includeFallback();
```
