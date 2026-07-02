---
title: "equalAndBelow"
description: "The equalAndBelow method retrieves all entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term."
url: "https://www.contentstack.com/android-delivery-taxonomy-equalandbelow"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## equalAndBelow

The `equalAndBelow` method retrieves all entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy | string | Yes | — | Enter the UID of the taxonomy |
| termsUid | string | No | — | Enter the UID of the term |

Returns:
Type
Instance of Taxonomy Object

**Example:**

```
Taxonomy taxonomy = stack.taxonomy().equalAndBelow(taxonomy, termsUid);
taxonomy.find(new TaxonomyCallback() {
   @Override
   public void onResponse(JSONObject response, Error error) {
       Log.d("RESULT:",response.toString());
   }
});
```
