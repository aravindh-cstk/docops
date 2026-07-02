---
title: "andWithSubqueries:"
description: "The andWithSubqueries: method combines multiple queries using AND condition."
url: "https://www.contentstack.com/ios-taxonomy-fandwithsubqueries-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## andWithSubqueries:

The `andWithSubqueries:` method combines multiple queries using AND condition.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| subqueries | NSArray<Query*>* | No | — | Array of Query objects to combine with AND |

Returns:
Type
void

**Objective C:**

```
Query *query1 = [taxonomy query]; 
[query1 whereKey:@"taxonomies.one" equalTo:@"term_one"]; 
Query *query2 =[taxonomy query]; 
[query2 whereKey:@"taxonomies.two" equalTo:@"term_two"]; 
Query *mainQuery = [taxonomy query]; 
[mainQuery andWithSubqueries:@[query1, query2]];
```

**Swift:**

```
let query1 = taxonomy.query() 
query1.whereKey("taxonomies.one", equalTo: "term_one") 
let query2 = taxonomy.query()
query2.whereKey("taxonomies.two", equalTo: "term_two")
let mainQuery = taxonomy.query()
mainQuery.andWithSubqueries([query1, query2])
```
