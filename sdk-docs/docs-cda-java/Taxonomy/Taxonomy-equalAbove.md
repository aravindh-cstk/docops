---
title: "equalAbove"
description: "The equalAbove method retrieves all entries for a specific taxonomy that match a specific term and all its ancestor terms, requiring only the target term and a specified level. Note : If you don't specify the level, the default behavior is to retrieve terms up to level 10."
url: "https://www.contentstack.com/java-taxonomy-equalabove"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## equalAbove

The equalAbove method retrieves all entries for a specific taxonomy that match a specific term and all its ancestor terms, requiring only the target term and a specified level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to level 10.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy | string | Yes | — | Enter the UID of the taxonomy |
| termsUid | string | Yes | — | Enter the UID of the term |

Returns:
Type
Instance of Taxonomy Object

**Example**: If you want to obtain all entries that include the term LED and its parent term TV.

```
Taxonomy taxonomy = stack.taxonomy().equalAbove("taxonomies.appliances", "led");
taxonomy.find(new TaxonomyCallback() {
            @Override
            public void onResponse(JSONObject response, Error error) {
                if (error!=null){
                    System.out.println("response :"+response);
                }
            }
        });
```
