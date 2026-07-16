---
title: "exists"
description: "The exists method retrieves all entries for a specific taxonomy if the value of the field, mentioned in the condition, exists."
url: "https://www.contentstack.com/java-taxonomy-exists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## exists

The exists method retrieves all entries for a specific taxonomy if the value of the field, mentioned in the condition, exists.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy | string | Yes | — | Enter the UID of the taxonomy |
| value | boolean | Yes | — | Enter true/false |

Returns:
Type
Instance of Taxonomy Object

**Example**: If you want to retrieve entries with the color taxonomy applied.

```
Taxonomy taxonomy = stack.taxonomy().exists("taxonomies.color", true);
taxonomy.find(new TaxonomyCallback() {
            @Override
            public void onResponse(JSONObject response, Error error) {
                if (error!=null){
                    System.out.println("response :"+response);
                }
            }
        });
```
