---
title: "above"
description: "The above method retrieves all entries for a specific taxonomy that match only the parent term(s) of a specified target term, excluding the target term itself and a specified level. Note : If you don't specify the level, the default behavior is to retrieve terms up to level 10."
url: "https://www.contentstack.com/java-taxonomy-above"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## above

The above method retrieves all entries for a specific taxonomy that match only the parent term(s) of a specified target term, excluding the target term itself and a specified level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to level 10.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomy | string | Yes | — | Enter the UID of the taxonomy |
| termsUid | string | Yes | — | Enter the UID of the term |

Returns:
Type
Instance of Taxonomy Object

**Example**: If you wish to match entries with the term tv but exclude the target term led.

```
Taxonomy taxonomy = stack.taxonomy().above("taxonomies.appliances", "led");
taxonomy.find(new TaxonomyCallback() {
            @Override
            public void onResponse(JSONObject response, Error error) {
                if (error!=null){
                    System.out.println("response :"+response);
                }
            }
        });
```
