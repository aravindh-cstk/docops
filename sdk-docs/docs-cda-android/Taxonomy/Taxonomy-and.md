---
title: "and"
description: "The `and` method retrieves all entries for a specific taxonomy that satisfy all the given conditions provided in the `$and` query."
url: "https://www.contentstack.com/android-delivery-taxonomy-and"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## and

The `and` method retrieves all entries for a specific taxonomy that satisfy all the given conditions provided in the `$and` query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| listOfItems | list<JSONObject> | No | — | Enter the list of taxonomy fields |

Returns:
Type
Instance of Taxonomy Object

**Example:**

```
Taxonomy taxonomy = stack.taxonomy();
List<JSONObject> listOfItems = new ArrayList<>();
JSONObject items1 = new JSONObject();
items1.put("taxonomies.color", "green");
JSONObject items2 = new JSONObject();
items2.put("taxonomies.country", "india");
listOfItems.add(items1);
listOfItems.add(items2);
taxonomy.and(listOfItems).find(new TaxonomyCallback() {
   @Override
   public void onResponse(JSONObject response, Error error) {
       Log.d("RESULT:",response.toString());
   }
});
```
