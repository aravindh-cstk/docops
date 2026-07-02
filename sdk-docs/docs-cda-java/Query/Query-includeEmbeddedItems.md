---
title: "includeEmbeddedItems"
description: "Includes Embedded Items in the query response"
url: "https://www.contentstack.com/java-query-includeembeddeditems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeEmbeddedItems

Includes Embedded Items in the query response

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.includeEmbeddedItems();
```
