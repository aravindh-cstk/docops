---
title: "query"
description: "The query() method fetches all taxonomies or returns filtered results based on the provided query parameters."
url: "https://www.contentstack.com/js-management-taxonomy-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

The `query()` method fetches all taxonomies or returns filtered results based on the provided query parameters.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | No | master | Specifies the locale used to fetch the taxonomies. Defaults to `master` if not provided. |
| branch | string | No | — | Specifies the branch whose fallback locale hierarchy is followed when `include_fallback` is enabled. |
| include_fallback | boolean | No | — | Enables taxonomies to follow the fallback locale hierarchy (of the given branch or main) if not found in the specified locale. |
| fallback_locale | string | No | — | Specifies the fallback locale if the taxonomy term isn’t available in the given locale. If both `fallback_locale` and `include_fallback` are specified, the system uses `include_fallback` . |
| include_terms_count | boolean | No | — | Includes the total count of all terms within the taxonomy. |
| include_referenced_terms_count | boolean | No | — | Includes the count of terms that are referenced in at least one entry. |
| include_referenced_content_type_count | boolean | No | — | Includes the count of content types that reference this taxonomy. |
| include_referenced_entries_count | boolean | No | — | Includes the count of entries where at least one term of this taxonomy is referenced. |
| include_count | boolean | No | — | Includes the count of documents or nodes that match the query. |
| asc|desc | string | No | — | Sorts the given field in ascending ( `asc` ) or descending ( `desc` ) order. |
| query | string | No | — | Defines a custom query in string format. Currently restricted to querying by uid. |
| typeahead | string | No | — | Matches the given string across all taxonomies and returns the matched results. |
| deleted | boolean | No | — | Fetches only the taxonomies that are marked as deleted. |
| skip | number | No | — | Specifies the number of documents or nodes to skip. |
| limit | number | No | — | Limits the result to a specific number of documents or nodes. |

Returns:
Type
Query

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client
  .stack({ api_key: 'api_key' })
  .taxonomy()
  .query()
  .find()
  .then((result) => {
    console.log(result.items)   // Array of Taxonomy objects
    console.log(result.count)   // Total count (when include_count: true is used)
  })
  .catch((error) => console.error(error))
```

The `find()` method returns a collection with:

- `items`: An array of matched taxonomies.
- `count`: The total number of matched taxonomies when `include_count: true` is provided (otherwise, the API may not populate it).
