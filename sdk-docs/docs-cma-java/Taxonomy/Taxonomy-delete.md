---
title: "delete"
description: "The delete method lets you remove an existing taxonomy from the stack."
url: "https://www.contentstack.com/java-management-taxonomy-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method lets you remove an existing taxonomy from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomyId | string | Yes | — | UID of the taxonomy |

Returns:
Type
Taxonomy

```
Response<ResponseBody> response = taxonomy.delete("taxonomyId").execute();
```
