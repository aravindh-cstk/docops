---
title: "limit"
description: "A limit on the number of objects to return."
url: "https://www.contentstack.com/java-query-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## limit

A limit on the number of objects to return.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| number | int | Yes | — | Number of objects to limit. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
csQuery.limit(3)
```
