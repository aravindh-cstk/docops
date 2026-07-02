---
title: "addHeader"
description: "The addHeader method adds a header with a key-value pair to a request."
url: "https://www.contentstack.com/java-management-taxonomy-addheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addHeader

The addHeader method adds a header with a key-value pair to a request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | The key of the header |
| value | String | Yes | — | The value of the header |

Returns:
Type
Taxonomy

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Taxonomy taxonomy = contentstack.taxonomy ();
taxonomy.addHeader("key", "value");
```
