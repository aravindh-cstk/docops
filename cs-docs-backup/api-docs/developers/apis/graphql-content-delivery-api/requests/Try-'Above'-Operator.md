---
title: "Try 'Above' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/try-above-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'Above' Operator

**** `/stacks/apiKey/explore`

##### Above Operator

Get all entries for a specific taxonomy that match only the parent term(s) of a specified target term, excluding the target term itself. You can also specify a specific level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the terms up to level 3 above the **Maroon**term from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermAbove {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_above: {
            uid: "maroon",
	 levels: 3
          }
        }
      }
    }
  ) {
    items {
      title
      taxonomies {
        taxonomy_uid
        term_uid
      }
    }
  }
}
```

