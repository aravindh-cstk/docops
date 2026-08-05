---
title: "lessThanOrEqualTo"
description: "The `lessThanOrEqualTo` method applies a constraint that requires a specified key to have a value less than or equal to the given value to retrieve entries."
url: "https://www.contentstack.com/android-query-lessthanorequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## lessThanOrEqualTo

The `lessThanOrEqualTo` method applies a constraint that requires a specified key to have a value less than or equal to the given value to retrieve entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |
| values | Object | Yes | — | The value that must be equalled. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.lessThanOrEqualTo("due_date", "2013-06-25T00:00:00+05:30");
```
