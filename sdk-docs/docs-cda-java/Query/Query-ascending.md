---
title: "ascending"
description: "Sort the results in ascending order with the given key. <br> Sort the returned entries in ascending order of the provided key."
url: "https://www.contentstack.com/java-query-ascending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ascending

Sort the results in ascending order with the given key. <br> Sort the returned entries in ascending order of the provided key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to order by. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.ascending(key);
```
