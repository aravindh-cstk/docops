---
title: "whereKey:equalTo:"
description: "The `whereKey:equalTo: ` method adds a condition to filter entries where the specified key matches the provided value."
url: "https://www.contentstack.com/ios-taxonomy-wherekey-equalto-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## whereKey:equalTo:

The `whereKey:equalTo:
` method adds a condition to filter entries where the specified key matches the provided value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | NSString* | No | — | The key of the field to query for the desired data. |
| value | id | No | — | The value to match |

Returns:
Type
void

**Objective C:**

```
Taxonomy *taxonomy = [[Taxonomy alloc] initWithStack:stack]; 
Query *query = [taxonomy query]; 
[query whereKey:@"title" equalTo:@"Sample Taxonomy"];
```

**Swift:**

```
let taxonomy = Taxonomy(stack: stack) 
let query = taxonomy.query() 
query.whereKey("title", equalTo: "Sample Taxonomy")
```
