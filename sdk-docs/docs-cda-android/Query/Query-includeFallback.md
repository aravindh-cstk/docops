---
title: "includeFallback"
description: "The `includeFallback` method retrieves entries by including fallback language content in the response when content for the specified locale is unavailable."
url: "https://www.contentstack.com/android-query-includefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeFallback

The `includeFallback` method retrieves entries by including fallback language content in the response when content for the specified locale is unavailable.

No parameters.

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.includeFallback();
```
