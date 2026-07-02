---
title: "greaterThan"
description: "The greaterThan method applies a constraint that requires a specified key to have a value greater than the given value to retrieve entries."
url: "https://www.contentstack.com/android-query-greaterthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## greaterThan

The `greaterThan` method applies a constraint that requires a specified key to have a value greater than the given value to retrieve entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |
| values | Object | Yes | — | The value that provides an lower bound. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.greaterThan("due_date", "2013-06-25T00:00:00+05:30");
```
