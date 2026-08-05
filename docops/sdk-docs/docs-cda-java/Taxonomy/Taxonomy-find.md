---
title: "find"
description: "The find method is used to get the API response."
url: "https://www.contentstack.com/java-taxonomy-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The find method is used to get the API response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| callback | TaxonomyCallback | Yes | — | The callback class that contains the API response |

**Example**:

```
taxonomy.find(new TaxonomyCallback() {
            @Override
            public void onResponse(JSONObject response, Error error) {
                if (error!=null){
                    System.out.println("response :"+response);
                }
            }
        });
```
