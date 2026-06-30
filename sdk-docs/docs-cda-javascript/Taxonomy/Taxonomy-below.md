---
title: "below"
description: "The below method retrieves all entries for a specific taxonomy that match all of their descendant terms by specifying only the target term and a specific level. Note : If you don't specify the level, the default behavior is to retrieve terms up to level 10 ."
url: "https://www.contentstack.com/js-taxonomy-below"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## below

The below method retrieves all entries for a specific taxonomy that match all of their descendant terms by specifying only the target term and a specific level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to level **10**.

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
.below("taxonomies.taxonomy_uid", "term_uid", 3)
.toJSON()
.find()
.then(response => {
  // the response
  data = response;
})
```
