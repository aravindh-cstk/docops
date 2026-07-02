---
title: "where"
description: "Add a constraint to fetch all entries that contains given value against specified key"
url: "https://www.contentstack.com/java-query-where"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## where

Add a constraint to fetch all entries that contains given value against specified key

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key of query parameter |
| value | Object | Yes | — | value of query param |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.where("uid", "entry_uid");
```
