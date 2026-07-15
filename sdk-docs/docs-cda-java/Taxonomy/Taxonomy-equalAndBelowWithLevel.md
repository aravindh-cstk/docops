---
title: "equalAndBelowWithLevel"
description: "The equalAndBelowWithLevel method retrieves all entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term and a specified level. Note : If you don't specify the level, the default behavior is to retrieve terms up to level 10."
url: "https://www.contentstack.com/java-taxonomy-equalandbelowwithlevel"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## equalAndBelowWithLevel

The equalAndBelowWithLevel method retrieves all entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term and a specified level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to level 10.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy | string | Yes | — | Enter the UID of the taxonomy |
| termsUid | string | Yes | — | Enter the UID of the term |
| level | int | No | — | Enter the level |

Returns:
Type
Instance of Taxonomy Object

**Example**: If you want to retrieve all entries until level 2 with terms nested under blue, such as navy blue and sky blue, while also matching entries with the target term blue.

```
Taxonomy taxonomy = stack.taxonomy().equalAndBelowWithLevel("taxonomies.color", "blue", 3);
taxonomy.find(new TaxonomyCallback() {
            @Override
            public void onResponse(JSONObject response, Error error) {
                if (error!=null){
                    System.out.println("response :"+response);
                }
            }
        });
```
