---
title: "includeContentType"
description: "Include Content Type of all returned objects along with objects"
url: "https://www.contentstack.com/dart-query-includecontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeContentType

Include Content Type of all returned objects along with objects

No parameters.

Returns:
Type
void

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final query = stack.contentType('contentTypeUid').entry().query();
query.includeContentType();
```
