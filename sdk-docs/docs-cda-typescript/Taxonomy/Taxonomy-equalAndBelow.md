---
title: "equalAndBelow"
description: "The equalAndBelow operation retrieves all entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term."
url: "https://www.contentstack.com/typescript-delivery-taxonomy-equalandbelow"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## equalAndBelow

The equalAndBelow operation retrieves all entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Enter the UID of the taxonomy |
| value | string | Yes | — | Enter the UID of the term |
| levels | int | No | — | Enter the level |

Returns:
Type
Query

Example:

```
const data = await stack
                   .taxonomy()
                   .where(
                       'taxonomies.one',
                       TaxonomyQueryOperation.EQ_BELOW,
                       'term_one',
                       {"levels": 1}  // optional
                   )
                   .find<TEntries>()
```
