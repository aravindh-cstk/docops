---
title: "or"
description: "The or method retrieves all entries for a specific taxonomy that satisfy at lease one of the given conditions provided in the $or query."
url: "https://www.contentstack.com/android-delivery-taxonomy-or"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## or

The `or` method retrieves all entries for a specific taxonomy that satisfy at lease one of the given conditions provided in the `$or` query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| listOfItems | list<JSONObject> | No | — | Enter the list of taxonomy fields |

Returns:
Type
Instance of Taxonomy Object

**Example:**

```
Taxonomy taxonomy = stack.taxonomy();
List<jsonobject> listOfItems = new ArrayList<>();
JSONObject item1 = new JSONObject();
item1.put("taxonomies.color", "orange");
JSONObject item2 = new JSONObject();
item2.put("taxonomies.country", "zambia");
listOfItems.add(item1);
listOfItems.add(item2);
taxonomy.or(listOfItems).find(new TaxonomyCallback() {
   @Override
   public void onResponse(JSONObject response, Error error) {
       Log.d("RESULT:",response.toString());
   }
});
```
