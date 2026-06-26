---
title: "notExists"
description: "Add a constraint that requires, a specified key does not exists in response."
url: "https://www.contentstack.com/java-query-notexists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notExists

Add a constraint that requires, a specified key does not exists in response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key to be constrained |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.notExists("status");
```
