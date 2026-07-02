---
title: "exists"
description: "The exists method retrieves all entries for a specific taxonomy if the value of the field, mentioned in the condition, exists. ``"
url: "https://www.contentstack.com/android-delivery-taxonomy-exists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## exists

The `exists` method retrieves all entries for a specific taxonomy if the value of the field, mentioned in the condition, exists.``

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy | string | Yes | — | Enter the UID of the taxonomy |
| value | boolean | No | — | Enter true/false |

Returns:
Type
Instance of Taxonomy Object

**Example:**

```
Taxonomy taxonomy = stack.taxonomy().exists(taxonomy, Value);
taxonomy.find(new TaxonomyCallback() {
   @Override
   public void onResponse(JSONObject response, Error error) {
       Log.d("RESULT:",response.toString());
   }
});
```
