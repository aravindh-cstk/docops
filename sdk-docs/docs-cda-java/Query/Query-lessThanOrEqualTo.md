---
title: "lessThanOrEqualTo"
description: "A dd a constraint to the query that requires a particular key entry to be less than or equal to the provided value"
url: "https://www.contentstack.com/java-query-lessthanorequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## lessThanOrEqualTo

Add a constraint to the query that requires a particular key entry to be less than or equal to the provided value

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |
| values | Object | Yes | — | The value that must be equalled. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.lessThanOrEqualTo("due_date", "2013-06-25T00:00:00+05:30");
```
