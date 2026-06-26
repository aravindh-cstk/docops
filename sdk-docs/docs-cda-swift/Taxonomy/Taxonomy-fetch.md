---
title: "fetch()"
description: "The fetch() method retrieves taxonomy data from Contentstack."
url: "https://www.contentstack.com/swift-taxonomy-fetch-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch()

The fetch() method retrieves taxonomy data from Contentstack.

No parameters.

Returns:
Type
Result<TaxonomyModel, Error>

**Example:**

```
let stack = Contentstack.stack(apiKey: "api_key", deliveryToken: "delivery_token", environment: "environment") 
let taxonomy = Taxonomy(stack: stack)
let query = taxonomy.query() query.whereKey("title", .equals("Sample Taxonomy")) 
query.fetch { (result:Result<TaxonomyModel, Error>, response) in 
switch result { 
case .success(let taxonomyModel): print("Found taxonomy: \(taxonomyModel.title)") 
case .failure(let error): print("Query error: \(error.localizedDescription)")
 } 
}
```
