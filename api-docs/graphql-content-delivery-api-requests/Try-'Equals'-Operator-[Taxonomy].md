---
title: "Try 'Equals' Operator [Taxonomy]"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/try-equals-operator-taxonomy
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'Equals' Operator [Taxonomy]

**** `/stacks/apiKey/explore`

##### Equals Operator [Taxonomy]

Get entries containing a specific taxonomy.

**Example**: In the **Product** content type, you have a taxonomy field. If, for instance, you want to get a list of all entries where the taxonomy **Color** is applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          uid: "color"
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

