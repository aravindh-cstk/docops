---
title: "addQuery"
description: "The addQuery method adds a custom key-value pair to the query URL, enabling support for extended or non-standard query parameters."
url: "https://www.contentstack.com/android-query-addquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addQuery

The `addQuery` method adds a custom key-value pair to the query URL, enabling support for extended or non-standard query parameters.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key of query parameter |
| value | String | Yes | — | value of query param |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.addQuery("key", "value");
```
