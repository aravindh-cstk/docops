---
title: "limit"
description: "The `limit` method retrieves entries by setting a limit on the number of objects to return."
url: "https://www.contentstack.com/android-query-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## limit

The `limit` method retrieves entries by setting a limit on the number of objects to return.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| number | int | Yes | — | Number of objects to limit. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
csQuery.limit(3)
```
