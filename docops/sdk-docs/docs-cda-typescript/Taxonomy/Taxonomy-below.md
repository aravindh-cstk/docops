---
title: "below"
description: "The below operation retrieves all entries for a specific taxonomy that match all of their descendant terms by specifying only the target term and a specific level. Note: If you don't specify the level, the default behavior is to retrieve terms up to level 10 ."
url: "https://www.contentstack.com/typescript-delivery-taxonomy-below"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## below

The below operation retrieves all entries for a specific taxonomy that match all of their descendant terms by specifying only the target term and a specific level.

**Note:** If you don't specify the level, the default behavior is to retrieve terms up to level **10**.

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
                       TaxonomyQueryOperation.BELOW,
                       'term_one',
                       {"levels": 1}  // optional
                   )
                   .find<TEntries>()
```
