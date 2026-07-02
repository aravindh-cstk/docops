---
title: "addParams"
description: "The addParams takes a HashMap of String keys and Object values as input and returns a generic type T."
url: "https://www.contentstack.com/java-management-taxonomy-addparams"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParams

The addParams takes a HashMap of String keys and Object values as input and returns a generic type T.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | HashMap | Yes | — | The parameters to be added |

Returns:
Type
Taxonomy

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Taxonomy taxonomy = contentstack.taxonomy ();
taxonomy.addParams("params");
```
