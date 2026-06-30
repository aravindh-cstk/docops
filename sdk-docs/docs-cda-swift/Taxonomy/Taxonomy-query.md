---
title: "query()"
description: "The query() method creates a new Query instance for retrieving taxonomy entries."
url: "https://www.contentstack.com/swift-taxonomy-query-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query()

The query() method creates a new Query instance for retrieving taxonomy entries.

No parameters.

Returns:
Type
Query

**Example:**

```
let stack = Contentstack.stack(apiKey: "api_key", deliveryToken: "delivery_token", environment: "environment") 
let taxonomy = Taxonomy(stack: stack) 
let query = taxonomy.query() 
query.where(valueAtKey: "taxonomies.test_taxonomy", .equals("test_term"))
query.limit(10)
query.skip(0)
```
