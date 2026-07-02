---
title: "fetch"
description: "The fetch method retrieves the information of a specific taxonomy."
url: "https://www.contentstack.com/java-management-taxonomy-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch method retrieves the information of a specific taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| include_terms_count | boolean | No | — | Whether to include the count of terms in the response. |
| include_referenced_terms_count | boolean | No | — | Whether to include the count of referenced terms in the response. |
| include_referenced_entries_count | boolean | No | — | Whether to include the count of referenced entries in the response. |
| taxonomyId | string | Yes | — | UID of the taxonomy |

Returns:
Type
Taxonomy

```
Response<ResponseBody> response = taxonomy.fetch("taxonomyId").execute();
```
