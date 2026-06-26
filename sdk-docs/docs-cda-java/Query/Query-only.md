---
title: "only"
description: "Specifies an array of only keys in BASE object that would be included in the response."
url: "https://www.contentstack.com/java-query-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## only

Specifies an array of only keys in BASE object that would be included in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | String[] | Yes | — |  |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.only(new String[]{"name"});
```
