---
title: "addParam"
description: "The addParam method adds a key–value parameter to an entry request."
url: "https://www.contentstack.com/android-query-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam

The `addParam` method adds a key–value parameter to an entry request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| paramKey | String | Yes | — | The key as string which needs to be added to the Query |
| paramValue | String | Yes | — | The value as string which needs to be added to the Query |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
Query query = stack.contentType("contentTypeUid").query();
query.addParam(key, value);
```
