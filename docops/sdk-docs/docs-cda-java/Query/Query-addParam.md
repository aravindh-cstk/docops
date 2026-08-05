---
title: "addParam"
description: "This method adds key and value to an Entry. Parameters"
url: "https://www.contentstack.com/java-query-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParam

This method adds key and value to an Entry. Parameters

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| paramKey | String | Yes | — | The key as string which needs to be added to the Query |
| paramValue | String | Yes | — | The value as string which needs to be added to the Query |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.addParam(key, value);
```
