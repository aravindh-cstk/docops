---
title: "notEqualTo"
description: "Add a constraint to the query that requires a particular key's entry to be contained in the provided array"
url: "https://www.contentstack.com/java-query-notequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notEqualTo

Add a constraint to the query that requires a particular key's entry to be contained in the provided array

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
query.notEqualTo("due_date", "2013-06-25T00:00:00+05:30");
```
