---
title: "removeParam"
description: "Set header for the request."
url: "https://www.contentstack.com/java-management-globalfield-removeparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## removeParam

Set header for the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Removes query param using key of request. |

Returns:
Type
Void

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
GlobalField globalField = contentstack.stack().globalField();
globalField.removeParam("key");
```
