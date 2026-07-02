---
title: "findTaxonomy:"
description: "The findTaxonomy: method executes a query to fetch taxonomy entries that match specified query conditions."
url: "https://www.contentstack.com/ios-taxonomy-findtaxonomy-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## findTaxonomy:

The `findTaxonomy:` method executes a query to fetch taxonomy entries that match specified query conditions.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| completionBlock | completion | No | — | Returns (ResponseType, QueryResult*, NSError*) |

Returns:
Type
void

**Objective C:**

```
Query *query = [taxonomy query];
[query whereKey:@"taxonomies.one" equalTo:@"term_one"];
[query findTaxonomy:^(ResponseType type, QueryResult *result, NSError *error) {
if (error) {
   NSLog(@"Error: %@", error.localizedDescription); 
   return; 
 } 
 NSArray *entries = [result getResult];
 NSLog(@"Fetched entries: %@", entries);
}];
```

**Swift:**

```
let query = taxonomy.query()
query.whereKey("taxonomies.one", equalTo: "term_one")
query.findTaxonomy { (type, result, error) in
    if let error = error {
        print("Error: \(error.localizedDescription)")
        return
    }
    if let entries = result?.getResult() {
        print("Fetched entries: \(entries)")
    }
}
```
