---
title: "find"
description: "The find method retrieves the list of all taxonomies in the stack."
url: "https://www.contentstack.com/java-management-taxonomy-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves the list of all taxonomies in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| include_terms_count | boolean | No | — | Whether to include the count of terms in the response. |
| include_referenced_terms_count | boolean | No | — | Whether to include the count of referenced terms in the response. |
| include_referenced_entries_count | boolean | No | — | Whether to include the count of referenced entries in the response. |
| include_count | boolean | No | — | Whether to include the total count of taxonomies in the response. |
| asc or desc | string | No | — | Sort order based on the UID field. |
| typeahead | string | No | — | Search string for typeahead functionality. |
| include_deleted | boolean | No | — | Whether to include deleted taxonomies in the response. |
| skip | number | No | — | Number of records to skip in pagination. |
| limit | number | No | — | Maximum number of records to return |

Returns:
Type
Taxonomy

```
Response<ResponseBody> response = taxonomy.find().execute();
```
