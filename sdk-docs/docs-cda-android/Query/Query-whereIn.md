---
title: "whereIn"
description: "The `whereIn` method retrieves entries by applying conditions to referenced fields and returns those that match the specified values."
url: "https://www.contentstack.com/android-query-wherein"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## whereIn

The `whereIn` method retrieves entries by applying conditions to referenced fields and returns those that match the specified values.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |
| queryObject | Query | Yes | — | queryObject is Query object, so you can chain this call |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.whereIn("due_date", query);
```
