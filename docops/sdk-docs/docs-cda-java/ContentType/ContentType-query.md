---
title: "query"
description: "Provides query instance"
url: "https://www.contentstack.com/java-contenttype-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query

Provides query instance

No parameters.

Returns:
Type
void

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
ContentType contentType = stack.contentType("contentTypeUid");
contentType.query()
```
