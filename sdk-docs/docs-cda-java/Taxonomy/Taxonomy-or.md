---
title: "or"
description: "The or method retrieves all entries for a specific taxonomy that satisfy at least one of the given conditions provided in the $or query."
url: "https://www.contentstack.com/java-taxonomy-or"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## or

The or method retrieves all entries for a specific taxonomy that satisfy at least one of the given conditions provided in the `$or` query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| listOfItems | list<JSONObject> | No | — | Enter the list of taxonomy fields |

Returns:
Type
Instance of Taxonomy Object

**Example**: If you want to retrieve entries with either the color or size taxonomy applied and linked to the terms yellow and small, respectively.

```
Taxonomy taxonomy = stack.taxonomy();
     List<jsonobject>listOfItems = new ArrayList<>();
     JSONObject item1 = new JSONObject();
     item1.put("taxonomies.color", "yellow");
     JSONObject item2 = new JSONObject();
     item2.put("taxonomies.size", "small");
     listOfItems.add(item1);
     listOfItems.add(item2);
     taxonomy.or(listOfItems);
     taxonomy.find((response, error) -> {
        if (error!=null){
            System.out.println("response :"+response);
            }
        });
```
