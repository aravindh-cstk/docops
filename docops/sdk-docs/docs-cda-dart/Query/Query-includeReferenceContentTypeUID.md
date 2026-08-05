---
title: "includeReferenceContentTypeUID"
description: "This method also includes the content type UIDs of the referenced entries returned in the response"
url: "https://www.contentstack.com/dart-query-includereferencecontenttypeuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeReferenceContentTypeUID

This method also includes the content type UIDs of the referenced entries returned in the response

No parameters.

Returns:
Type
void

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final query = stack.contentType('contentTypeUid').entry().query();
query.includeReferenceContentTypeUID();
```
