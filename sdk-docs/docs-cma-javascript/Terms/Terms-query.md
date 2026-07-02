---
title: "query"
description: "The query method fetches all taxonomies or returns filtered results based on the provided query parameters."
url: "https://www.contentstack.com/js-management-terms-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

The `query` method fetches all taxonomies or returns filtered results based on the provided query parameters.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | No | master | Specifies the locale used to fetch the terms. Defaults to `master` if not provided. |
| branch | string | No | — | Specifies the branch whose fallback locale hierarchy is followed when `include_fallback` is enabled. |
| include_fallback | boolean | No | — | Enables terms to follow the fallback locale hierarchy (of the given branch or main) if not found in the specified locale. |
| fallback_locale | string | No | — | Specifies the fallback locale if the taxonomy term isn’t available in the given locale. If both `fallback_locale` and `include_fallback` are specified, the system uses `include_fallback` . |
| depth | number | No | 1 | Includes terms from the root up to the specified depth. If set to 0, includes all terms. |
| include_children_count | boolean | No | — | Includes the count of children under each term. |
| include_referenced_entries_count | boolean | No | — | Includes the count of entries where the term is referenced. |
| include_count | boolean | No | — | Includes the count of all documents or nodes that match the query. |
| include_order | boolean | No | — | Includes the order of the terms relative to their siblings. |
| asc|desc | string | No | — | Sorts the specified field in ascending ( `asc` ) or descending ( `desc` ) order. |
| query | string | No | — | Defines a custom query string. Currently restricted to querying by uid. |
| typeahead | string | No | — | Matches the given string across all terms and returns the matching results. |
| deleted | boolean | No | — | Fetches only the terms that are marked as deleted. |
| skip | number | No | — | Specifies the number of documents or nodes to skip. |
| limit | number | No | — | Limits the result set to a specified number of documents or nodes. |
| taxonomy_uuid | string | No | — | Specifies the UUID of the taxonomy for which term data is required. |

Returns:
Type
Query

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client.stack({ api_key: 'api_key'}).taxonomy('taxonomyUid').terms().query().find().then((terms) => console.log(terms))
```
