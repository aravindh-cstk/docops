---
title: "create"
description: "The create method lets you add a term to the taxonomy."
url: "https://www.contentstack.com/java-management-terms-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The create method lets you add a term to the taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSON Object | Yes | — | The request body to be sent in the call |

Returns:
Type
Terms

```
Stack stack = new Contentstack.Builder().build().stack(headers);
     JSONObject body = new JSONObject();
     Term term = stack.taxonomy("taxonomyId").terms().create(body);
```
