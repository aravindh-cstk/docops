---
title: "query"
description: "The `query` method returns a query instance for building and executing advanced entry queries on a specified content type."
url: "https://www.contentstack.com/android-contenttype-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query

The `query` method returns a query instance for building and executing advanced entry queries on a specified content type.

No parameters.

Returns:
Type
void

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
ContentType contentType = stack.contentType("contentTypeUid");
contentType.query()
```
