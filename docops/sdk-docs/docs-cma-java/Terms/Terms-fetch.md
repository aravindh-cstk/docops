---
title: "fetch"
description: "The fetch method retrieves the information about a specific term in the taxonomy."
url: "https://www.contentstack.com/java-management-terms-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the information about a specific term in the taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| termUid | string | Yes | — | The UID Of the term |
| include_children_count | boolean | No | — | Include count of number of children under each term |
| include_referenced_entries_count | boolean | No | — | Include count of the entries where this term is referred |

Returns:
Type
Terms

```
Stack stack = new Contentstack.Builder().build().stack(headers);
     Term term = stack.taxonomy("taxonomyId").terms().find();
```
