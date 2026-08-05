---
title: "addParam"
description: "Sets header for the request."
url: "https://www.contentstack.com/java-management-organization-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParam

Sets header for the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The query parameter key for the request. |
| value | Object | Yes | — | The query parameter value for the request. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Organisation organisation = contentstack.organisation();
organisation.addParam("key", value);
```
