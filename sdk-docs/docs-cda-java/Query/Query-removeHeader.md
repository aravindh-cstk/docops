---
title: "removeHeader"
description: "Remove header key"
url: "https://www.contentstack.com/java-query-removeheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## removeHeader

Remove header key

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key of the header you want to remove |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.removeHeader(key)
```
