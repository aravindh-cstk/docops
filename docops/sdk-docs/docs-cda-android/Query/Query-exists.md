---
title: "exists"
description: "The `exists` method applies a constraint that requires a specified key to be present in the response to retrieve entries."
url: "https://www.contentstack.com/android-query-exists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## exists

The `exists` method applies a constraint that requires a specified key to be present in the response to retrieve entries.

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
query.exists("status");
```
