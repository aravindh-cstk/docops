---
title: "includeEmbeddedItems"
description: "The `includeEmbeddedItems` method retrieves entries by including embedded items in the query response."
url: "https://www.contentstack.com/android-query-includeembeddeditems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeEmbeddedItems

The `includeEmbeddedItems` method retrieves entries by including embedded items in the query response.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.includeEmbeddedItems();
```
