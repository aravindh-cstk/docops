---
title: "descending"
description: "The `descending` method sorts the results in descending order based on the specified key to retrieve entries."
url: "https://www.contentstack.com/android-query-descending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## descending

The `descending` method sorts the results in descending order based on the specified key to retrieve entries.

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
query.descending(key);
```
