---
title: "addParam"
description: "Sets header for the request."
url: "https://www.contentstack.com/java-management-folder-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam

Sets header for the request.

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
Folder folder = contentstack.stack().folder();
folder.addParam("key", value);
```
