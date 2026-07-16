---
title: "where(valueAtKey:operation:)"
description: "The where(valueAtKey:operation:) method adds a constraint to the query."
url: "https://www.contentstack.com/swift-taxonomy-where-valueatkey-operation-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## where(valueAtKey:operation:)

The where(valueAtKey:operation:) method adds a constraint to the query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| valueAtKey | valueAtKey | No | — | The field key to query on |
| operation | Query.Operation | No | — | The operation to perform |

Returns:
Type
Query

**Example:**

```
let stack = Contentstack.stack(apiKey: "api_key", deliveryToken: "delivery_token", environment: "environment") 
let taxonomy = Taxonomy(stack: stack) 
let query = taxonomy.query()
query.where(valueAtKey: "taxonomies.test_taxonomy", .equals("test_term"))
```
