---
title: "in"
description: "The `in` method retrieves all entries for a specific taxonomy that satisfy the given conditions provided in the `$in` query."
url: "https://www.contentstack.com/android-delivery-taxonomy-in"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## in

The `in` method retrieves all entries for a specific taxonomy that satisfy the given conditions provided in the `$in` query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy(required) | string | Yes | — | Enter the UID of the taxonomy |
| listOfItems | list<string> | No | — | Enter the list of taxonomy fields |

Returns:
Type
Instance of Taxonomy Object

**Example:**

```
Taxonomy taxonomy = stack.taxonomy();
List<string> listOfItems = new ArrayList<>();
listOfItems.add("maroon");
listOfItems.add("red");
taxonomy.in(taxonomy,listOfItems).find(new TaxonomyCallback() {
   @Override
   public void onResponse(JSONObject response, Error error) {
       Log.d("RESULT:",response.toString());
   }
});
```
