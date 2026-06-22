---
title: "Try 'Not Equals' Operator [Taxonomy]"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/try-not-equals-operator-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'Not Equals' Operator [Taxonomy]


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

##### Not Equals Operator [Taxonomy]

Get entries where a specific taxonomy does not exist.

**Example**: In the **Product** content type, you do not have the **Color** taxonomy configured, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          uid_ne: "color"
        }
      }
    ) {
      items {
        title
        taxonomies {
          term_uid
          taxonomy_uid
        }
      }
    }
  }
}
```
