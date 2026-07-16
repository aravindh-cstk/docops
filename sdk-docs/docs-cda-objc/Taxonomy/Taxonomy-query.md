---
title: "query"
description: "The `query` method generates a new Query instance for the taxonomy."
url: "https://www.contentstack.com/ios-taxonomy-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query

The `query`method generates a new Query instance for the taxonomy.

No parameters.

Returns:
Type
Query*

**Objective C:**

```
Taxonomy *taxonomy = [[Taxonomy alloc] initWithStack:stack]; 
Query *query = [taxonomy query];
```

**Swift:**

```
let taxonomy = Taxonomy(stack: stack) 
let query = taxonomy.query()
```
