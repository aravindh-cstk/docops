---
title: "update"
description: "The update method lets you make changes in the existing taxonomy in the stack."
url: "https://www.contentstack.com/java-management-taxonomy-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method lets you make changes in the existing taxonomy in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomyId | string | Yes | — | UID of the taxonomy |

Returns:
Type
Taxonomy

```
JSONObject body = new JSONObject();
     JSONObject bodyContent = new JSONObject();
     bodyContent.put("name", "Taxonomy 1");
     bodyContent.put("description", "Description updated for Taxonomy 1);
     body.put("taxonomy", bodyContent);
     Response<ResponseBody> response = taxonomy.update("taxonomyId", body).execute();
```
