---
title: "containedIn"
description: "The containedIn method retrieves entries by applying a constraint that requires a specified key to have a value contained within the provided array."
url: "https://www.contentstack.com/android-query-containedin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## containedIn

The `containedIn` method retrieves entries by applying a constraint that requires a specified key to have a value contained within the provided array.

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
query.containedIn("severity", new Object[] { "Show Stopper", "Critical" });
```
