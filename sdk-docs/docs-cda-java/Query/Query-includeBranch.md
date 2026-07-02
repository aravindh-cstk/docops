---
title: "includeBranch"
description: "Includes Branch in the entry response"
url: "https://www.contentstack.com/java-query-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeBranch

Includes Branch in the entry response

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
entry.includeBranch();
```
