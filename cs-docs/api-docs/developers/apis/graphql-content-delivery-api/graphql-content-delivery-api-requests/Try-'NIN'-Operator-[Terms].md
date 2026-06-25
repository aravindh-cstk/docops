---
title: "Try 'NIN' Operator [Terms]"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/try-nin-operator-terms
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'NIN' Operator [Terms]

**** `/stacks/apiKey/explore`

##### NIN Operator [Terms]

Get entries of a content type where terms from a specific taxonomy do not exist.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the terms **Red**and **Maroon**from the **Color**taxonomy are not applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          color: {
            term_nin: ["red", "maroon"]
          }
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

