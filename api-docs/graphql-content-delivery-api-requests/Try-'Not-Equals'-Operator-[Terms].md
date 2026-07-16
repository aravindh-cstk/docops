---
title: "Try 'Not Equals' Operator [Terms]"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/try-not-equals-operator-terms
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'Not Equals' Operator [Terms]

**** `/stacks/apiKey/explore`

##### Not Equals Operator [Terms]

Get entries of a specific content type where a term from a particular taxonomy does not exist.

**Example**: In the **Product**content type, if, for instance, you want to get a list of all entries where the term **Red**from the **Color**taxonomy is not applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product(
      where: {
        taxonomies: {
          color: {
            term_ne: "red"
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

