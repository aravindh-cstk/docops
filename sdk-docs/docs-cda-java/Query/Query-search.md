---
title: "search"
description: "This method provides only the entries matching the specified value."
url: "https://www.contentstack.com/java-query-search"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## search

This method provides only the entries matching the specified value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | String | Yes | — | value used to match or compare |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.search("header");
```
