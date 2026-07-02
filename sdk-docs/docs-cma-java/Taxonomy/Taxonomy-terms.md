---
title: "terms"
description: "The terms method retrieves the information of the terms in the specific taxonomy."
url: "https://www.contentstack.com/java-management-taxonomy-terms"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## terms

The terms method retrieves the information of the terms in the specific taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomyId | string | Yes | — | UID of the taxonomy |

Returns:
Type
Terms

```
Term terms = stack("authtoken").taxonomy("taxonomyId").term();
```
