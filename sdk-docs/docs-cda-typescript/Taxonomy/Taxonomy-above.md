---
title: "above"
description: "The equalAndAbove operation retrieves all entries for a specific The above operation retrieves all entries for a specific taxonomy that match only the parent terms of a specified target term, excluding the target term itself and a specified level. Note: If you don't specify the level, the default behavior is to retrieve terms up to level 10 ."
url: "https://www.contentstack.com/typescript-delivery-taxonomy-above"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## above

The equalAndAbove operation retrieves all entries for a specific The above operation retrieves all entries for a specific taxonomy that match only the parent terms of a specified target term, excluding the target term itself and a specified level.

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
                       TaxonomyQueryOperation.ABOVE,
                       'term_one',
                       {"levels": 1}  // optional
                   )
                   .find<TEntries>()
```
