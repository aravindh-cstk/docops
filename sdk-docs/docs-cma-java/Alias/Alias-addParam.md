---
title: "addParam"
description: "Sets params for the request."
url: "https://www.contentstack.com/java-management-alias-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParam

Sets params for the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Q uery parameter key for the request. |
| value | Object | Yes | — | Q uery parameter value for the request. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Alias alias = contentstack.stack().alias();
alias.addParam("key", value);
```
