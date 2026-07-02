---
title: "descending"
description: "Sort the results in descending order with the given key. <br> Sort the returned entries in descending order of the provided key."
url: "https://www.contentstack.com/java-query-descending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## descending

Sort the results in descending order with the given key. <br> Sort the returned entries in descending order of the provided key.

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
query.descending(key);
```
