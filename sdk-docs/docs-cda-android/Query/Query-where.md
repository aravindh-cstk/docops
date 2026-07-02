---
title: "where"
description: "The where method filters entries by applying a condition that matches a specified field key with the provided value."
url: "https://www.contentstack.com/android-query-where"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## where

The `where` method filters entries by applying a condition that matches a specified field key with the provided value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key of query parameter |
| value | Object | Yes | — | value of query param |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.where("uid", "entry_uid");
```
