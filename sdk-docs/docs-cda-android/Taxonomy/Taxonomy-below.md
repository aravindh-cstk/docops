---
title: "below"
description: "The below method retrieves all entries for a specific taxonomy that match all of their descendant terms by specifying only the target term and a specific level. Note: If you don't specify the level, the default behavior is to retrieve terms up to level 10."
url: "https://www.contentstack.com/android-delivery-taxonomy-below"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## below

The `below` method retrieves all entries for a specific taxonomy that match all of their descendant terms by specifying only the target term and a specific level.

**Note:** If you don't specify the level, the default behavior is to retrieve terms up to level 10.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy | string | Yes | — | Enter the UID of the taxonomy |
| termsUid | string | No | — | Enter the UID of the term |

Returns:
Type
Instance of Taxonomy Object

**Example:**

```
Taxonomy taxonomy = stack.taxonomy().below(taxonomy, termsUid);
taxonomy.find(new TaxonomyCallback() {
   @Override
   public void onResponse(JSONObject response, Error error) {
       Log.d("RESULT:",response.toString());
   }
});
```
