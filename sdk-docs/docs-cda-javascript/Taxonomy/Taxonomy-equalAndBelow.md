---
title: "equalAndBelow"
description: "The equalAndBelow method retrieves all entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term. Note : This query is applicable for the stack.Taxonomies() and stack.ContentType('uid').Query() methods."
url: "https://www.contentstack.com/js-taxonomy-equalandbelow"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## equalAndBelow

The equalAndBelow method retrieves all entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term.

**Note**: This query is applicable for the `stack.Taxonomies()` and `stack.ContentType('uid').Query()` methods.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the taxonomy field, specified as "taxonomies.<taxonomy_uid>" |
| value | string | Yes | — | UID of the term to match or compare |
| levels | int | No | — | Depth level till which terms will be matched |

Returns:
Type
Query

**Example**:

```
let data;
stack
.ContentType('ct_uid')
.Query()
.equalAndBelow("taxonomies.taxonomy_uid", "term_uid", 3)
.toJSON()
.find()
.then(response => {
  // the response
  data = response;
})
```
