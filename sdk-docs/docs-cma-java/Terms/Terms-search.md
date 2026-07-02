---
title: "search"
description: "The search method retrieves the details of different terms in the taxonomy."
url: "https://www.contentstack.com/java-management-terms-search"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## search

The search method retrieves the details of different terms in the taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| termString | string | Yes | — | The string of the UIDs/names of the terms |

Returns:
Type
Terms

```
Stack stack = new Contentstack.Builder().build().stack(headers);
 Term term = stack.taxonomy("taxonomyId").terms().search("search anything");
```
