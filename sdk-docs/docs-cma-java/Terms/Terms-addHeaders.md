---
title: "addHeaders"
description: "The addHeaders method adds headers to a HashMap."
url: "https://www.contentstack.com/java-management-terms-addheaders"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeaders

The addHeaders method adds headers to a HashMap.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headers | HashMap | Yes | — | A HashMap containing key-value pairs of headers |

Returns:
Type
Terms

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Terms terms = contentstack.terms();
terms.addHeaders("headers");
```
