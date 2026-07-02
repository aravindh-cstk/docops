---
title: "lessThan"
description: "Add a constraint to the query that requires a particular key entry to be less than the provided value."
url: "https://www.contentstack.com/java-query-lessthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## lessThan

Add a constraint to the query that requires a particular key entry to be less than the provided value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |
| values | Object | Yes | — | the value that provides an upper bound |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.lessThan("due_date", "2013-06-25T00:00:00+05:30");
```
