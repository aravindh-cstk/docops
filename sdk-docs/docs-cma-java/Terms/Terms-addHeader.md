---
title: "addHeader"
description: "The addHeader method adds a header with a key-value pair to a request."
url: "https://www.contentstack.com/java-management-terms-addheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeader

The addHeader method adds a header with a key-value pair to a request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | The key of the parameter |
| value | string | Yes | — | The value of the parameter |

Returns:
Type
Terms

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Terms terms = contentstack.terms();
terms.addHeader("key", "value");
```
