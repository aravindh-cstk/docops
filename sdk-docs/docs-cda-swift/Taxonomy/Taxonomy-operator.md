---
title: "operator()"
description: "The where(valueAtKey:operation:) method adds a constraint to the query."
url: "https://www.contentstack.com/swift-taxonomy-operator-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## operator()

The where(valueAtKey:operation:) method adds a constraint to the query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| operation | Query.LogicalOperation | No | — | The logical operation (.and/.or) with array of queries |

Returns:
Type
Query

**Example:**

```
let query1 = taxonomy.query().where(valueAtKey: "taxonomies.test_taxonomy", .equals("term1"))
let query2 = taxonomy.query().where(valueAtKey: "taxonomies.test_taxonomy", .equals("term2"))
query.operator(.or([query1, query2]))
```
