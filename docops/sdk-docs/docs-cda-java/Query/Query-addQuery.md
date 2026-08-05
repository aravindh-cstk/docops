---
title: "addQuery"
description: "Add a custom query against specified key."
url: "https://www.contentstack.com/java-query-addquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addQuery

Add a custom query against specified key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key of query parameter |
| value | String | Yes | — | value of query param |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.addQuery("key", "value");
```
