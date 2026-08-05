---
title: "includeReference"
description: "The `includeReference` method adds a constraint that includes the details of a specified reference key in the response to retrieve entries."
url: "https://www.contentstack.com/android-query-includereference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeReference

The `includeReference` method adds a constraint that includes the details of a specified reference key in the response to retrieve entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key that to be constraineda |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.includeReference(key);
```
