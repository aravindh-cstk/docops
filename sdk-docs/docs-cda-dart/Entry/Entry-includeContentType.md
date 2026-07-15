---
title: "includeContentType"
description: "Include Content Type of all returned objects along with objects themselves"
url: "https://www.contentstack.com/dart-entry-includecontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeContentType

Include Content Type of all returned objects along with objects themselves

No parameters.

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final entry = stack.contentType('contentType').entry("uid");
entry.includeContentType();
```
