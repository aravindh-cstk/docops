---
title: "includeFallback"
description: "Includes language fallback in the query response"
url: "https://www.contentstack.com/java-query-includefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeFallback

Includes language fallback in the query response

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.includeFallback();
```
