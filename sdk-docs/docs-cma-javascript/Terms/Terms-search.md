---
title: "search"
description: "The search method lets you search an existing term in the taxonomy."
url: "https://www.contentstack.com/js-management-terms-search"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## search

The search method lets you search an existing term in the taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| termUid | string | Yes | — | UID of the term |
| include_children_count | boolean | No | — | Include count of number of children under each term |
| include_referenced_entries_count | boolean | No | — | Include count of the entries where atleast 1 term of this taxonomy is referred |
| include_count | boolean | No | — | Include count of the terms that matched the query |
| query | string | No | — | Used to give a custom query in a string format, currently restricted to only query on taxonomy_uid & term_uid |
| typeahead | string | No | — | Used to match the given string in all terms & return the matched result, should either match with term uid or term name |
| skip | number | No | — | Skip the number of terms |
| limit | number | No | — | Limit the result to number of terms |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client.stack({ api_key: 'api_key'}).taxonomy('taxonomyUid').terms().search('termString').then((term) => console.log(term))
```
