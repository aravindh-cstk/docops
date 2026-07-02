---
title: "includeReference"
description: "Add a constraint that requires a particular reference key details"
url: "https://www.contentstack.com/java-query-includereference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeReference

Add a constraint that requires a particular reference key details

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key that to be constraineda |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.includeReference(key);
```
