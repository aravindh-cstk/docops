---
title: "removeParam"
description: "Set header for the request."
url: "https://www.contentstack.com/java-management-alias-removeparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## removeParam

Set header for the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Removes query parameter using a key of request. |

Returns:
Type
Void

```
import contentstack; 
Contentstack contentstack = new Contentstack.Builder().build();
Alias alias = contentstack.stack().alias();
alias.removeParam("key");
```
