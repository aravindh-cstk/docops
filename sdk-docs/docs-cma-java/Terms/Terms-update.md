---
title: "update"
description: "The update method lets you update the details of an existing term in the taxonomy."
url: "https://www.contentstack.com/java-management-terms-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method lets you update the details of an existing term in the taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| termUid | string | Yes | — | The UID Of the term |
| body | JSONObject | Yes | — | The request body to be sent in the call |

Returns:
Type
Terms

```
body = new RequestBody{
   "term": {
     "name": "Term 1",
     "description": "Term 1 Description updated for Taxonomy 1"
   }
 }

 Stack stack = new Contentstack.Builder().build().stack(headers);
 Term term = stack.taxonomy("taxonomyId").terms().update(body);
```
