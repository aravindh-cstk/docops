---
title: "lessThan"
description: "The `lessThan` method applies a constraint that requires a specified key to have a value lower than the given value to retrieve entries."
url: "https://www.contentstack.com/android-query-lessthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## lessThan

The `lessThan` method applies a constraint that requires a specified key to have a value lower than the given value to retrieve entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |
| values | Object | Yes | — | the value that provides an upper bound |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.lessThan("due_date", "2013-06-25T00:00:00+05:30");
```
