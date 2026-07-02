---
title: "ascending"
description: "The ascending method sorts the results in ascending order based on the specified key to retrieve entries."
url: "https://www.contentstack.com/android-query-ascending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ascending

The `ascending` method sorts the results in ascending order based on the specified key to retrieve entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to order by. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.ascending(key);
```
