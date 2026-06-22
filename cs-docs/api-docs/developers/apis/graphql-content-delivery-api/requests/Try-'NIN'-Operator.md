---
title: "Try 'NIN' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/try-nin-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'NIN' Operator


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

##### NIN Operator

Get entries where none of the specified taxonomies exist.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the taxonomy **Color**and **Category**are not applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          uid_nin: ["color", "category"]
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
