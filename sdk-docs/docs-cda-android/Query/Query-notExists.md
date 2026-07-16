---
title: "notExists"
description: "The `notExists` method applies a constraint that requires a specified key to be absent from the response to retrieve entries."
url: "https://www.contentstack.com/android-query-notexists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notExists

The `notExists` method applies a constraint that requires a specified key to be absent from the response to retrieve entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.notExists("status");
```
