---
title: "Try 'Equal and Below' Operator"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/try-equal-and-below-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'Equal and Below' Operator

**** `/stacks/apiKey/explore`

##### Equal and Below Operator

Get entries for a specific taxonomy that match a specific term and all its descendant terms, requiring only the target term and a specified level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Maroon**and its descendants up to level 2 from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermEqualBelow {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_eq_below: {
            uid: "maroon",
	 levels: 2
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

