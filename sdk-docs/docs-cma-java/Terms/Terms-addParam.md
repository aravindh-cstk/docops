---
title: "addParam"
description: "The addParam method adds a parameter to a collection using a key-value pair."
url: "https://www.contentstack.com/java-management-terms-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParam

The addParam method adds a parameter to a collection using a key-value pair.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | The key of the parameter |
| value | Object | Yes | — | The value of the parameter |

Returns:
Type
Terms

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Terms terms = contentstack.terms();
terms.addParam("key", "value");
```
