---
title: "earlyAccess"
description: "With the earlyAccess header support, you can access features that are part of the early access program."
url: "https://www.contentstack.com/java-management-contentstack-early-access-header"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## earlyAccess

With the earlyAccess header support, you can access features that are part of the early access program.

No parameters.

```
String[] eaMembers = {"Taxonomy", "Teams", "Others"};

Contentstack contentstack = new Contentstack.Builder().earlyAccess(eaMembers).build();
```
