---
title: "Try 'Exists' Operator [Taxonomy]"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/try-exists-operator-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'Exists' Operator [Taxonomy]

**** `/stacks/apiKey/explore`

##### Exists Operator [Taxonomy]

Get entries of a particular content type where a taxonomy field exists.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the taxonomy field is applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies_exists: true
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

