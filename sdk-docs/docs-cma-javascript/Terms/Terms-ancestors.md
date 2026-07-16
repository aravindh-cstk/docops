---
title: "ancestors"
description: "The ancestors method is used to retrieves the list of all the ancestors of an existing term"
url: "https://www.contentstack.com/js-management-terms-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## ancestors

The ancestors method is used to retrieves the list of all the ancestors of an existing term

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| termUid | string | Yes | — | UID of the term |
| include_children_count | boolean | No | — | Include count of number of children under each term |
| include_referenced_entries_count | boolean | No | — | Include count of the entries where atleast 1 term of this taxonomy is referred |
| include_count | boolean | No | — | Include count of the terms that matched the query |
| skip | number | No | — | Skip the number of terms |
| limit | number | No | — | Limit the result to number of terms |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client.stack({ api_key: 'api_key'}).taxonomy('taxonomyUid').term('termUid').ancestors()
.then((terms) => console.log(terms))
```
