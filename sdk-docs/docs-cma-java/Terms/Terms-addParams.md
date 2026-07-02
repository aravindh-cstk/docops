---
title: "addParams"
description: "The addParams method takes a HashMap of String keys and Object values as input and returns a generic type T."
url: "https://www.contentstack.com/java-management-terms-addparams"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParams

The addParams method takes a HashMap of String keys and Object values as input and returns a generic type T.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | HashMap | Yes | — | Maps String keys to Object values |

Returns:
Type
Terms

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Terms terms = contentstack.terms();
terms.addParams("params");
```
