---
title: "greaterThanOrEqualTo"
description: "Add a constraint to the query that requires a particular key entry to be greater than or equal to the provided value."
url: "https://www.contentstack.com/java-query-greaterthanorequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## greaterThanOrEqualTo

Add a constraint to the query that requires a particular key entry to be greater than or equal to the provided value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |
| values | Object | Yes | — | The list of values the key object should not be. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.greaterThanOrEqualTo("due_date", "2013-06-25T00:00:00+05:30");
```
