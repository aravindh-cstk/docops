---
title: "whereNotIn"
description: "Get entries having values based on referenced fields. This query works the opposite of $in_query and retrieves all entries that does not satisfy query conditions made on referenced fields."
url: "https://www.contentstack.com/java-query-wherenotin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## whereNotIn

Get entries having values based on referenced fields. This query works the opposite of $in_query and retrieves all entries that does not satisfy query conditions made on referenced fields.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |
| queryObject | Query | Yes | — | Query object, so you can chain this call |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.whereNotIn("due_date", query);
```
