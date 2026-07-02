---
title: "addParam"
description: "Sets header for the request. Note: Since HashMap does not allow duplicate keys like include\\[\\], use the includeReference method to retrieve the entry with reference fields."
url: "https://www.contentstack.com/java-management-entry-addparam"
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

**Note: Since HashMap does not allow duplicate keys like include[], use the includeReference method to retrieve the entry with reference fields.**

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
Entry entry = contentstack.stack().entry();
entry.addParam("key", value);
```
