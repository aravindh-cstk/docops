---
title: "ancestors"
description: "The ancestors method retrieves the information about the ancestors of a specific term in the taxonomy."
url: "https://www.contentstack.com/java-management-terms-descendants"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## ancestors

The ancestors method retrieves the information about the ancestors of a specific term in the taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| termUid | string | Yes | — | The UID Of the term |

Returns:
Type
Terms

```
Stack stack = new Contentstack.Builder().build().stack(headers);
      Term term = stack.taxonomy("taxonomyId").terms().ancestors("termId");
```
