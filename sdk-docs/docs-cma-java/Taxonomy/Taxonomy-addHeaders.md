---
title: "addHeaders"
description: "The addHeaders method adds a headers to a HashMap."
url: "https://www.contentstack.com/java-management-taxonomy-addheaders"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeaders

The addHeaders method adds a headers to a HashMap.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headers | HashMap | Yes | — | The key-value pair of the header |

Returns:
Type
Taxonomy

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Taxonomy taxonomy = contentstack.taxonomy ();
taxonomy.addHeaders("headers");
```
