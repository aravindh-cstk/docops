---
title: "Try 'Below' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/try-below-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'Below' Operator


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

##### Below Operator

Get entries for a specific taxonomy that match all of their descendant terms by specifying only the target term and a specific level.

**Note**: If you don't specify the level, the default behavior is to retrieve terms up to **level 10**.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the terms up to level 5 nested under the **Red**term from the **Color**taxonomy are applied, your GraphQL query will look as follows:

```
query TermBelow {
  all_product(
    where: {
      taxonomies: {
        color: {
          term_below: {
            uid: "red",
	 levels: 5
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
