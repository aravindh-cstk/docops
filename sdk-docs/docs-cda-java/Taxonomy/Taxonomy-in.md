---
title: "in"
description: "The in method retrieves all entries for a specific taxonomy that satisfy the given conditions provided in the $in query."
url: "https://www.contentstack.com/java-taxonomy-in"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## in

The in method retrieves all entries for a specific taxonomy that satisfy the given conditions provided in the `$in` query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy | string | Yes | — | Enter the UID of the taxonomy |
| listOfItems | list<string> | No | — | Enter the list of taxonomy fields |

Returns:
Type
Instance of Taxonomy Object

**Example**: If you want to retrieve entries with the color taxonomy applied and linked to the terms red and/or yellow.

```
Taxonomy taxonomy = stack.taxonomy();List listOfItems = new ArrayList<>();
listOfItems.add("red");
listOfItems.add("yellow");
taxonomy.in("taxonomies.color", listOfItems).find(new TaxonomyCallback() {
            @Override
            public void onResponse(JSONObject response, Error error) {
                if (error!=null){
                    System.out.println("response :"+response);
                }
            }
        });
```
