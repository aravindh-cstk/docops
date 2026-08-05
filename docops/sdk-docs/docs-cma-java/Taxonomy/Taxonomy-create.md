---
title: "create"
description: "The create method lets you add a new taxonomy in the stack."
url: "https://www.contentstack.com/java-management-taxonomy-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The  create method lets you add a new taxonomy in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSON Object | Yes | — | The request body to sent in the call. |

Returns:
Type
Taxonomy

```
JSONObject body = new JSONObject
     Response<ResponseBody> response = taxonomy.create(body).execute();
```
