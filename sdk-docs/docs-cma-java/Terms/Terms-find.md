---
title: "find"
description: "The find method retrieves th elist of all terms in the taxonomy."
url: "https://www.contentstack.com/java-management-terms-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves th elist of all terms in the taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy_uid | string | Yes | — | The UID Of the taxonomy for which we need the terms. |
| depth | boolean | No | — | Include the terms upto the depth specified if set to a number greater than 0, include all the terms if set to 0, default depth will be set to 1 |
| include_children_count | boolean | No | — | Include count of number of children under each term |
| include_referenced_entries_count | boolean | No | — | Include count of the entries where this term is referred |
| include_count | boolean | No | — | Include count of the documents/nodes that matched the query |
| asc|desc | string | No | — | Sort the given field in either ascending or descending order |
| typeahead | boolean | No | — | Used to match the given string in all terms and return the matched result |
| deleted | boolean | No | — | Used to fetch only the deleted terms |
| skip | number | No | — | Skip the number of documents/nodes |
| limit | number | No | — | Limit the result to number of documents/nodes |

Returns:
Type
Terms

```
Stack stack = new Contentstack.Builder().build().stack(headers);
     Term term = stack.taxonomy("taxonomyId").terms().addParam("limit", 2).find();
```
