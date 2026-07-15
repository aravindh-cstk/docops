---
title: "only"
description: "The `only` method retrieves entries by specifying an array of keys in the base object that should be included in the response."
url: "https://www.contentstack.com/android-query-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## only

The `only` method retrieves entries by specifying an array of keys in the base object that should be included in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | String[] | Yes | — | Pass the field UID. |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
<span>query.only(new String[]{"name"});</span>
```
