---
title: "whereNotIn"
description: "The `whereNotIn` method retrieves entries by applying conditions to referenced fields and returns those that do not match the specified values, functioning as the opposite of the `$in` query."
url: "https://www.contentstack.com/android-query-wherenotin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## whereNotIn

The `whereNotIn` method retrieves entries by applying conditions to referenced fields and returns those that do not match the specified values, functioning as the opposite of the `$in` query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |
| queryObject | Query | Yes | — | Query object, so you can chain this call |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context,apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.whereNotIn("due_date", query);
```
