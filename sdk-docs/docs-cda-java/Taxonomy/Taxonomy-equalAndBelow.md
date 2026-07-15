---
title: "equalAndBelow"
description: "The equalAndBelow method retrieves all entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term."
url: "https://www.contentstack.com/java-taxonomy-equalandbelow"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## equalAndBelow

The equalAndBelow method retrieves all entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy | string | Yes | — | Enter the UID of the taxonomy |
| termsUid | string | Yes | — | Enter the UID of the term |

Returns:
Type
Instance of Taxonomy Object

**Example**: If you want to retrieve all entries with terms nested under blue, such as navy blue and sky blue, while also matching entries with the target term blue.

```
Taxonomy taxonomy = stack.taxonomy().equalAndBelow("taxonomies.color", "blue");
taxonomy.find(new TaxonomyCallback() {
            @Override
            public void onResponse(JSONObject response, Error error) {
                if (error!=null){
                    System.out.println("response :"+response);
                }
            }
        });
```
