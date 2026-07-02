---
title: "find"
description: "The find method is used to get API response."
url: "https://www.contentstack.com/android-delivery-taxonomy-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The `find` method is used to get API response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| callback | TaxonomyCallback | No | — | The callback class that contains the API response |

**Example:**

```
taxonomy.find(new TaxonomyCallback() {
   @Override
   public void onResponse(JSONObject response, Error error) {
       Log.d("Result:",response.toString());
   }
});
```
