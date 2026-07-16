---
title: "notContainedIn"
description: "The `notContainedIn` method retrieves entries by applying a constraint that requires a specified key to have a value not contained within the provided array."
url: "https://www.contentstack.com/android-query-notcontainedin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notContainedIn

The `notContainedIn` method retrieves entries by applying a constraint that requires a specified key to have a value not contained within the provided array.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |
| values | Object[] | Yes | — | The list of values the key object should not be. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.notContainedIn("severity", new Object[] { "Show Stopper", "Critical" });
```
