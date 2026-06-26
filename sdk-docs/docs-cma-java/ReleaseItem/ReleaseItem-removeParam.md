---
title: "removeParam"
description: "Sets header for the request."
url: "https://www.contentstack.com/java-management-releaseitem-removeparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## removeParam

Sets header for the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Param key for the request. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
ReleaseItem releaseItem = contentstack.stack().releaseItem();
releaseItem.removeParam("key");
```
