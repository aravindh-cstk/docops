---
title: "Try 'Equal and Above' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/try-equal-and-above-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'Equal and Above' Operator

**** `/stacks/apiKey/explore`

##### Equal and Above Operator

Get all entries for a specific taxonomy that match a specific term and all its ancestor terms, requiring only the target term and a specified level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Maroon**and its ancestors up to level 6 from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermEqualAbove {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_eq_above: {
            uid: "maroon",
	 levels: 6
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

