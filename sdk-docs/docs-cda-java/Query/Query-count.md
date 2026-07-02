---
title: "count"
description: "Retrieve count and data of objects in result"
url: "https://www.contentstack.com/java-query-count"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## count

Retrieve count and data of objects in result

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.count();
```
