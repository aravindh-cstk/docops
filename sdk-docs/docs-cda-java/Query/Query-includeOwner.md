---
title: "includeOwner"
description: "Include object owner's profile in the objects data."
url: "https://www.contentstack.com/java-query-includeowner"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeOwner

Include object owner's profile in the objects data.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.includeOwner()
```
