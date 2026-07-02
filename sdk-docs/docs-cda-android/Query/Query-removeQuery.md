---
title: "removeQuery"
description: "Remove provided query key from custom query if exist."
url: "https://www.contentstack.com/android-query-removequery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## removeQuery

Remove provided query key from custom query if exist.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Query name to remove. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.removeQuery(key);
```
