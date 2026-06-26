---
title: "search"
description: "The `search` method retrieves only the entries that match the specified search value."
url: "https://www.contentstack.com/android-query-search"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## search

The `search` method retrieves only the entries that match the specified search value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | String | Yes | — | value used to match or compare |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.search("header");
```
