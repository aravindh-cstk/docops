---
title: "Try 'Equals' Operator [Terms]"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/try-equals-operator-terms
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'Equals' Operator [Terms]


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

##### Equals Operator [Terms]

Get entries of a specific content type where a term from a particular taxonomy is present.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Red**from the **Color**taxonomy is applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          color: {
            term: "red"
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
