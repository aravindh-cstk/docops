---
title: "descendants"
description: "The descendants method is used to retrieves the list of all the descendants of an existing term."
url: "https://www.contentstack.com/js-management-terms-descendants"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## descendants

The descendants method is used to retrieves the list of all the descendants of an existing term.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| termUid | string | Yes | — | UID of the term |
| depth | number | No | — | Include the terms from the current term’s depth, upto the depth specified if set to a number greater than 0, include all the terms from the current term’s depth if set to 0, default depth will be set to 1, which will be to include the immediate terms from the current term’s depth |
| include_children_count | boolean | No | — | Include count of number of children under each term |
| include_referenced_entries_count | boolean | No | — | Include count of the entries where atleast 1 term of this taxonomy is referred |
| include_count | boolean | No | — | Include count of the terms that matched the query |
| include_order | boolean | No | — | Include order of the terms relative to their siblings |
| skip | number | No | — | Skip the number of terms |
| limit | number | No | — | Limit the result to number of terms |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client.stack({ api_key: 'api_key'}).taxonomy('taxonomyUid').term('termUid').descendants()
.then((terms) => console.log(terms))
```
